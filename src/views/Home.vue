<template>
  <div class="home">
    <section class="section1" id="section1">
        <div class="box">
          <div><img src="../assets/logo.png" alt=""></div>
          <div class="title">
            <div>Mission Go</div>
            <div>{{ $t('title') }}</div>
          </div>
          <div class="btn">{{ $t('download') }}</div>
        </div>
        <div class="accessories"></div>
        <div class="left">
        </div>
        <div class="right"></div>
    </section>
    <section class="section2" id="section2">
      <div class="title">{{ $t('module1_tit') }}</div>
      <div class="content">
        <div class="left" id="section2_left"></div>
        <div class="right" id="section2_right">
          <div class="text">{{ $t('txt1') }}</div>
          <div class="about">
            <div class="txt">{{ $t('txt2') }}</div>
            <div class="tit">{{ $t('txt3') }}</div>
            <div class="txt">{{ $t('txt4') }}</div>
            <div class="txt">{{ $t('txt5') }}</div>
            <div class="txt">{{ $t('txt6') }}</div>
            <div class="txt">{{ $t('txt7') }}</div>
            <div class="btn">{{ $t('download') }}</div>
          </div>
          <div class="p1"><img src="../assets/gold.png" alt=""></div>
          <div class="p2"><img src="../assets/gold.png" alt=""></div>
          <div class="p3"></div>
          <div class="p4"></div>
        </div>
      </div>
    </section>
    <section class="section3" id="section3">
      <div class="left" id="section3_left">
        <div class="box">
          <div><img src="../assets/logo.png" alt=""></div>
          <div class="title">{{ $t('module2') }}</div>
          <div class="btn">{{ $t('download') }}</div>
        </div>
        <div class="p1"><img src="../assets/gold.png" alt=""></div>
        <div class="accessories"></div>
      </div>
      <div class="right" id="section3_right"></div>
    </section>
    <section class="section4" id="section4">
      <div class="content">
        <div class="left" id="section4_left"></div>
        <div class="right" id="section4_right">
          <div class="right-nav">
            <div><img src="../assets/logo.png" alt=""></div>
            <div class="title">
              <div>{{ $t('module3') }}</div>
            </div>
            <div class="btn">{{ $t('download') }}</div>
          </div>
          <div class="p1"><img src="../assets/gold.png" alt=""></div>
          <div class="p2"><img src="../assets/gold.png" alt=""></div>
          <div class="p3"><img src="../assets/side.png" alt=""></div>
          <div class="p4"></div>
        </div>
      </div>
    </section>
    <section class="section5" id="section5">
      <div class="left" id="section5_left">
        <div class="left-nav">
          <div><img src="../assets/logo.png" alt=""></div>
          <div class="title">{{ $t('module4') }}</div>
          <div class="btn">{{ $t('download') }}</div>
        </div>
        <div class="accessories"></div>
        <div class="p1"><img src="../assets/gold.png" alt=""></div>
      </div>
      <div class="right" id="section5_right"></div>
    </section>
    <section class="section6" id="section6">
      <div class="left" id="section6_left"></div>
      <div class="right" id="section6_right">
        <div class="right-nav">
          <div><img src="../assets/logo.png" alt=""></div>
          <div class="title">
            <div>{{ $t('module5') }}</div>
          </div>
          <div class="btn">{{ $t('download') }}</div>
        </div>
        <div class="p1"><img src="../assets/gold.png" alt=""></div>
        <div class="p2"><img src="../assets/gold.png" alt=""></div>
        <div class="p3"><img src="../assets/side.png" alt=""></div>
        <div class="p4"></div>
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
  mounted() {
    $(document).scroll(() => {
      for (let index = 1; index <= 6; index++) {
        this.anim(`#section${index}`);
      }
    });

  },
  methods: {
    anim(selector) {
      try {
        let winTop = $(window).height();
        let winScrolled = $(window).scrollTop();
        let selectorTop = $(selector).offset().top;
        if (winScrolled + winTop > selectorTop - 10) {
          let selector_left = selector + "_left"
          let selector_right = selector + "_right"
          $(selector_left).css("animation", "leftShow 2s forwards")
          $(selector_right).css("animation", "rightShow 2s forwards")
        }
      } catch (e) {
        // console.log("");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  padding-bottom: 200px;

  .section1 {
    height: 1080px;
    .fj(center);
    position: relative;

    .box {
      font-family: PingFang SC;
      animation: txtShow 4s;
      position: relative;
      z-index: 99;
      max-width: 1366px;
      width: 100%;
      padding: 12% 83px 0;

      img {
        width: 100px;
        height: 100px;
      }

      .title {
        font-size: 60px;
        font-weight: 800;
        color: #333333;
        margin: 48px 0 64px;
        line-height: 90px;
        width: 60%;
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
    }

    .accessories {
      height: 82px;
      width: 20%;
      background: url(../assets/accessories.png) no-repeat;
      background-size: contain;
      position: absolute;
      bottom: 10%;
      left: 10%;
    }

    .left {
      width: 55%;
      height: 100%;
      margin-top: 42px;
      background: url('../assets/bg1.png') no-repeat;
      background-size: contain;
      position: absolute;
      top: 3%;
      left: 0;
    }

    .right {
      width: 38%;
      height: 80%;
      background: url(../assets/bg2.png) no-repeat;
      background-size: contain;
      position: absolute;
      top: 3%;
      right: 0;
      animation: topShow 3s;
    }

    @keyframes topShow {
      0% {
        transform: translateY(-300px);
        opacity: 0;
      }

      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    @keyframes txtShow {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }

  .section2 {
    height: 1080px;
    position: relative;
    padding-top: 88px;

    .title {
      font-size: 60px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #333333;
      text-align: center;
    }

    .content {
      .fj(center);

      .left {
        width: 40%;
        height: 835px;
        background: url(../assets/phone1.png) no-repeat;
        background-size: contain;
      }

      .right {
        width: 60%;
        height: 900px;
        padding: 19px 50px;
        font-family: PingFang SC;
        position: relative;

        .text {
          font-size: 30px;
          font-weight: bold;
          color: #666666;
          text-align: left;
        }

        .about {
          padding: 149px 18px;
          width: 80%;

          .txt {
            font-size: 20px;
            line-height: 38px;
            font-weight: 500;
            color: #666666;
          }

          .tit {
            font-size: 28px;
            margin: 36px 0 25px;
            font-weight: bold;
            color: #333333;
          }

          .btn {
            font-size: 40px;
            font-weight: bold;
            color: #FFFFFF;
            background-color: #5F16D9;
            border-radius: 22px;
            height: 88px;
            line-height: 88px;
            padding: 0 90px;
            margin-top: 67px;
          }
        }

        .p1 {
          position: absolute;
          top: 3%;
          left: 50%;

          >img {
            width: 68px;
            height: 75px;
          }
        }

        .p2 {
          position: absolute;
          top: -10%;
          left: 75%;

          >img {
            width: 84px;
            height: 93px;
          }
        }

        .p3 {
          position: absolute;
          bottom: 0px;
          right: 0px;
          width: 189px;
          height: 594px;
          background: url(../assets/side.png) no-repeat;
          background-size: contain;
        }

        .p4 {
          position: absolute;
          bottom: 0px;
          left: 50%;
          width: 30%;
          height: 82px;
          background: url(../assets/accessories.png) no-repeat;
          background-size: contain;
        }
      }
    }


  }

  .section3 {
    height: 1080px;
    margin-top: 200px;
    .fa(center);
    position: relative;

    .left {
      width: 60%;
      height: 90%;
      position: relative;
      .flex(end, center);

      .box {
        width: 70%;
        font-family: PingFang SC;

        img {
          width: 100px;
          height: 100px;
        }

        .title {
          font-size: 28px;
          line-height: 42px;
          font-weight: bold;
          color: #333333;
          margin: 68px 40px 68px 0;
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
      }

      .p1 {
        position: absolute;
        right: 17%;
        top: -3%;

        >img {
          width: 158px;
          height: 176px;
        }
      }

      .accessories {
        height: 82px;
        width: 30%;
        background: url(../assets/accessories.png) no-repeat;
        background-size: contain;
        position: absolute;
        bottom: -3%;
        left: 14%;
      }
    }

    .right {
      width: 40%;
      height: 90%;
      background: url(../assets/phone2.png) no-repeat;
      background-size: contain;
      position: absolute;
      top: 8%;
      right: 0;
    }
  }

  .section4 {
    height: 1080px;
    position: relative;
    margin-top: 200px;

    .content {
      .fj(center);
      height: 100%;

      .left {
        margin-top: 10%;
        width: 40%;
        height: 100%;
        background: url(../assets/phone3.png) no-repeat;
        background-size: contain;
      }

      .right {
        width: 60%;
        padding: 0 100px;
        position: relative;
        .fa(center);

        &-nav {
          font-family: PingFang SC;

          img {
            width: 100px;
            height: 100px;
          }

          .title {
            font-weight: bold;
            color: #333333;
            margin: 68px 60px 68px 0;
            width: 80%;

            >div {
              font-size: 28px;
              line-height: 48px;
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
        }

        .p1 {
          position: absolute;
          top: 13%;
          left: 50%;

          >img {
            width: 68px;
            height: 75px;
          }
        }

        .p2 {
          position: absolute;
          top: 3%;
          left: 72%;

          >img {
            width: 84px;
            height: 93px;
          }
        }

        .p3 {
          position: absolute;
          bottom: 0px;
          right: 0px;

          >img {
            width: 189px;
            height: 594px;
          }
        }

        .p4 {
          position: absolute;
          bottom: 0px;
          left: 50%;
          width: 30%;
          height: 82px;
          background: url(../assets/accessories.png) no-repeat;
          background-size: contain;
        }
      }
    }


  }

  .section5 {
    height: 1080px;
    margin-top: 200px;
    position: relative;
    .fa(center);

    .left {
      width: 60%;
      height: 100%;
      position: relative;
      .flex(end, center);

      &-nav {
        font-family: PingFang SC;
        width: 70%;

        img {
          width: 100px;
          height: 100px;
        }

        .title {
          font-size: 28px;
          line-height: 42px;
          font-weight: bold;
          color: #333333;
          margin: 68px 108px 68px 0;
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
      }

      .accessories {
        height: 82px;
        width: 30%;
        background: url(../assets/accessories.png) no-repeat;
        background-size: contain;
        position: absolute;
        bottom: 0%;
        left: 10%;
      }

      .p1 {
        position: absolute;
        right: 15%;
        top: 4%;

        >img {
          width: 158px;
          height: 176px;
        }
      }
    }

    .right {
      width: 40%;
      height: 90%;
      background: url(../assets/phone4.png) no-repeat;
      background-size: contain;
      position: absolute;
      top: 8%;
      right: 0;
    }
  }

  .section6 {
    height: 1080px;
    position: relative;
    margin-top: 200px;
    .fj(end);

    .left {
      margin-top: 157px;
      width: 40%;
      height: 100%;
      background: url(../assets/phone5.png) no-repeat;
      background-size: contain;
      position: absolute;
      top: 3%;
      left: 0;
    }

    .right {
      width: 60%;
      padding: 0 100px;
      position: relative;
      .fa(center);

      &-nav {
        font-family: PingFang SC;

        img {
          width: 100px;
          height: 100px;
        }

        .title {
          font-weight: bold;
          color: #333333;
          margin: 68px 60px 68px 0;

          >div {
            font-size: 28px;
            line-height: 48px;
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
      }

      .p1 {
        position: absolute;
        top: 19%;
        left: 46%;

        >img {
          width: 68px;
          height: 75px;
        }
      }

      .p2 {
        position: absolute;
        top: 8%;
        left: 70%;

        >img {
          width: 84px;
          height: 93px;
        }
      }

      .p3 {
        position: absolute;
        bottom: 0px;
        right: 0px;

        >img {
          width: 189px;
          height: 594px;
        }
      }

      .p4 {
        position: absolute;
        bottom: 0px;
        left: 50%;
        width: 30%;
        height: 82px;
        background: url(../assets/accessories.png) no-repeat;
        background-size: contain;
      }
    }


  }
}

@media screen and (max-width: 1599px) {
  .section1 {
    height: 950px !important;

    .box {
      img {
        width: 70px !important;
        height: 70px !important;
      }

      .title {
        width: 55% !important;
        font-size: 50px !important;
        line-height: 80px !important;
        margin: 32px 0 42px !important;
      }
    }
  }

  .section2 {
    padding-top: 50px !important;

    .title {
      font-size: 50px !important;
    }

    .right {
      .text {
        font-size: 25px !important;
      }

      .about {
        padding: 100px 15px !important;

        .txt {
          font-size: 18px !important;
          line-height: 32px !important;
        }

        .tit {
          font-size: 22px !important;
          margin: 28px 0 18px !important;
        }
      }
    }
  }

  .section3 {
    margin-top: 150px !important;
    height: 900px !important;

    .box {
      img {
        width: 70px !important;
        height: 70px !important;
      }

      .title {
        font-size: 22px !important;
        line-height: 36px !important;
        margin: 46px 30px 46px 0 !important;
      }
    }

    .p1 {
      >img {
        width: 130px !important;
        height: 150px !important;
      }
    }
  }

  .section4 {
    margin-top: 150px !important;
    height: 900px !important;

    .right-nav {
      img {
        width: 70px !important;
        height: 70px !important;
      }

      .title {
        margin: 46px 30px 46px 0 !important;

        >div {
          font-size: 22px !important;
          line-height: 36px !important;
        }
      }
    }
  }

  .section5 {
    margin-top: 150px !important;
    height: 900px !important;

    .left-nav {
      img {
        width: 70px !important;
        height: 70px !important;
      }

      .title {
        font-size: 22px !important;
        line-height: 36px !important;
        margin: 46px 30px 46px 0 !important;
      }
    }

    .p1 {
      >img {
        width: 130px !important;
        height: 150px !important;
      }
    }
  }

  .section6 {
    margin-top: 150px !important;
    height: 900px !important;

    .right-nav {
      img {
        width: 70px !important;
        height: 70px !important;
      }

      .title {
        margin: 46px 30px 46px 0 !important;

        >div {
          font-size: 22px !important;
          line-height: 36px !important;
        }
      }
    }
  }

  .btn {
    height: 76px !important;
    line-height: 76px !important;
    font-size: 30px !important;
    padding: 0 70px !important;
  }
}
</style>
