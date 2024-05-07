<template>
  <div>
    <TopBannerVue/>
    <img src="../assets/frontpage.png" id="frontpageimage"/>
    <div class="LoginContainer">
      <form @submit.prevent="login">
        <h2>Login</h2>
        <input type="text" v-model="username" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
      <button type="submit" style="margin-top: 10px" @click="Register">Register</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TopBannerVue from '../components/TopBanner.vue';

export default {
  components: {
    TopBannerVue
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios
        .get('https://localhost:7012/api/User')
        .then(response => {
          console.log(response.data);
        })


      // // Handle login
      // console.log(`Logging in with username: ${this.username} and password: ${this.password}`);
      // // fetch request
      // fetch('https://localhost:7012/api/User', {
      //     method: 'GET',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       // Add any other headers if needed
      //     },
      //   })
      //   .then(response => {
      //     if (!response.ok) {
      //       throw new Error('Network response was not ok');
      //     }
      //     return response.json();
      //   })
      //   .then(data => {
      //     // Handle the response data
      //     console.log(data);
      //   })
      //   .catch(error => {
      //     // Handle any errors
      //     console.error('There was a problem with the fetch operation:', error);
      //   });
    },
    Register() {
        this.$router.push('/register');
    }
  }
}
</script>

<style src="../components/main.css"/>