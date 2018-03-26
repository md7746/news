<template>
  <div id="app" :style="{height:deviceW}">
    <router-view></router-view>
    <footer ref="footer">
      <router-link to="/" tag="span"><i class="fa fa-home"></i>
        <br>首页</router-link>
      <router-link to="/video" tag="span"><i class="fa fa-file-movie-o"></i>
        <br>视频</router-link>
      <router-link to="/attention" tag="span"><i class="fa fa-plus-square-o"></i>
        <br>关注</router-link>
      <router-link to="/user" tag="span"><i class="fa fa-user-circle-o"></i>
        <br>我的</router-link>
    </footer>
  </div>
</template>


<script>
import {fontSize} from '@/assets/js/common.js'

export default {
  name: 'App',
  data(){
  	return{
  		deviceW:''
  	}
  },
  created(){
    fontSize(15);
    this.$nextTick(() => { //dom渲染完后
      this.deviceW = document.documentElement.clientHeight + 'px';
    })
  }

}
</script>

<style lang='less' scoped>
@import './assets/css/fun.less';
footer {
  & {
    z-index: 2;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    .flex();
    padding: 14/@r 0;
    border-top: 1px solid #e4e4e4;
  }
  span {
    .grow();
    text-align: center;
    font-size: 20/@r;
  }
  span i {
    font-size: 40/@r;
    margin-bottom: 12/@r;
  }
} 
</style>
