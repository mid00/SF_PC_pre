<template>
    <div>
        <span class="titleItem">{{ title }}</span>
    </div>
</template>
<script>
export default {
    props: {
        title: { default: ""}
    },
}
</script>
<style scoped>
    .titleItem{  display: block; width: calc(100% - 20px); height: 55px; padding-left: 20px; line-height: 55px; text-align: start; background: #F6F6F6; font-size: 20px;}
</style>