<template>
        <header>
            <div class="h1">Une waifu pour tous</div>
            <nav>
                <a @click= "changeCat(true)" href="#">Normal</a>
                <a @click= "changeCat(false)" href="#">Hardcore</a>
            </nav>
        </header>

        <Questionnaire v-model:status="isNormal"/>
</template>

<script>

    import Questionnaire from "./Questionnaire.vue";

    export default{
        name: "Header",
        components: {
            Questionnaire,
         },
         methods:{
             changeCat:function(bool){
                 this.isNormal = bool
             }
         },
data(){
 return{
     isNormal: true
 }
}
    }
    
</script>

