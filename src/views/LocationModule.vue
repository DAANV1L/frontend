<template>
    <div>
        <TopBannerVue/>
        <div id="blockplace">

        </div>
    </div>
</template>

<style src="../components/main.css"/>
<script>
import TopBannerVue from "../components/TopBanner.vue"
import axios from "axios";

export default {
    components: {
        TopBannerVue
    },
    async mounted() {
        console.log(this.$route.params.id)
        var object = await this.fetchLocation()
        
        // create elements on the webpage
        const block = document.createElement('div');
        block.style.display = 'flex';
        block.style.flexDirection = 'column';
        block.style.alignItems = 'center';

        //title
        const title = document.createElement('h1');
        title.textContent = object.locationName;
        block.appendChild(title);

        const img = new Image();
        img.className = 'LocationBigImage';
        img.src = object.imageData;
        img.style.width = '30%';
        img.justifyContent = 'center';
        block.appendChild(img);
        
        const description = document.createElement('p');
        description.textContent = object.description;
        block.appendChild(description);

        const id = document.createElement('p');
        id.textContent = "unique ID: "+object.id;
        block.appendChild(id);



        document.getElementById('blockplace').appendChild(block);
        console.log(object)
    },
    methods: {
        async fetchLocation() {
            try {
                const response = await axios.get('https://localhost:5001/api/Location/GetLocation' + this.$route.params.id);
                return response.data;
            } catch (error) {
                console.error('Failed to fetch location:', error);
                return null; // Return null in case of error
            }
        }
    }
}
</script>
