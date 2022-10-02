<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup(props, { emit, expose, slots, attrs }) {
    return {};
  },
  render() {
    return (
      <div class="container">
        <router-view></router-view>
      </div>
    );
  },
});
</script>

<style lang="less">
html,
body {
  height: 100%;
  background-color: #fff;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
#app {
  max-width: 12.8rem;
  margin: 0 auto;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
