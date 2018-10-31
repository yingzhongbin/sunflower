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

