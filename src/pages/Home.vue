<template>
  <div class="home">
    <MobileMenu :menuList="menuList" v-if="isMobile()"/>
    <DesktopMenu :menuList="menuList" v-else/>
    <div class="content">
      <MainContent v-if="idx==0"></MainContent>
      <AboutContent v-if="idx==1"></AboutContent>
      <NoticeContent v-if="idx==2"></NoticeContent>
      <RoomContent v-if="idx==3"></RoomContent>
      <ReservationContent v-if="idx==4"></ReservationContent>
    </div>
    <div class="footer">
      <div class="text">상호명:리17776 | 대표자 : 정유정 | e-mail:cyyworld@naver.com</div>
      <div class="text">입금계좌 : 기업은행 137-098790-01016 예금주 정유정</div>
      <div class="text">연락처 <a href="tel:010-2935-8484">010-2935-8484</a></div>
    </div>
  </div>
</template>

<script>
import MobileMenu from '../components/MobileMenu.vue'
import DesktopMenu from '../components/DesktopMenu.vue'
import MainContent from '../components/MainContent.vue'
import AboutContent from '../components/AboutContent.vue'
import NoticeContent from '../components/NoticeContent.vue'
import RoomContent from '../components/RoomContent.vue'
import ReservationContent from '../components/ReservationContent.vue'

export default {
  name: 'home_page',
  data() {
    return {
      menuList: [{name:'Home',isSelected:true},{name:'About',isSelected:false},{name:'Notice',isSelected:false},{name:'Rooms',isSelected:false},{name:'Reservation',isSelected:false}],
      idx:0,
    }
  },
  components:{
    MobileMenu,
    DesktopMenu,
    MainContent,
    AboutContent,
    NoticeContent,
    RoomContent,
    ReservationContent
  },
  methods:{
    goNotice(){
      this.menuChange(2)
    },
    isMobile(){
      console.log(window.innerWidth)
      if(window.innerWidth <= 760) {return true}
      else {return false}
    },
    menuChange(idx){
      console.log(this.idx,idx)
      this.idx = idx
      
      for(var i in this.menuList){
        if(i==idx) this.menuList[i].isSelected=true
        else this.menuList[i].isSelected=false
      }
    }
  },
  mounted(){
    this.emitter.on('menuChange',this.menuChange)
    this.emitter.on('goNotice',this.goNotice)
  }

}
</script>

<style scoped>
.home{
  height:100vh;
  overflow-y:scroll;
  display:flex;
  flex-direction: column;
}
.content{
  display:flex;
  flex-direction: column;
  flex-grow: 1;
}
.footer{
  border-top:.5px solid rgba(0,0,0,.4);
  padding:4vw;
  font-size:2vw;
}
.footer .text{
  line-height: 6vw;
}
.footer .text a{
  color:black;
} 
@media (min-width: 760px) {
  .footer .text{
    font-size: 1vh;
    line-height: 4vh;
  }
}

</style>
