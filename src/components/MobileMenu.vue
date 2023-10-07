<template>
  <div class="menu">
    <div class="title">RE 17776</div>
    <span class="icon-menu" @click="isOn=!isOn"></span>
    <div class="dimm" v-if="isOn" @click="isOn=false"></div>
    <Transition name="slide-fade">
      <div class="list" v-if="isOn">
          <ul>
            <li v-for="(item,i) in menuList" v-bind:key="i+`menuList`"
            :class="item.isSelected ? 'selected' : 'none' " @click="onClick(i)">
              {{item.name}}
            </li>
          </ul>
          <div class="close-btn" @click="isOn=false"><span class="icon-cancel"></span></div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'menu-comp',
  props: {
    menuList:Array
  },
   data() {
    return {
      isOn:false,
    }
  },
  methods: {
    onClick(idx){
      this.isOn=false
      this.emitter.emit('menuChange',idx)
    }
  },
  mounted() {

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
  display: flex;
  width:100vw;
  padding:2vw;
  font-weight: 100;
  z-index: 999;
}
.menu .title{
  width:100%;
  height:100%;
  font-size:8vw;
  text-align: center;
}

.menu .icon-menu{
  position: absolute;
  left:2vw; top:4vw;
  font-size:5vw;
}
.menu .close-btn{
  font-weight: 100;
  position:absolute; left:50vw;top:0;
  font-size: 5vw;
  color:white;
}
.menu .dimm{
  width:100vw;height:100vh;
  position:fixed;left:0;top:0;
  background-color:rgba(0,0,0,0.8);
}
.menu .list{
  width:50vw;
  height:100vh;
  position:fixed;left:0;top:0;
  background-color:white;
  padding:4vw;
}
.menu .list li{
  margin:2vw;
}
.menu .list li.selected{
  color:rgb(205, 92, 8);
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-50vw);
}
</style>
