# 服务器渲染
- CSR 客户端/浏览器渲染 Client Side Render：浏览器下载JS和html模版，页面内容由浏览器来渲染展示。

- SSR 服务端/服务器渲染 Service Side Render：页面内容由服务器渲染好，返回给浏览器展示。

- SSR 相比 客户端SPA单页应用的优势：

  - 更快的首屏加载：服务器渲染的HTML无需等所有js下载执行完成后再展示
  - 统一的开发技术：不需要在后端模版系统和前端框架之间切换
  - 更好的SEO：搜索引擎爬虫可以直接看到完全渲染的页面

- SSR vs SSG：SSG，**Static**-Site Generation。预渲染。如果服务端渲染一个页面所需要的数据对每个用户来说都是相同的，那么可只渲染一次，提前在构建过程中完成，而非每次请求进来都渲染页面。预渲染的页面生成后作为静态HTML被服务器托管。

## ssr-vue2
工具：vue2 vue-server-renderer

功能：浏览器访问localhost:8080下的不同path，服务端渲染，在页面展示url

```BASH
npm i -S vue@2
npm i -S vue-server-renderer
cd ssr-vue2
node server.js
```

## ssr-vue3-interactive
工具：vue3 vue/server-renderer

功能：服务器渲染，客户端激活（Vue创建一个与服务端完全相同的应用实例，用app.js，然后在每个组件与它应该控制的DOM节点相匹配，并添加DOM监听）

```BASH
npm i -S vue@3
cd ssr-vue3-interactive
node server.js
```

## ssr-vue3-static
工具：vue3 vue/server-renderer

功能：服务器渲染，返回给客户端静态页面

```BASH
npm i -S vue@3
cd ssr-vue3-static
node server.js
```

## 可能出现的报错

[报错] Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec.

[检查] 看发送请求的路径是否正确，在ssr-vue3中
```JavaScript
server.get('/', ()=>{}); // 可以
server.get('*', ()=>{}); // 不行
```

