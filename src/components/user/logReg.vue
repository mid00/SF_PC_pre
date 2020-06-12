<template>
    <div class="container">
        <div class="login">
<!-- 背景 -->
            <div class="logTitle"> <span>注册</span><img @click="toClose" src="../../assets/close.png"> </div>
<!-- 手机号码 -->
            <logItem
                class="item"
                type="tel"
                placeholder="账号"

                :btnTitle="btnTitle"
                :disabled="disabled"
                :error="error.account"

                v-model="account"
                @btnClick="getVerifyCode"
            ></logItem>
<!-- 验证码 -->
            <logItem
                class="item"
                type="text"
                placeholder="验证码"

                :error="error.code"
                v-model="verifyCode"
            ></logItem>
<!-- 密码 -->
            <logItem
                class="item"
                type="password"
                placeholder="设置密码"

                :error="error.pwd"
                v-model="pwd"
            ></logItem>

<!-- 点击登录 -->
            <div class="btn">
                <button @click="handleLogin" :disabled="isClick">注册</button>
            </div>
        </div>
    </div>
</template>
<script>
import logItem from "./logItem"
import getInfo from "../../getInfo"
export default {
    components: { logItem},
    data(){
        return {

            // arr: [], // 接收 路由 传参
            btnTitle: "获取验证码",  // 按钮
            disabled: false,        // 按钮是否禁用
            error: {},              // 验证提示信息
            account: "",            // 手机号
            verifyCode: "",         // 验证码
            pwd: "",                // 密码
            isAccount: false,
            isVerifyCode: false,
            isPwd: false,
        }
    },
    methods: {

// 关闭
        toClose(){
            this.$notify({ title: '消息', message: '退出登录', type: 'warning' });
            this.$emit("tolog", "reg");
        },

// 验证手机号码
        isPhone(){
            let reg = /^1[3-9]\d{9}$/.test(this.account);
            if( !this.account ){
                this.error = {
                    account: "账号不能为空"
                }
            }else if( !reg ){
                this.error = {
                    account: "账号格式错误"
                }
            }else{
                this.error = {};
                return true;
            }
        },

// 发送验证码 倒计时
        validateBtn(){

            // 倒计时
            let time = 60;
            let timer = setInterval( ()=>{

                if(time == 0){
                    clearInterval( timer);
                    this.disabled = false;
                    this.btnTitle = "获取验证码";
                }else{
                    this.btnTitle = time + "秒后重试";
                    this.disabled = true;
                    time--;
                }
            }, 1000);
        },

// 发送验证码
        getVerifyCode(){
            if( this.isAccount){
                this.validateBtn();
                var url = "";
                var obj = {
                    action: "1000",
                    account: this.account,
                    verifyCode: this.verifyCode,
                    pwd: this.pwd
                };
                getInfo( url, obj).then( res => {
                    console.log(res);
                })
                .catch( err => {
                    console.log(err)
                });
            }
            else{ this.$notify({ type: 'warning', title: '消息', message: '密码输入有误' }); }
        },

// 登录
        handleLogin(){

            this.$router.push("/");
            this.error = {};
            var url = "";
            var obj = {
                        // action: this.arr[0],
                        action: "1001",
                        account: this.account,
                        code: this.verifyCode
                      };
            getInfo( url, obj).then( res => {
                console.log(res);
                if( res.status == 200){
                    if( res.data.code == 200){

                        sessionStorage.setItem("login", true);
                        this.$router.push("/");
                    }
                }
            }).catch( err => {
                console.log( err)
                this.error = {
                    code: err.response.data.msg
                }
            })
        }
    },
    watch: {
        account(){
            var reg = /^1[3-9]\d{9}$/;
            this.isAccount = reg.test( this.account);
        },
    },
// 计算属性
    computed: {

// 验证账号、密码是否为空，给 disabled 赋值
        isClick(){
            if( !this.account || !this.verifyCode){

                // alert("账号和验证码不能为空");
                return true;
            }else{
                alert("请完善信息")
                return false;
            }
        }
    }

}
</script>
<style scoped>
    .container{ position: fixed; left: 0; top: 0; right: 0; bottom: 0; background: rgba(50, 50, 50, 0.5); display: flex; justify-content: center; align-items: center; }

    .login{ width: 505px; height: 435px; background: #FFF; border-radius: 20px; display: flex; flex-direction: column; align-items: center; }

    .logTitle{  width: 100%; height: 92px; border-bottom: 1px solid #BBB; position: relative; display: flex; justify-content: center; align-items: center; }
    .logTitle>span{   font-size: 28px; color: #888; }
    .logTitle>img{    position: absolute; width: 24px; top: 34px; right: 50px; cursor: pointer; }

/* 账号/验证码 */
    .item{
        width: 410px; height: 46px;
    }


/* 按钮 */
    .btn{
        width: 410px; height: 56px;
        border: 1px solid #279FDE; border-radius: 5px; background: #279FDE;
        margin-top: 40px;
    }
    .btn>button{
        width: 100%; height: 100%;
        border: none; background: none;
        color: rgb(255, 255, 255); font-size: 32px;
    }
</style>
