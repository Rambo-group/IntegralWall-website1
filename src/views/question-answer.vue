<template>
  <div>
    <section class="section1">
      <div class="containers">
        <div class="box">
          <div class="title">如何从 Mission Go
            中赚钱</div>
          <div class="txt">有什么问题？</div>
          <div>在这里你都可以找到答案</div>
          <img src="../assets/search.png" alt="">
        </div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
};
</script>
<style lang="less" scoped>
.section1 {
  height: 1080px;
  width: 100%;
  position: relative;
  .fj(center);

  .left {
    width: 36%;
    height: 100%;
    background: url(../assets/bg1.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: 3%;
    left: 0;
  }

  .right {
    width: 64%;
    height: 75%;
    margin-top: 66px;
    background: url(../assets/bg4.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: 3%;
    right: 0;
  }

  .box {
    font-family: PingFang SC;
    padding-top: 49px;

    .title {
      font-size: 60px;
      line-height: 100px;
      font-weight: 800;
      color: #333333;
    }

    .txt {
      font-size: 20px;
      font-weight: bold;
      color: #666666;
      margin: 28px 0 67px;
    }

  }
}
</style>
