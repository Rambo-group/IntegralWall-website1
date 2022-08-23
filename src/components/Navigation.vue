<template>
  <div class="main">
    <div class="navigation">
      <div class="containers">
        <div id="header" class="header-scroll">
          <div class="logo"><img src="@assets/logo.png" alt=""><span>Mission Go</span></div>
          <ul class="menu">
            <li v-for="item in list" :key="item.id">{{item.name}}</li>
            <li class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="true">
                语言选择
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view />
    <div class="bottom">
      <div class="containers">
        <div class="row">
          <div class="col-3">
            <div class="contact">
              <img src="../assets/logo.png" alt="">
              <div class="txt">快速关注我们的社交媒体账户</div>
              <div class="txt">并获取更多信息。</div>
            </div>
          </div>
          <div class="col-3">
            <div class="answer">
              <div class="title">支持</div>
              <div class="txt">问答</div>
              <div class="txt">博客</div>
            </div>
          </div>
          <div class="col-3">
            <div class="title">联系我们</div>
            <div class="mail">
              <img src="../assets/mail.png" alt="">
              <span class="txt">MissionGo888@gmail.com</span>
            </div>
          </div>
          <div class="col-3">
            <div class="title">跟着我们</div>
            <div class="follow">
              <img src="../assets/facebook.png" alt="">
              <img src="../assets/zalo.png" alt="">
              <img src="../assets//telegram.png" alt="">
              <img src="../assets/line.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        id: 1,
        name: '主页'
      }, {
        id: 2,
        name: '下载'
      }, {
        id: 3,
        name: '问答'
      }, {
        id: 4,
        name: '博客'
      }]
    }
  },
};
</script>
<style lang="less" scoped>
#header {
  .flex(space-between, center);
  height: 140px;
  max-width: 1200px;

  .logo {
    .fa(center);

    >img {
      width: 60px;
      height: 60px;
    }

    >span {
      font-size: 28px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333333;
      margin-left: 14px;
    }
  }

  .menu {
    .fa(center);

    >li {
      margin: 0 40px;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #666666;
      cursor: pointer;
      line-height: 40px;
    }

    .active {
      color: #5F16D9;

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background: #5F16D9;
        border-radius: 2px;
      }
    }
  }
}

// .header-scroll{
//   position: fixed;
//   left: 0;
//   right: 0;
//   border-radius: 16px;
//   margin: 0 auto;
//   background-color: #fff;
//   box-shadow: 0 4px 16px 0 rgb(72 72 72 / 16%);
// }
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

  .answer {
    text-align: center
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

    >img {
      width: 48px;
      height: 48px;
      margin-right: 28px;
    }
  }
}
</style>
