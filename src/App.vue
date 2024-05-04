<template>
  <div id="App">
    <div class="slideshow">
      <img src="@/assets/frontpage.png" alt="Slideshow" />
    </div>
    <div class="header">
      <div class="logo">CampSpot</div>
      <div class="buttons">
        <button class="Button" id="RegisterButton" @click="register">Register</button>
        <button class="Button" id="LoginButton" @click="login">Login</button>
      </div>
    </div>
    
    <div class="content">
      <router-view>

      </router-view>
    </div>
  </div>
</template>


<script>
//import LoginModuleVue from './components/LoginModule.vue';

export default {
  name: 'App',
  components: {
    //LoginModuleVue
  },
  data() {
    return {};
  },
  methods: {
    register() {
      console.log('Register');
    },
    login() {
      console.log('Login');
      this.$router.push('/LoginModule.vue');
    }
  }
};

</script>





<style>
.slideshow img {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}


.logo {
  font-size: 30px;
  font-weight: bold;
  padding: 5px 10px 10px 5px;
}

.buttons {
  display: flex;
  padding: 5px 10px;
}

.Button {
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.content {
  padding: 20px;
}
</style>