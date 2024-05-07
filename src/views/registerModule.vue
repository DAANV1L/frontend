<template>
  <div>
    <TopBannerVue/>
    <img src="../assets/frontpage.png" id="frontpageimage"/>
    <div class="LoginContainer">
      <form @submit.prevent="Register">
        <h2 id="RegisterText" style="margin: 10px;">Register</h2>
        <input type="text" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" >
        <input type="text" v-model="FirstName" placeholder="FirstName" required>
        <input type="text" v-model="LastName" placeholder="LastName" required>
        <input type="text" v-model="DateOfBirth" placeholder="Date Of Birth" >
        <input type="text" v-model="Adress" placeholder="Adress" >
        <input type="text" v-model="Phonenumber" placeholder="Phonenumber" >
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import TopBannerVue from '../components/TopBanner.vue';
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    TopBannerVue
  },
  methods: {
    Register() {
      // Handle Registration
      console.log("registeringggggg");
      //let username = this.firstName + " " + this.lastName[0];
      
      //fetch
      fetch('https://localhost:5001/api/User', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email, 
          userName: "aa", 
          firstName: this.FirstName, 
          lastName: this.LastName, 
          password: 'aa', 
          address: 'aa', 
          phoneNumber: "aa" 
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });



    }
  }
}
</script>

<style src="../components/main.css"/>