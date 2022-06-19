# topfreeApplication

popular application in Apple

### 项目简介

基于`webpack5`、`webpack-cli`、`webpack-dev-server`,`vue3`、`vue-router@4`,从 0 到 1 搭建一个项目，不依赖`vue-cli`脚手架，支持`ts`、`tsx`,使用`postcss`对低版本浏览器样式兼容，`babel-loader`对`ts`编译，`eslint`规范项目代码，主要使用`lugin:vue/vue3-strongly-recommended`,`airbnb-base`,`@typescript-eslint/parser`,使用`@babel/preset-env`编译转换`es6`等

---

- js 编译：`babel-loader`、`@babel/core`、`@babel/plugin-transform-runtime`、`@vue/babel-plugin-jsx`
- css 编译: `css-loader`、`less`、`less-loader`、`style-loader`、`postcss-preset-env`
- 代码格式规范: `eslint`、`@typescript-eslint/parser`、`@typescript-eslint/eslint-plugin`
- ts 编译: `ts-loader`、`babel-loader`、`typescript`
- vue3: `vue-loader`、`vue3`、`vue-router`

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

依赖`nodejs`,先下载对应 node,我的 node 版本是`v14.17.0`,由于使用最新`webpack5`与`vue3`,建议安装比较新的`node`版本，不然可能会存在兼容性问题

### 快速开始

- git clone
- cd `topfreeapplication`
- npm i

### 启动本地服务

执行以下命令

```js
 npm run start
```

打开地址`http://localhost:8080/#/`

### 打包输出最终`dist`文件

```js
npm run build
```

### 移动设备不同尺寸下界面自适应

- iphone6/7/8
  ![](https://files.mdnice.com/user/24614/bb956137-17f5-47da-8016-f3a7331f000a.png)
- iphone5/se
  ![](https://files.mdnice.com/user/24614/91f31f80-12f4-45bd-8b5b-776eda14eb4d.png)
- ipad
  ![](https://files.mdnice.com/user/24614/22bee98d-a869-4612-a698-d74306bc3f82.png)
- Next Hub
  ![](https://files.mdnice.com/user/24614/a129cec1-cb83-4a37-b878-aec345d0ad12.png)
