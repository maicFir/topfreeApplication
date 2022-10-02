<script lang="tsx">
import { defineComponent, PropType, toRefs } from 'vue';

export default defineComponent({
  name: 'DataEmpty',
  props: {
    emptyText: {
      type: String as PropType<string>,
      default: '暂无数据',
    },
  },
  setup(props, ctx) {
    const { emptyText } = toRefs(props);
    return {
      emptytext: emptyText,
    };
  },
  render() {
    const { emptytext } = this;
    return <div class="empty-text">{emptytext}</div>;
  },
});
</script>

<style lang="less" scoped>
.empty-text {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e5e5e5;
  font-size: 0.3rem;
}
</style>
