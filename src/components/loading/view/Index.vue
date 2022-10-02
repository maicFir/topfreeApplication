<script lang="tsx">
import { defineComponent, PropType } from 'vue';
import loading from '@/assets/images/lazy/loading.svg';

export default defineComponent({
  name: 'LoaddingComponent',
  render() {
    return (
      <div>
        <img src={loading} />
      </div>
    );
  },
});
</script>

<style lang="less" scoped></style>
