<template>
  <div class="preResult">
    <div class="content">
      <div class="title"> <span>您已成功预约</span><img src="../../assets/close.png"> </div>

      <div class="details">
        <p>预约号：<span>582326</span></p>
        <p>预约人：<span>13512341234</span></p>
        <p>办理业务：<span>税务缴纳（地税局）</span></p>
        <p>预约时间：<span>2020-03-12 09:30-10:00</span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'preResult',
  props: {
    msg: String
  }
}
</script>
<style scoped>
  .preResult{ position: fixed; left: 0; top: 0; right: 0; bottom: 0; background: rgba(50, 50, 50, 0.5); display: flex; justify-content: center; align-items: center;}
  .preResult>.content{  width: 341px; height: 268px; background: url(../../assets/preResult.png);}
  .preResult>.content>.title{ width: 100%; height: 78px; border-bottom: 2px dashed #DCDCDC; position: relative; display: flex; justify-content: center; align-items: center;}
  .preResult>.content>.title>span{ font-size: 25px; color: #279FDC;}
  .preResult>.content>.title>img{ position: absolute; width: 20px; right: 30px; cursor: pointer;}

  .preResult>.content>.details{ display: flex; flex-direction: column; align-items: flex-start; padding: 14px 0 0 15px;}
  .preResult>.content>.details>p{ font-size: 17px; color: #8D8D8D; margin-left: 10px; line-height: 35px;}
  .preResult>.content>.details>p>span{  font-size: 17px; color: #8D8D8D;}
</style>
