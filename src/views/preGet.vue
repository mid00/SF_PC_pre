<template>
    <div class="preget">

        <rowTitle :title="title[0].one"></rowTitle>
        <addr :addr="addrArr[0].addr" :tel="addrArr[0].tel"></addr>
        <dept :title="deptArr[0].title" :placeholder="deptArr[0].placeholder" :value="deptArr[0].value"></dept>
        <dept :title="deptArr[1].title" :placeholder="deptArr[1].placeholder" :value="deptArr[1].value"></dept>
        <dept :title="deptArr[2].title" :placeholder="deptArr[2].placeholder" :value="deptArr[2].value"></dept>
        <dept :title="deptArr[3].title" :placeholder="deptArr[3].placeholder" :value="deptArr[3].value"></dept>

        <rowTitle :title="title[0].two" class="selfmsg"></rowTitle>
        <self :title="selfArr[0].title" :placeholder="selfArr[0].placeholder" :value="selfArr[0].value"></self>
        <self :title="selfArr[1].title" :placeholder="selfArr[1].placeholder" :value="selfArr[1].value"></self>
        <double :one="btnArr[0].one" :two="btnArr[0].two"></double>
        <tips :title="tipsArr[0].title" :one="tipsArr[0].one" :two="tipsArr[0].two"></tips>

    </div>
</template>
<script>
import rowTitle from '../components/rowTitle';
import addr from '../components/addr';
import dept from '../components/dept';
import self from '../components/self';
import double from '../components/double';
import tips from '../components/tips';


export default {
  components: { rowTitle, addr, dept, self, double, tips },
  data(){
    return {
      title: [ { one: "预约取票", two: "预约人信息"} ],
      addrArr: [ { addr: "辽宁省沈扶新区政务服务中心二楼", tel: "024-23212999"} ],
      deptArr: [
          { title: "办理部门", placeholder: "请选择办理部门", value: "" }, { title: "预约日期", placeholder: "请选择可预约日期", value: "" },
          { title: "选择业务", placeholder: "请选择业务", value: "" }, { title: "预约时间", placeholder: "请选择可预约时间段", value: "" }
      ],
      selfArr: [ { title: "办理人身份证", placeholder: "100100000000000000", value: "" }, { title: "手机号码", placeholder: "13500000000", value: "" } ],
      btnArr: [ { one: "预约", two: "重置"} ],
      tipsArr: [ { title: "查询规则", one: "1. 凭手机号进行预约取号", two: "2. 预约办理时间为周一至周六 08:30-17:00，办事群众在预约时间段到大厅取号后可享受及时办理服务。"} ],

    }
  },
}
</script>
<style scoped>
    .selfmsg{   margin-top: 40px;}
</style>
