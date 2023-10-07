<template>
  <div class="menu">
    <div class="list">
      <div class="title">RE 17776</div>
      <div v-for="(item,i) in menuList" v-bind:key="i+`menuList`" class="item"
      :class="item.isSelected ? 'selected' : 'none' " @click="onClick(i)">
        {{item.name}}
      </div>
    </div>
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
  width:100%;
  display:flex;
  flex-direction: column;
}
.menu .title{
  width:30vw;
  font-size: 6vh;
  padding:1vh;
  text-align: center;
}
.menu .list{
  display:flex;
  justify-content:center;
  vertical-align: center;
  padding:2vh;
  align-items: center;
}
.menu .list .item{
  vertical-align: middle;
  flex-grow: 1;
}
.menu .list .item.selected{
  color:rgb(205, 92, 8);
}

</style>
