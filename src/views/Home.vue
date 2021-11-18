<template>
  <div class="home">
    <Header />
    <Info :infoData="infoData" />
    <CaseNum :caseNumData="caseNumData"/>
    <Map />
		<TreeChart />
    <News :newsData="newsData" />
    <Footer />
  </div>
</template>

<script>

import Header from "../components/Header";
import Info from "../components/Info";
import Map from "../components/Map.vue"
import News from "../components/News";
import Footer from  "../components/Footer";
import TreeChart from "../components/TreeChart";
import CaseNum from "../components/CaseNum"

export default {
  name: "Home",
  data() {
    return {
      infoData: {},
      newsData:[]
    };
  },
  created() {
    this.$api
      .getDataInfo({
        key: "0b2292c01bf100466bc2336564f17674",
      })
      .then((res) => {
        //console.log(res);
        this.newsData = res.newslist[0].news
        this.infoData = {
          note1: res.newslist[0].desc.note1,
          note2: res.newslist[0].desc.note2,
          note3: res.newslist[0].desc.note3,
          remark1: res.newslist[0].desc.remark1,
          remark2: res.newslist[0].desc.remark2,
          remark3: res.newslist[0].desc.remark3,
        };
        this.caseNumData = {
        modifyTime:res.newslist[0].desc.modifyTime,
        currentConfirmedCount:res.newslist[0].desc.currentConfirmedCount,
        suspectedCount:res.newslist[0].desc.suspectedCount,
        seriousCount:res.newslist[0].desc.seriousCount,
        confirmedCount:res.newslist[0].desc.confirmedCount,
        deadCount:res.newslist[0].desc.deadCount,
        curedCount:res.newslist[0].desc.curedCount,
        currentConfirmedIncr:res.newslist[0].desc.currentConfirmedIncr,
        suspectedIncr:res.newslist[0].desc.suspectedIncr,
        seriousIncr:res.newslist[0].desc.seriousIncr,
        confirmedIncr:res.newslist[0].desc.confirmedIncr,
        deadIncr:res.newslist[0].desc.deadIncr,
        curedIncr:res.newslist[0].desc.curedIncr
      }
      });
  },
  components: {
    Header,
    Info,
    CaseNum,
    Map,
    News,
		Footer,
		TreeChart
  },
};
</script>
