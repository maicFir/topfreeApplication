# topfreeApplication

popular application in Apple

### 项目简介

基于`webpack5`、`webpack-cli`、`webpack-dev-server`,`vue3`、`vue-router@4`,从 0 到 1 搭建一个项目，不依赖`vue-cli`脚手架，支持`ts`、`tsx`,使用`postcss`对低版本浏览器样式兼容，`babel-loader`对`ts`编译，`eslint`规范项目代码，主要使用`plugin:vue/vue3-strongly-recommended`,`airbnb-base`,`@typescript-eslint/parser`,使用`@babel/preset-env`编译转换`es6`等

---

- js 编译：`babel-loader`、`@babel/core`、`@babel/plugin-transform-runtime`、`@vue/babel-plugin-jsx`
- css 编译: `css-loader`、`less`、`less-loader`、`style-loader`、`postcss-preset-env`
- 代码格式规范: `eslint`、`@typescript-eslint/parser`、`@typescript-eslint/eslint-plugin`
- ts 编译: `ts-loader`、`babel-loader`、`typescript`
- vue3: `vue-loader`、`vue3`、`vue-router`

### 项目使用技术栈

- 💪 `webpack`、`typescript`、`babel`、...
- 🔥 `vue3`、`vue-router@4`、`jsx`、...

### 项目优化点

- 路由懒加载，按需引入，业务组件细粒化抽离，`hooks`、`jsx`、`异步动态组件`构建页面模块
- 阿里矢量图标`svg`，`svg-icon`等业务组件的通用封装
- 使用自定义指令`交叉观察器`懒加载图片
- `webpack`入口依赖文件分包处理以及支持`tree shaking`
- `webpack`静态资源类型加载图片资源，对小图片进行`base64`处理，减少页面`http`的请求量
- 使用`postcss`根据`.browserslistrc`适配不同浏览器的兼容性
- api 代理层抽象，使用`fetch`做数据请求
- 采用`rem`方案支持适配不同分辨率移动设备

### 项目目录

```js
|---public  // html入口模版
|---src   // 主要源码入口
|---|---assets // 静态资源文件，字体图标，静态图片等
|---|---components // 公用业务组件
            ｜---card
            ｜---...
|---|---directives  // 自定义全局指令
|---|---pages // 页面目录
|---|---|---home // 主页面
|---|---router  // 路由入口
|---|---services // api代理层
|---|---types // ts全局类型xx.d.ts
|---|----utils // 工具函数
|---App.vue  // vue根组件
|---main.ts // webpack入口依赖文件
|---.babelrc // 编译ts预设插件
|---.browserslistrc // 浏览器兼容性配置
|---.gitignore // 指定忽略上传文件到github上
|---.eslintignore // eslint忽略检查的文件
|---.prettierrc.json // 格式化代码
|---post.config.js // 配置css前缀
|---tsconfig.json // ts规则相关配置
|---webpack.config.js // webpack相关打包配置

```

### 环境安装

依赖`nodejs`,先下载对应 node,我的 node 版本是`v14.17.0`,由于使用最新`webpack5`与`vue3`,建议安装比较新的`node`版本，不然可能会存在兼容性问题,下载[node](https://registry.npmmirror.com/binary.html?path=node/)参考官方地址

### 快速开始

1、 git clone `https://github.com/maicFir/topfreeApplication.git`

2、 cd `topfreeapplication`

3、 npm i

### 启动本地服务

执行以下命令

```js
 npm run start
```

打开谷歌地址`http://localhost:8080/#/`,mac(option + command +i)打开开发者模拟器，选择不同设备进行查阅页面，window(右键审查/f12 选择模拟器)打开页面访问

### 打包输出最终`dist`文件

```js
npm run build
```

### 移动设备不同尺寸下界面自适应

- iphone6/7/8

  ![](https://files.mdnice.com/user/24614/421cbfde-a16c-42bb-8600-11be652e5a9b.png)

- iphone12 pro
  ![](https://files.mdnice.com/user/24614/3486720a-094a-498c-bbd0-2b1e4c05dbac.png)

- iphone5/se

  ![](https://files.mdnice.com/user/24614/5b8c9b12-2726-49d1-87e7-c005f4136047.png)

- ipad

  ![](https://files.mdnice.com/user/24614/9408ee17-f2e2-4e35-b19a-9bbffbb87e0c.png)

- Next Hub

  ![](https://files.mdnice.com/user/24614/a0f32fb6-469a-4675-a2e8-984b9bcd767a.png)

### About me

[![GitHub Pages](https://github.com/element-plus/element-plus-playground/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/maicFir/lessonNote)

- 看完项目如果觉得对你有帮助，就点个`star`鼓励下作者吧

- 更多技术关注`公众号:Web技术学苑`，好好学习、天天向上!

![](https://files.mdnice.com/user/24614/50dd18f5-e2d5-4eb5-ac76-716aec6da88f.jpg)

### License

[MIT](./LICENSE) License © 2022-PRESENT [maicFir](https://github.com/maicFir)
