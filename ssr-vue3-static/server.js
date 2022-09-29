import express from 'express';
import { createApp } from './app.js';
import { renderToString } from 'vue/server-renderer'; // Vue的服务端渲染API

// 注意，起服务的时候，需要 cd 到当前路径下，否则 source 里面只有一个index，没有其他文件，于是 src="/client.js" 路径访问不到
const server = express();

// 注意这里的访问路径 '/' 不能写成 '*'
server.get('/', (req, res)=>{
  const app = createApp();

  renderToString(app).then((html)=>{ 
    // 该API接收vue实例，返回一个Promise，resolve的时候得到应用渲染的html
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Vue3 SSR TEST</title>
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>
        <script type="module" src="/client.js"></script>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `);
  })
});

server.use(express.static('.')); // 托管客户端文件

const port = process.env.PORT || 8080;
server.listen(port, ()=>{
  console.log(`server start at localhost:${port}`);
})