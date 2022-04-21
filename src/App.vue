<template>
  <div id="app">
    <!-- banner图 -->
    <div class="banner">
      <div class="bg">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-6">
              <div class="title">{{ $t("聚合出海网红入驻") }}</div>
              <div class="text">
                {{ $t("让我们为您账号实现商业变现，提高您的收入") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司简介 -->
    <div class="introduce">
      <div class="container">
        <div class="row content">
          <div class="col-12 title">
            <div>{{ $t("公司简介") }}</div>
            <div class="lang">
              <div @click.stop="isLanguage = true">
                <span>{{ $t("lang") }}</span>
                <img src="@assets/down.png" />
              </div>
              <template v-if="isLanguage">
                <div class="bg" @click.stop="isLanguage = false"></div>
                <ul>
                  <li @click.stop="setLanguage('th')">ประเทศไทย</li>
                  <li @click.stop="setLanguage('en')">English</li>
                  <li @click.stop="setLanguage('vi')">Việt nam</li>
                  <li @click.stop="setLanguage('zh')">中文简体</li>
                  <li @click.stop="setLanguage('zh-TW')">中文繁体</li>
                </ul>
              </template>
            </div>
          </div>
          <div class="col-12 text">
            {{
              $t(
                "我们是一家致力于服务中国互联网企业走向全球的综合服务平台，实现营销环境从境内到境外无感切换。"
              )
            }}
          </div>
          <div class="col-12 text">
            {{
              $t(
                "我们帮助中国客户在境外寻找有影响力的人并推广他们的产品，链接境内商家，境外媒体平台及终端用户，实现三方共赢。"
              )
            }}
          </div>
          <div class="col-12 text">
            {{
              $t(
                "现阶段，我们需要寻找优质影响者与我们合作，我们可以帮助您实现商业变现，提高广告收入。"
              )
            }}
          </div>
          <div class="col-12 text">
            {{
              $t(
                "您拥有的每个广告系列的第一步是填写一份包含所有必要数据的简报，期待与您的合作。"
              )
            }}
          </div>
        </div>
      </div>
    </div>
    <!-- 账号信息 -->
    <div class="frm">
      <div class="container">
        <div class="row info">
          <div class="col-12 tit">{{ $t("账号信息") }}</div>
          <div class="col-12 col-sm-6 col-md-4 field">
            <div class="t">
              <span class="m">*</span>
              <span>{{ $t("您的平台账号名称") }}</span>
            </div>
            <input
              type="text"
              :placeholder="$t('请输入账号名称')"
              class="v"
              v-model="params.name"
            />
            <div class="msg">{{ error.name }}</div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 field">
            <div class="t">
              <span class="m">*</span>
              <span>{{ $t("平台") }}</span>
            </div>
            <div class="s">
              <div @click.stop="isPlatformType = true">
                <input
                  type="text"
                  :placeholder="$t('请选择平台')"
                  readonly="readonly"
                  class="v"
                  :value="platformNames.join(',')"
                />
                <img src="@assets/select.png" class="icon" />
              </div>
              <template v-if="isPlatformType">
                <div class="bg" @click.stop="isPlatformType = false"></div>
                <ul>
                  <li
                    v-for="item in platformType"
                    :key="item.id"
                    :class="{ active: platformList.indexOf(item.id) > -1 }"
                    @click.stop="getPlatformType(item)"
                  >
                    <span>{{ item.name }}</span>
                    <img
                      src="@assets/selected.png"
                      v-if="platformList.indexOf(item.id) > -1"
                    />
                  </li>
                </ul>
              </template>
            </div>
            <div class="msg">{{ error.platform }}</div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 field">
            <div class="t">
              <span class="m">*</span>
              <span>{{ $t("平台ID") }}</span>
            </div>
            <input
              type="text"
              :placeholder="$t('请输入平台ID')"
              class="v"
              v-model.number="params.home_id"
            />
            <div class="msg">{{ error.home_id }}</div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 field">
            <div class="t">
              <span class="m">*</span>
              <span>{{ $t("您的账号类型") }}</span>
            </div>
            <div class="s">
              <div @click.stop="isAccountType = true">
                <input
                  type="text"
                  :placeholder="$t('请选择账号类型')"
                  readonly="readonly"
                  class="v"
                  :value="accountNames.join(',')"
                />
                <img src="@assets/select.png" class="icon" />
              </div>
              <template v-if="isAccountType">
                <div class="bg" @click.stop="isAccountType = false"></div>
                <ul :key="$i18n.locale">
                  <li
                    v-for="item in accountType"
                    :key="item.id"
                    :class="{ active: accountList.indexOf(item.id) > -1 }"
                    @click.stop="getAccountType(item)"
                  >
                    <span>{{ item.name }}</span>
                    <img
                      src="@assets/selected.png"
                      v-if="accountList.indexOf(item.id) > -1"
                    />
                  </li>
                </ul>
              </template>
            </div>
            <div class="msg">{{ error.tags }}</div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 field">
            <div class="t">
              <span class="m">*</span>
              <span>{{ $t("您的账号链接") }}</span>
            </div>
            <input
              type="text"
              :placeholder="$t('请输入账号链接')"
              class="v"
              v-model="params.home_link"
            />
            <div class="msg">{{ error.home_link }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 其他信息 -->
    <div class="frm">
      <div class="container">
        <div class="row info">
          <div class="col-12 tit">{{ $t("其他信息") }}</div>
          <div class="col-12 col-sm-6 col-md-4 field">
            <div class="t">
              <span class="m">*</span>
              <span>{{ $t("粉丝数量") }}</span>
            </div>
            <input
              type="text"
              :placeholder="$t('请输入你的粉丝数量')"
              class="v"
              v-model.number="params.fans_num"
            />
            <div class="msg">{{ error.fans_num }}</div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 field">
            <div class="t">
              <span>{{ $t("月均播放量") }}</span>
            </div>
            <input
              type="text"
              :placeholder="$t('请输入播放量')"
              class="v"
              v-model.number="params.monthly_play_num"
            />
            <div class="msg">{{ error.monthly_play_num }}</div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 field">
            <div class="t">
              <span class="m">*</span>
              <span>{{ $t("期望植入价格（$）") }}</span>
            </div>
            <input
              type="text"
              :placeholder="$t('请输入价格')"
              class="v"
              v-model.number="params.expected_implant_price"
            />
            <div class="msg">{{ error.expected_implant_price }}</div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 field">
            <div class="t">
              <span>{{ $t("期望产品定制价格（$）") }}</span>
            </div>
            <input
              type="text"
              :placeholder="$t('请输入期望价格')"
              class="v"
              v-model.number="params.expected_custom_price"
            />
            <div class="msg">{{ error.expected_custom_price }}</div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 field">
            <div class="t">
              <span>{{ $t("希望合作的产品类型") }}</span>
            </div>
            <div class="s">
              <div @click.stop="isProductType = true">
                <input
                  type="text"
                  :placeholder="$t('请输入产品类型')"
                  readonly="readonly"
                  class="v"
                  :value="productNames.join(',')"
                />
                <img src="@assets/select.png" class="icon" />
              </div>
              <template v-if="isProductType">
                <div class="bg" @click.stop="isProductType = false"></div>
                <ul>
                  <li
                    v-for="item in productType"
                    :key="item.id"
                    :class="{ active: productList.indexOf(item.id) > -1 }"
                    @click.stop="getProductType(item)"
                  >
                    <span>{{ item.name }}</span>
                    <img
                      src="@assets/selected.png"
                      v-if="productList.indexOf(item.id) > -1"
                    />
                  </li>
                </ul>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 联系方式 -->
    <div class="frm">
      <div class="container">
        <div class="row info">
          <div class="col-12 tit">{{ $t("联系方式") }}</div>
          <div class="col-12 col-sm-6 col-md-6 field">
            <div class="t">
              <span class="m">*</span>
              <span>{{ $t("邮箱") }}</span>
            </div>
            <input
              type="text"
              :placeholder="$t('请输入你的邮箱')"
              class="v"
              v-model="params.email"
            />
            <div class="msg">{{ error.email }}</div>
          </div>
          <div class="col-12 col-sm-6 col-md-6 field">
            <div class="t">
              <span class="m">*</span>
              <span>{{ $t("其他联系方式") }}</span>
            </div>
            <input
              type="text"
              :placeholder="$t('Whatsapp或者Telegrame或者line')"
              class="v"
              v-model="params.other_contact"
            />
            <div class="msg">{{ error.other_contact }}</div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 field">
            <div class="t">
              <span class="m">*</span>
              <span>{{ $t("是否签约经纪公司") }}</span>
              <div @click.stop="params.sign_talent_agency = 1">
                <input
                  type="radio"
                  name="sign_talent_agency"
                  :value="1"
                  v-model="params.sign_talent_agency"
                />
                <span>{{ $t("是") }}</span>
              </div>
              <div @click.stop="params.sign_talent_agency = 2">
                <input
                  type="radio"
                  name="sign_talent_agency"
                  :value="2"
                  v-model="params.sign_talent_agency"
                />
                <span>{{ $t("否") }}</span>
              </div>
            </div>
            <input
              type="text"
              :placeholder="$t('请输入你的经纪公司')"
              class="v"
              v-model="params.talent_agency_name"
              v-if="params.sign_talent_agency == 1"
            />
            <div class="msg" v-if="!params.sign_talent_agency">
              {{ error.sign_talent_agency }}
            </div>
            <div class="msg" v-else>
              {{ error.talent_agency_name }}
            </div>
          </div>
          <template v-if="params.sign_talent_agency == 1">
            <div class="col-12 col-sm-6 col-md-4 field">
              <div class="t">
                <span class="m">*</span>
                <span>{{ $t("邮箱") }}</span>
              </div>
              <input
                type="text"
                :placeholder="$t('请输入你的经纪公司邮箱')"
                class="v"
                v-model="params.talent_agency_email"
              />
              <div class="msg">{{ error.talent_agency_email }}</div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 field">
              <div class="t">
                <span class="m">*</span>
                <span>{{ $t("其他联系方式") }}</span>
              </div>
              <input
                type="text"
                :placeholder="$t('Whatsapp或者Telegrame或者line')"
                class="v"
                v-model="params.talent_agency_contact"
              />
              <div class="msg">{{ error.talent_agency_contact }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="submit">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="msg">{{ msg }}</div>
            <button @click.stop="submit">{{ $t("确认提交") }}</button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6">
            <div class="company">
              <img src="@assets/logo.png" alt="logo" />
              <span>聚量出海&nbsp;版本所有&nbsp;©2022</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-6">
            <div class="about" @click.stop="toAbout">
              {{ $t("关于我们") }}
            </div>
            <div>{{ $t("联系我们：") }}leon.lp@outlook.com</div>
          </div>
        </div>
      </div>
    </footer>
    <div class="success" v-if="show">
      <div class="box">
        <div>
          <div class="icon">
            <img src="@assets/success.png" />
          </div>
          <div class="txt">{{ $t("提交成功") }}</div>
          <div class="btn" @click.stop="reset">{{ $t("确定") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadLanguageAsync } from "@i18n/index";
import { getAccountType, getProductType, Validate } from "@utils/index.js";

export default {
  data() {
    return {
      isLanguage: false,
      // 平台类型选择
      isPlatformType: false,
      platformType: [],
      platformList: [],
      platformNames: [],
      // 账号类型选择
      isAccountType: false,
      accountType: getAccountType(),
      accountList: [],
      accountNames: [],
      // 产品类型选择
      isProductType: false,
      productType: getProductType(),
      productList: [],
      productNames: [],
      // 表单参数
      params: {
        // 平台账号名称
        name: "",
        // 平台
        platform: "",
        // 平台ID
        home_id: "",
        // 账号类型
        tags: "",
        // 账号链接
        home_link: "",
        // 粉丝数量
        fans_num: "",
        // 月均播放量
        monthly_play_num: "",
        // 期望植入价格
        expected_implant_price: "",
        // 期望产品定制价格
        expected_custom_price: "",
        // 产品类型
        cooperation_tags: "",
        // 邮箱
        email: "",
        // 其他联系方式
        other_contact: "",
        // 有无签约经纪公司（1有，2无）
        sign_talent_agency: 1,
        // 经纪公司
        talent_agency_name: "",
        // 邮箱
        talent_agency_email: "",
        // 其他联系方式
        talent_agency_contact: "",
      },
      paramsDefault: "{}",
      // 校验结果对象
      error: {},
      // 提交后的错误信息
      msg: "",
      show: false,
    };
  },
  created() {
    this.initData();
  },
  methods: {
    // 初始化数据
    initData() {
      // 平台类型
      const platformType = ["TikTok", "YouTube", "Fackbook", "Instagram"];
      for (let index = 0; index < platformType.length; index++) {
        this.platformType.push({
          id: index,
          name: platformType[index],
        });
      }
      this.paramsDefault = JSON.stringify(this.params);
    },
    // 获取当前ip所在位置对应的语言信息
    async setLanguage(lang) {
      if (this.$i18n.locale != lang) {
        await loadLanguageAsync(lang);
        this.accountType = getAccountType();
        this.productType = getProductType();
      }
      this.isLanguage = false;
    },
    // 点击获取平台类型
    getPlatformType(item) {
      const index = this.platformList.indexOf(item.id);
      if (index > -1) {
        this.platformList.splice(index, 1);
        this.platformNames.splice(index, 1);
      } else {
        this.platformList.push(item.id);
        this.platformNames.push(item.name);
      }
      this.params.platform = this.platformList.join(",");
      this.isPlatformType = false;
    },
    // 点击获取账号类型
    getAccountType(item) {
      const index = this.accountList.indexOf(item.id);
      if (index > -1) {
        this.accountList.splice(index, 1);
        this.accountNames.splice(index, 1);
      } else {
        this.accountList.push(item.id);
        this.accountNames.push(item.name);
      }
      this.params.tags = this.accountList.join(",");
      this.isAccountType = false;
    },
    // 点击获取产品类型
    getProductType(item) {
      const index = this.productList.indexOf(item.id);
      if (index > -1) {
        this.productList.splice(index, 1);
        this.productNames.splice(index, 1);
      } else {
        this.productList.push(item.id);
        this.productNames.push(item.name);
      }
      this.params.cooperation_tags = this.productList.join(",");
      this.isProductType = false;
    },
    // 提交表单
    async submit() {
      let rules = {
        name: [
          { required: true, message: this.$t("请输入账号名称") },
          { length: 50, message: this.$t("长度在50个字符内") },
        ],
        platform: [{ required: true, message: this.$t("请选择平台") }],
        home_id: [
          { required: true, message: this.$t("请输入平台ID") },
        ],
        tags: [{ required: true, message: this.$t("请选择账号类型") }],
        home_link: [{ required: true, message: this.$t("请输入账号链接") }],
        fans_num: [
          { required: true, message: this.$t("请输入你的粉丝数量") },
          { type: "number", message: this.$t("粉丝数量必须为数字值") },
        ],
        monthly_play_num: [
          { type: "number", message: this.$t("月均播放量必须为数字值") },
        ],
        expected_implant_price: [
          { required: true, message: this.$t("请输入价格") },
          { type: "number", message: this.$t("价格必须为数字值") },
        ],
        expected_custom_price: [
          { type: "number", message: this.$t("期望产品定制价格必须为数字值") },
        ],
        email: [{ required: true, message: this.$t("请输入你的邮箱") }],
        other_contact: [
          { required: true, message: this.$t("Whatsapp或者Telegrame或者line") },
        ],
        sign_talent_agency: [
          { required: true, message: this.$t("请选择是否签约经纪公司") },
        ],
      };
      if (this.params.sign_talent_agency == 1) {
        rules.talent_agency_name = [
          { required: true, message: this.$t("请输入你的经纪公司") },
        ];
        rules.talent_agency_email = [
          { required: true, message: this.$t("请输入你的经纪公司邮箱") },
        ];
        rules.talent_agency_contact = [
          {
            required: true,
            message: this.$t("Whatsapp或者Telegrame或者line"),
          },
        ];
      }
      try {
        this.error = await Validate(this.params, rules);
        this.msg = "";
        $.ajax({
          type: "POST",
          url: "https://mediadev.juliangtec.com/star/form/save",
          data: {
            ...this.params,
            monthly_play_num: Number(this.params.monthly_play_num),
            expected_custom_price: Number(this.params.expected_custom_price),
          },
          success: (res) => {
            if (res.code == 0) {
              this.show = true;
            } else {
              this.msg = res.message;
            }
          },
          error: (error) => {
            this.msg = JSON.stringify(error || {});
          },
        });
      } catch (error) {
        this.error = error;
      }
    },
    // 重置表单数据
    reset() {
      this.isPlatformType = false;
      this.platformList = [];
      this.platformNames = [];
      this.isAccountType = false;
      this.accountList = [];
      this.accountNames = [];
      this.isProductType = false;
      this.productList = [];
      this.productNames = [];
      this.params = JSON.parse(this.paramsDefault);
      this.msg = "";
      this.show = false;
      $("html,body").animate({ scrollTop: 0 }, 200);
    },
    toAbout() {
      location.href = "https://juliangtec.com/H5/about";
    },
  },
};
</script>

<style lang="less">
#app {
  min-height: 100vh;
  background: rgba(245, 247, 249, 1);
}

.banner {
  height: 600px;
  font-family: Alibaba PuHuiTi-Regular, Alibaba PuHuiTi;
  color: rgba(255, 255, 255, 1);
  background-image: url("./assets/banner.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .bg {
    .size(100%, 100%);
    background-image: url("./assets/banner.png");
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
    box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.05),
      0 0.9px 1.7px rgba(0, 0, 0, 0.1), 0 1.8px 3.5px rgba(0, 0, 0, 0.12),
      0 3.7px 7.3px rgba(0, 0, 0, 0.16), 0 10px 20px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    transition: 0.5s ease;
    .fa(center);

    &:hover {
      box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.1),
        0 0.9px 1.7px rgba(0, 0, 0, 0.15), 0 1.8px 3.5px rgba(0, 0, 0, 0.17),
        0 3.7px 7.3px rgba(0, 0, 0, 0.21), 0 10px 20px rgba(0, 0, 0, 0.25);
    }

    .title {
      font-size: 48px;
      line-height: 56px;
      font-weight: bold;
    }

    .text {
      padding-top: 12px;
      font-size: 24px;
      line-height: 28px;
      font-weight: 400;
    }
  }
}

.introduce {
  position: relative;
  padding: 40px 0;

  .content {
    position: relative;
    padding: 32px 0;
    font-family: Microsoft YaHei UI-Bold, Microsoft YaHei UI;
    color: rgba(19, 20, 20, 1);

    .title {
      padding-bottom: 8px;
      font-size: 24px;
      line-height: 36px;
      font-weight: bold;
      .flex(space-between, center);

      .lang {
        position: relative;
        margin-right: calc(var(--bs-gutter-x) * -0.5);
        padding: 10px 16px;
        background: rgba(255, 255, 255, 1);
        border-radius: 6px;

        > div {
          .fa(center);
          cursor: pointer;
        }

        span {
          font-size: 16px;
          line-height: 16px;
          font-weight: 400;
        }

        img {
          display: block;
          margin-left: 8px;
          .size(9px, 5.5px);
        }

        .bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: default;
          z-index: 6;
        }

        ul {
          position: absolute;
          top: 36px;
          left: 0;
          right: 0;
          margin: 8px 0 0;
          padding: 8px 0;
          background: rgba(255, 255, 255, 1);
          z-index: 8;

          li {
            padding: 0 20px;
            height: 36px;
            font-size: 14px;
            line-height: 21px;
            font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
            font-weight: 400;
            color: rgba(19, 20, 20, 1);
            list-style: none;
            cursor: pointer;
            .fa(center);

            &:hover,
            &.active {
              color: rgba(64, 158, 255, 1);
              background: rgba(217, 236, 255, 1);
            }
          }
        }
      }
    }

    .text {
      padding-top: 16px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
    }
  }
}

.frm {
  position: relative;
  padding-bottom: 24px;

  .info {
    padding: 32px 0;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;

    .tit {
      padding-bottom: 8px;
      font-size: 16px;
      line-height: 24px;
      font-family: Microsoft YaHei UI-Bold, Microsoft YaHei UI;
      font-weight: bold;
      color: rgba(19, 20, 20, 1);
    }

    .field {
      position: relative;
      padding-top: 24px;

      .t {
        padding-bottom: 8px;
        font-size: 14px;
        line-height: 21px;
        font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
        font-weight: 400;
        color: rgba(19, 20, 20, 1);
        .fa(center);

        .m {
          padding-right: 4px;
          color: rgba(245, 69, 5, 1);
        }

        > div {
          margin-left: 16px;
          cursor: pointer;
          .fa(center);

          > input {
            margin-right: 8px;
            .size(14px, 14px);
            cursor: pointer;
          }
        }

        > div:last-child {
          margin-left: 8px;
        }
      }

      .s {
        position: relative;

        .v {
          padding-right: 40px;
        }

        .icon {
          position: absolute;
          top: 50%;
          right: 8px;
          transform: translateY(-50%);
          .size(24px, 24px);
          cursor: pointer;
        }

        .bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: default;
          z-index: 6;
        }

        > ul {
          position: absolute;
          left: 0;
          right: 0;
          margin: 8px 0 0;
          padding: 8px 0;
          max-height: 176px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.04),
            0px 2px 6px 1px rgba(0, 0, 0, 0.06),
            0px 0px 4px 1px rgba(0, 0, 0, 0.08);
          border-radius: 4px;
          z-index: 10;
          overflow: hidden;
          overflow-y: auto;
          z-index: 8;

          li {
            padding: 0 20px;
            height: 32px;
            font-size: 14px;
            line-height: 21px;
            font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
            font-weight: 400;
            color: rgba(19, 20, 20, 1);
            list-style: none;
            cursor: pointer;
            .flex(space-between, center);

            &:hover,
            &.active {
              color: rgba(64, 158, 255, 1);
              background: rgba(217, 236, 255, 1);
            }

            img {
              .size(12px, 12px);
            }
          }
        }
      }

      .v {
        display: block;
        padding: 0 16px;
        .size(100%, 40px);
        font-size: 14px;
        line-height: 21px;
        font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
        font-weight: 400;
        color: rgba(19, 20, 20, 1);
        background: rgba(255, 255, 255, 1);
        border-radius: 4px;
        border: 1px solid rgba(220, 223, 230, 1);
        outline: none;
        cursor: pointer;

        &::-webkit-input-placeholder {
          color: rgba(192, 196, 204, 1);
        }

        &:focus {
          border-color: rgba(64, 158, 255, 1);
        }
      }

      .msg {
        position: absolute;
        bottom: -16px;
        font-size: 12px;
        line-height: 12px;
        color: #f56c6c;
      }
    }
  }
}

