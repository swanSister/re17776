<template>
  <div class="notice">
    <div class="notice-content">
      <div class="title">주의사항</div>
      <div class="content">
        <div>애견, 키즈 전문 펜션이 아닙니다. 안전사고에 각별히 유의 해주세요. 부주의로 인한 안전사고는 책임지지않습니다.</div>
        <div>애견, 어린이만 집에 두고 외출하거나 어른없이 어린이만 옥상 이용 하는 것은 금지 됩니다.</div>
        <div>안전사고 관리 이유로 수영장, 주택 외부 CCTV 설치 되어있고 1시간 간격으로 모니터링 합니다.</div>
        <div>모든 애견 예외없이 실내 매너벨트 필수 입니다. 원목, 석회, 자기질 벽과 소품에 마킹시 복구비용 청구됩니다.</div>
        <div>내부 청결을 위해 실내 모든 침구류는 일회용 이불 커버 제공 됩니다. 커버 제거하지 않고 사용해 주세요. </div>
        <div>오후 9시 이후 자쿠지 이용 금지 됩니다. 온수, 냉수 1회 이용 할 수 있습니다. 물 받는 시간은 2시간 정도 걸립니다.</div>
        <div>자쿠지에 애견 이용 불가합니다. 애견 입장시 추가 청소비가 청구 될 수 있습니다.</div>
        <div>매너타임 10시 입니다. 10시 이후 큰 소리 나지않게 주의 해주세요.</div>
        <div>옥상 이용시 난간에 기대거나 올라타지 마세요.</div>
        <div></div>
      </div>
    </div>
    <div class="notice-content">
      <div class="title">요금</div>
      <div class="content">
        ssdfd
      </div>
    </div>
    <div class="notice-content">
      <div class="title">예약 및 체크인</div>
      <div class="content">
        <div>예약은 웹사이트를 통해 또는 전화로 가능합니다.</div>
        <div>체크인 시간은 오후 3시 이후입니다.</div>
        <div>010-2935-8484</div>
      </div>
    </div>
    <div class="notice-content">
      <div class="title">애견, 키즈</div>
      <div class="content">
        <div>애견과 키즈와 함께 숙박하실 수 있습니다.</div>
        <div>24개월 미만의 유아는 인원수에 포함되지 않습니다.</div>
        <div>소형견 : ~7kg, 중형견 : ~13kg, 대형견 : ~25kg, 초대형견 : 제한없음</div>
      </div>
    </div>
    <div class="notice-content">
      <div class="title">편의 시설</div>
      <div class="content">
        <div>객실 내에는 주방 시설과 욕실이 비치되어 있습니다.</div>
        <div>와이파이와 TV 등의 엔터테인먼트 시설을 이용하실 수 있습니다.</div>
      </div>
    </div>
    <div class="notice-content">
      <div class="title">취소</div>
      <div class="content">
        <div>숙박 일수 7일 전까지 취소 시 100% 환불됩니다.</div>
        <div>숙박 일수 3일 전까지 취소 시 50% 환불됩니다.</div>
        <div>숙박 당일 취소 시 환불이 불가능합니다.</div>
        <div>환불은 취소 요청이 접수된 후 7-10일 이내에 처리됩니다.</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'main-comp',
  props: {
    
  },
  components:{
    
  },
  data() {
    return {
      imageList:[{"src":require('../assets/image/4.jpg')},
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
.notice{
  padding:6vw;
  display:flex;
  display: flex;
  flex-direction: column;
  font-size: 3.5vw;
}
.title{
  font-weight: bold;
  font-size: 4vw;
  border-bottom:1px solid rgba(0,0,0,0.1);
  padding-bottom:1vw;
}
.content{
  margin-top:2vw;
  margin-bottom: 10vw;
}
.content > div{
    margin-bottom:2vw;
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
    margin-bottom:1vh;
  }

}


</style>
