<template>
    <div>
        <TopBannerVue/>
        <h1>
            Search your new Vacation now!
        </h1>
        <div class="searchmodule" style=" width: 100%; height: 50px; display: flex; align-content: center; justify-content: center">
            <!-- <label for="category">Choose category:</label> -->
            <h3>Search on Name: </h3>
            <input type="text" v-model="AllowSearchValue" @input="AllowCategories" @click="removeinput" style="width: 200px; background-color: #639cd9; color: white">
            <h3>Categories:</h3>
            <select style="width: 200px; background-color: #639cd9; color: white" @change="AllowCategories" v-model="AllowCategoriesValue">
                <option value="-1">All</option>
                <option value="0">Forest</option>
                <option value="1">Mountain</option>
                <option value="2">Sea</option>
                <option value="3">Lake</option>
            </select>
        </div>
        <div class="LocationsClass" style="display: flex; justify-content: center; flex-wrap: wrap;" ></div>
    </div>
</template>



<style src="../components/main.css"/>
<script lang="ts">
import TopBannerVue from '../components/TopBanner.vue';
import axios from 'axios';

export default {
    name: 'SearchModule',
    components: {
        TopBannerVue,
    },
    data() {
        return {
            CampingLocations: [],
            AllowCategoriesValue: -1,
            AllowSearchValue: 'Search...',
        };
    },
    async mounted() {
        try{
            this.CampingLocations = await this.fetchLocations();
        await new Promise(resolve => setTimeout(resolve, 300));
        }
        catch{
            this.CampingLocations = await this.fetchLocations();
        await new Promise(resolve => setTimeout(resolve, 300));
        }
        this.CreateDivBlocks(this.CampingLocations);
        
    },
    methods: {
        async fetchLocations() {
            try {
                const response = await axios.get('https://localhost:5001/api/Location');
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },
        CreateDivBlocks(aa){
            aa.forEach((object) => {
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
        },
        AllowCategories(){
            let NewCampingLocations;
            this.$el.querySelector('.LocationsClass').innerHTML = '';
            if (this.AllowCategoriesValue != -1){
                NewCampingLocations = this.CampingLocations.filter((object) => object.categoryID == this.AllowCategoriesValue);
                console.log(NewCampingLocations);
            }
            else{
                NewCampingLocations = this.CampingLocations;
            }
            console.log(this.AllowSearchValue);
            if (this.AllowSearchValue != ''){
                NewCampingLocations = NewCampingLocations.filter((object) => object.locationName.toLowerCase().includes(this.AllowSearchValue.toLowerCase()));
            }
            this.CreateDivBlocks(NewCampingLocations)
        },
        removeinput(){
            this.AllowSearchValue = '';
        }
    }
}
</script>
