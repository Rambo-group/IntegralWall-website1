import { loadLanguageAsync } from "@i18n/index";

/**
 * @method 点击修改语言信息
 */
const Lang = {
  bind(el, { value }) {
    el.$value = value
    el.handler = () => {
      if (!el.$value) return
      loadLanguageAsync(el.$value)
    }
    // 绑定点击事件
    el.addEventListener('click', el.handler)
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler)
  },
}

export default Lang