.submit {
  position: relative;
  padding: 16px 0 32px;

  .col-12 {
    position: relative;
    .fj(center);

    .msg {
      position: absolute;
      top: -20px;
      font-size: 14px;
      line-height: 14px;
      color: #f56c6c;
    }

    button {
      .size(162px, 40px);
      font-size: 14px;
      line-height: 22px;
      font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      background: #409eff;
      border-radius: 4px;
      border: none;
      outline: none;
    }
  }
}

footer {
  height: 70px;
  font-size: 14px;
  line-height: 70px;
  color: #131414;
  background: rgba(255, 255, 255, 1);
  .fa(center);

  .col-12 {
    .fa(center);
  }

  .col-12:last-child {
    justify-content: flex-end;
  }

  .company {
    .fa(center);

    > img {
      display: block;
      .size(32px, 32px);
    }

    > span {
      margin-left: 8px;
    }
  }

  .about {
    margin-right: 15px;
    cursor: pointer;
  }
}

@keyframes fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.success {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  animation: fade-in 0.3s;

  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 40%;
    background: rgba(245, 247, 249, 1);
    border-radius: 8px;
    z-index: 6;
    .flex(center, center);

    .icon {
      .fj(center);

      img {
        display: block;
        .size(160px, 160px);
      }
    }

    .txt {
      padding: 8px 0;
      font-size: 24px;
      line-height: 28px;
      font-family: Alibaba PuHuiTi-Regular, Alibaba PuHuiTi;
      font-weight: 400;
      color: rgba(192, 196, 204, 1);
      text-align: center;
    }

    .btn {
      display: block;
      padding: 0;
      .size(162px, 40px);
      font-size: 14px;
      line-height: 40px;
      font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      background: #409eff;
    }
  }
}

