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
assetsPublicPath: './'。（两处）

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

设置字体
font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;

在safari下hover后的border-radius会短暂消失
设置`transform: rotate(0deg)`即可

慢慢进入需要设置opacity和visibility
transition: .8s opacity,.8s visibility;

```angularjs

```

