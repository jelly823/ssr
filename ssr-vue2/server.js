import express from 'express';
import Vue from 'vue';
import path from 'path';
import { createRenderer } from 'vue-server-renderer';
import fs from 'fs';

const app = express();
const __dirname = path.resolve();
const resolve = file => path.resolve(__dirname, file); // cd传入的路径参数，返回绝对路径
const templatePath = resolve('./index.template.html');

const renderer = createRenderer({
  template: fs.readFileSync(templatePath, 'utf-8')
});


app.get('*', (req, res)=>{
  render(req, res);
});

function render(req, res){
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>req.url:{{ url }}</div>`
  });
  renderer.renderToString(app, (err, html)=>{
    if(err){
      res.status(500).end('Internal Server Error');
      return;
    } else {
      res.send(`${html}`);
    }
  });
}

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
  console.log(`server start at localhost:${port}`);
})