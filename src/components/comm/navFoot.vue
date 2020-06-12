<template>
    <div class="navfoot">
        <div class="top">
            <div class="topcontent">
                <div class="left">
                    <div> <span>关于我们</span><span>丨</span><span>联系我们</span> </div>
                    <div> <div><img src="../../assets/call.png"></div><span>辽宁省沈扶新区审批中心服务热线：10086</span></div>
                </div>
                <div class="right"><div><img src="../../assets/code.png"></div><span>微信预约</span></div>
            </div>
        </div>
        <div class="bot"><div><span>辽宁省沈扶新区审批中心版权所有</span><span>粤ICP备11112222</span></div></div>
    </div>
</template>
<style scoped>
    span{   color: #F2F2F2; font-size: 15px;}
    .navfoot{   width: 100%;}
    .navfoot>.top{  width: 100%; height: 152px; background: url(../../assets/bottom.png) no-repeat top left; background-size: 100%; display: flex; justify-content: center; }
    .navfoot>.top>.topcontent{  width: 1200px; display: flex; justify-content: space-between; }
    .navfoot>.top>.topcontent>.left>div:first-child{    margin-top: 60px; display: flex;}
    .navfoot>.top>.topcontent>.left>div:last-child{ margin-top: 25px; display: flex; align-items: flex-end;}
    .navfoot>.top>.topcontent>.left>div:last-child>div{ display: flex; justify-content: center; align-items: center;}
    .navfoot>.top>.topcontent>.left>div:last-child>span{    margin-left: 10px;}

    .navfoot>.top>.topcontent>.right{   margin-top: 25px; display: flex; flex-direction: column; align-items: center;}
    .navfoot>.top>.topcontent>.right>div{   width: 80px; height: 80px; display: flex; justify-content: center; align-items: center; }
    .navfoot>.top>.topcontent>.right>div>img{   width: 100%;}
    .navfoot>.top>.topcontent>.right>span{  font-size: 14px; margin-top: 10px;}

    .navfoot>.bot{  width: 100%; height: 40px; display: flex; justify-content: center; align-items: center; background: #222222;}
    .navfoot>.bot>div{  width: 360px; display: flex; justify-content: space-between;}
    .navfoot>.bot>div>span{ font-size: 14px; color: #F2F2F2;}
</style>