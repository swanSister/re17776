<template>
  <div class="main">
    <ImageSlider :isFull="true" :imageList="imageList"/>
    <div></div>
  </div>
</template>

<script>
import ImageSlider from '../components/ImageSlider.vue'

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
.main{
  display: flex;
  flex-direction: column;
}

</style>