@media (max-width: 576px) {
  .banner {
    height: 16rem;

    .bg {
      text-align: center;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }

      .title {
        font-size: 0.96rem;
        line-height: 1.12rem;
        font-family: Alibaba PuHuiTi-Bold, Alibaba PuHuiTi;
      }

      .text {
        padding-top: 0.48rem;
        font-size: 0.56rem;
        line-height: 0.64rem;
      }
    }
  }

  .introduce {
    padding: 0.64rem 0;

    .content {
      padding: 0.96rem 0;

      .title {
        padding-bottom: 0.32rem;
        font-size: 0.96rem;
        line-height: 1.44rem;

        .lang {
          margin-right: 0;
          padding: 0.4rem 0.64rem;
          border-radius: 0.24rem;

          span {
            font-size: 0.64rem;
            line-height: 0.64rem;
          }

          img {
            margin-left: 0.32rem;
            .size(0.36rem, 0.22rem);
          }

          ul {
            top: 1.44rem;
            margin: 0.32rem 0 0;
            padding: 0.32rem 0;

            li {
              padding: 0 0.8rem;
              height: 1.44rem;
              font-size: 0.56rem;
              line-height: 0.84rem;
            }
          }
        }
      }

      .text {
        padding-top: 0.64rem;
        font-size: 0.64rem;
        line-height: 0.96rem;
      }
    }
  }

  .frm {
    padding-bottom: 0.64rem;

    .info {
      padding: 0.96rem 0 1.2rem;
      border-radius: 0.24rem;

      .tit {
        padding-bottom: 0.32rem;
        font-size: 0.64rem;
        line-height: 0.84rem;
      }

      .field {
        padding-top: 0.96rem;

        .t {
          padding-bottom: 0.32rem;
          font-size: 0.56rem;
          line-height: 0.84rem;

          .m {
            padding-right: 0.16rem;
          }

          > div {
            margin-left: 0.64rem;

            > input {
              margin-right: 0.32rem;
              .size(0.56rem, 0.56rem);
            }
          }

          > div:last-child {
            margin-left: 0.32rem;
          }
        }

        .s {
          .v {
            padding-right: 1.6rem;
          }

          .icon {
            right: 0.32rem;
            .size(0.96rem, 0.96rem);
          }

          > ul {
            margin: 0.32rem 0 0;
            padding: 0.32rem 0;
            max-height: 7.04rem;
            box-shadow: 0px 0.16rem 0.32rem 0.08rem rgba(0, 0, 0, 0.04),
              0px 0.08rem 0.24rem 0.04rem rgba(0, 0, 0, 0.06),
              0px 0px 0.16rem 0.04rem rgba(0, 0, 0, 0.08);
            border-radius: 0.16rem;

            li {
              padding: 0 0.8rem;
              height: 1.28rem;
              font-size: 0.56rem;
              line-height: 0.84rem;

              img {
                .size(0.48rem, 0.48rem);
              }
            }
          }
        }

        .v {
          padding: 0 0.64rem;
          height: 1.6rem;
          font-size: 0.56rem;
          line-height: 0.84rem;
          border-radius: 0.16rem;
        }

        .msg {
          bottom: -0.64rem;
          font-size: 0.48rem;
          line-height: 0.48rem;
        }
      }
    }
  }

  .submit {
    padding: 0.32rem 0 1.28rem;

    .col-12 {
      .msg {
        top: -0.8rem;
        font-size: 0.56rem;
        line-height: 0.56rem;
      }

      button {
        .size(6.48rem, 1.6rem);
        font-size: 0.56rem;
        line-height: 0.88rem;
        border-radius: 0.16rem;
      }
    }
  }

  .success {
    .box {
      width: 80%;
      border-radius: 0.32rem;

      .icon {
        img {
          .size(6.4rem, 6.4rem);
        }
      }

      .txt {
        padding: 0.32rem 0;
        font-size: 0.96rem;
        line-height: 1.12rem;
      }

      .btn {
        .size(6.48rem, 1.6rem);
        font-size: 0.56rem;
        line-height: 1.6rem;
      }
    }
  }

  footer {
    padding: 0.48rem 0;
    height: auto;
    font-size: 0.56rem;
    line-height: 0.56rem;

    .col-12 {
      justify-content: center;
    }

    .col-12:last-child {
      padding-top: 0.4rem;
      justify-content: center;
    }

    .company {
      > img {
        .size(1.28rem, 1.28rem);
      }

      > span {
        margin-left: 0.32rem;
      }
    }

    .about {
      margin-right: 0.6rem;
    }
  }
}

.adapterMixin();
</style>
