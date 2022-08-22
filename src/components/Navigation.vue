<template>
  <div class="main">
    <div class="navigation">
      <div class="containers">
        <div class="header">
          <div class="logo"><img src="@assets/logo.png" alt=""><span>Mission Go</span></div>
          <ul class="menu">
            <li class="active">主页</li>
            <li>下载</li>
            <li>问答</li>
            <li>博客</li>
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
.header {
  .flex(space-between, center);
  height: 140px;

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
</style>
