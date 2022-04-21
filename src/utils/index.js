import i18n from '@i18n/index'

/**
 * 获取账号类型数组
 * @returns {Array}
 */
export const getAccountType = () => {
  let list = []
  // 账号类型
  const accountType = [
    i18n.t("美妆"),
    i18n.t("颜值达人"),
    i18n.t("美食"),
    i18n.t("剧情搞笑"),
    i18n.t("生活"),
    i18n.t("时尚"),
    i18n.t("母婴亲子"),
    i18n.t("测评"),
    i18n.t("旅行"),
    i18n.t("汽车"),
    i18n.t("运动健身"),
    i18n.t("萌宠"),
    i18n.t("游戏"),
    i18n.t("家具家装"),
    i18n.t("音乐"),
    i18n.t("舞蹈"),
    i18n.t("二次元"),
    i18n.t("科技数码"),
    i18n.t("教育培训"),
    i18n.t("才艺技能"),
    i18n.t("影视娱乐"),
    i18n.t("艺术文化"),
    i18n.t("财经投资"),
    i18n.t("房产"),
    i18n.t("情感"),
    i18n.t("三农"),
    i18n.t("园艺"),
    i18n.t("随拍"),
    i18n.t("图文控"),
    i18n.t("其他")
  ]
  for (let index = 0; index < accountType.length; index++) {
    list.push({
      id: index,
      name: accountType[index]
    })
  }
  return list
}

/**
 * 获取产品类型数组
 * @returns {Array}
 */
export const getProductType = () => {
  let list = []
  // 产品类型
  const productType = [
    i18n.t("3C电器"),
    i18n.t("零售"),
    i18n.t("游戏"),
    i18n.t("美妆"),
    i18n.t("母婴宠物"),
    i18n.t("日化"),
    i18n.t("工具类软件"),
    i18n.t("金融业"),
    i18n.t("出行旅游"),
    i18n.t("餐饮服务"),
    i18n.t("食品饮料"),
    i18n.t("服装配饰"),
    i18n.t("生活服务"),
    i18n.t("商务服务"),
    i18n.t("其他")
  ];
  for (let index = 0; index < productType.length; index++) {
    list.push({
      id: index,
      name: productType[index]
    });
  }
  return list
}

/**
 * @method 表单校验方法
 * @param {Object} params - 参数
 * @param {Object} rules - 规则
 * @returns {Array}
 */
export const Validate = async (params, rules) => {
  return new Promise((resolve, reject) => {
    let result = {};
    for (let i in rules) {
      for (let k in rules[i]) {
        const rule = rules[i][k];
        if (rule.required && !params[i]) {
          result[i] = rule.message;
          break;
        }
        if (rule.length && params[i].length > rule.length) {
          result[i] = rule.message;
          break;
        }
        if (rule.type == 'number' && params[i]) {
          if (Object.prototype.toString.call(params[i]) != '[object Number]') {
            result[i] = rule.message;
            break;
          }
        }
      }
    }
    if (Object.keys(result).length > 0) {
      reject(result);
    } else {
      resolve({});
    }
  });
}

/**
 * @method 获取浏览器的语言信息
 * @returns {String}
 */
export const getLanguage = () => {
  //语言判断
  let lang = 'zh'
  let l = navigator.appName == 'Netscape' ? navigator.language : navigator.browserLanguage
  if (l.indexOf('th') > -1) {// 泰语
    lang = 'th'
  } else if (l.indexOf('en') > -1) {// 英语
    lang = 'en'
  } else if (l.indexOf('vi') > -1) {// 越语
    lang = 'vi'
  } else if (l.indexOf('zh') > -1) {// 中文
    lang = 'zh'
  }
  if (l == 'zh-tw' || l == 'zh-TW' || l == 'zh-hk' || l == 'zh-HK') {
    lang = 'zh-TW'
  }
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang')
  }
  return lang
}
