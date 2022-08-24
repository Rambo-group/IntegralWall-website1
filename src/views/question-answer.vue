<template>
  <div>
    <section class="section1">
      <div class="containers">
        <div class="box">
          <div class="title">如何从 Mission Go
            中赚钱</div>
          <div class="txt">
            <div>有什么问题？</div>
            <div>在这里你都可以找到答案</div>
          </div>
          <img src="../assets/search.png" alt="">
        </div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </section>
    <section class="section2">
      <div class="containers">
        <div class="centent">
          <div class="head" @click="btnclick">
            <div class="txt"> 问：如何从 Mission Go apk 中赚钱？</div>
            <div class="mark">NEW</div>
            <div class="arrow"></div>
          </div>
          <div class="answer">
            <div><span>A:</span>因为使用的应用程序版本太旧。每日签到任务已经上线，只能下载最新的apk资源包。</div>
            <div><span>如何更新:</span></div>
            <div>1.查看您的帐户是否与您的号码绑定！</div>
            <div>2.可前往Mission Go官网上下载最新的App。祝更新成功</div>
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
      isShow:false
    }
  },
  methods: {
    btnclick() {
      this.isShow=true
    }
   }
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
    width: 55%;
    height: 83%;
    margin-top: 66px;
    background: url(../assets/bg4.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: -15%;
    right: 0;
  }

  .box {
    font-family: PingFang SC;
    padding-top: 93px;

    .title {
      font-size: 60px;
      line-height: 100px;
      font-weight: 800;
      color: #333333;
      width: 524px;
    }

    .txt {
      font-size: 20px;
      font-weight: bold;
      color: #666666;
      margin: 62px 0 100px;
    }

    >img {
      width: 159px;
      height: 120px;
    }

  }
}

.section2 {
  padding: 40px 0 166px;

  .centent {
    background: #FFFFFF;
    box-shadow: 0px 8px 36px 2px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    padding: 90px 100px;

    .head {
      cursor: pointer;
      .fa(center);

      .txt {
        font-size: 40px;
        font-weight: 800;
        color: #333333;
      }

      .mark {
        background-color: #5f18d9;
        padding: 6px 20px;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: bold;
        border-radius: 20px 20px 20px 0;
        margin-left: 36px;
      }

      .arrow {
        position: relative;
      }

      .arrow::after {
        content: "";
        height: 25px;
        width: 25px;
        top: -12px;
        right: -165px;
        border-width: 3px 3px 0 0;
        border-color: #666666;
        border-style: solid;
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: absolute;
        transform: translate(-25%, -25%) rotate(135deg);
      }
    }

    .answer {
      border-top: 2px solid #EDEDED;
      padding-top: 70px;
      margin-top: 70px;

      >div {
        font-size: 18px;
        font-weight: bold;
        color: #666666;
      }

      span {
        color: #333333;
      }
    }
  }
}
</style>
