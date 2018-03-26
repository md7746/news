<template>
  <div class="user">
    <header>
      <h1>我的</h1>
    </header>
    <nav>
      <router-link :to="{path:''}" tag="a" class="head-photo">
      <i class="fa fa-user-circle-o"></i>
        用户名
        <i class="fa fa-bell fr"></i>
      </router-link>
      <a class="gap nb"></a>
      <router-link :to="{path:''}" tag="a">
        <i class="fa fa-star"></i>
        收藏
        <i class="fa fa-angle-right fr"></i>
      </router-link>
      <router-link :to="{path:''}" tag="a">
        <i class="fa fa-commenting-o"></i>
        评论
        <i class="fa fa-angle-right fr"></i>
      </router-link>
      <router-link :to="{path:''}" tag="a" class="nb">
        <i class="fa fa-clock-o"></i>
        历史
        <i class="fa fa-angle-right fr"></i>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'User',
  methods:{
    backHandle(){
      this.$router.back()
    }
  }
}
</script>

<style lang='less' scoped>
@import '../assets/css/fun.less';
.user{
  &{color: #000;}
  header{
    &{padding: 28/@r 18/@r;border-bottom: 3px solid #e6e6e6;overflow: hidden;color: #5f5f5f;}
    h1{float: left;font-size: 32/@r;font-weight: normal;margin-left: 46/@r;}
  }
  nav{
    &{padding: 0 36/@r;;}
    a{font-size: 32/@r;line-height: 132/@r;display: block;padding: 0 20/@r;border-bottom: 1px solid #e6e6e6;color: #000
    }
    a.head-photo{
      &{line-height: 146/@r;}
      .fa-user-circle-o{margin-top: 25/@r;margin-right: 34/@r;float: left;}
    }
    a.nb{border-bottom: none;}
    i{font-size: 44/@r;}
    i.fa-angle-right{font-size: 30/@r;margin-top: 51/@r;color: #39c375;}
    i.fa-user-circle-o{font-size: 96/@r;color: #5c5c5c;}
    i.fa-bell{margin-top: 49/@r;color: #5c5c5c;}
    i.fa-star{color: #ffb307;}
    i.fa-commenting-o{color: #007cd3;}
    i.fa-clock-o{color: #2ebc5c;}
  }
}
</style>