/* eslint-disable no-useless-catch */
import { reactive, toRefs, onMounted, watch } from 'vue';
import { querytopfreeapplicationsProxy, querytopgrosisingListProxy } from '@/services/proxy';

export const useTopfreeApplications = () => {
  const state = reactive({
    topfreelist: [], // 顶部列表
    topgrosisingList: [], // 下面列表
    condation: {
      key: '',
    },
  });
  const cacheData = reactive<{ topfreelist: any; topgrosisingList: any }>({
    topfreelist: [],
    topgrosisingList: [],
  });
  const featchFreeApplication = async () => {
    const res = await querytopfreeapplicationsProxy({ limit: 30 });
    state.topfreelist = res;
    try {
      cacheData.topfreelist = JSON.parse(JSON.stringify(res));
    } catch (err) {
      throw err;
    }
  };
  const featchtopgrosisingList = async () => {
    const res = await querytopgrosisingListProxy({ limit: 30 });
    state.topgrosisingList = res;
    try {
      cacheData.topgrosisingList = JSON.parse(JSON.stringify(res));
    } catch (error) {
      throw error;
    }
  };
  // todo 条件筛选
  watch(
    () => state.condation.key,
    (v) => {
      if (v) {
        state.topfreelist = cacheData.topfreelist.filter((s) => s.title.includes(v));
        state.topgrosisingList = cacheData.topgrosisingList.filter((s) => s.title.includes(v));
      } else {
        state.topfreelist = cacheData.topfreelist;
        state.topgrosisingList = cacheData.topgrosisingList;
      }
    }
  );
  onMounted(() => {
    featchFreeApplication();
    featchtopgrosisingList();
  });
  return {
    ...toRefs(state),
  };
};
