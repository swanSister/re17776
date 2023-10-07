<template>
  <div class="image-slider">
    <div> 
      <div class="images">
        <img @click="imageClick" v-for="(item,i) in imageList" v-bind:key="i+`images`" 
        :src="item.src" class="image" :class="isFull ? 'isfull' : ''" />
      </div>
      
      <div class="dot-list">
        <div class="dot" v-for="(item,i) in imageList" v-bind:key="i+`dotImageList`"
        :class="idx==i ? 'selected':'none'"></div>
      </div>
    </div>

    </div>
</template>

<script>
export default {
  name: 'image-slider',
  props: {
    imageList:Array,
    isFull:Boolean
  },
  computed: {
    getImageWidth: () => {
      const imgWidth = document.querySelector(".images").offsetWidth
      console.log("computed:",imgWidth)
      return imgWidth
    },
  },
  data() {
    return {
      idx:0,
      IMAGE_WIDTH:0,
      images:null,
      postion:0,
      start_x:0,
      end_x:0,
    }
  },
  methods: {
    imageClick(e){
      if(e.pageX > this.IMAGE_WIDTH/2) this.next()
      else this.prev()
    },
    prev() {
      if (this.idx > 0) {
        console.log("prev")
        this.postion += this.IMAGE_WIDTH;
        console.log("position:@@@@:"+this.postion)
        this.images.style.transform = `translateX(${this.postion}px)`;
        this.idx = this.idx - 1;
      }
    },
    next() {
      console.log("next")
      if (this.idx < this.imageList.length - 1) {
        this.postion -= this.IMAGE_WIDTH;
        this.images.style.transform = `translateX(${this.postion}px)`;
        this.idx = this.idx + 1;
      }
    }
  },
  mounted() {
    this.IMAGE_WIDTH = this.getImageWidth;
    this.images = document.querySelector(".images")
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-slider{
  width:100vw;
  max-width:100vw;  
  height:auto;
  overflow:hidden;
}
.dot-list{
  width:100%;
  display:flex;
  justify-content: center;
  position:absolute;
  left:0; top:0;
}
.dot-list .dot{
  width:1vw;
  height:1vw;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.5);
  margin:2vw 1vw;
}
.dot-list .dot.selected{
  background-color:white;
}
.images {
  width:100vw;
  position: relative;
  display: flex;
  height: auto;
  transition: transform 0.5s;
}
.image {
  min-width: 100vw;
  width: 100vw;
  height:40vh;
  max-width: 100vw;
  object-fit: cover;
}
.image.isfull{
  height:100vh;
}
@media (min-width: 760px) {
  .image {
    height:100vh;
  }

}
</style>
