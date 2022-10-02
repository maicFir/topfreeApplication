<template>
  <div class="recommend" v-if="listData.length > 0">
    <h3>Recommend</h3>
    <ul>
      <card-item
        v-for="item in listData"
        :key="item.title"
        :title="item.title"
        :sub-title="item.subTitle"
        :icon-url="item.iconUrl"
        card-type="TopBottomCard"
      ></card-item>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CardItem from '@/components/card';
import { itemType } from '../types';

export default defineComponent({
  name: 'RecommendPage',
  components: {
    CardItem,
  },
  props: {
    listData: {
      type: Array as PropType<itemType[]>,
      default: () => [],
    },
  },
});
</script>

<style lang="less">
.recommend {
  padding: 0.27rem 0 0.18rem 0.31rem;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
  ul {
    display: flex;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  > h3 {
    font-size: 0.3rem;
    font-weight: normal;
  }
}
.recommend ul::-webkit-scrollbar {
  display: none;
}
</style>
