<template>
  <div class="blog">
    <section class="section1">
      <div class="containers">
        <div class="banner">banner</div>
        <div class="box">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </section>
    <section class="section2">
      <div class="containers">
        <div class="title">{{ $t("module7_tit1") }}</div>
        <div class="box">
          <div class="box-item">
            <div class="top">
              <div>
                <div class="tit">{{ $t("task1") }}</div>
              </div>
              <img src="../assets/newest.png" alt="">
            </div>
            <div class="centent">
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
            </div>
          </div>
          <div class="box-item">
            <div class="top">
              <div>
                <div class="tit">{{ $t("task2") }}</div>
              </div>
              <img src="../assets/official.png" alt="">
            </div>
            <div class="centent">
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
            </div>
          </div>
          <div class="box-item">
            <div class="top">
              <div>
                <div class="tit">{{ $t("task3") }}</div>
              </div>
              <img src="../assets/video.png" alt="">
            </div>
            <div class="centent">
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
            </div>
          </div>
          <div class="box-item">
            <div class="top">
              <div>
                <div class="tit">{{ $t("task4") }}</div>
              </div>
              <img src="../assets/popular.png" alt="">
            </div>
            <div class="centent">
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
              <div class="centent-item">
                <div class="tit">复制邀请码邀请好友积分下载Mission Go获得大量</div>
                <div class="txt">08-08 10:43</div>
              </div>
            </div>
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
  width: 100%;
  height: 1080px;

  .banner {
    height: 500px;
  }

  .box {
    .fa(center);

    >div {
      flex: 1;
    }
  }
}

.section2 {
  padding: 200px 0;

  .title {
    font-size: 40px;
    font-weight: 800;
    color: #333333;
  }

  .box {
    .fj(space-between);
    flex-wrap: wrap;

    &-item {
      margin: 52px 0;
      width: 460px;
      background: #FFFFFF;
      box-shadow: 0px 8px 36px 2px rgba(0, 0, 0, 0.05);
      border-radius: 16px;

      .top {
        padding: 8px 0 0 30px;
        background: #5F16D9;
        border-radius: 16px 16px 0px 0px;
        .flex(space-between,center);

        .tit {
          font-size: 28px;
          font-weight: 800;
          color: #FFFFFF;
        }

        .txt {
          font-size: 18px;
          margin-top: 32px;
          font-weight: bold;
          color: #FFFFFF;
        }

        >img {
          width: 121px;
          height: 127px;
        }
      }

      .centent {
        padding: 10px 30px;

        &-item {
          padding: 22px 0;
          font-weight: 800;
          font-size: 16px;

          .tit {
            color: #666666;
          }

          .txt {
            margin-top: 18px;
            color: #999999;
          }
        }
      }
    }
  }
}
</style>
