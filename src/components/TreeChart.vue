<template>
  <div class="chart">
    <h3 class="title">全国</h3>
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(slide, index) in quanguoTrendChart" :key="index">
        <img :src="slide.imgUrl" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ul class="navigator">
      <li
        @click="changePage(index)"
        :class="{ active: index === currentIndex }"
        class="navigatorItem"
        v-for="(item, index) in quanguoTrendChart"
        :key="index"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    const vm = this;
    return {
      currentIndex: 0,
      swiperOption: {
        on: {
          slideChangeTransitionEnd() {
            vm.currentIndex = this.activeIndex;
          },
        },
      },
      quanguoTrendChart: [
        {
          imgUrl:
            "https://first-1303075678.cos.ap-beijing.myqcloud.com/img/%E7%8E%B0%E6%9C%89.png",
          title: "全国现有确诊趋势",
        },
        {
          imgUrl:
            "https://first-1303075678.cos.ap-beijing.myqcloud.com/img/%E6%96%B0%E5%A2%9E.png",
          title: "全国疫情新增趋势",
        },
        {
          imgUrl:
            "https://first-1303075678.cos.ap-beijing.myqcloud.com/img/%E7%B4%AF%E8%AE%A1.png",
          title: "全国疫情累计趋势",
        },
        {
          imgUrl:
            "https://first-1303075678.cos.ap-beijing.myqcloud.com/img/8VVPN%60Q6D0%7BKRC%5DN%60BNLCUH.png",
          title: "治愈率/病死率",
        },
      ],
    };
  },
  methods: {
    changePage(index) {
      this.currentIndex = index; // 点击高亮
      this.$refs.mySwiper.swiper.slideTo(index, 500, false); // 轮播图切换
    },
  },
};
</script>

<style scoped>
.line {
  width: 100%;
  height: 300px;
}
.chart {
  position: relative;
  background: #fff;
  padding: 0.16rem 0;
}
.chart .title {
  font-size: 0.16rem;
  margin: 0 0 0.08rem 0.16rem;
}
.chart .swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: 300ms opacity;
  -o-transition: 300ms opacity;
  transition: 300ms opacity;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.chart .swiper-pagination-bullet {
  width: calc(20% - 0.02rem);
  text-align: center;
  background: #f7f7f7;
  padding: 0.045rem;
  box-sizing: border-box;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.02rem;
}
.navigator {
  font-size: 0.12rem;
  list-style: none;
  display: flex;
  padding: 0 0.16rem;
  justify-content: center;
  margin: 0.06rem 0 0;
}
.navigatorItem {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
  width: calc(20% - 0.02rem);
  text-align: center;
  background: #f7f7f7;
  padding: 0.045rem;
  box-sizing: border-box;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.02rem;
  margin-left: 0.025rem;
}
.active {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
}
</style>
