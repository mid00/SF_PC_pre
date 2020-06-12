<template>
    <div class="login">
        <div class="logContent">
            <div class="logTitle"> <span>手机号登录</span><img @click="toClose" src="../../assets/close.png"> </div>
            <div class="logItem">
                <div class="item"> <div><img src="../../assets/tel.png"></div><input type="text" placeholder="输入手机号" v-model="mobile"> </div>
                <div class="item"> <div><img src="../../assets/pwd.png"></div><input type="password" placeholder="输入密码" v-model="pwd"> </div>
                <div> <span @click="toLogin">登录/激活</span> </div>
                <div><span @click="toOpt(0)">注册</span><span @click="toOpt(1)">忘记密码 ？</span></div>
            </div>
        </div>
    </div>
</template>
<script>
import getInfo from "../../getInfo";
export default {
    data(){
        return {
            mobile: "13541201234",
            pwd: "123456",
        }
    },
    methods: {

// 登录
        toLogin(){

            var logReg = /^1[3-9]\d{9}$/;
            var islog = logReg.test( this.mobile );
            var pwdReg = /^\w{6,}$/;
            var isPwd = pwdReg.test( this.pwd );

            if( !islog ){ this.$notify({ type: 'warning', title: '消息', message: '手机号码输入有误' }); return; }
            if( !isPwd ){ this.$notify({ type: 'warning', title: '消息', message: '密码输入有误' }); return; }

            var url = "";
            var obj = {
                        action: "",
                        mobile: this.mobile,
                        pwd: this.pwd
                      };
            getInfo( url, obj ).then( result => {
                console.log( result );
                if( result.status == 200 ){
                    if( result.data.status == 200 ){
                        console.log("成功");
                    }
                    else if( result.data.status==301){ this.$notify({ type: 'warning', title: '消息', message: result.data.msg }); console.log('行为不存在')}
                    else if( result.data.status==302){ this.$notify({ type: 'warning', title: '消息', message: result.data.msg }); console.log('数据库操作失败')}
                    else if( result.data.status==303){ this.$notify({ type: 'warning', title: '消息', message: result.data.msg }); console.log('用户没有登录')}
                    else if( result.data.status==305){ this.$notify({ type: 'warning', title: '消息', message: result.data.msg }); console.log('参数错误')}
                    else if( result.data.status==304){ this.$notify({ type: 'warning', title: '消息', message: result.data.msg }); console.log('网站黑名单')}
                    else if( result.data.status==306){ this.$notify({ type: 'warning', title: '消息', message: result.data.msg }); console.log('数据不存在')}
                    else if( result.data.status==307){ this.$notify({ type: 'warning', title: '消息', message: result.data.msg }); console.log('当前条件下不符合要求')}
                    else{                              this.$notify({ type: 'warning', title: '消息', message: result.data.msg }); console.log('请求失败')}
                }else{                                 this.$notify({ type: 'warning', title: '消息', message: '网络错误' }); return; }
            }).catch( err => { console.log( err );})
        },

// 关闭登录
        toClose(){
            this.$notify({ title: '消息', message: '访问前需登录', type: 'warning' });
        },

// 注册、忘记密码
        toOpt( val){
            this.$notify({ type: 'warning', title: '消息', message: val });

            ( val == 0 ) ? ( this.$emit("passVal", "reg") ) : ( this.$emit("passVal", "close") );
            

            // var arr = [];
            // ( val == 0 ) ? ( arr=["注册", "1001"] ) : ( arr=["修改密码", "1003"] );
            // this.$router.push("/logAll")
        }
    },
    watch: {
    },
}
</script>
<style scoped>
    .login{ position: fixed; left: 0; top: 0; right: 0; bottom: 0; background: rgba(50, 50, 50, 0.5); display: flex; justify-content: center; align-items: center; }
    .logContent{    width: 505px; height: 435px; background: #FFF; border-radius: 20px; display: flex; flex-direction: column; align-items: center; }
    .logTitle{  width: 100%; height: 92px; border-bottom: 1px solid #BBB; position: relative; display: flex; justify-content: center; align-items: center; }
    .logTitle>span{   font-size: 28px; color: #888; }
    .logTitle>img{    position: absolute; width: 24px; top: 34px; right: 50px; cursor: pointer; }

    .logItem{   width: 80%; }
    .logItem>.item{ border: 1px solid #CCC; width: 100%; height: 46px; border-radius: 23px; margin-top: 30px; display: flex; justify-content: start; align-items: center; }
    .logItem>.item>div{ width: 18px; height: 22px; display: flex; justify-content: center; align-items: center; margin-left: 22px; }
    .logItem>.item>input{   margin-left: 10px; width: calc(100% - 50px); height: 44px; outline: none; border: none; border-radius: 0 23px 23px 0; }
    input::-webkit-input-placeholder{   color:#BBB; }
    input::-moz-input-placeholder{   color:#BBB; }
    input::-ms-input-placeholder{   color:#BBB; }

    .logItem>div:nth-child(3){ width: 100%; height: 60px; border:1px solid #279FDE; border-radius: 30px; display: flex; justify-content: center; align-items: center; margin-top: 30px;}
    .logItem>div:nth-child(3)>span{ background: #279FDE; width: calc(100% - 2px); height: 58px; border-radius: 30px; color: #FFF; line-height: 58px; font-size: 25px; cursor: pointer;}

    .logItem>div:last-child{    margin-top: 20px; display: flex; justify-content: space-between;}
    .logItem>div:last-child>span{   font-size: 15px; color: #AAA; cursor: pointer;}
    .logItem>div:last-child>span:first-child{   color: #E23E3D;}

</style>
