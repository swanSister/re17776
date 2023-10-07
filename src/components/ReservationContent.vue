<template>
  <div class="reservation">
   <div class="month">
    <div class="icon-box"><span v-show="selectDate>currentDate"  @click="prevMonth" class="icon-left-open"></span></div>
    <div class="text">{{ selectDate.getFullYear() }}년{{ (selectDate.getFullYear()*12 + selectDate.getMonth())%12 +1 }}월</div>
    <div class="icon-box"><span v-show="getDiffMonth()" @click="nextMonth" class="icon-right-open"></span></div>
  </div>
   <div class="Scheduler">
    <div class="day red">일</div>
    <div class="day">월</div>
    <div class="day">화</div>
    <div class="day">수</div>
    <div class="day">목</div>
    <div class="day">금</div>
    <div class="day blue">토</div>
    <div v-for="(item,idx) in dateArray" :key="idx+'item'" class="date-box" 
    :class="idx%7==0 ? 'red' : idx%7==6 ? 'blue' : 'none'">
      <div v-if="item.date>0"  class="date" >
        <div :class="isToday(item.date)?'today' : 'none'">{{ item.date }}</div></div>
      <div v-if="item.isReservation" class="reserved">예약완료</div>
    </div>
    
   </div>
   <div class="notice">
      예약 전 <a @click="goNotice" class="red"> 공지사항</a>을 꼭 읽어주세요. 
      <br>예약 시 공지사항을 숙지 하신 것으로 간주 합니다. 
      <br>숙소 규칙을 지키지 않을 시 업체측에서 게스트에게 즉시 퇴실조치 및 손해배상 청구를 할 수 있습니다.  
    </div>
    <div class="goReservation">
      <a @click="window.href('www.naver.com')">예약하기</a>
    </div>
  </div>
</template>

<script>
//import {  Calendar } from 'v-calendar';
import 'v-calendar/style.css';

export default {
  name: 'main-comp',
  props: {
    
  },
  components:{
   // Calendar
  },
  data() {
    return {
      dateArray:[],
      selectDate:new Date(),
      currentDate:new Date(),
      reservationData:[{
        inDate:'2023-10-2',
        outDate:'2023-10-3',
        name:'정유정',
        people:'4',
        dogs:'3',
        price:'25',
      },
      {
        inDate:'2023-10-5',
        outDate:'2023-10-7',
        name:'정유정',
        people:'4',
        dogs:'3',
        price:'25'
      },
      {
        inDate:'2023-10-22',
        outDate:'2023-10-28',
        name:'정유정',
        people:'4',
        dogs:'3',
        price:'25'
      },
    ]
    }
  },
  methods: {
    goNotice(){
      this.emitter.emit('goNotice')
    },
    isToday(date){
      if(this.currentDate.getFullYear() == this.selectDate.getFullYear() &&
        this.currentDate.getMonth() == this.selectDate.getMonth() && this.currentDate.getDate() == date){
          return true
        }else false
    },
    getDiffMonth(){
      console.log("currentDateMonth : "+this.selectDate+"2 : "+this.currentDate)
      console.log(this.selectDate.getMonth())
      console.log(this.selectDate.getFullYear()*12)
      var selectDateMonth = this.selectDate.getMonth() + this.selectDate.getFullYear()*12
      var currentDateMonth = this.currentDate.getMonth() + this.currentDate.getFullYear()*12
      var diff = selectDateMonth - currentDateMonth
      console.log("###diffL"+diff+"selectDateMonth: " + selectDateMonth + "currentDateMonth : " +currentDateMonth)
      return diff>1 ? false : true
    },
    prevMonth(){
      this.selectDate = new Date(this.selectDate.getFullYear(),this.selectDate.getMonth()-1,1)
      this.getDate()
    },
    nextMonth(){
      this.selectDate = new Date(this.selectDate.getFullYear(),this.selectDate.getMonth()+1,1)
      this.getDate()
    },
    getDate(){
      var currentYear = this.selectDate.getFullYear();
      var currentMonth = this.selectDate.getMonth();
      var startDay = new Date(currentYear, currentMonth, 1);
      var prevDate = startDay.getDate();
      var prevDay = startDay.getDay();
     
      var endDay = new Date(currentYear, currentMonth + 1, 0);
      var nextDate = endDay.getDate();
      var nextDay = endDay.getDay();
      console.log(prevDate, prevDay,nextDate,nextDay)
      this.makeDay(prevDate, prevDay,nextDate,nextDay)
      
    },
    makeDay(prevDate, prevDay,nextDate,nextDay){
      this.dateArray = []
      console.log(prevDate,nextDay)
      var i,j,startIndex=-1
      for(i = 0; i<nextDate+prevDay; i++){
       this.dateArray.push({date:i-prevDay+1,isReservation:false})
        if(startIndex==-1 && i-prevDay+1==1){
          startIndex = i
        }
      }
      for(j in this.reservationData){
        var inDate = new Date(this.reservationData[j].inDate).getDate()
        var outDate = new Date(this.reservationData[j].outDate).getDate()
        if(outDate-inDate>1){
          var diff=outDate-inDate
          for(i=0; i<diff; i++){
            this.dateArray[startIndex + inDate-1+i].isReservation=true
          }
        }else{
          this.dateArray[startIndex + inDate-1].isReservation=true
        }
       }
    }
  },
  mounted(){
    this.currentDate = new Date('2023-11-02')
    this.selectDate = new Date('2023-11-02')
    this.getDate()
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reservation{
  display:flex;
  flex-direction: column;
  align-items: center;
  font-size: 2vw;
  text-align: center;
  
}
.reservation .month{
  display:flex;
  width:90%;
  justify-content: center;
}
.reservation .month .text{
  flex-grow: 1;

}
.reservation .icon-box{
  min-width:10%;
  max-width:10%;
}
.Scheduler{
  width:90%;
  margin-top: 4vw;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
}
.day{
  margin:1vw;
}
.day.red, .date-box.red{
color:red;
}
.day.blue, .date-box.blue{
color:blue;
}
.date-box{
  height:10vw;
}
.date{
text-align: center;
font-size: 3vw;
}
.date .today{
  margin: 0 auto;
  width:5vw;
  height:5vw;
  background-color: rgb(205, 92, 8);
  color:white;
  border-radius: 50%;
}
.notice{
 margin-top:4vw;
  padding:2vw 8vw;
  text-align: left;
}
.notice a{
  color:red;
  font-weight: bold;
  border-bottom:1px solid red;
}
.notice a:hover{
  cursor: pointer;
}
.goReservation{
  width:80px;
  font-size:20px;
  margin:0 auto;
}
.goReservation a{
  display:block;
  color:white;
  border-bottom:none;
  width:100%;
  background-color:rgb(205, 92, 8);
  font-size:16px;
  border-radius:4px;
  padding:4px;
}
@media (min-width: 760px) {
  .reservation{
    font-size: 1vw;
  }
  .reservation .month{
    width:40%;    
    
  }
  .Scheduler{
    width:40%;
    margin-top:1vh;
   
  }
  .date{
    font-size: 2vw;
  }
  .date .today{
    width:3vw;
    height:3vw;
  }
  .date-box{
    height:6vw;
  }
  .notice{
    width:60%;
    margin:0 auto;
    padding:2vw 0;
  }
  }

</style>
