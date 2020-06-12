<template>
  <div class="home">
    <navHead></navHead>
    <div class="content">
      <div class="navLeft"><navLeft @goLink="goLink"></navLeft></div>
      <div class="homeOpt">
        <preGet     v-if="goto == 0"></preGet>
        <lineQuery  v-if="goto == 1"></lineQuery>
        <preQuery   v-if="goto == 2"></preQuery>
        <preWrite   v-if="goto == 3"></preWrite>
      </div>
    </div>
    <navFoot></navFoot>

    <login      v-if="isLogin"  @passVal="passVal"></login>
    <logReg     v-if="isReg"    @tolog="tolog"></logReg>
    <logClose   v-if="isClose"  @tolog="tolog"></logClose>

    <preFail    v-if="isFail"></preFail>
    <preResult  v-if="isSuccess"></preResult>

  </div>
</template>

<script>

import navHead from '../components/comm/navHead';
import navLeft from '../components/comm/navLeft';
import navFoot from '../components/comm/navFoot';

import preGet from './preGet';
import lineQuery from './lineQuery';
import preQuery from './preQuery';
import preWrite from './preWrite';

import login from '../components/user/login';
import logReg from '../components/user/logReg';
import logClose from '../components/user/logClose';

import preFail from '../components/pre/preFail';
import preResult from '../components/pre/preResult';

export default {
  name: 'Home',
  components: { navHead, navLeft, navFoot, preGet, lineQuery, preQuery, preWrite, login, logReg, logClose, preFail, preResult },
  data(){
    return {
      goto: 0,
      isLogin: false,    // 默认登录
      isClose: false,
      isReg: false,
      isFail: false,    // 预约失败
      isSuccess: false, // 预约成功
    }
  },
  methods: {
    goLink( val){ // 切换页面
      this.goto = val;
    },
    passVal( val){    // 忘记密码 / 注册
      this.isLogin = false;
      ( val == "reg")?(this.isReg = true):(this.isClose = true)
    },
    tolog( val){
      ( val == "close")?( this.isClose = false):( this.isReg = false)
      this.isLogin = true;
    },
  }
}
</script>
<style scoped>
  .home{  width: 100%;}
  .content{ display: flex;}
  .navLeft{ margin-left: 360px; margin-right: 40px; margin-top: 40px;}
  .homeOpt{ width: 880px; min-height: 800px; margin-top: 40px;}

  input::-webkit-input-placeholder {color: #ccc;}
  input::placeholder { color: #DDD;}
</style>
