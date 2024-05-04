<template>
  <div>
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
import app from '../App.vue';
export default {
  data() {
    return {
      activeModule: app.activeModule,
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Handle login
      console.log(`Logging in with username: ${this.username} and password: ${this.password}`);
      
    },
    Register() {
      console.log('Registering');
      return this.activeModule = 'register';
    }
  }
}
</script>

<style src="./main.css"/>