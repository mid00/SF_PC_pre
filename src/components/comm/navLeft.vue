<template>
    <div class="navleft">
        <div class="item" @click="toChoose(0)" :class="{isLeftBg: arr[0].is}"><div :class="{isLeftClick: arr[0].is}"></div><span>预约取票</span></div>
        <div class="item" @click="toChoose(1)" :class="{isLeftBg: arr[1].is}"><div :class="{isLeftClick: arr[1].is}"></div><span>排队查询</span></div>
        <div class="item" @click="toChoose(2)" :class="{isLeftBg: arr[2].is}"><div :class="{isLeftClick: arr[2].is}"></div><span>预约查询</span></div>
        <div class="item" @click="toChoose(3)" :class="{isLeftBg: arr[3].is}"><div :class="{isLeftClick: arr[3].is}"></div><span>预填单</span></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            arr: [
                {is: true , to: "/"},
                {is: false, to: "/lineQuery"},
                {is: false, to: "/preQuery"},
                {is: false, to: "/preWrite"}
            ],
        }
    },
    methods: {
        toChoose( val){
            for(var i=0; i<this.arr.length; i++){

                if( i == val ){
                    this.arr[i].is = true;

                    this.$emit("goLink", i);
                }else{
                    this.arr[i].is = false;
                }
            }
        },
    },
}
</script>
<style scoped>
    .navleft{   width: 280px; height: 366px; }
    .navleft>.item{ width: 100%; height: 90px; background: #F6F6F6; display: flex; align-items: center; cursor: pointer;}
    .navleft>.item~.item{   margin-top: 2px;}
    .navleft>.item>div{ width: 4px; height: 60px; }

    .isLeftBg{  background: #E9E9E9 !important; }
    .isLeftClick{   background: #F58A22; }
    .navleft>.item>span{    margin-left: 100px; color: #555; font-size: 20px;}
</style>