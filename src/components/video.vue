<template>
	<div class="wrap" :style="{height:deviceW}">
    <i class="fa fa-github-alt"></i>
    <br> 视频模块<br>未制作
  </div>
</template>
<script>
export default {
  name: "Video",
  data(){
  	return{
  		deviceW:''
  	}
  },
  created() {
    this.$nextTick(() => { //dom渲染完后
      this.deviceW = document.documentElement.clientHeight + 'px';
    })
  }
}

</script>
<style lang='less' scoped>
@import '../assets/css/fun.less';
.wrap {
  .fa-github-alt{margin-top: 150/@r;font-size: 50/@r;}
  font-size: 40/@r;
  text-align: center;
  color: #aaa;
}

</style>