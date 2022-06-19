<script lang="tsx">
import { defineComponent } from 'vue';
import { SearchPageCompoent, RecommendComponent, ListComponent } from './component';
import { useTopfreeApplications } from './hooks';

export default defineComponent({
  name: 'HomePage',
  components: {
    ASearch: SearchPageCompoent,
    ARecommend: RecommendComponent,
    AList: ListComponent,
  },
  setup(props, ctx) {
    const { topfreelist, topgrosisingList, condation } = useTopfreeApplications();

    return {
      topfreelist,
      topgrosisingList,
      condation,
    };
  },
  render() {
    const { topfreelist, topgrosisingList, condation } = this;
    return (
      <div class="home-page-wrap">
        <a-search v-model={condation.key}></a-search>
        <a-recommend listData={topfreelist}></a-recommend>
        {topgrosisingList.length > 0 || topfreelist.length > 0 ? (
          <a-list listData={topgrosisingList}></a-list>
        ) : (
          <c-data-empty></c-data-empty>
        )}
      </div>
    );
  },
});
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
