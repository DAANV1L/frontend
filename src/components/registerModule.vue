<template>
  <div>
    <img src="../assets/frontpage.png" id="frontpageimage"/>
    <div class="LoginContainer">
      <form @submit.prevent="login">
        <h2 id="RegisterText" style="margin: 10px;">Register</h2>
        <input type="text" v-model="username" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <input type="text" v-model="username" placeholder="FirstName" required>
        <input type="text" v-model="password" placeholder="LastName" required>
        <input type="text" v-model="password" placeholder="Date Of Birth" required>
        <input type="text" v-model="username" placeholder="Adress" required>
        <input type="text" v-model="password" placeholder="Phonenumber" required>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Handle Registration
      console.log(`Logging in with username: ${this.username} and password: ${this.password}`);
    }
  }
}
</script>

<style src="./main.css"/>