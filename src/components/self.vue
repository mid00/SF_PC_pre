<template>
    <div class="selfContainer">
        <div class="title"><div><img class="bt" src="../assets/bt.png"></div><span>{{title}}：</span></div>
        <div class="input">
            <input type="text" :placeholder="placeholder" v-model="value">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: { default: ""},
        placeholder: { default: ""},
        value: { default: ""}
    },
}
</script>
<style scoped>
    .selfContainer{   display: flex; margin-top: 24px;}

    .selfContainer>.title{  width: 320px; display: flex; justify-content: flex-end; align-items: center;}
    .selfContainer>.title>div{  width: 6px; height: 6px; display: flex; justify-content: center; align-items: center; margin-right: 5px;}
    .selfContainer>.title>div>.bt{  width: 6px;}

    .selfContainer>.input{   width: 355px; height: 45px; border: 1px solid #C8C8C8; border-radius: 5px; display: flex; justify-content: center; align-items: center;}
    .selfContainer>.input>input{ width: calc(100% - 10px); height: 100%; border-radius: 5px; outline: none; border: none; padding-left: 10px;}

    /* input::-webkit-input-placeholder {color: red;} */
    input::placeholder { color: #BBB;}
</style>