<template>
  <div class="line">
    <rowTitle :title="title"></rowTitle>
    <addr :addr="addrArr[0].addr" :tel="addrArr[0].tel"></addr>
    <dept :title="deptArr[0].title" :placeholder="deptArr[0].placeholder" :value="deptArr[0].value"></dept>
    <self :title="selfArr[0].title" :placeholder="selfArr[0].placeholder" :value="selfArr[0].value"></self>
    <single :title="btnArr[0].title"></single>
    <tips :title="tipsArr[0].title" :one="tipsArr[0].one"></tips>
  </div>
</template>

<script>
import rowTitle from '../components/rowTitle';
import addr from '../components/addr';
import dept from '../components/dept';
import self from '../components/self';
import single from '../components/single';
import tips from '../components/tips';
export default {
  components: { rowTitle, addr, dept, self, single, tips },
  data(){
    return {
      title: "排队查询",
      addrArr: [ { addr: "辽宁省沈扶新区政务服务中心二楼", tel: "024-23212999"} ],
      deptArr: [ { title: "办理部门", placeholder: "请选择办理部门", value: "" } ],
      selfArr: [ { title: "我的票号", placeholder: "请输入您的票号", value: "" } ],
      btnArr: [ { title: "排队查询"} ],
      tipsArr: [ { title: "查询规则", one: "1. 选择办理部门后点击查询，可查看全部业务员当前等待人数和办理的最大票号。"} ]
    }
  }
}
</script>
<style scoped>
</style>

