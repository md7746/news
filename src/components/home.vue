<template>
  <div>
    <section class="search">
      <div>
        <i class="fa fa-search"></i><input type="text" placeholder="搜索">
      </div>
    </section>
    <section>
      <header class="new-items-wrap">
        <mt-navbar v-model="tabActive">
          <mt-tab-item @click.native.prevent="active='new-item-con1'" id="new-item1" ref="getwidth">头条</mt-tab-item>
          <mt-tab-item @click.native.prevent="active='new-item-con2'" id="new-item2">娱乐</mt-tab-item>
          <mt-tab-item @click.native.prevent="active='new-item-con3'" id="new-item3">科技</mt-tab-item>
          <mt-tab-item @click.native.prevent="active='new-item-con4'" id="new-item4">美女</mt-tab-item>
          <mt-tab-item @click.native.prevent="active='new-item-con5'" id="new-item5">广州</mt-tab-item>
          <mt-tab-item @click.native.prevent="active='new-item-con6'" id="new-item6">体育</mt-tab-item>
        </mt-navbar> 
        <span class="blue-line" ref='bline'></span>
      </header>
      <mt-tab-container v-model="active" swipeable value="new-item-con2">
        <mt-tab-container-item id="new-item-con1">
          1
        </mt-tab-container-item>
        <mt-tab-container-item id="new-item-con2">
          2
        </mt-tab-container-item>
        <mt-tab-container-item id="new-item-con3">
          3
        </mt-tab-container-item>
        <mt-tab-container-item id="new-item-con4">
          4
        </mt-tab-container-item>
        <mt-tab-container-item id="new-item-con5">
          5
        </mt-tab-container-item>
        <mt-tab-container-item id="new-item-con6">
          6
        </mt-tab-container-item>
      </mt-tab-container>
    </section>
    <footer>
      <mt-tabbar v-model="selected">
        <mt-tab-item id="外卖">
          外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </footer>
  </div>
</template>

<script>
  import {css,MTween} from '@/assets/js/m.Tween.js'
  export default {
    name: 'Home',
    data: function() {
      return {
        active: 'new-item-con1',
        newItemSelected: 'new-item1',
        tabActive:'new-item1',
        selected: '外卖'
      }
    },
    watch:{
      "active":{//改变滑动选项样式
        handler:function(value){
          if(value=='new-item-con1'){
            this.getMove(0)
          }else if(value=='new-item-con2'){
            this.getMove(1)
          }else if(value=='new-item-con3'){
            this.getMove(2)
          }else if(value=='new-item-con4'){
            this.getMove(3)
          }else if(value=='new-item-con5'){
            this.getMove(4)
          }else{
            this.getMove(5)
          }
        }
      }
    },
    methods:{
      getMove(i){
        var that = this;
        that.tabActive = "new-item"+(i+1);
        MTween({
          el:that.$refs.bline,
          target:{
            translateX:i*that.$refs.bline.clientWidth
          },
          type:'linear',
          time:300
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import '../assets/css/fun.less';

.search{
  &{padding: 16/@r 34/@r;}
  div{height: 28/@r;padding: 17/@r 22/@r;background-color: #f2f2f2;border-radius: 31/@r;-webkit-border-radius: 31/@r;}
  i{font-size: 28/@r;float: left;color: #8c8c8c;}
  input{margin-left: 14/@r;font-size: 28/@r;border: none;float: left;background: none;color: #8c8c8c;width: 576/@r;}
}

.new-items-wrap{
  &{border-bottom: 1px solid #e4e4e4;position: relative;padding: 0 56/@r;}
  nav a{height: 76/@r;line-height: 76/@r;font-size: 28/@r;text-align: center;}
  .blue-line{position: absolute;display: block;height: 2px;bottom: -1px;background: #26a2ff;width:(750-112)/(6*@r);}

  .mint-navbar{}
  .mint-navbar .mint-tab-item.is-selected{border: none;}
  .mint-navbar .mint-tab-item{padding: 22/@r 0;}
}

</style>
