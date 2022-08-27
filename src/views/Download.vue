<template>
  <div class="download">
    <section class="section1">
      <div class="containers">
        <div class="box">
          <div class="title">{{ $t('module6_tit1') }}</div>
          <div class="title">{{ $t('module6_tit2') }}</div>
          <div class="txt">{{ $t('txt8') }}</div>
          <div class="btn">{{ $t('download') }}</div>
        </div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </section>
    <section class="section2">
      <div class="containers">
        <div class="title">{{ $t('txt9') }}</div>
        <div class="box">
          <div>
            <img src="../assets/google_store.png" alt="">
            <div class="tit">{{ $t('google') }}</div>
            <div class="txt">{{ $t('txt10') }}</div>
            <div class="btn btn1">{{ $t('download') }}</div>
          </div>
          <div>
            <img src="../assets/apkpure.png" alt="">
            <div class="tit">{{ $t('apkpure') }}</div>
            <div class="btn btn2">{{ $t('download') }}</div>
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
    width: 50%;
    height: 75%;
    background: url(../assets/bg3.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  .box {
    font-family: PingFang SC;
    padding-top: 4%;
    z-index: 99;
    width: 45%;
    position: relative;

    .title {
      font-size: 60px;
      line-height: 90px;
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

      .btn1 {
        margin-top: 68px;
      }

      .btn2 {
        margin-top: 124px;
      }
    }
  }
}

.btn {
  height: 88px;
  line-height: 88px;
  padding: 0 90px;
  background: #5F16D9;
  border-radius: 22px;
  font-weight: bold;
  color: #FFFFFF;
  font-size: 40px;
}

@media screen and (max-width: 1599px) {
  .title {
    font-size: 50px !important;
    line-height: 80px !important;
  }

  .btn {
    height: 76px !important;
    line-height: 76px !important;
    font-size: 30px !important;
    padding: 0 70px !important;
  }

  .section2 {
    margin-bottom: 0 !important;
    .title{
      margin-top: 50px !important;
    }
    .box{
      >div{
        img{
          width: 280px !important;
          height: 280px !important;
        }
        .tit{
          font-size: 28px !important;
          margin-top: 14px !important;
        }
        .txt{
          font-size: 16px !important;
        }
      }
    }
  }
}
</style>
