<template>
  <div>
    <topBanner></topBanner>
    <h1>
        Personal Locations
    </h1>
    <div class="LocationsClass" style="display: flex; margin: 10px 10% 0 10%; flex-wrap: wrap;" />
    <button @click="addnewlocation" style="margin: 10px 10% 0 10%; width: 80%;">Add new location</button>
  </div>
</template>

<script>
import topBanner from '../components/TopBanner.vue'
import axios from 'axios';
export default {
    components: {
        topBanner,
    },
    data() {
        return {
            locations: {},
            cookie: '',
            id: -1,
        }
    },
    
    async mounted() {
        if (document.cookie == '') {
            this.$router.push({ name: 'login' });
        }
        this.cookie = JSON.parse(atob(document.cookie.split('.')[1].split('.')[0]))
        this.id = this.cookie['sub'].split(":")[1].split("=")[1]
        this.locations = await this.fetchLocations();
        this.locations = this.locations.filter(location => location.userID == this.id);
        this.CreateDivBlocks();
        
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
            this.locations.forEach((object) => {
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
                button.textContent = 'Change location details';
                button.onclick = () => {
                    this.$router.push({ name: 'personallocationx', params: { id: object.id } });
                };
                block.appendChild(button);

                this.$el.querySelector('.LocationsClass').appendChild(block);
            });
        },
        addnewlocation(){
            fetch('https://localhost:5001/api/Location', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    imageData: "string",
                    userID: this.id,
                    locationName: "string",
                    description: "string",
                    pricePerNight: 0,
                    categoryID: 0
                }),
            })
            .then(response => response.json())
            .then(data => {
                this.$router.push({ name: 'personallocationx', params: { id: data } });
            })
        }
        
    }
}
</script>

<style>

</style>