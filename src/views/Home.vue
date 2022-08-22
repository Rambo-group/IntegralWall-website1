<template>
  <div class="home">
    <section class="section1">
      <div class="left">
        <div class="left-nav">
          <div><img src="../assets/logo.png" alt=""></div>
          <div class="title">
            Mission Go
            <div>让你在手机上轻松赚钱</div>
          </div>
          <div class="btn">下载</div>
        </div>
      </div>
      <div class="right"></div>
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
  height: 940px;
  .fj(center);

  >div {
    flex: 1;
  }

  .left {
    padding-top: 42px;
    background: url('../assets/bg1.png') no-repeat;
    background-size: 60% 105%;

    &-nav {
      font-family: PingFang SC;
      padding: 167px 0 0 360px;

      img {
        width: 100px;
        height: 100px;
      }

      .title {
        font-size: 60px;
        font-weight: 800;
        color: #333333;
        margin: 56px 0 72px;
      }

      .btn {
        height: 88px;
        line-height: 88px;
        padding: 0 105px;
        background: #5F16D9;
        border-radius: 22px;
        font-weight: bold;
        color: #FFFFFF;
        font-size: 40px;
      }
    }
  }
}
</style>
