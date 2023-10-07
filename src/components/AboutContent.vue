<template>
  <div class="about">
    <ImageSlider :isFull="false" :imageList="imageList"/>
    <div class="text">
      【투데이신문 김주연 장준혁 정서연 최우정 한석민 기자】 성장성 저하 국면에서 틈새시장과 새 성장 동력원을 찾아 경제에 불어넣어야 한다는 주문이 나온다. 이런 가운데 청년 창업과 스타트업은 새로운 화두가 되고 있다. 아울러 우리뿐만 아니라 글로벌 경제 여건 전반이 어려운 상황에서, 환경·사회·지배구조(ESG) 활동과 글로컬(Glocal) 발전에 대한 주문도 높아지고 있다. 이에 따라 초기 창업 단계에서부터 ESG 및 글로컬 감수성을 키울 수 있도록 지원함으로써 스타트업이 성공적으로 안착할 수 있도록 지원해야 한다는 주문이 나온다.  

28일 산업계에 따르면, 이제 ESG와 글로컬이 결합하는 것이 
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
.about{
  display: flex;
  flex-direction: column;
}
.text{
  margin:5vw;
}

</style>
