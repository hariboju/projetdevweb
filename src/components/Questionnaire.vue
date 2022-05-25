<template>

    <div class="Question">Quelle est ton humeur aujourd'hui ? (Mode normal)</div>
    
    <div class="dropdown" v-if="status">
    <div class="Mode">Mode normal</div>
    <label>Choisis mon beau</label>
      <ul>
        <li @click="addWaifuMaid"><span>Cherche femme de maison</span></li>
        <li @click="addWaifuSelfi"><span>Envie d'un sefli</span></li>
        <li @click="addWaifuRandom"><span>Tout me va</span></li>
      </ul>
    </div>

    <div class="dropdown2" v-else>
    <div class="Mode">Mode hardcore</div>
    <label>Choisis mon cochon</label>
      <ul>
        <li @click="addWaifuTities"><span>Que les seins</span></li>
        <li @click="addWaifuGif"><span>Gifs Hentai</span></li>
        <li @click="addWaifuRandomHentai"><span>Tout me va</span></li>
      </ul>
    </div>

    <button class="remove" @click="removeimage"> remove </button>
      <WaifuCard
        v-for="waifu in waifus"
        :key="waifu"
        :img="waifu.img"
      />

</template>

<script>
    import axios from "axios";
    import WaifuCard from "./WaifuCard.vue";
    export default{
        name: 'Questionnaire',
        components: {
    WaifuCard,
  }, 
  props:{
    status: Boolean
  },
    data() {
    return {
      waifus: [],
    };
  },

    

methods: {
    addWaifuSelfi() {
      this.waifus=[]
      axios.get("https://api.waifu.im/random/?selected_tags=selfies").then((response) => {
        let api = response.data;
        console.log(api.images[0].url)
        let apiInfo = {
          img: api.images[0].url,
        };
        this.waifus.push(apiInfo);
      });
      
    },

     addWaifuMaid() {
      this.waifus=[]
      axios.get("https://api.waifu.im/random/?selected_tags=maid&gif=false").then((response) => {
        let api = response.data;
        console.log(api.images[0].url)
        let apiInfo = {
          img: api.images[0].url,
        };
        this.waifus.push(apiInfo);
      }); 
    },

    addWaifuRandom() {
      this.waifus=[]
      axios.get("https://api.waifu.im/random").then((response) => {
        let api = response.data;
        console.log(api.images[0].url)
        let apiInfo = {
          img: api.images[0].url,
        };
        this.waifus.push(apiInfo);
      });
      
    },

    addWaifuTities() {
      this.waifus=[]
      axios.get("https://api.waifu.im/random/?selected_tags=paizuri&gif=false").then((response) => {
        let api = response.data;
        console.log(api.images[0].url)
        let apiInfo = {
          img: api.images[0].url,
        };
        this.waifus.push(apiInfo);
      }); 
    },

    addWaifuGif() {
      this.waifus=[]
      axios.get("https://api.waifu.im/random/?selected_tags=hentai&gif=true").then((response) => {
        let api = response.data;
        console.log(api.images[0].url)
        let apiInfo = {
          img: api.images[0].url,
        };
        this.waifus.push(apiInfo);
      }); 
    },

    addWaifuRandomHentai() {
      this.waifus=[]
      axios.get("https://api.waifu.im/random/?selected_tags=hentai&gif=false").then((response) => {
        let api = response.data;
        console.log(api.images[0].url)
        let apiInfo = {
          img: api.images[0].url,
        };
        this.waifus.push(apiInfo);
      }); 
    },

    removeimage(){
       this.waifus=[] 
    },
  },
    
  
}
</script>

<style>


.Question{
    margin-top:10px;
    text-align: center;
}

.dropdown {
  margin: 5px auto 0px;
  position: relative;
  width: 300px;
  cursor: pointer;
}

.dropdown label {
  display: inline-block;
  text-align: center;
  background: #FFF;
  color: #000;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s linear 0s;
  cursor: pointer;
}

.dropdown ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
  width: 100%;
}

.dropdown li {
  margin: 0px;
  padding: 0px;
  background: #FFF;
  width: 100%; max-height: 0px;
  overflow: hidden;
  box-sizing: border-box;
  transition: max-height 0.2s linear 0s;
}

.dropdown li:hover {
  background: #FF9110;
  color: #FFF;
}

.dropdown li span {
  display: inline-block;
  padding: 5px 10px;
}

.dropdown:hover label {
  background: #23CEC2;
  color: #FFF;
}

.dropdown:hover li {
  max-height: 50px; /* Any number larger than the actual height of the li works */
}

.dropdown2 {
  margin: 5px auto 0px;
  position: relative;
  width: 300px;
  cursor: pointer;
}

.dropdown2 label {
  display: inline-block;
  text-align: center;
  background: #FFF;
  color: #000;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s linear 0s;
  cursor: pointer;
}

.dropdown2 ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
  width: 100%;
}

.dropdown2 li {
  margin: 0px;
  padding: 0px;
  background: #FFF;
  width: 100%; max-height: 0px;
  overflow: hidden;
  box-sizing: border-box;
  transition: max-height 0.2s linear 0s;
}

.dropdown2 li:hover {
  background: #FF9110;
  color: #FFF;
}

.dropdown2 li span {
  display: inline-block;
  padding: 5px 10px;
}

.dropdown2:hover label {
  background: #23CEC2;
  color: #FFF;
}

.dropdown2:hover li {
  max-height: 50px; 
}

.remove{
  display: flex;
  padding: 3px 10px 3px 10px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
}

.Mode{

  text-align: center;
  margin-bottom: 5px;
  font-size: 10px;

}


</style>