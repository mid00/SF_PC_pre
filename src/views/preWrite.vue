<template>
  <div class="line">
    <rowTitle :title="title"></rowTitle>
    <self :title="selfArr[0].title" :placeholder="selfArr[0].placeholder" :value="selfArr[0].value"></self>
    <self :title="selfArr[1].title" :placeholder="selfArr[1].placeholder" :value="selfArr[1].value"></self>
    <dept :title="deptArr[0].title" :placeholder="deptArr[0].placeholder" :value="deptArr[0].value"></dept>
    <dept :title="deptArr[1].title" :placeholder="deptArr[1].placeholder" :value="deptArr[1].value"></dept>
    <double :one="btnArr[0].one" :two="btnArr[0].two"></double>
  </div>
</template>

<script>
import rowTitle from '../components/rowTitle';
import self from '../components/self';
import dept from '../components/dept';
import double from '../components/double';
export default {
  components: { rowTitle, dept, self, double },
  data(){
    return {
      title: "预填单",
      selfArr: [
                { title: "手机号码", placeholder: "13512345678", value: "" },
                { title: "身份证号", placeholder: "100100123412341234", value: "" }
      ],
      deptArr: [
        { title: "办理部门", placeholder: "请选择办理部门", value: "" },
        { title: "业务选择", placeholder: "请选择预约业务", value: "" },
      ],
      
      btnArr: [ { one: "获取单据", two: "历史单据"} ],
    }
  }
}
</script>
<style scoped>
</style>

