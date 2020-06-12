<template>
  <div class="query">
    <rowTitle :title="title"></rowTitle>
    <self :title="selfArr[0].title" :placeholder="selfArr[0].placeholder" :value="selfArr[0].value"></self>
    <single :title="btnArr[0].title"></single>
    <tips :title="tipsArr[0].title" :one="tipsArr[0].one" :two="tipsArr[0].two"></tips>
  </div>
</template>

<script>
import rowTitle from '../components/rowTitle';
import self from '../components/self';
import single from '../components/single';
import tips from '../components/tips';
export default {
  components: { rowTitle, self, single, tips },
  data(){
    return {
      title: "预约查询",
      selfArr: [ { title: "查询条件", placeholder: "请输入预约手机号码/身份证号码", value: "" } ],
      btnArr: [ { title: "预约查询" } ],
      tipsArr: [ { title: "说明", one: "1. 输入预约时的手机号码、预约号码或身份证号码进行查询", two: "2. 显示所有的有效预约信息"} ]
    }
  }
}
</script>
<style scoped>
</style>

