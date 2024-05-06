<template>
  <div>
    <img src="../assets/frontpage.png" id="frontpageimage"/>
    <div class="LoginContainer">
      <form @submit.prevent="Register">
        <h2 id="RegisterText" style="margin: 10px;">Register</h2>
        <input type="text" v-model="email" placeholder="Email" >
        <input type="password" v-model="password" placeholder="Password" >
        <input type="text" v-model="FirstName" placeholder="FirstName" >
        <input type="text" v-model="LastName" placeholder="LastName" >
        <input type="text" v-model="DateOfBirth" placeholder="Date Of Birth" >
        <input type="text" v-model="Adress" placeholder="Adress" >
        <input type="text" v-model="Phonenumber" placeholder="Phonenumber" >
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
    Register() {
      // Handle Registration
      console.log(`Logging in with username: ${this.email} and password: ${this.password}`);
      
      
      //fetch
      fetch('https://localhost:7012/api/User', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: "aa",//this.email, // Make sure this.email holds the intended value
          userName: "test", // Replace with dynamic value if needed
          firstName: "aa", //this.FirstName, // Make sure this.FirstName holds the intended value
          lastName: "aa",//this.LastName, // Make sure this.LastName holds the intended value
          password: "aa",//this.password, // Make sure this.password holds the intended value
          address: "aa",//this.Address, // Make sure this.Address holds the intended value
          phoneNumber: "aa",//this.Phonenumber // Make sure this.Phonenumber holds the intended value
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