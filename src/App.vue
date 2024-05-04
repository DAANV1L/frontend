<template>
  <div id="App">
    <div class="header">
        <div class="logo">CampSpot</div>
    </div>
    <homeModule v-if="activeModule == 'home'"/>
    <registerModule v-if="activeModule != 'home'"/>
  </div>
</template>


<script>
import homeModule from './components/homeModule.vue';
import registerModule from './components/registerModule.vue';

export default {
  name: 'App',
  components: {
    homeModule,
    registerModule,
    //LoginModuleVue
  },
  data() {
    return {
      activeModule: 'home',
      Modules:  [
        'home',
        'register'
      ]
    }
  },
  
}

</script>

<style src="./components/main.css"/>