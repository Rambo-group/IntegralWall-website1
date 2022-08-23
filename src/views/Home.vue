<template>
  <div class="home">
    <section class="section1">
      <div class="left">
        <div class="left-nav">
          <div><img src="../assets/logo.png" alt=""></div>
          <div class="title">
            <div>Mission Go</div>
            <div>让你在手机上轻松赚钱</div>
          </div>
          <div class="btn">下载</div>
        </div>
        <div class="accessories"></div>
      </div>
      <div class="right"></div>
    </section>
    <section class="section2">
      <div class="title">赚钱应用程序</div>
      <div class="content">
        <div class="left"></div>
        <div class="right">
          <div class="text">关于Mission Go</div>
          <div class="about">
            <div class="txt">Mission Go是一个轻松赚钱的应用程序，你可以通过完成简单的任务来获取金币兑换现金奖励。</div>
            <div class="txt">现在下载这款火爆的应用程序，让手机赚钱变得更容易！</div>
            <div class="tit">怎么玩</div>
            <div class="txt">1. 可去谷歌应用商店和Apkpure应用商店下载Mission Go应用程序</div>
            <div class="txt">2. 使用您的手机号码、Facebook账户、谷歌账户登录</div>
            <div class="txt">3. 完成你喜欢的任务并获得金币</div>
            <div class="txt">4. 收集到的金币去兑换现金</div>
            <div class="btn">下载</div>
          </div>
          <div class="p1"><img src="../assets/gold.png" alt=""></div>
          <div class="p2"><img src="../assets/gold.png" alt=""></div>
          <div class="p3"><img src="../assets/side.png" alt=""></div>
          <div class="p4"><img src="../assets/accessories.png" alt=""></div>
        </div>
      </div>
    </section>
    <section class="section3">
      <div class="left">
        <div class="left-nav">
          <div><img src="../assets/logo.png" alt=""></div>
          <div class="title">在Mission Go这个赚钱的应用中，有成百上千种有趣任务
            其中定有一种适合你。别担心不能顺利完成，只要根据任务
            指南来操作就能获得金币，然后用收集到的金币去兑换现金
            简单便捷。Mission Go 玩法多多，赚钱多多！</div>
          <div class="btn">下载</div>
        </div>
        <div class="accessories"></div>
        <div class="p1"><img src="../assets/gold.png" alt=""></div>
      </div>
      <div class="right"></div>
    </section>
    <section class="section4">
      <div class="content">
        <div class="left"></div>
        <div class="right">
          <div class="right-nav">
            <div><img src="../assets/logo.png" alt=""></div>
            <div class="title">
              <div>7天签到并完成任务可以获得海量金币来兑换高额现金</div>
              <div>Mission Go赚钱应用程序是目前流行的应用程序</div>
              <div>即能赚钱又可消遣无聊的生活。</div>
            </div>
            <div class="btn">下载</div>
          </div>
          <div class="p1"><img src="../assets/gold.png" alt=""></div>
          <div class="p2"><img src="../assets/gold.png" alt=""></div>
          <div class="p3"><img src="../assets/side.png" alt=""></div>
          <div class="p4"><img src="../assets/accessories.png" alt=""></div>
        </div>
      </div>
    </section>
    <section class="section5">
      <div class="left">
        <div class="left-nav">
          <div><img src="../assets/logo.png" alt=""></div>
          <div class="title">Mission Go是目前最快且经过验证的赚钱应用程序之一
            如果你想要快速获得更多金币？邀请你的朋友加入是
            个不错的选择。只要你的朋友完成任务，就可以获得
            不错的金币奖励。你邀请的朋友越多，获得的奖励
            就越多！来吧，快邀请你的朋友一起下载，一起玩
            一起快乐赚钱！</div>
          <div class="btn">下载</div>
        </div>
        <div class="accessories"></div>
        <div class="p1"><img src="../assets/gold.png" alt=""></div>
      </div>
      <div class="right"></div>
    </section>
    <section class="section6">
      <div class="content">
        <div class="left"></div>
        <div class="right">
          <div class="right-nav">
            <div><img src="../assets/logo.png" alt=""></div>
            <div class="title">
              <div>Mission Go是 2022年最简单的赚钱应用程序之一</div>
              <div>简单做做任务收集到的金币可以兑换现金。</div>
              <div>金币越多你可以兑换的现金就越多！</div>
              <div>快下载去赚金币吧！</div>
            </div>
            <div class="btn">下载</div>
          </div>
          <div class="p1"><img src="../assets/gold.png" alt=""></div>
          <div class="p2"><img src="../assets/gold.png" alt=""></div>
          <div class="p3"><img src="../assets/side.png" alt=""></div>
          <div class="p4"><img src="../assets/accessories.png" alt=""></div>
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
.home{
  padding-bottom: 200px;
}
.section1 {
  height: 1050px;
  .fj(center);

  .left {
    width: 55%;
    margin-top: 42px;
    background: url('../assets/bg1.png') no-repeat;
    background-size: 60% 115%;

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
        margin: 48px 0 64px;
        line-height: 100px;
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

    .accessories {
      height: 82px;
      width: 361px;
      background: url(../assets/accessories.png) no-repeat;
      background-size: 100% 100%;
      margin: 176px 0 0 20%;
    }
  }

  .right {
    width: 45%;
    height: 85%;
    background: url(../assets/bg2.png) no-repeat;
    background-size: 100% 100%;
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
    height: 100%;

    .left {
      width: 40%;
      height: 100%;
      background: url(../assets/phone1.png) no-repeat;
      background-size: 100% 85%;
    }

    .right {
      width: 60%;
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
          padding: 0 105px;
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

        >img {
          width: 189px;
          height: 594px;
        }
      }

      .p4 {
        position: absolute;
        bottom: 0px;
        left: 50%;

        >img {
          width: 361px;
          height: 82px;
        }
      }
    }
  }


}

