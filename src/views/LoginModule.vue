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
      Password: '',
      cookie: ''
    }
  },
  methods: {
    async login() {
      

      var emailpassword = this.Email + ":" + this.Password;
      emailpassword = btoa(emailpassword);
      
      
      const accestoken = await fetch('https://localhost:5001/api/User/Login', {
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
          return response.text();
        })
        .then(data => {return data})
        .catch(error => console.error('Error:', error));
      
      if (accestoken.includes("Unauthorized") ) {
        alert("Invalid login")
        return
      }
      else {
        document.cookie = accestoken;
      }
      

      this.cookie = JSON.parse(atob(document.cookie.split('.')[1].split('.')[0]))
      console.log(this.cookie['sub'])
      if (document.cookie != null){
        this.$router.push({name: 'search'})
      }

      },
      Register(){
        this.$router.push({name: 'register'})
      }
    }
  }
</script>

<style src="../components/main.css"/>