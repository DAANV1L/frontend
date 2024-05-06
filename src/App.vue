<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  // You can define any global components, mixins, or methods here
}
</script>


<!-- <template>
  <div id="App">
    <div class="header">
        <div class="logo">CampSpot</div>
    </div>
    <homeModule v-if="activeModule == 'home'"/>
    <registerModule v-if="activeModule != 'home'"/>
  </div>
</template>


<script>
import homeModule from './views/homeModule.vue';
import registerModule from './views/registerModule.vue';


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

<style src="./components/main.css"/> -->