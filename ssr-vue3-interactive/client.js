import { createApp } from './app.js';

// 在激活模式下挂载SSR的应用，会假定
// HTML是预渲染的，执行激活过程，而非挂在新的DOM节点

createApp().mount('#app');
