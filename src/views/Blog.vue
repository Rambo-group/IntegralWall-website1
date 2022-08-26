<template>
  <div class="blog">
    <section class="section1">
      <div class="containers">
        <div class="banner"></div>
        <div class="box">
          <div><img src="../assets/publicity1.png" alt="">
            <div class="txt">{{$t("publicity_txt1")}}</div>
          </div>
          <div><img src="../assets/publicity2.png" alt="">
            <div class="txt">{{$t("publicity_txt2")}}</div>
          </div>
          <div><img src="../assets/publicity3.png" alt="">
            <div class="txt">{{$t("publicity_txt3")}}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="section2">
      <div class="containers">
        <div class="title">{{ $t("module7_tit1") }}</div>
        <div class="box">
          <div class="box-item" v-for="item in list" :key="item.id">
            <div class="top">
              <div>
                <div class="tit">{{ $t(item.task) }}</div>
              </div>
              <img :src="item.img" alt="">
            </div>
            <div class="centent">
              <div class="centent-item" v-for="(items, index) in item.second" :key="index">
                <div class="tit">{{ $t(items.name) }}</div>
                <div class="txt">{{ time }}</div>
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
      list: [
        {
          id: 1,
          task: 'task1',
          img: require('../assets/newest.png'),
          second: [{
            name: 'task1_txt1'
          }, {
            name: 'task1_txt2'
          }, {
            name: 'task1_txt3'
          }, {
            name: 'task1_txt4'
          }],

        }, {
          id: 2,
          task: 'task2',
          img: require('../assets/official.png'),
          second: [
            {
              name: 'task2_txt1'
            }, {
              name: 'task2_txt2'
            }, {
              name: 'task2_txt3'
            }, {
              name: 'task2_txt4'
            }
          ]
        }, {
          id: 3,
          task: 'task3',
          img: require('../assets/video.png'),
          second: [{
            name: 'task3_txt1'
          }, {
            name: 'task3_txt2'
          }, {
            name: 'task3_txt3',
            time: ''
          }, {
            name: 'task3_txt4'
          }]
        }, {
          id: 4,
          task: 'task4',
          img: require('../assets/popular.png'),
          second: [{
            name: 'task4_txt1'
          }, {
            name: 'task4_txt2'
          }, {
            name: 'task4_txt3'
          }, {
            name: 'task4_txt4'
          }]
        }
      ],
      time: ''
    }
  },
  mounted() {
    this.time = this.getNowDate()
  },
  methods: {
    //获取当前日期时间
    getNowDate() {
      const nowDate = new Date();
      const date = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth() + 1,
        date: nowDate.getDate(),
        hours: nowDate.getHours(),
        minutes: nowDate.getMinutes(),
        seconds: nowDate.getSeconds(),
      };
      const newmonth = date.month > 10 ? date.month : "0" + date.month;
      const newday = date.date > 10 ? date.date : "0" + date.date;
      const newminutes = date.minutes > 10 ? date.minutes : "0" + date.minutes;
      // const newseconds = date.seconds > 10 ? date.seconds : "0" + date.seconds;

      this.dateTime = newmonth + "-" + newday + " " + date.hours + ":" + newminutes;
      return this.dateTime
    }
  }
};
</script>
<style lang="less" scoped>
.section1 {
  width: 100%;
  height: 1080px;

  .banner {
    margin-top: 32px;
    height: 500px;
    background: url(../assets/blog_banner.png) no-repeat;
    background-size: cover;
  }

  .box {
    .fj(space-between);
    margin-top: 36px;

    >div {
        width: 366px;

      >img {
        width: 100%;
        height: 200px;
      }

      .txt {
        margin-top: 26px;
        font-size: 20px;
        line-height: 28px;
        font-weight: bold;
        color: #666666;
      }
    }
  }
}

.section2 {
  padding: 100px 0;

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
        .flex(space-between, center);

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

.containers {
  padding: 0;
}
</style>
