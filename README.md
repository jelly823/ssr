# 服务器渲染

## ssr-vue2
工具：vue2 vue-server-renderer
功能：浏览器访问localhost:8080下的不同path，服务端渲染，在页面展示url

npm i -S vue@2
npm i -S vue-server-renderer
cd ssr-vue2
node server.js

## ssr-vue3-interactive
工具：vue3 vue/server-renderer
功能：服务器渲染，客户端激活（Vue创建一个与服务端完全相同的应用实例，用app.js，然后在每个组件与它应该控制的DOM节点相匹配，并添加DOM监听）

npm i -S vue@3
cd ssr-vue3-interactive
node server.js

## ssr-vue3-static
工具：vue3 vue/server-renderer
功能：服务器渲染，返回给客户端静态页面

npm i -S vue@3
cd ssr-vue3-static
node server.js