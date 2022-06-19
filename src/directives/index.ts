/* eslint-disable no-param-reassign */
const loading = require('@/assets/images/lazy/loading.gif');
const errorImg = require('@/assets/images/lazy/error.svg');

export const imgLzayLaod = {
  name: 'lazy-img',
  el: null,
  io: null,
  handler: {
    created(el, binding, vnode, prevVnode) {
      imgLzayLaod.el = el;
      imgLzayLaod.init(el, binding.value);
      if ('IntersectionObserver' in window) {
        imgLzayLaod.observe(imgLzayLaod.el);
      }
      // 图片资源加载错误处理
      el.onerror = () => {
        el.src = errorImg;
      };
    },
    unmounted() {
      imgLzayLaod.io.unobserve(imgLzayLaod.el);
    },
  },
  init(el, val) {
    el.setAttribute('data-src', val);
    el.setAttribute('src', loading);
  },
  observe(el) {
    const io = new IntersectionObserver((entries) => {
      const realSrc = el.dataset.src;
      const [item] = entries;
      const { isIntersecting } = item;
      if (isIntersecting && realSrc) {
        el.src = realSrc;
      } else {
        el.src = realSrc;
      }
    });
    io.observe(imgLzayLaod.el);
    imgLzayLaod.io = io;
  },
};

const directives = {
  imgLzayLaod,
};
export const installDirective = (app) => {
  // todo 注册指令
  Object.keys(directives).forEach((key) => {
    app.directive(directives[key].name, directives[key].handler);
  });
};
