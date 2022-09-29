// 通用代码
import { createSSRApp } from 'vue'; // 创建服务端渲染的app，当客户端激活时，也需要创建相同的应用实例

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`,
  });
}
