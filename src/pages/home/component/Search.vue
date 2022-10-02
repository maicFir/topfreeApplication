<template>
  <div class="search-bar">
    <div class="inner">
      <svg-icon name="sousuo" width="20" height="20" class="search-icon" />
      <input
        type="text"
        v-model="searchVal"
        @input="handleVal"
        class="input-search"
        placeholder="Search..."
      />
      <svg-icon
        name="guanbi"
        width="20"
        height="20"
        class="close-icon"
        @click="handleClear"
        v-if="searchVal"
      />
      <!-- <i class="iconfont icon-shanchu"></i> -->
      <!--unicode-->
      <i class="iconfont maic-del" unicode="&#xe718;"></i>
    </div>
  </div>
</template>

<script lang="tsx">
import { PropType, toRefs, watch, ref } from 'vue';

export default {
  name: 'SearchBar',
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    const { modelValue } = toRefs(props);
    const searchVal = ref(modelValue.value);
    const { emit } = ctx;
    watch(
      () => props.modelValue,
      (n) => {
        searchVal.value = n;
      }
    );
    const handleVal = (evt) => {
      const val = evt.target.value || evt.srcElement.value;
      emit('update:modelValue', val);
    };
    const handleClear = () => {
      searchVal.value = '';
      emit('update:modelValue', '');
    };
    return {
      handleVal,
      searchVal,
      handleClear,
    };
  },
};
</script>

<style lang="less" scoped>
.search-bar {
  padding: 0.3rem 0.15rem 0.2rem;
  position: sticky;
  top: 0;
  background-color: #fff;
  .inner {
    position: relative;
    background-color: #f4f4f4;
    padding: 10px 0;
    display: flex;
    align-items: center;
    border-radius: 15px;
    overflow: hidden;
    .close-icon {
      position: absolute;
      right: 0.15rem;
      top: 50%;
      transform: translateY(-50%);
    }
    .icon-shanchu {
      position: absolute;
      right: 0.65rem;
      top: 50%;
      transform: translateY(-50%);
    }
    .maic-del {
      &::before {
        content: attr(unicode);
      }
    }
  }
  .search-icon {
    position: absolute;
    top: 50%;
    left: 0.12rem;
    color: #b3bac1;
    transform: translateY(-50%);
  }
  .input-search {
    outline: none;
    height: 0.2rem;
    line-height: 0.2rem;
    width: 100%;
    text-indent: 0.06rem;
    padding: 0 0.5rem;
    border: none;
    background-color: transparent;
    font-size: 0.14rem;
    &::placeholder {
      color: #9da8b0;
    }
  }
}
</style>
