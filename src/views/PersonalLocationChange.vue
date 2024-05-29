<template>
  <div>
    <TopBanner/>
    <h1>
      Personal Location Change
    </h1>
    <div class="account-info"> 
      <form style="display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center; align-items: center;" >
        <label for="file">Please insert .jpg image 200px x 200px</label>
        <input type="file" id="imagedatafile" @change="makeimagetobase64">
        <label>LocationID: {{ locationID }}</label>
        <label for="locationName">Location Name:</label><br>
        <input type="text" id="locationName" name="locationName" v-model="locationName"><br>
        <label for="description">Description:</label><br>
        <input type="text" id="description" name="description" v-model="description"><br>
        <label for="pricePerNight">Price Per Night:</label><br>
        <input type="number" id="pricePerNight" name="pricePerNight" v-model="pricePerNight"><br>
        <label for="categoryID">Category ID:</label><br>
        <!-- <input type="number" id="categoryID" name="categoryID" v-model="categoryID"><br> -->
        <select v-model="categoryID" style="width: 170px;">
            <option value="0">Forest</option>
            <option value="1">Mountain</option>
            <option value="2">Sea</option>
            <option value="3">Lakehouse</option>
        </select>
        <button type="submit" @click="submitinfoupdate" style="margin-top: 10px;">Submit</button>
        <button @click="deleteLocation" style="background-color: red; margin-top: 10px;">Delete</button>
        
        <p>{{ information }}</p>
      </form>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import TopBanner from '@/components/TopBanner.vue';
export default {
  data(){
    return{
      locationID: 0,
      locationName: "string",
      description: "string",
      pricePerNight: 0,
      categoryID: 0,
      imageData: "",
      information: ""
      }
    },
    components: {
    TopBanner
    },
  mounted(){
    this.getuniqueloc().then(response => {
      this.locationID = response.id;
      this.locationName = response.locationName;
      this.description = response.description;
      this.pricePerNight = response.pricePerNight;
      this.categoryID = response.categoryID;
      this.imageData = response.imageData;
    });
  },
  methods: {
    async getuniqueloc(){
      try{
        const response = await axios.get('https://localhost:5001/api/Location/GetLocation'+this.$route.params.id);
        return response.data;
      } catch (error) {
        console.error('Failed to fetch locations:', error);
        return null; // Return null in case of error
      }
    },
    async submitinfoupdate(event){
      event.preventDefault();
      await axios.put('https://localhost:5001/api/Location/UpdateLocation?id='+this.locationID, {
        imageData: this.imageData,
        userID: 7,
        locationName: this.locationName,
        description: this.description,
        pricePerNight: this.pricePerNight,
        categoryID: this.categoryID
      }).then(response => {
        console.log(response);
        this.information = "Location updated successfully!";
      }).catch(error => {
        console.error('Failed to update location:', error);
      });
    },
    makeimagetobase64(e){
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        this.imageData = e.target.result;
      }
    },
    async deleteLocation(event){
      event.preventDefault();
      await axios.delete('https://localhost:5001/api/Location/RemoveLocation?id='+this.locationID).then(response => {
        console.log(response);
        this.information = "Location deleted successfully!";
      }).catch(error => {
        console.error('Failed to delete location:', error);
      });
    }
  }
}


</script>

<style>
.account{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #f2f2f2;
}
</style>