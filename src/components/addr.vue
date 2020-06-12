<template>
    <div>
        <div class="addr"> <div class="preleft"><div><img src="../assets/addr.png"></div><span>办理地址：</span></div> <span class="preright">{{ addr }}</span> </div>
        <div class="addr"> <div class="preleft"><div><img src="../assets/phone.png"></div><span>咨询电话：</span></div> <span class="preright">{{ tel }}</span> </div>
    </div>
</template>
<script>
export default {
    props: {
        addr: { default: ""},
        tel: { default: ""},
    },
}
</script>
<style scoped>
    .addr{   display: flex; margin-top: 24px; }
    .addr>.preleft{  width: 320px; display: flex; justify-content: flex-end; align-items: center;}
    .addr>.preleft>div{  width: 18px; height: 20px; display: flex; justify-content: center; align-items: center; margin-right: 10px;}
</style>