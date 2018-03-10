<template>
  <div>
    <section class="search">
      <div>
        <i class="fa fa-search"></i><input type="text" placeholder="搜索">
      </div>
    </section>
    <section>
      <header class="new-items-wrap">
        <nav>
          <a @click.prevent="getTabMove(1)" :class="{'item-active':(newItemSelected=='new-item1')}">头条</a>
          <a @click.prevent="getTabMove(2)" :class="{'item-active':(newItemSelected=='new-item2')}">娱乐</a>
          <a @click.prevent="getTabMove(3)" :class="{'item-active':(newItemSelected=='new-item3')}">科技</a>
          <a @click.prevent="getTabMove(4)" :class="{'item-active':(newItemSelected=='new-item4')}">美女</a>
          <a @click.prevent="getTabMove(5)" :class="{'item-active':(newItemSelected=='new-item5')}">广州</a>
          <a @click.prevent="getTabMove(6)" :class="{'item-active':(newItemSelected=='new-item6')}">体育</a>
        </nav> 
        <span class="blue-line" ref='bline'></span>
      </header>
      
        <mt-tab-container class="news-list-wrap" v-model="active">
          <mt-tab-container-item id="new-item-con1">
            <div class="scroll-wrap" ref="scroll-wrap0">
              <div>
                <section class="news-list">
                  <h2>标题</h2>
                  <div>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg" class="no-mr">
                  </div>
                  <p><span>新闻来源</span>
                  <span>评数</span>
                  <span>日期</span></p>
                </section>
                <section class="news-list">
                  <h2>标题</h2>
                  <div>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg" class="no-mr">
                  </div>
                  <p><span>新闻来源</span>
                  <span>评数</span>
                  <span>日期</span></p>
                </section>
                <section class="news-list">
                  <h2>标题</h2>
                  <div>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg" class="no-mr">
                  </div>
                  <p><span>新闻来源</span>
                  <span>评数</span>
                  <span>日期</span></p>
                </section>
                <section class="news-list">
                  <h2>标题</h2>
                  <div>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg" class="no-mr">
                  </div>
                  <p><span>新闻来源</span>
                  <span>评数</span>
                  <span>日期</span></p>
                </section>
                <section class="news-list">
                  <h2>标题</h2>
                  <div>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg" class="no-mr">
                  </div>
                  <p><span>新闻来源</span>
                  <span>评数</span>
                  <span>日期</span></p>
                </section>
                <section class="news-list">
                  <h2>标题</h2>
                  <div>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg" class="no-mr">
                  </div>
                  <p><span>新闻来源</span>
                  <span>评数</span>
                  <span>日期</span></p>
                </section>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="new-item-con2">
            <div class="scroll-wrap" ref="scroll-wrap1">
              <div>
                <section class="news-list">
                  <h2>标题</h2>
                  <div>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg" class="no-mr">
                  </div>
                  <p><span>新闻来源</span>
                  <span>评数</span>
                  <span>日期</span></p>
                </section>
                <section class="news-list">
                  <h2>标题</h2>
                  <div>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg" class="no-mr">
                  </div>
                  <p><span>新闻来源</span>
                  <span>评数</span>
                  <span>日期</span></p>
                </section>
                <section class="news-list">
                  <h2>标题</h2>
                  <div>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg" class="no-mr">
                  </div>
                  <p><span>新闻来源</span>
                  <span>评数</span>
                  <span>日期</span></p>
                </section>
                <section class="news-list">
                  <h2>标题</h2>
                  <div>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg" class="no-mr">
                  </div>
                  <p><span>新闻来源</span>
                  <span>评数</span>
                  <span>日期</span></p>
                </section>
                <section class="news-list">
                  <h2>标题</h2>
                  <div>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg" class="no-mr">
                  </div>
                  <p><span>新闻来源</span>
                  <span>评数</span>
                  <span>日期</span></p>
                </section>
                <section class="news-list">
                  <h2>标题</h2>
                  <div>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=534395539,304036971&fm=27&gp=0.jpg" class="no-mr">
                  </div>
                  <p><span>新闻来源</span>
                  <span>评数</span>
                  <span>日期</span></p>
                </section>
              </div>
            </div>
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
  import {MTween,mScroll} from '@/assets/js/m.Tween.js'
  export default {
    name: 'Home',
    data: function() {
      return {
        active: 'new-item-con1',
        newItemSelected: 'new-item1',
        selected: '外卖'
      }
    },
    watch: {
      "active": { //改变滑动选项样式
        handler: function(value) {
          if (value == 'new-item-con1') {
            this.getMove(0)
          } else if (value == 'new-item-con2') {
            this.getMove(1)
          } else if (value == 'new-item-con3') {
            this.getMove(2)
          } else if (value == 'new-item-con4') {
            this.getMove(3)
          } else if (value == 'new-item-con5') {
            this.getMove(4)
          } else {
            this.getMove(5)
          }
        }
      }
    },
    mounted() {
      let that = this;
      mScroll({ //定义滚动条
        el: that.$refs['scroll-wrap0'],
        offBar: true,
        type: 'easeBothStrong'
      })
    },
    methods: {
      getMove(i) {
        let that = this;
        this.tabTween(that, i);
      },
      getTabMove(i) {
        let that = this;
        this.active = 'new-item-con' + i,
          this.tabTween(that, i);
      },
      tabTween(that, i) {
        MTween({
          el: that.$refs.bline,
          target: {
            translateX: i * that.$refs.bline.clientWidth
          },
          type: 'linear',
          time: 300,
          callBack: function() {
            mScroll({//定义滚动条
              el: that.$refs['scroll-wrap' + i],
              offBar: true,
              type: 'easeBothStrong'
            })
            that.newItemSelected = 'new-item' + (i + 1)
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  @import '../assets/css/fun.less';

  .search{
    &{padding: 16/@r 34/@r;z-index: 2;position: relative;background: #fff;}
    div{height: 28/@r;padding: 17/@r 22/@r;background-color: #f2f2f2;border-radius: 31/@r;-webkit-border-radius: 31/@r;}
    i{font-size: 28/@r;float: left;color: #8c8c8c;}
    input{margin-left: 14/@r;font-size: 28/@r;border: none;float: left;background: none;color: #8c8c8c;width: 576/@r;}
  }

  .new-items-wrap{
    &{border-bottom: 1px solid #e4e4e4;position: relative;padding: 0 56/@r;z-index: 2;background: #fff;}
    nav{.flex();}
    nav a{height: 76/@r;line-height: 76/@r;font-size: 28/@r;text-align: center;.grow();}
    a.item-active{color: #26a2ff;}
    .blue-line{position: absolute;display: block;height: 2px;bottom: -1px;background: #26a2ff;width:(750-112)/(6*@r);}
  }

  .news-list-wrap{
    &{padding: 0 34/@r;z-index: 1;}
    .news-list{
      &{padding-bottom: 46/@r;border-bottom: 1px solid #e4e4e4;}
      h2{font-size: 32/@r;line-height: 42/@r;color: #3a3a3a;margin-top: 28/@r;}
      div{.flex();padding: 22/@r 0;}
      div img{.grow();height: 145/@r;margin-right: 11/@r;}
      .no-mr{margin-right: 0;}
      p{font-size: 24/@r;color: #989898;}
      p span{margin-right: 24/@r;}
    }
  }

  .scroll-wrap{height:500px;}

  footer{
    &{z-index: 2;background: #fff;position: absolute;left:0;bottom: 0;right: 0;}
  }

</style>
