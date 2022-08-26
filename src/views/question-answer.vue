<template>
  <div>
    <section class="section1">
      <div class="containers">
        <div class="box">
          <div class="title">{{ $t('module8_tit') }}</div>
          <div class="txt">
            <div>{{ $t('txt11') }}</div>
            <div>{{ $t('txt12') }}</div>
          </div>
          <img src="../assets/search.png" alt="">
        </div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </section>
    <section class="section2">
      <div class="containers">
        <div class="centent" v-for="item in list" :key="item.id">
          <div class="head" @click="btnclick($event, item)">
            <div class="txt">{{ $t(item.ask) }}</div>
            <div class="mark" v-show="item.mark">NEW</div>
            <div class="mark mark1" v-show="item.mark2">HOT</div>
            <div class="arrow" :style="item.arrow ? arrowstyle : ''"></div>
          </div>
          <div class="answer">
            <div>{{ $t(item.answer) }}</div>
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
      list: [{
        id: 1,
        ask: 'ask1',
        mark: true,
        mark2: false,
        answer: 'answer1',
        arrow: false
      },
      {
        id: 2,
        ask: 'ask2',
        mark: true,
        mark2: false,
        answer: 'answer2',
        arrow: false
      },
      {
        id: 3,
        ask: 'ask3',
        mark: false,
        mark2: false,
        answer: 'answer3',
        arrow: false
      },
      {
        id: 4,
        ask: 'ask4',
        mark: false,
        mark2: false,
        answer: 'answer4',
        arrow: false
      },
      {
        id: 5,
        ask: 'ask5',
        mark: true,
        mark2: false,
        answer: 'answer5',
        arrow: false
      },
      {
        id: 6,
        ask: 'ask6',
        mark: true,
        mark2: false,
        answer: 'answer6',
        arrow: false
      },
      {
        id: 7,
        ask: 'ask7',
        mark: true,
        mark2: false,
        answer: 'answer7',
        arrow: false
      },
      {
        id: 8,
        ask: 'ask8',
        mark: false,
        mark2: true,
        answer: 'answer8',
        arrow: false
      },
      {
        id: 9,
        ask: 'ask9',
        mark: false,
        mark2: true,
        answer: 'answer9',
        arrow: false
      },
      {
        id: 10,
        ask: 'ask10',
        mark: true,
        mark2: false,
        answer: 'answer10',
        arrow: false
      },
      {
        id: 11,
        ask: 'ask11',
        mark: false,
        mark2: false,
        answer: 'answer11',
        arrow: false
      },
      {
        id: 12,
        ask: 'ask12',
        mark: false,
        mark2: false,
        answer: 'answer12',
        arrow: false
      },
      {
        id: 13,
        ask: 'ask13',
        mark: false,
        mark2: false,
        answer: 'answer13',
        arrow: false
      }],
      arrowstyle: 'transform: rotateZ(315deg);'
    }
  },
  methods: {
    btnclick(e, item) {
      const answer = e.currentTarget.nextElementSibling
      if (item.arrow) {
        $(answer).slideUp(400)
      } else {
        $(answer).slideDown(400)
      }
      item.arrow = !item.arrow
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
    z-index: 1;
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
    z-index: 1;
  }

  .box {
    font-family: PingFang SC;
    padding-top: 8%;
    position: relative;
    z-index: 999;

    .title {
      font-size: 60px;
      line-height: 90px;
      font-weight: 800;
      color: #333333;
      width: 50%;
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
    padding: 50px 90px;
    margin: 34px 0;

    .head {
      cursor: pointer;
      .fa(flex-start);
      position: relative;

      .txt {
        font-size: 40px;
        font-weight: 800;
        color: #333333;
        width: 70%;
      }

      .mark {
        background-color: #5f18d9;
        padding: 6px 20px;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: bold;
        border-radius: 20px 20px 20px 0;
        margin-left: 36px;
        margin-top: 6px;
      }

      .mark1 {
        background-color: #fc5033 !important;
      }

      .arrow {
        height: 25px;
        width: 25px;
        top: 40%;
        right: 0px;
        border-width: 3px 3px 0 0;
        border-color: #666666;
        border-style: solid;
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: absolute;
        transform: translate(-25%, -25%) rotate(135deg);
        transition: all .2s;
      }
    }

    .answer {
      border-top: 2px solid #EDEDED;
      padding-top: 50px;
      margin-top: 50px;
      display: none;
      overflow: hidden;

      >div {
        font-size: 18px;
        font-weight: bold;
        color: #666666;
        transition: all .4s;
      }

      span {
        color: #333333;
      }
    }
  }
}


@media screen and (max-width: 1599px) {
  .section1 {
    .box {
      .title {
        font-size: 50px !important;
        line-height: 80px !important;
      }

      .txt {
        font-size: 18px !important;
        margin: 48px 0 70px !important;
      }

      >img {
        width: 140px !important;
        height: 100px !important;
      }
    }
  }

  .section2 {
    padding: 20px 0 140px !important;

    .head {
      .txt {
        font-size: 30px !important;
      }

      .mark {
        font-size: 16px !important;
      }

      .arrow {
        width: 20px !important;
        height: 20px !important;
      }
    }
  }
}
</style>
