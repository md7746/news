<template>
  <div class="page-loadmore">
    <p>-------------------</p>
    <div style="height:300px">
      <happy-scroll resize>
        <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <ul class="page-loadmore-list">
            <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
          </ul>
          <div slot="top" class="mint-loadmore-top">
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
      </happy-scroll>
    </div>
    <p>-------------------</p>
  </div>
</template>
<style>
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

.page-loadmore-listitem {
  height: 50px;
  line-height: 50px;
  text-align: center
}

.page-loadmore-listitem:first-child {
  border-top: 1px solid #eee
}

.page-loadmore-wrapper {}

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

</style>
<script type="text/babel">
import { MTween } from '@/assets/js/m.Tween.js'
export default {
  data() {
    return {

      list: [],
      allLoaded: false,

      bottomStatus: '',
      wrapperHeight: 0,

      topStatus: ''
    };
  },

  methods: {
    handleBottomChange(status) {
      console.log(status)
      this.bottomStatus = status;
    },

    loadBottom() {
      setTimeout(() => {
        let lastValue = this.list[this.list.length - 1];
        if (lastValue < 20) {
          for (let i = 1; i <= 3; i++) {
            this.list.push(lastValue + i);
          }
        } else {
          this.allLoaded = true;
        }
        this.$refs.loadmore.onBottomLoaded();
      }, 1500);
    },

    handleTopChange(status) {

      this.topStatus = status;
    },
    loadTop() {
      setTimeout(() => {
        let firstValue = this.list[0];
        for (let i = 1; i <= 3; i++) {
          this.list.unshift(firstValue - i);
        }
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    },

  },

  created() {
    for (let i = 1; i <= 8; i++) {
      this.list.push(i);
    }
  },

  mounted() {

  }
};

</script>
