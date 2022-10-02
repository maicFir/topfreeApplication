/**
 * @deprecated 异步加载组件
 */
import { defineAsyncComponent } from 'vue';
import SpinLoading from '@/components/loading';
import ErrorComponent from '@/components/error';

class AsyncCompoment {
  options: {
    // 异步组件加载时使用的组件
    loadingComponent: any;
    // 加载失败时使用的组件
    errorComponent: any;
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: number;
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: number;
  };

  constructor() {
    this.options = {
      // 异步组件加载时使用的组件
      loadingComponent: SpinLoading,
      // 加载失败时使用的组件
      errorComponent: ErrorComponent,
      // 展示加载时组件的延时时间。默认值是 200 (毫秒)
      delay: 200,
      // 如果提供了超时时间且组件加载也超时了，
      // 则使用加载失败时使用的组件。默认值是：`Infinity`
      timeout: 3000,
    };
  }

  load(component: any, config = {}) {
    return defineAsyncComponent({
      ...this.options,
      ...config,
      loader: () => component,
    });
  }
}
export default new AsyncCompoment();
