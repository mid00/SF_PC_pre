<template>
  <div class="preResult">
    <div class="content">
      <div class="title"> <span>预约失败</span><img @click="toclose" src="../../assets/close.png"> </div>

      <div class="details">
        <div><img src="../../assets/fail.png"></div>
        <p>请您重新预约</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'preResult',
  props: { msg: String },
  data(){
      return {}
  },
  methods: {
      toclose(){},
  },
}
</script>
<style scoped>
  .preResult{ position: fixed; left: 0; top: 0; right: 0; bottom: 0; background: rgba(50, 50, 50, 0.5); display: flex; justify-content: center; align-items: center;}
  .preResult>.content{  width: 341px; height: 268px; background: url(../../assets/preResult.png);}

  .preResult>.content>.title{ width: 100%; height: 78px; border-bottom: 2px dashed #DCDCDC; position: relative; display: flex; justify-content: center; align-items: center;}
  .preResult>.content>.title>span{ font-size: 25px; color: #8D8D8D;}
  .preResult>.content>.title>img{ position: absolute; width: 20px; right: 30px; cursor: pointer;}

  .preResult>.content>.details{ display: flex; flex-direction: column; align-items: center; }
  .preResult>.content>.details>div{ margin-top: 25px;}
  .preResult>.content>.details>p{ font-size: 17px; color: #8D8D8D; line-height: 35px;}
</style>
