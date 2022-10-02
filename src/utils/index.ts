/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
/**
 * 指定范围内的随机数
 * @param min
 * @param max
 * @returns
 */
export const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

/**
 * 分时函数优化首屏大数据加载
 * @param sourceArr
 * @param callback
 * @param count
 * @param wait
 * @returns
 */
export const timerChunk = (sourceArr, callback, count = 1, wait = 200) => {
  let ret;
  let timer = null;
  const renderData = () => {
    for (let i = 0; i < Math.min(count, sourceArr.length); i += 1) {
      ret = sourceArr.shift();
      callback(ret);
    }
  };
  return () => {
    if (!timer) {
      timer = setInterval(() => {
        // 如果数据取完了，清空定时器
        if (sourceArr.length === 0) {
          clearInterval(timer);
          return;
        }
        renderData();
      }, wait);
    }
  };
};
/**
 * 深拷贝一个对象或者数组
 * 拷贝数组：deepMerge([],targetArr)
 * 拷贝对象：deepMerge({}, target)
 * @param target
 * @param result
 * @returns
 */
export const deepMerge = (result = {}, target) => {
  for (const key in target) {
    if (Reflect.has(target, key)) {
      if (target[key] instanceof Object) {
        result[key] = target[key] instanceof Array ? [] : {};
        deepMerge(target[key], result[key]);
      } else {
        result[key] = target[key];
      }
    }
  }
  return result;
};
