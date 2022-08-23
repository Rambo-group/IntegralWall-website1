<template>
  <div class="download">
    <section class="section1">
      <div class="containers">
        <div class="box">
          <div class="title">一款能赚钱的apk</div>
          <div class="title">在手机上轻松赚钱</div>
          <div class="txt">下载2022年最好的赚钱应用程序</div>
          <div class="btn">下载</div>
        </div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </section>
    <section class="section2">
      <div class="containers">
        <div class="title">Mission Go还可以这样下载</div>
        <div class="box">
          <div>
            <img src="../assets/google_store.png" alt="">
            <div class="tit">谷歌商店</div>
            <div class="txt">在 Google Play 应用商店搜索“ Mission Go </div>
            <div class="btn btn1">下载</div>
          </div>
          <div>
            <img src="../assets/apkpure.png" alt="">
            <div class="tit">Apkpure应用商店</div>
            <div class="btn btn2">下载</div>
          </div>
        </div>
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
  margin-top: 67px;
  .fj(center);

  .left {
    width: 36%;
    height: 100%;
    margin-right: 2%;
    background: url(../assets/bg1.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: 3%;
    left: 0;
  }

  .right {
    width: 62%;
    height: 75%;
    margin-top: 66px;
    background: url(../assets/bg3.png) no-repeat;
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

.section2 {
  height: 1080px;
  font-family: PingFang SC;
  margin-bottom: 88px;

  .title {
    font-size: 60px;
    font-weight: 800;
    color: #333333;
    text-align: center;
    margin-top: 150px;
  }

  .box {
    padding-top: 154px;
    .flex(space-between, flex-start);

    >div {
      .fa(center);
      flex-direction: column;
      img {
        width: 340px;
        height: 340px;
      }

      .tit {
        font-size: 36px;
        font-weight: bold;
        margin-top: 20px;
        text-align: center;
        color: #333333;
      }

      .txt {
        font-size: 20px;
        font-weight: bold;
        margin-top: 26px;
        color: #999999;
      }
      .btn1{
        margin-top: 68px;
      }
      .btn2{
        margin-top: 124px;
      }
    }
  }
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
</style>
