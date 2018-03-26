<template>
  <div class="wrap" :style="{height:deviceW}">
    <header><i class="fa fa-chevron-left" @click="backHandle"></i><span><i class="fa fa-search"></i>
        <input type="text" placeholder="搜索新闻资讯" v-focus autofocus="true"></span>搜索</header>
    <section class="hot-search">
      <h2><span>换一换</span>热门搜索</h2>
      <div>
        <span class="blueness">热门搜索AAA</span><span class="blue">热门搜索BBB</span>
        <span class="green">热门搜索CCC</span><span class="yellow">热门搜索DDD</span>
        <span class="orange">热门搜索EEE</span><span class="red">热门搜索FFF</span>
      </div>
    </section>
  </div>
</template>



<script>
export default {
  name: 'Search',
  data() {
    return {	
 		deviceW:''
    }
  },
  created(){
  	this.$nextTick(() => { //dom渲染完后
  		this.deviceW = document.documentElement.clientHeight+'px';
    })
  },
  mounted(){
  	
  },
  methods:{
  	backHandle(){
      this.$router.back()
    }
  }
}

</script>
<style lang='less' scoped>
	@import '../assets/css/fun.less';
	.wrap{color: #828282;background: #fff;z-index: 3;position: relative;width: 100%;height: 100%;}
	header{
		&{font-size: 28/@r;line-height: 64/@r;padding: 12/@r 48/@r;;border-bottom: #e3e3e3 1px solid;}
		.fa-chevron-left{font-size: 36/@r;float: left;margin-top: 14/@r;}
		span{
			&{width: 490/@r;margin: 0 40/@r;display: block;float: left;background: #f2f2f2;.bdr(32/@r);}
			.fa-search{font-size: 28/@r;margin: 0 14/@r 0 22/@r;color: #000;}
			input{font-size: 28/@r;border: none;background: #f2f2f2;width: 396/@r;}
		}
	}
	.hot-search{
		&{padding: 34/@r;font-size: 24/@r;}
		h2{line-height: 40/@r;padding: 0 16/@r;font-size: 24/@r;font-weight: normal;}
		h2 span{float: right;color: #0e6bef;}
		div span{display: block;float: left;padding: 12/@r 34/@r;font-size: 24/@r;margin: 14/@r 0;margin-right: 25/@r;color: #fff;.bdr(24/@r);}
		.blueness{background: #828282;}
		.blue{background: #188dec;}
		.green{background: #36b34d;}
		.yellow{background: #fdba2d;}
		.orange{background: #ff5d24;}
		.red{background: #ec1211;}
	}
</style>
