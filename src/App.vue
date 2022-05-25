<template>
  <div id="app">
  test d'api
    <affiche 
    v-for="Waifu in WaifuData"
    :key="Waifu.image_id"
    :url="Waifu.url"/>
  </div>
</template>

<script>
/*import Messages from './components/messages.vue'

export default {
  name: 'App',
  components: {
    Messages
  }
}*/

/*import affiche from './components/affiche.vue'
import { getWaifuData } from '@/api/waifuAPI.js'

export default {
  name: 'App',
  components: {
    affiche
  },
  data() {
    return {
      waifuData: [] 
    }
  },
  created: function() {
    this.retrieveWaifuData()
  },
  methods: {
    async retrieveWaifuData() {
      this.waifuData = await getWaifuData()
    }
  }
}*/

import affiche from './components/affiche.vue'
import {getWaifuData} from '@/api/waifuAPI.js'

export default {
  name: 'WaifuGallery',
  components: {
    affiche
  },
  data() {
    return {
      WaifuData: []
    }
  },
  created: function() {
    this.retrieveWaifuData()
    console.log(this.waifuData)
  },
  methods: {
    async retrieveWaifuData() {
      this.WaifuData = await getWaifuData()
    }
  }
}

</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 10px;
  margin-left: 300px;
  margin-right: 300px;
  background-color: black;
}*/
</style>
