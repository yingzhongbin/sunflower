使用sss 
1. lang="scss"
2.npm install sass-loader node-sass --save-dev


全局查找 ctrl shift f

加入jquery
npm i jquery --save
在build/webpack.base.conf.js中添加
// 在开头引入webpack，后面的plugins那里需要
`var webpack = require('webpack')`
在module.exports = {}添加
```
plugins: [
  new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
  })
]
```


建立可用文件夹dist
npm run build

但建立后的文件需要一个服务器才能行
所以在config/index.js中修改
assetsPublicPath: '/'为
assetsPublicPath: './'。（build里的）

设置保证imgContainer的整体位置不缩小
```angularjs
> div.imgContainer{
  width:285px;
  height:285px;
  flex-shrink: 0;

}
> div.mlr-container{
  flex-shrink: 1;
}

```


