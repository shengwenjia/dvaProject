# 使用roadhog搭建的前端开发模板

使用dva-cli脚手架工具快速搭建的一个基于react-redux的前端开发模板

## 目录结构

```
.
|-- /dist/           # 构建后的输出文件地址
|-- /node_modules/   # npm i 之后的三方类库和工具
|-- /mock/           # 本地模拟接口数据
|-- /public/         # 这里存放 favicon, iconfont, html, html 里引用的图片等
|-- /src/            # 应用源码
| |-- /components/   # react 组件
| |-- /layouts/      # 布局信息
| |-- /models/       # 数据模型
| |-- /services/     # 数据接口方法
| |-- /utils/        # 工具文件
|-- index.css        # 全局样式
|-- index.js         # 项目入口
|-- router.js        # 路由配置文件
|-- .eslintrc        # Eslint配置
|-- .roadhogrc       # roadhog配置
|-- .roadhogrc.mock  # 数据mock配置
|-- package.json     # 项目信息
```

## 启动项目

```bash
$ npm start
$ open http://localhost:8000/
```

## 构建代码

```bash
$ npm run build
```

## 代码检测

```bash
$ npm run lint
```

## 参考链接

roadhog配置参考：https://github.com/sorrycc/roadhog

***