.section3 {
  height: 1080px;
  margin-top: 200px;
  .fa(center);

  .left {
    width: 60%;
    position: relative;

    &-nav {
      font-family: PingFang SC;
      padding: 167px 0 0 360px;

      img {
        width: 100px;
        height: 100px;
      }

      .title {
        font-size: 28px;
        line-height: 42px;
        font-weight: bold;
        color: #333333;
        margin: 68px 60px 68px 0;
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

    .accessories {
      height: 82px;
      width: 361px;
      background: url(../assets/accessories.png) no-repeat;
      background-size: 100% 100%;
      margin: 176px 0 0 20%;
    }

    .p1 {
      position: absolute;
      right: 23%;
      top: -5%;

      >img {
        width: 158px;
        height: 176px;
      }
    }
  }

  .right {
    width: 40%;
    height: 85%;
    background: url(../assets/phone2.png) no-repeat;
    background-size: 100% 100%;
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
      margin-top: 157px;
      width: 40%;
      height: 100%;
      background: url(../assets/phone3.png) no-repeat;
      background-size: 100% 80%;
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
          padding: 0 105px;
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

        >img {
          width: 361px;
          height: 82px;
        }
      }
    }
  }


}

.section5 {
  height: 1080px;
  margin-top: 200px;
  .fa(center);

  .left {
    width: 60%;
    position: relative;

    &-nav {
      font-family: PingFang SC;
      padding: 167px 0 0 360px;

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
        padding: 0 105px;
        background: #5F16D9;
        border-radius: 22px;
        font-weight: bold;
        color: #FFFFFF;
        font-size: 40px;
      }
    }

    .accessories {
      height: 82px;
      width: 361px;
      background: url(../assets/accessories.png) no-repeat;
      background-size: 100% 100%;
      margin: 176px 0 0 20%;
    }

    .p1 {
      position: absolute;
      right: 10%;
      top: -5%;

      >img {
        width: 158px;
        height: 176px;
      }
    }
  }

  .right {
    width: 40%;
    height: 85%;
    background: url(../assets/phone4.png) no-repeat;
    background-size: 100% 100%;
  }
}

.section6 {
  height: 1080px;
  position: relative;
  margin-top: 200px;

  .content {
    .fj(center);
    height: 100%;

    .left {
      margin-top: 157px;
      width: 40%;
      height: 100%;
      background: url(../assets/phone5.png) no-repeat;
      background-size: 100% 80%;
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
          padding: 0 105px;
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

        >img {
          width: 361px;
          height: 82px;
        }
      }
    }
  }


}
</style>
