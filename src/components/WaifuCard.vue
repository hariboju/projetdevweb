<template>
  <div class="waifu-card">  

        <div class="image" >
          <img :src="img" width="400"/>
        </div>  

  </div>

</template>

<script>
export default {
  name: "WaifuCard",
  props: {
    img: String,
	},
  
};
</script>
<style>

.waifu-card{
  margin-top: 20px;
  margin-bottom: 12px;
}

.image{
  text-align: center;
  
}

</style>
