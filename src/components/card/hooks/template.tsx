import { defineComponent, PropType, useAttrs, reactive, SetupContext } from 'vue';
// 上下结构
export const useTopBottomCard = {
  props: {
    title: {
      type: String as PropType<string>,
      default: () => '',
    },
    subTitle: {
      type: String as PropType<string>,
      default: () => '',
    },
    iconUrl: {
      type: String as PropType<string>,
      default: '',
    },
  },
  render() {
    const { title, subTitle, iconUrl } = this;
    return (
      <li class="top-bottom-card" {...useAttrs()}>
        <a href="javascript:void(0)" class="top-bottom-card-item">
          <div class="img-icon">
            <img v-lazy-img={iconUrl} alt="" />
          </div>
          <div class="content">
            <p class="content-title">{title}</p>
            <p class="content-sub-title">{subTitle}</p>
          </div>
        </a>
      </li>
    );
  },
};
// todo 根据评分显示星星个数
function starComponnet(starSource) {
  // 最大星星数
  const defaultStartNum = 5;
  const svgIconStyle = {
    width: '14',
    height: '14',
  };
  const startArr = Array(defaultStartNum);
  let ret = [];
  if (starSource >= defaultStartNum) {
    ret = startArr.map((v) => (
      <svg-icon name="star-full" color="#f3cd51" {...svgIconStyle}></svg-icon>
    ));
  }
  const calcRoundStar = Math.round(starSource);
  // calcRoundStar(3,3.5) 算3颗星，calcRoundStar[3.5,4) 3个颗半星 如果正好相等，就是calcRoundStar颗星
  if (calcRoundStar === starSource) {
    for (let i = 0; i < defaultStartNum; i++) {
      if (i <= calcRoundStar - 1) {
        ret.push(<svg-icon name="star-full" color="#f3cd51" {...svgIconStyle}></svg-icon>);
      } else {
        ret.push(<svg-icon name="star" color="#e5e5e5" {...svgIconStyle}></svg-icon>);
      }
    }
  } else if (calcRoundStar < starSource || calcRoundStar > starSource) {
    for (let i = 0; i < defaultStartNum; i++) {
      if (i < calcRoundStar) {
        ret.push(<svg-icon name="star-full" color="#f3cd51" {...svgIconStyle}></svg-icon>);
      } else {
        ret.push(<svg-icon name="star" color="#e5e5e5" {...svgIconStyle}></svg-icon>);
      }
    }
  }
  if (calcRoundStar > starSource) {
    // 替换当前为半个星星
    ret.splice(
      calcRoundStar - 1,
      1,
      <svg-icon name="star-half" color="#f3cd51" {...svgIconStyle}></svg-icon>
    );
  }
  return ret;
}
// 左右结构
export const useLeftRightCard = {
  props: {
    title: {
      type: String as PropType<string>,
      default: () => '',
    },
    subTitle: {
      type: String as PropType<string>,
      default: () => '',
    },
    starSource: {
      type: Number as PropType<number | string>,
      default: 5,
    },
    hotNum: {
      type: Number as PropType<number>,
      default: 0,
    },
    iconUrl: {
      type: String as PropType<string>,
      default: '',
    },
    index: {
      type: Number as PropType<number>,
      default: '',
    },
  },
  setup() {
    // 偶数项图标圆角
    const isOdd = (index) => {
      return index % 2 === 0 ? 'img-icon-radius' : '';
    };
    return {
      isOdd,
    };
  },
  render() {
    const { title, subTitle, starSource, hotNum, iconUrl, index, isOdd } = this;
    const starInstance = starComponnet(Number(starSource));

    return (
      <li class="left-right-card" {...useAttrs()}>
        <a href="javascript:void(0)" class="left-right-card-item">
          <div class="number">{index + 1}</div>
          <div class={`img-icon ${isOdd(index + 1)}`}>
            <img v-lazy-img={iconUrl} alt="" />
          </div>
          <div class="content">
            <p class="content-title">{title}</p>
            <p class="content-sub-title">{subTitle}</p>
            <p class="content-mark">
              {starInstance.map((item) => item)}
              <i class="content-hot-num"> ({hotNum})</i>
            </p>
          </div>
        </a>
      </li>
    );
  },
};
