<template>
    <div>
        <div class="tips">
            <div><div></div><p>{{ title }}：</p></div>
            <p>{{ one }}</p>
            <p>{{ two }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: { default: ""},
        one: { default: ""},
        two: { default: ""}
    }
}
</script>
<style scoped>
    .tips{  width: 100%; display: flex; flex-direction: column; align-items: flex-start; margin: 24px 0 50px 0;}
    .tips>div{  display: flex; justify-content: start; align-items: center;}
    .tips>div>div{  width: 2px; height: 15px; background: #279FDE; margin-right: 5px;}
    .tips p{   font-size: 15px; color: #666; line-height: 25px;}
    .tips>p{    padding-left: 15px; }
</style>