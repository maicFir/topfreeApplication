<template>
  <div class="recommend-list" v-if="listData.length > 0">
    <ul>
      <card-item
        :title="item.title"
        :star-source="item.starSource"
        :hot-num="item.hotNum"
        :sub-title="item.subTitle"
        :icon-url="item.iconUrl"
        :index="index"
        card-type="LeftRightCard"
        v-for="(item, index) in listData"
        :key="item.title"
      >
      </card-item>
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
.recommend-list {
  overflow-y: auto;
}
</style>
