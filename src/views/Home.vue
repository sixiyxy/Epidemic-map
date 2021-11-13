<template>
  <div class="home">
    <Header />
    <Info :infoData="infoData" />
  </div>
</template>

<script>
import Header from "../components/Header";
import Info from "../components/Info";

export default {
  name: "Home",
  data() {
    return {
      infoData: {},
    };
  },
  created() {
    this.$api
      .getDataInfo({
        key: "0b2292c01bf100466bc2336564f17674",
      })
      .then((res) => {
        console.log(res);
        this.infoData = {
          note1: res.newslist[0].desc.note1,
          note2: res.newslist[0].desc.note2,
          note3: res.newslist[0].desc.note3,
          remark1: res.newslist[0].desc.remark1,
          remark2: res.newslist[0].desc.remark2,
          remark3: res.newslist[0].desc.remark3,
        };
      });
  },
  components: {
    Header,
    Info,
  },
};
</script>
