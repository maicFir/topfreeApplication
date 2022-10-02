<script lang="tsx">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ErrorComponent',
  render() {
    return <div class="error-page">加载错误，请重新加载</div>;
  },
});
</script>

<style lang="less" scoped>
.error-page {
  text-align: center;
  padding: 0.5rem 0;
}
</style>
