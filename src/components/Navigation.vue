<template>
  <div class="main">
    <div id="header" :class="topClass">
      <div class="logo"><img src="@assets/logo.png" alt=""><span>Mission Go</span></div>
      <ul class="menu">
        <li v-for="item in list" :key="item.id" @click="jumpTo(item.url, item.id)"
          :class="{ active: active == item.id }">{{ item.name }}</li>
        <li class="dropdown" @click.stop="showNav($event)">
          <span>语言选择</span>
          <ul class="nav-menu" v-show="menuShow">
            <li>英语</li>
            <li>泰语</li>
            <li>越南语</li>
            <li>西班牙语</li>
            <li>葡萄牙语</li>
          </ul>
        </li>
      </ul>
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
          <div class="col-2">
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
        name: '主页',
        url: '/'
      }, {
        id: 2,
        name: '下载',
        url: '/download'
      }, {
        id: 3,
        name: '问答',
        url: '/blog'
      }, {
        id: 4,
        name: '博客',
        url: '/question-answer'
      }],
      topClass: '',
      menuShow: false,
      active: '1'
    }
  },
  methods: {
    //导航栏跳转
    jumpTo(url, id) {
      this.$router.push({ path: url })
      this.active = id
    },
    //语言选择展示隐藏
    showNav(e) {
      this.menuShow = !this.menuShow
      console.log(e.target);
    },
    activeClass() {
      let path = this.$route.path
      this.list.forEach((item) => {
        if (item.url === path) {
          this.active = item.id
        }
      })
    }
  },
  mounted() {
    this.activeClass()
    //滚动top栏浮动
    document.onscroll = () => {
      if ($(window).scrollTop() > 30) {
        this.topClass = "header-scroll"
      } else {
        this.topClass = ""
      }
    }
  }
};

</script>
<style lang="less" scoped>
#header {
  position: sticky;
  z-index: 999;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  .flex(space-between, center);
  max-width: 1366px;
  width: 100%;
  padding: 32px 43px 32px 83px;
  transition: all .5s ease;

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
      transition: all .5s ease;

      &:hover {
        color: #5F16D9;

        &::after {
          background: #5F16D9;
          border-color: #5F16D9 transparent transparent;
        }
      }

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background: transparent;
        border-radius: 2px;
      }
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

    .dropdown {
      position: relative;

      &::after {
        content: '';
        height: 0;
        width: 0;
        border-width: 8px;
        border-color: #666666 transparent transparent;
        border-style: solid;
        top: 50%;
        position: absolute;
        left: 120%;
        transform: translate(-50%, -25%);
        background: transparent !important;
      }

      .nav-menu {
        position: absolute;
        top: 40px;
        left: 0;
        background: #fff;
        box-shadow: 0px 6px 12px 1px rgba(24, 39, 75, 0.04), 0px 8px 24px rgba(24, 39, 75, 0.05);

        >li {
          padding: 10px;
          line-height: 22px !important;
          font-size: 12px;
          font-weight: bold;
          color: #666666;
          text-align: center;
          transition: all 0.4s;

          &:hover {
            color: #FFFFFF;
            background-color: #5F16D9;
          }
        }
      }
    }
  }
}

.header-scroll {
  top: 10px !important;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 4px 16px 0 rgba(72, 72, 72, 16%);
}


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
