<template>
  <div>
    <TopBannerVue/>
    <img src="../assets/frontpage.png" id="frontpageimage"/>
    <div class="LoginContainer">
      <form @submit.prevent="login">
        <h2>Login</h2>
        <input type="text" v-model="Email" placeholder="Email" required>
        <input type="password" v-model="Password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
      <button type="submit" style="margin-top: 10px" @click="Register">Register</button>
    </div>
  </div>
</template>

<script>
import TopBannerVue from '../components/TopBanner.vue';

export default {
  components: {
    TopBannerVue
  },
  data() {
    return {
      Email: '',
      Password: ''
    }
  },
  methods: {
    async login() {
      var emailpassword = this.Email + ":" + this.Password;
      console.log('----login----');
      emailpassword = btoa(emailpassword);
      console.log(emailpassword);
      
      await fetch('https://localhost:5001/api/User/Login', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
        emailpassword 
      )
      })
        .then(response => {
          console.log('access-control-allow-origin:', response.headers.get('access-control-allow-origin'));
          console.log('content-type:', response.headers.get('content-type'));
          console.log('date:', response.headers.get('date'));
          console.log('server:', response.headers.get('server'));
          document.cookie = response.text;
          return response.text();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

            
        }
      }
    }

</script>

<style src="../components/main.css"/>