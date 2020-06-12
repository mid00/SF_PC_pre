<template>
    <div>
        <div class="double">
            <div class="preleft"></div>

            <div class="topre">
                <div :class="{gopre: arr[0].is}" @click="toPre(0)">     <div :class="{prebg: arr[0].is}"><span>{{ one }}</span></div>    </div>
                <div :class="{gopre: arr[1].is}" @click="toPre(1)">     <div :class="{prebg: arr[1].is}"><div><img :src="(arr[1].is)?require('../assets/isreset.png'):require('../assets/reset.png')"></div><span>{{ two }}</span></div>  </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        one: { default: ""},
        two: { default: ""}
    },
    data(){
        return {
            arr: [ { is: true}, {is: false} ],
        }
    },
    methods: {

// 预约、重置
        toPre( val){
            for(var i=0; i<this.arr.length; i++){
                ( i == val )?(this.arr[i].is = true):(this.arr[i].is = false);
            }
        }
    },
}
</script>
<style scoped>
    .double{    display: flex; margin-top: 24px;}
    .double>.preleft{   width: 320px;}
    .double>.topre{    width: 355px; height: 60px; display: flex; justify-content: space-between; align-items: center;}
    .double>.topre>div{  width: 156px; height: 60px; border: 1px solid #C8C8C8; border-radius: 10px; cursor: pointer; display: flex; justify-content: center; align-items: center;}
    .double>.topre>div>div{  width: 154px; height: 58px;}
    .double>.topre>div>div>span{ text-align: center; line-height: 60px; font-size: 25px;}

    .double>.topre>div:last-child{   display: flex; justify-content: center; align-items: center;}
    .double>.topre>div:last-child>div{   width: 154px; height: 58px; display: flex; justify-content: center; align-items: center;}
    .double>.topre>div:last-child>div>div{   width: 25px; height: 25px; margin-right: 5px; display: flex; justify-content: center; align-items: center;}
    .double>.topre>div:last-child>div>div>img{   width: 100%;}
    .double>.topre>div:last-child>div>span{  margin-left: 5px;}

    .gopre{ border: 1px solid #279FDE !important;}
    .prebg{ background: #279FDE; border-radius: 9px;}
    .prebg span{    color: #F2F2F2;}
</style>