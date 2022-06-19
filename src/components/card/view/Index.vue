<template>
  <component :is="curentComponent" v-bind="attrs" />
</template>
<script lang="tsx">
import { defineComponent, PropType, useAttrs, ref, toRefs, SetupContext } from 'vue';
import { useTopBottomCard as TopBottomCard, useLeftRightCard as LeftRightCard } from '../hooks';
import { CardType } from '../index';

export default defineComponent({
  name: 'CardWrap',
  components: {
    TopBottomCard,
    LeftRightCard,
  },
  props: {
    cardType: {
      type: String as PropType<string>,
      default: CardType.TopBottomCard,
    },
  },
  setup(props, ctx: SetupContext) {
    const { attrs } = ctx;
    const { cardType } = toRefs(props);
    const curentComponent = ref(cardType.value);
    return {
      curentComponent,
      attrs,
    };
  },
});
</script>

<style lang="less">
@import './index.less';
</style>
