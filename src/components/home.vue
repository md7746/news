<template>
  <div>
    <section class="search">
      <router-link to="/search" tag="div">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="搜索">
      </router-link>
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
      <mt-tab-container class="news-list-wrap" v-model="active" swipeable>
        <mt-tab-container-item id="new-item-con1">
            <happy-scroll resize :style="{ height: listWrapHeight + 'px' }">
              <div class="scroll-wrap" ref="listWrap">
                <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :topDistance=tdis :bottomDistance=bdis ref="loadmore">
                  <section class="news-list" v-for='newsItem in news'>
                    <h2>{{newsItem.title}}</h2>
                    <div>
                      <span v-for='(imgItem,index) in newsItem.picInfo' :class="{'no-mr':index==2}">
                        <img :src='imgItem.url'>
                      </span>
                    </div>
                    <p><span>{{newsItem.source}}</span>
                      <span>{{newsItem.tcount}}</span>
                      <span>{{newsItem.ptime}}</span></p>
                  </section>
                  <div slot="top" class="mint-loadmore-top" v-show="tstatu" :class="{'is-top':!this.tstatu}">
                    <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
                    <span v-show="topStatus === 'loading'">
                      <mt-spinner type="snake"></mt-spinner>
                    </span>
                  </div>
                  <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                    <span v-show="bottomStatus === 'loading'">
                      <mt-spinner type="snake"></mt-spinner>
                    </span>
                  </div>
                </mt-loadmore>
              </div>
            </happy-scroll>
        </mt-tab-container-item>
        <mt-tab-container-item id="new-item-con2">
          <div class="no-data" :style="{ height: listWrapHeight + 'px' }">
            暂无数据！
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="new-item-con3">
          <div class="no-data" :style="{ height: listWrapHeight + 'px' }">
            暂无数据！！
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="new-item-con4">
          <div class="no-data" :style="{ height: listWrapHeight + 'px' }">
            暂无数据！！！
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="new-item-con5">
          <div class="no-data" :style="{ height: listWrapHeight + 'px' }">
            暂无数据！！！！
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="new-item-con6">
          <div class="no-data" :style="{ height: listWrapHeight + 'px' }">
            暂无数据！！！！！
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </section>
    <div class="footer" ref="footer">
    </div>
  </div>
</template>
<script>
import { MTween, css } from '@/assets/js/m.Tween.js'
import { http } from '@/axios'
export default {
  name: 'Home',
  data() {
    return {
      listWrapHeight: 0,
      //tab
      active: 'new-item-con1',
      newItemSelected: 'new-item1',
      //load more
      news: [],
      allLoaded: false,
      bottomStatus: '',
      topStatus: '',
      tstatu: true,
      tdis: 50,
      bdis: 50,
      //for the mock data
      ti: 2,
      tj: 10,
      bi: 5,
      bj: 40
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
  created() {
    this.$nextTick(() => { //dom渲染完后

    })
  },
  mounted() {
    this.listWrapHeight = this.$refs.footer.getBoundingClientRect().top - this.$refs.listWrap.getBoundingClientRect().top;
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
          that.newItemSelected = 'new-item' + (i + 1)
        }
      })
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },

    loadBottom() {
      let that = this;
      if (that.bi < 9) {
        that.bi++;
        that.bj += 10;
        http.get(that.bi + "-0-10-" + that.bj + ".do").then((response) => {
          if (response.data.code === 200) {
            that.news = that.news.concat(response.data.list);
            that.$refs.loadmore.onBottomLoaded();
          }
        }).catch((error) => {
          console.log(error);
        });
      } else {
        this.allLoaded = true;
        this.$refs.loadmore.onBottomLoaded();
      }
    },

    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      let that = this;
      if (that.ti < 5) {
        that.ti++;
        that.tj += 10;
        http.get(that.ti + "-0-10-" + that.tj + ".do").then((response) => {
          if (response.data.code === 200) {
            that.news = response.data.list.concat(that.news);
            that.$refs.loadmore.onTopLoaded();
          }
        }).catch((error) => {
          console.log(error);
        });
      } else {
        that.tstatu = false;
        MTween({
          el: that.$refs.listWrap.querySelector(".mint-loadmore-content"),
          target: {
            translateY: 0
          },
          type: 'linear',
          time: 300
        })
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import '../assets/css/fun.less';
.search {
  & {
    padding: 16/@r 34/@r;
    z-index: 2;
    position: relative;
    background: #fff;
  }
  div {
    height: 28/@r;
    padding: 17/@r 22/@r;
    background-color: #f2f2f2;
    border-radius: 31/@r;
    -webkit-border-radius: 31/@r;
  }
  i {
    font-size: 28/@r;
    float: left;
    color: #8c8c8c;
  }
  input {
    margin-left: 14/@r;
    font-size: 28/@r;
    border: none;
    float: left;
    background: none;
    color: #8c8c8c;
    width: 576/@r;
  }
}

.new-items-wrap {
  & {
    border-bottom: 1px solid #e4e4e4;
    position: relative;
    padding: 0 56/@r;
    z-index: 2;
    background: #fff;
  }
  nav {
    .flex();
  }
  nav a {
    height: 76/@r;
    line-height: 76/@r;
    font-size: 28/@r;
    text-align: center;
    .grow();
  }
  a.item-active {
    color: #26a2ff;
  }
  .blue-line {
    position: absolute;
    display: block;
    height: 2px;
    bottom: -1px;
    background: #26a2ff;
    width: (750-112)/(6*@r);
  }
}

.news-list-wrap {
  & {
    z-index: 1;
    height:100%;
  }
  .news-list {
    & {
      padding-bottom: 46/@r;
      border-bottom: 1px solid #e4e4e4;
    }
    h2 {
      font-size: 32/@r;
      line-height: 42/@r;
      color: #3a3a3a;
      margin-top: 28/@r;
    }
    div {
      .flex();
      padding: 22/@r 0;
    }
    div span {
      .grow();
      height: 145/@r;
      margin-right: 11/@r;
      display: block;
    }
    div span img {
      height: 100%;
      width: 221/@r;
    }
    .no-mr {
      margin-right: 0;
    }
    p {
      font-size: 24/@r;
      color: #989898;
    }
    p span {
      margin-right: 24/@r;
    }
  }
}

.scroll-wrap {
  height: 100%;
  padding: 0 34/@r;
}

.footer {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 60/@r;width: 100%;
} 

//上下拉加载
.loading-background,
.mint-loadmore-top span {
  -webkit-transition: .2s linear;
  transition: .2s linear
}

.mint-loadmore-top span {
  display: inline-block;
  vertical-align: middle
}

.mint-loadmore-top span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg)
}

.page-loadmore .mint-spinner {
  display: inline-block;
  vertical-align: middle
}

.page-loadmore-desc {
  text-align: center;
  color: #666;
  padding-bottom: 5px
}

.page-loadmore-desc:last-of-type,
.page-loadmore-listitem {
  border-bottom: 1px solid #eee
}

.mint-loadmore-bottom span {
  display: inline-block;
  -webkit-transition: .2s linear;
  transition: .2s linear;
  vertical-align: middle
}

.mint-loadmore-bottom span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg)
}

.is-top {
  transform: translate3d(0px, 0px, 0px);
  -webkit-transform: translate3d(0px, 0px, 0px);
}
</style>
