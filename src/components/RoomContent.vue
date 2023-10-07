<template>
  <div class="rooms">
    <ImageSlider :isFull="false" :imageList="imageList"/>
    <div class="image-box">
      <img v-for="(item,i) in imageList" v-bind:key="i+`images`" 
        :src="item.src" class="image" :class="isFull ? 'isfull' : ''" />

    </div>
  </div>
</template>

<script>
import ImageSlider from './ImageSlider.vue'

export default {
  name: 'main-comp',
  props: {
    
  },
  components:{
    ImageSlider
  },
  data() {
    return {
      imageList:[{"src":require('../assets/image/2.jpg')},
                 {"src":require('../assets/image/3.jpg')},
                 {"src":require('../assets/image/4.jpg')},
                 {"src":require('../assets/image/5.jpg')},
                 {"src":require('../assets/image/2.jpg')},
                 {"src":require('../assets/image/3.jpg')},
                 {"src":require('../assets/image/4.jpg')},
                 {"src":require('../assets/image/5.jpg')},
                 {"src":require('../assets/image/2.jpg')},
                 {"src":require('../assets/image/3.jpg')},
                 {"src":require('../assets/image/4.jpg')},
                 {"src":require('../assets/image/5.jpg')}]
    }
  },
  methods: {
    
  },
  mounted(){

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-box{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr; 
  justify-content: center;
  place-items: center;
}
.image-box img{
  display: block;
  width:33vw;
  height:33vw;
  min-width:33vw;
  min-height: 33vw;
  max-width: 33vw;
  max-height:33vw;
  margin-top:4%;
}
@media (min-width: 760px) {
  .notice{
    padding:5vh;
    display:flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    font-size:2vh;
  }
  .title{
    font-size:3vh;
  }
  .notice-content{
    padding:0 2vw;
    width:50%;
    font-size:2vh;
  }
  .content{
    margin-bottom:4vh;
  }
  .content > div{
    margin-bottom:2vh;
  }
}


</style>
