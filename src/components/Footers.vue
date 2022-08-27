<template>
  <div class="bottom">
    <div class="containers">
      <div class="row">
        <div class="col-3">
          <div class="contact">
            <img src="../assets/logo.png" alt="">
            <div class="txt">{{ $t('bottom_txt1') }}</div>
          </div>
        </div>
        <div class="col-3">
          <div class="answer">
            <div class="title">{{ $t('bottom_txt2') }}</div>
            <div class="txt">{{ $t('answer') }}</div>
            <div class="txt">{{ $t('blog') }}</div>
          </div>
        </div>
        <div class="col-3">
          <div class="title">{{ $t('bottom_txt3') }}</div>
          <div class="mail">
            <img src="../assets/mail.png" alt="">
            <span class="txt">MissionGo888@gmail.com</span>
          </div>
        </div>
        <div class="col-3">
          <div class="title">{{ $t('bottom_txt4') }}</div>
          <div class="follow">
            <a href="https://www.facebook.com/MissionGoing"><img src="../assets/facebook.png" alt=""></a>
            <a href="https://www.instagram.com/mission_going/"><img src="../assets/instagram.png" alt=""></a>
            <a href="https://t.me/missiongoing"><img src="../assets//telegram.png" alt=""></a>
            <a href="https://twitter.com/MissionGo"><img src="../assets/twitter.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bottom {
  .fa(center);
  height: 400px;
  width: 100%;
  background: #FFFFFF;
  font-family: PingFang SC;
  box-shadow: 0px -1px 0px 0px #F1F1F1;

  .title {
    font-size: 20px;
    font-weight: 800;
    color: #000000;
    margin-bottom: 20px;
  }

  .txt {
    font-size: 18px;
    line-height: 32px;
    font-weight: 500;
    color: #666666;
  }

  .contact {
    >img {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
    }
  }

  .mail {
    .fa(center);

    >img {
      width: 24px;
      height: 24px;
      margin-right: 12px
    }
  }

  .follow {
    .fa(center);

    a>img {
      width: 36px;
      height: 36px;
      margin-right: 40px;
    }
  }
}
</style>
