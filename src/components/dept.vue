<template>
    <div>
        <div class="deptContainer">
            <div class="title"><div><img class="bt" src="../assets/bt.png"></div><span>{{ title }}：</span></div>
            <div class="input">
                <el-select class="preinput" v-model="value" :placeholder="placeholder">
                    <el-option :label="item.label" :value="item.value" v-for="item in options" :key="item.value"></el-option>
                </el-select>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: { default: ""},
        placeholder: { default: ""},
        value: { default: null}
    },
    data(){
        return {
            options: this.value
        }
    }
}
</script>
<style scoped>
    .deptContainer{   display: flex; margin-top: 24px; }

    .deptContainer>.title{  width: 320px; display: flex; justify-content: flex-end; align-items: center;}
    .deptContainer>.title>div{  width: 6px; height: 6px; display: flex; justify-content: center; align-items: center; margin-right: 5px;}
    .deptContainer>.title>div>.bt{  width: 6px;}
    
    .deptContainer>.input{ width: 355px; height: 45px; display: flex; justify-content: center; align-items: center;}
    .deptContainer>.input>.preinput{   width: 100%;}
</style>