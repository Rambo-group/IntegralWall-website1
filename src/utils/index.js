/**
 * @method 获取指定目录下所有的文件返回一个对象
 * @param {Array} files 指定目录下所有文件的对象
 */
export const getModule = (files) => {
  if (!files) return;
  return files.keys().reduce((modules, modulePath) => {
    // 获取名字
    const name = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1").split("/")[0];
    // 获取配置
    const value = files(modulePath);
    modules[name] = value.default || value;
    return modules;
  }, {});
};

/**
 * @method 获取当前语言版本
 */
export const getLanguage = () => {
  //语言判断
  let lang = "en"; // 英语
  let l = navigator.appName == 'Netscape' ? navigator.language : navigator.browserLanguage
  if (l.indexOf('th') > -1) {// 泰语
    lang = 'th'
  } else if (l.indexOf('es') > -1) { //西班牙语
    lang = 'es'
  } else if (l.indexOf('vi') > -1) { // 越语
    lang = 'vi'
  } else if (l.indexOf('id') > -1) { // 印尼语
    lang = 'id'
  } else if (l.indexOf('pt') > -1) { // 葡萄牙语
    lang = 'pt'
  } else if (l.indexOf('en') > -1) { // 英语
    lang = 'en'
  }
  return lang;
};
