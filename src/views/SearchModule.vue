<template>
    <div>
        <TopBannerVue/>
        <h1>
            Search your new Vacation now!
        </h1>
        <div class="LocationsClass" style="display: flex; margin: 10px 10% 0 10%; flex-wrap: wrap;" >
            
        </div>
    </div>
</template>



<style src="../components/main.css"/>
<script lang="ts">
import TopBannerVue from '../components/TopBanner.vue';
import axios from 'axios';

export default {
    name: 'SearchModule',
    components: {
        TopBannerVue
    },
    data() {
        return {
            CampingLocations: []
        };
    },
    async mounted() {
        try{
            this.CampingLocations = await this.fetchLocations();
        await new Promise(resolve => setTimeout(resolve, 300));
        this.CreateDivBlocks();
        }
        catch{
            this.CampingLocations = await this.fetchLocations();
        await new Promise(resolve => setTimeout(resolve, 300));
        this.CreateDivBlocks();
        }
        
        
    },
    methods: {
        async fetchLocations() {
            try {
                const response = await axios.get('https://localhost:5001/api/Location');
                return response.data;
            } catch (error) {
                console.error('Failed to fetch locations:', error);
                return null; // Return null in case of error
            }
        },
        CreateDivBlocks(){
            this.CampingLocations.forEach((object) => {
                const block = document.createElement('div');
                block.className = 'LocationBlockSeparateElement';
                try{
                    const img = new Image();
                img.className = 'LocationSmallImage';
                img.src = object.imageData;
                block.appendChild(img);
                }
                catch{
                    console.log("No image found");
                }
                

                const heading = document.createElement('h3');
                heading.textContent = object.locationName;
                block.appendChild(heading);

                const description = document.createElement('p');
                const spaceIndex = object.description.indexOf(' ' , 110);
                description.textContent = object.description.slice(0, spaceIndex) + ' ...';
                block.appendChild(description);

                const button = document.createElement('button');
                button.className = 'LocationButton';
                button.textContent = 'More Info';
                button.onclick = () => {
                    this.$router.push({ name: 'location', params: { id: object.id } });
                };
                block.appendChild(button);

                this.$el.querySelector('.LocationsClass').appendChild(block);
            });
        }
    }
}
</script>
