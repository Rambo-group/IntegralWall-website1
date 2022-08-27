<template>
  <div id="header" :class="topClass">
    <div class="logo"><img src="@assets/logo.png" alt=""><span>Mission Go</span></div>
    <ul class="menu">
      <li v-for="item in list" :key="item.id" @click="jumpTo(item.url, item.id)" :class="{ active: active == item.id }">
        {{ $t(item.name) }}</li>
      <li class="dropdown" @click.stop="showNav()">
        <span>{{ $t('language') }}</span>
        <ul class="nav-menu" v-show="menuShow">
          <li v-for="item in Language" :key="item.id" v-Lang="item.lang">{{ item.name }}</li>
        </ul>
        <div class="arrow" :style="menuShow ? arrowstyle : ''"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        id: 1,
        name: 'home',
        url: '/'
      }, {
        id: 2,
        name: 'download',
        url: '/download'
      }, {
        id: 3,
        name: 'answer',
        url: '/question-answer'
      }, {
        id: 4,
        name: 'blog',
        url: '/blog'
      }],
      Language: [{
        id: 1,
        name: 'English',
        lang: 'en'
      },
      {
        id: 2,
        name: 'ประเทศไทย',
        lang: 'th'
      },
      {
        id: 3,
        name: 'Việt nam',
        lang: 'vi'
      }, {
        id: 4,
        name: 'español',
        lang: 'es'
      },
      {
        id: 5,
        name: 'Português',
        lang: 'pt'
      }],
      topClass: '',
      menuShow: false,
      active: '1',
      arrowstyle: 'transform: rotateZ(540deg);top:25%;left:108%',
    }
  },
  methods: {
    //导航栏跳转
    jumpTo(url, id) {
      this.$router.push({ path: url })
      this.active = id
    },
    //语言选择展示隐藏
    showNav() {
      this.menuShow = !this.menuShow
    },
    ToShowNav() {
      if (this.menuShow) {
        this.menuShow = !this.menuShow
      }
    },
    activeClass() {
      let path = this.$route.path
      this.list.forEach((item) => {
        if (item.url === path) {
          this.active = item.id
        }
      })
    },
  },
  beforeDestroy() { // 在页面注销前，删除点击事件
    document.removeEventListener("click", this.ToShowNav);
  },
  mounted() {
    document.addEventListener("click", this.ToShowNav)
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
  z-index: 9999;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  .flex(space-between, center);
  max-width: 1366px;
  width: 100%;
  padding: 32px 83px;
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
      margin: 0 20px;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #666666;
      cursor: pointer;
      line-height: 40px;
      transition: all .5s ease;

      &:hover {
        color: #5F16D9;

        .arrow {
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

      .arrow {
        height: 0;
        width: 0;
        border-width: 8px;
        border-color: #666666 transparent transparent;
        border-style: solid;
        top: 50%;
        position: absolute;
        left: 112%;
        transform: translate(-50%, -25%);
        // transition: all .1s;
        background: transparent !important;
      }

      .nav-menu {
        position: absolute;
        top: 40px;
        left: 0;
        min-width: 124px;
        background: #fff;
        box-shadow: 0px 6px 12px 1px rgba(24, 39, 75, 0.04), 0px 8px 24px rgba(24, 39, 75, 0.05);

        >li {
          padding: 10px;
          line-height: 22px !important;
          font-size: 14px;
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
</style>
