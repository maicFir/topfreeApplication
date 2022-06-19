<script lang="tsx">
import '@/assets/font/iconfont';
import { defineComponent, PropType, useAttrs } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String as PropType<string>,
      default: '',
      required: true,
    },
    iconClass: {
      type: String as PropType<string>,
      default: '',
      required: false,
    },
  },
  render() {
    const { name, iconClass } = this;
    return (
      <svg class={`icon ${iconClass}`} aria-hidden="true" {...useAttrs()}>
        <use xlinkHref={`#icon-${name}`}></use>
      </svg>
    );
  },
});
</script>

<style lang="less" scoped>
.icon {
  fill: currentColor;
  overflow: hidden;
}
</style>
