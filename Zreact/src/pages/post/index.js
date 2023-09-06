import React, {useState} from 'react';
import './index.scss'
import {Pagination} from 'antd';
import {useNavigate} from "react-router-dom";
import {TimeUtils} from "../../utils/util.time";

const PostList = () => {
    const [postData, setPostData] = useState(
        [
            {
                "_id": "64f6ea62a0d58a3cda8cf5b8",
                "title": "【关于我】自述",
                "cover": "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "content": " <p align=\"center\">\n   <img align=\"center\" src=\"https://github.com/ZHYI-source/ZHYI-source/assets/59498872/5f4a3557-4663-4778-b9df-1789b44693ec\" alt=\"Logo\" width=\"150\" height=\"150\">\n   </p>\n<h3 align=\"center\">\" Hi ! 👋 \"</h3>\n\n  <p align=\"center\">\n    热爱编程代码，坚信每一步都是奇迹，每一天都是新的起点。\n   </p>\n     <p align=\"center\">\n      <img align=\"center\" src=\"https://img.shields.io/badge/常用技术-red\">\n      <img align=\"center\" src=\"https://img.shields.io/badge/-Vue-34495e?logo=vue.js\">\n      <img align=\"center\" src=\"https://img.shields.io/badge/-React-34495e?logo=react.js\">\n      <img align=\"center\" src=\"https://img.shields.io/badge/-HTML5-red?logo=html5&logoColor=white\">\n      <img align=\"center\" src=\"https://img.shields.io/badge/-CSS3-blue?logo=css3&logoColor=white\">\n      <img align=\"center\" src=\"https://img.shields.io/badge/-JavaScript-yellow?logo=javascript&logoColor=white\">\n      <img align=\"center\" src=\"https://img.shields.io/badge/-Nodejs-red?logo=node.js&logoColor=white\">\n      <img align=\"center\" src=\"https://img.shields.io/badge/-Express-green?logo=Express&logoColor=white\">\n      <img align=\"center\" src=\"https://img.shields.io/badge/-MongoDB-yellow?logo=MongoDB&logoColor=white\">\n      <img align=\"center\" src=\"https://img.shields.io/badge/-Mysql-blue?logo=Mysql&logoColor=white\">\n</p>\n\n关于作者：\n- [主页@ZHOUYI](http://www.zhouyi.run)\n- [博客@ZHOUYI](http://www.zhouyi.run/#/blog)\n- [Gitee@ZHOUYI](https://gitee.com/Z568_568)\n  \n联系我：\n- [留言@ZHOUYI](http://www.zhouyi.run/#/contact)\n- 邮箱：yizhou568@gmail.com\n\n",
                "userId": "64aabf3d28f413f08d51cc00",
                "category": "简介",
                "viewNum": 3,
                "likeNum": 0,
                "isReship": false,
                "recommended": false,
                "likeToken": [],
                "status": true,
                "createdAt": "2023-09-05T08:44:18.172Z",
                "updatedAt": "2023-09-06T00:41:33.634Z",
                "user": [
                    {
                        "_id": "64aabf3d28f413f08d51cc00",
                        "avatar": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png",
                        "username": "admin",
                        "nickname": "ZY·Admin",
                        "password": "$2a$10$MPIYm/7XO6.vEFGy7N9IvujPFDsvBM8buX1LgNNz65ZnHuStI0qVK",
                        "roleId": "64a423816f4197cfc70375e3",
                        "status": true,
                        "createdAt": "2023-07-09T14:07:57.766Z",
                        "updatedAt": "2023-08-30T07:02:46.204Z",
                        "type": "admin",
                        "email": "1840354092@qq.com",
                        "address": "贵州省贵阳市 电信",
                        "userIp": "111.121.40.63",
                        "platform": "Chrome.v115",
                        "website": "http://www.zhouyi.run"
                    }
                ]
            },
            {
                "_id": "64dc5132a0d58a3cda8cc3c0",
                "title": "【项目总结】关于访客记录功能模块技术点",
                "cover": "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "abstract": "不管在开发个人网站还是公司项目中，我们有可能会需要增加访客记录模块，添加访客记录模块是一个很有用的功能，通过这个功能，可以跟踪和记录访问者的活动，从而获得有关访问者行为的有价值的信息。访客记录不仅可以",
                "content": "### 1. 前言\n不管在开发个人网站还是公司项目中，我们有可能会需要增加访客记录模块，添加访客记录模块是一个很有用的功能，通过这个功能，可以跟踪和记录访问者的活动，从而获得有关访问者行为的有价值的信息。访客记录不仅可以帮助我们了解访问者的偏好，还可以用于分析网站或应用的流量，改进用户体验，以及为市场营销和分析提供有力的数据支持。\n\n当然，有很多已经做好的访客分析的第三方服务，百度分析、谷歌分析等等\n\n但是，我要自己动手做一个 就想折腾折腾\n\n### 2. 我的访客记录模块\n\n没有做复杂的功能  只是记录访客的来源信息基于用户设备和IP等信息 足以够用了\n\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1692157721166.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1692157721166.png\" alt=\"1692157721166.png\" width=\"100%\">\n</a>\n\n### 3. 功能关键点\n - 获取用户真实IP：通过解析HTTP请求头或代理服务器配置，获取用户的真实IP地址以标识不同的访客。\n- 获取用户设备信息：使用工具如ua-parser-js解析用户代理字符串，提取设备、浏览器和操作系统等信息。\n- 解析用户IP地址：使用第三方IP地理位置解析服务，将IP地址转换为大致的地理位置信息。\n\n**访客记录主要逻辑在后端实现**\n\n#### 获取用户真实IP\n\n这里上线后还需要在服务器的nginx配置 才会生效\n\n获取用户的真实IP地址是访客记录模块的关键部分，用于标识不同访客并了解其来源。然而，由于代理、VPN等网络结构，直接获取真实IP可能会受到一些限制。以下是获取用户真实IP的一些方法：\n1. HTTP请求头中的X-Forwarded-For（XFF）：在HTTP请求头中，X-Forwarded-For字段可能包含用户的真实IP地址，尤其是当请求经过代理服务器时。您的服务器可以检查该字段并提取用户真实IP。\n2. Remote Address：服务器会记录与客户端建立连接的远程IP地址。然而，这可能是用户连接的代理服务器的IP地址，而不是用户的真实IP。\n3. WebSockets和Socket连接：如果您的应用使用了WebSocket或Socket连接，您可以从连接中获取用户的真实IP。\n4. 反向代理配置：如果您的应用在反向代理（如Nginx或Apache）后面运行，您可以配置代理服务器将用户的真实IP传递给应用服务器。\n\n``` js\n// 获取用户的真实公网IP\nexports.getPublicIP = function (req) {\n    const headers = req.headers;\n    if (headers['x-real-ip']) {\n        return headers['x-real-ip'];\n    }\n    if (headers['x-forwarded-for']) {\n        const ipList = headers['x-forwarded-for'].split(',');\n        return ipList[0];\n    }\n    return '0.0.0.0';\n}\n```\n#### 解析用户IP地址\n\n根据用户IP解析地址 使用的是第三方免费接口\n\n``` js\n// IP地址解析\nexports.parseIP = function (clientIp) {\n    return new Promise((resolve, reject) => {\n        request(\n            `https://opendata.baidu.com/api.php?query=[${clientIp}]&co=&resource_id=6006&oe=utf8`,\n            {method: 'GET'},\n            function (error, response, body) {\n                if (error !== null) {\n                    reject(error);\n                    return;\n                }\n                if (body && !body.status) {\n                    resolve(body.length && JSON.parse(body).data[0].location || '-');\n                }\n            }\n        );\n    });\n}\n``` \n#### 获取用户设备信息\n使用 `ua-parser-js` 分析出用户的设备信息\n > `ua-parser-js`是一个JavaScript库，它用于解析用户代理字符串（User Agent String），以便从中提取有关用户设备和浏览器的信息。用户代理字符串是由浏览器发送给服务器的一段文本，其中包含了关于浏览器、操作系统、设备类型等信息。ua-parser-js库使开发人员能够从用户代理字符串中提取有关用户设备的详细信息，从而可以更好地进行设备适配和用户体验优化。\n\n``` js\n//识别常见的浏览器、操作系统和设备等信息\nconst u = new UAParser(req.headers['user-agent']);\n// u 解析结果\n{\n  browser: {\n    name: \"Chrome\",\n    version: \"80.0.3987.163\",\n    major: \"80\"\n  },\n  device: {\n    model: undefined,\n    type: undefined,\n    vendor: undefined\n  },\n  engine: {\n    name: \"Blink\"\n  },\n  os: {\n    name: \"Windows\",\n    version: \"10.0\"\n  }\n}\n\n```\n### 4. 数据库表设计\n``` js\nconst mongoose = require('mongoose')\nlet schema = new mongoose.Schema({\n    name: {\n        type: String,\n        comment: '用户名称'\n    },\n    type: {\n        type: String,\n        enum: ['client', 'admin'],\n        default: 'client',\n        comment: '站点类型'\n    },\n    page: {\n        type: String,\n        comment: '访问页面'\n    },\n    ip: {\n        type: String,\n        comment: '访问IP'\n    },\n    address: {\n        type: String,\n        comment: '访问来源'\n    },\n    browser: {\n        type: String,\n        comment: '设备'\n    },\n    viewNum: {\n        type: Number,\n        comment: '访问次数'\n    },\n    remark: {\n        type: String,\n        comment: '备注'\n    },\n\n}, {\n    timestamps: true,\n    versionKey: false, // 设置不需要version  _V:0\n});\n\nmodule.exports = mongoose.model('visitors', schema);\n\n```\n\n### 4.创建访客记录完整逻辑\n\n要点：在今天之内的用户记录 对 用户名称、访问类型、IP、设备、地址、页面不同的数据进行单独录入新记录，否则只更新访问次数\n\n\n``` js\n/**\n * 创建访客记录\n * @returns {object} 200 - 成功响应\n * @returns {object} 400 - 参数验证错误\n * @returns {Error} default - 未知错误\n */\nexports.visitorsCreate = [\n    async (req, res, next) => {\n        try {\n            const clientIP = getPublicIP(req);\n            //识别常见的浏览器、操作系统和设备等信息\n            const u = new UAParser(req.headers['user-agent']);\n            const address = await parseIP(clientIP);\n            const equipment = u.getBrowser().name ? `${u.getBrowser().name}.v${u.getBrowser().major}` : '未知'\n            const today = new Date().toISOString().split('T')[0]; // 获取今天的日期\n\n            const existingVisitor = await VisitorsModel.findOne({\n                name: req.body.name || '-',\n                ip: clientIP,\n                type: req.body.type || 'client',\n                browser: equipment,\n                address,\n                page: req.body.page || '-',\n                createdAt: {$gte: new Date(today)}, // 在今天之内的记录\n            });\n\n            if (existingVisitor) {\n                // 如果今天已经记录过这个访客信息，则只更新浏览次数\n                await VisitorsModel.findByIdAndUpdate(existingVisitor._id, {$inc: {viewNum: 1}});\n                return apiResponse.successResponse(res, \"ok.\",);\n            } else {\n                // 否则，创建新的访客记录\n                const newVisitors = {\n                    page: req.body.page || '-',\n                    type: req.body.type || 'client',\n                    name: req.body.name || '-',\n                    address,\n                    ip: clientIP,\n                    browser: equipment,\n                    viewNum: 1, // 初始化浏览次数为1\n                };\n                const createdVisitor = await VisitorsModel.create(newVisitors);\n                return apiResponse.successResponse(res, \"ok.\");\n            }\n        } catch (err) {\n            next(err);\n        }\n    }\n];\n```\n### 5. 总结及扩展点\n\n1. 在后端，需要创建API接口，以便前端或其他系统可以将访客数据发送到数据库。这涉及到以下步骤：\n- 接收数据：编写代码来接收来自前端的数据，包括访问时间、IP地址、用户代理等信息。\n- 验证和处理：对接收到的数据进行验证，确保数据的完整性和有效性。然后，将数据插入访客记录表中。\n- IP地址解析：使用IP地址解析服务将IP地址转换为地理位置信息，以便您可以获得访客的大致位置。\n\n2. 在前端，对分析的数据进行更加细粒度的呈现分析访客记录\n- 访客计数器：在页面上显示访客计数器，显示访客总数或唯一访客数量。\n- 访客地图：使用地图API，将访客的地理位置可视化，访问者可以看到来自不同地区的访问者分布情况。\n- 访问趋势图：绘制访问趋势图，显示不同时间段内的访问次数，帮助了解网站流量的高峰和低谷。\n- ...\n\n总之 访客记录功能将上面三个关键点解决掉 其他数据就可以任意发挥了\n\n**不明白之处或者觉得处理的不好的地方可以评论区留言，期待和各位大佬的交流😊**\n\n> 基于vue3、nodejs、mongodb 个人主页前后端分离项目\n[https://gitee.com/Z568_568/ZHOUYI-Homepage.git](https://gitee.com/Z568_568/ZHOUYI-Homepage.git)\n\n",
                "userId": "64aabf3d28f413f08d51cc00",
                "category": "总结",
                "viewNum": 35,
                "likeNum": 0,
                "isReship": false,
                "recommended": true,
                "likeToken": [],
                "status": true,
                "createdAt": "2023-08-16T04:31:46.997Z",
                "updatedAt": "2023-09-06T13:18:36.223Z",
                "user": [
                    {
                        "_id": "64aabf3d28f413f08d51cc00",
                        "avatar": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png",
                        "username": "admin",
                        "nickname": "ZY·Admin",
                        "password": "$2a$10$MPIYm/7XO6.vEFGy7N9IvujPFDsvBM8buX1LgNNz65ZnHuStI0qVK",
                        "roleId": "64a423816f4197cfc70375e3",
                        "status": true,
                        "createdAt": "2023-07-09T14:07:57.766Z",
                        "updatedAt": "2023-08-30T07:02:46.204Z",
                        "type": "admin",
                        "email": "1840354092@qq.com",
                        "address": "贵州省贵阳市 电信",
                        "userIp": "111.121.40.63",
                        "platform": "Chrome.v115",
                        "website": "http://www.zhouyi.run"
                    }
                ]
            },
            {
                "_id": "64db4237a0d58a3cda8cc194",
                "title": "【项目总结】关于权限系统前后端的设计方案",
                "cover": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1692086718222.png",
                "abstract": "权限设计方案在实际应用中常用于需要管理多种角色和复杂权限控制的系统。它允许系统管理员根据不同的用户职能来配置权限，而不必关注每个用户的个体权限。这种集中式的权限管理模式有助于系统的可维护性和可扩展性",
                "content": "### 前言\n开发 [个人主页前后端分离项目](https://gitee.com/Z568_568/ZHOUYI-Homepage.git) 已经结束了，想着对项目中的各个技术点进行总结下，这也是第一篇开始记录并分析技术点的文章，今天想说一说关于**管理端权限的设计方案**，也是项目中最为关键的部分。\n### 主线思路\n项目中我采用的权限设计方案属于**基于角色的访问控制**（`Role-Based Access Control`，`RBAC`）。**`RBAC`** 是一种常见且广泛使用的权限管理模型，它通过将用户分配到不同的角色，然后将角色与特定的权限关联，来实现对系统资源的访问控制。\n\n基于`RBAC` 模型的权限设计方案有四个部分：\n\n1. **角色（Roles）**： 角色是一组用户，这些用户在系统中具有相似的权限需求。每个角色都会被分配一组权限，然后**用户被分配到角色而不是直接分配权限**。\n2. **权限（Permissions）**： 权限定义了用户可以执行的操作或访问的资源。每个角色都会被授予一组权限，这些权限定义了该角色所能执行的操作。\n3. **用户（Users）**： 用户是系统的最终操作者。每个用户都会被分配一个或多个角色（项目中没有使用多角色），这些角色决定了他们在系统中的权限。\n4. **前端路由匹配** ： 前端根据用户的角色和权限信息，动态生成菜单和路由。这意味着当用户登录系统时，前端会根据用户的角色查询其对应的权限，然后根据权限配置来渲染出适当的菜单和页面。\n\n在 `RBAC` 模型中，角色充当了用户和权限之间的中介，简化了权限管理和维护。\n\n### 后端数据库设计\n\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1692086718222.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1692086718222.png\" alt=\"1692086718222.png\" width=\"100%\">\n</a>\n\n在上图中可以看到有张权限表里面数据都是各种操作接口的标识：用户查询操作 `sys:users:list`、角色查询操作 `sys:roles:list` 、权限管理查询操作`sys:permissions:list`。很容易看出权限基本关系是：**当用户登录后再查询出角色信息，然后关联出角色对应的权限信息**。\n\n### 前端权限设计\n原理：**根据权限表数据和路由元信息进行匹配，然后筛选出对应的菜单**\n\n1. 路由设计\n\n例如 下面定义了用户管理、角色管理和权限管理的菜单路由，其中的`meta`元信息中 `perms`字段配置有该菜单的所有操作权限标识\n\n``` js\n[\n {\n    path: '/dir-users-info',\n    name: 'dir-users-info',\n    meta: {\n           title: '用户管理',\n           icon: 'yonghuguanli',\n           requiresAuth: true,\n           perms: [\n                   'sys:users:list',\n                   'sys:users:create',\n                   'sys:users:update',\n                   'sys:users:delete',\n                 ],\n           },\n    component: () => import('@/views/sys/users/dir-users-info.vue'),\n},\n {\n    path: '/dir-roles-info',\n    name: 'dir-roles-info',\n    meta: {\n           title: '角色管理',\n           icon: 'yonghuguanli',\n           requiresAuth: true,\n           perms: [\n                   'sys:roles:list',\n                   'sys:roles:create',\n                   'sys:roles:update',\n                   'sys:roles:delete',\n                 ],\n           },\n    component: () => import('@/views/sys/users/dir-roles-info.vue'),\n},\n {\n    path: '/dir-permissions-info',\n    name: 'dir-permissions-info',\n    meta: {\n           title: '权限管理',\n           icon: 'yonghuguanli',\n           requiresAuth: true,\n           perms: [\n                   'sys:permissions:list',\n                   'sys:permissions:create',\n                   'sys:permissions:update',\n                   'sys:permissions:delete',\n                 ],\n           },\n    component: () => import('@/views/sys/users/dir-permissions-info.vue'),\n}\n]\n```\n2. 检查路由对象是否具有权限\n\n``` js\n/**\n * 检查路由对象是否具有权限\n * @param {Array} perms - 权限列表\n * @param {Object} route - 路由对象\n * @returns {boolean} - 是否具有权限\n */\nfunction hasPermission(perms, route) {\n    if (route.meta && route.meta.perms) {\n        // 如果路由对象定义了 meta 属性或者定义 meta.perms 属性，那么就根据权限值来判断是否具有权限\n        return perms.some(perm => route.meta.perms.includes(perm))\n    } else {\n        // 如果路由对象没有定义 meta 属性或者没有定义 meta.perms 属性，那么默认认为具有权限，返回 true。\n        return true\n    }\n}\n```\n3. 递归所有路由表根据权限列表筛选异步路由：\n``` js\n/**\n * 根据权限列表筛选异步路由配置\n * @param {Array} routes - 路由配置表\n * @param {Array} perms - 权限列表\n * @returns {Array} - 筛选后的路由配置\n */\nfunction filterAsyncRouter(routes, perms) {\n    const res = []\n\n    routes.forEach(route => {\n        // 创建临时变量 tmp  可以在后续的操作中不会修改原始的路由对象。\n        const tmp = {...route}\n        if (!tmp.hidden && tmp.children) {\n            // 先对子路由进行深度筛选，确保子路由也符合权限要求\n            tmp.children = filterAsyncRouter(tmp.children, perms)\n            if (tmp.children && tmp.children.length > 0) {\n                res.push(tmp)\n            }\n        } else {\n            // 对于没有子路由的路由对象，直接进行权限判断\n            if (!tmp.hidden && hasPermission(perms, tmp)) {\n                res.push(tmp)\n            }\n        }\n    })\n\n    return res\n}\n```\n4. 生成出该用户具有权限的路由表：\n``` js\nexport const menuList = function () {\n    const asyncRoutes = useRouter().options.routes[0].children.filter(e => !e.hidden)\n    //筛选路由表\n    const permissionList = dbUtils.get('perms');\n    if (!permissionList.length) {\n        // 清空所有缓存数据\n        dbUtils.clear()\n        // 重置路由重新登录\n        return useRouter().replace('/login')\n    }\n    let accessedRouters\n\n    if (permissionList.includes('*')) {\n        // 如果是超级管理员则无需权限验证\n        accessedRouters = asyncRoutes\n    } else {\n        accessedRouters = filterAsyncRouter(asyncRoutes, permissionList);\n    }\n    return accessedRouters\n}\n```\n\n5. 将生成好的路由表去渲染前端菜单。前端工作基本结束\n\n### 后端权限设计\n原理：是对每个请求进行权限验证 **每个请求前端都会携带token,基于这个信息来进行验证用户的权限** \n\n其中会经过两轮的验证：**token验证** 和 **接口权限验证** 以确保数据的安全性\n\n1. 首先进行`token`验证\n使用`express-jwt` 来进行`token的身份验证`、然后存储用户信息和id到req对象中\n``` js\n/**\n * Token 身份验证中间件\n * \n * @param {Object} req - 请求对象\n * @param {Object} res - 响应对象\n * @param {Function} next - 下一个中间件函数\n * @returns {void}\n * @throws {Error} - 如果身份验证失败，则抛出错误\n */\nconst {expressjwt: jwt} = require(\"express-jwt\");\n\nfunction tokenAuthentication(req, res, next) {\n    jwt({\n        secret: process.env.SIGN_KEY,\n        algorithms: ['HS256'],\n        requestProperty: 'user',\n        credentialsRequired: true,\n        getToken: function fromHeaderOrQuerystring(req, res) {\n            if (req.headers.authorization &&\n                req.headers.authorization.split(\" \")[0] === \"Bearer\") {\n                return req.headers.authorization.split(\" \")[1];\n            } else if (req.query && req.query.token) {\n                return req.query.token;\n            }\n            return null;\n        },\n    })(req, res, function (err) {\n        if (err) {\n            //抛出错误给全局错误信息处理\n            return next(err);\n        }\n        req.userId = req.user._id;\n        next();\n    });\n}\n\nmodule.exports = tokenAuthentication;\n```\n2. 接口权限验证\n将req对象中携带用户信息的user字段取出进行操作\n\n``` js\n// 验证接口权限 auth:'接口的预设权限' \n// 示例：checkApiPermission('sys:users:list')\n\nconst checkApiPermission = (auth) => {\n    return async (req, res, next) => {\n        try {\n            const roleInfo = await RolesModel.findById(req.user.roleId)\n            if (!roleInfo) return log.error('该用户还未分配角色')\n            if (roleInfo) {\n                if (!roleInfo.status) {\n                    apiResponse.unauthorizedResponse(res, '您的角色已被禁用,请联系管理员')\n                    return false\n                }\n                // 对超级管理员或其他\n                if (roleInfo.perms.includes('*') || roleInfo.perms.includes(auth)) {\n                    const permissionInfo = await PermissionsModel.findOne({key: auth})\n                    // 权限已被禁用\n                    if (!roleInfo.perms.includes('*') && !permissionInfo.status) {\n                        return apiResponse.unauthorizedResponse(res, '您访问的权限已被禁用，请联系管理员')\n                    }\n                    // 接口验证通过，继续下一步中间件或处理程序\n                    return next();\n                } else {\n                    return apiResponse.unauthorizedResponse(res, '您暂时没有权限访问,请联系管理员')\n                }\n            }\n\n        } catch (err) {\n            return apiResponse.unauthorizedResponse(res, '接口权限验证错误')\n        }\n    };\n};\n```\n\n### 总结\n1. 权限设计方案的缺点：\n  1.1 前端页面配置繁琐： 在新增带有权限的页面时，需要在路由表和权限管理中都进行配置。这可能会导致维护时的一些不便，特别是当功能模块较多时。\n1.2 前端菜单自定义限制： 方案中的前端菜单配置可能受限于仅能控制菜单和用户的权限关系，而对于菜单的展示内容、样式、图标等方面的定制可能需要修改前端源代码，增加了定制化的复杂度。\n1.3 前后端协调： 需要确保前后端之间预设的权限标识保持一致，以避免出现不一致的情况。这需要进行前后端的密切协调，以确保权限验证的一致性。\n2. 权限设计方案的优点：\n  2.1 灵活性和可扩展性： 当系统需要新增功能或进行权限调整时，只需更新角色的权限配置，而无需逐个调整用户的权限。这种方式使得权限的调整更为集中和高效，也降低了出错的可能性。\n  2.2 代码维护便捷： 将权限逻辑集中在一处，即权限管理部分，可以使代码更易于维护和理解。同时，权限的变更对其他部分的影响较小，降低了维护成本。\n\n这种权限设计方案在实际应用中常用于需要管理多种角色和复杂权限控制的系统。它允许系统管理员根据不同的用户职能来配置权限，而不必关注每个用户的个体权限。这种集中式的权限管理模式有助于系统的可维护性和可扩展性。\n\n然而，也可以在实际应用中根据具体情况进行一些调整，以平衡灵活性和管理成本。例如，对于前端的菜单和页面展示定制化，也可以考虑引入一些配置文件或者从后端动态获取信息，以减少前端源代码的修改。\n\n**不明白之处或者觉得处理的不好的地方可以评论区留言，期待和各位大佬的交流😊**\n\n> 基于vue3、nodejs、mongodb 个人主页前后端分离项目 \n[https://gitee.com/Z568_568/ZHOUYI-Homepage.git](https://gitee.com/Z568_568/ZHOUYI-Homepage.git)",
                "userId": "64aabf3d28f413f08d51cc00",
                "category": "总结",
                "viewNum": 20,
                "likeNum": 0,
                "isReship": false,
                "recommended": true,
                "likeToken": [],
                "status": true,
                "createdAt": "2023-08-15T09:15:35.563Z",
                "updatedAt": "2023-09-06T04:08:07.073Z",
                "user": [
                    {
                        "_id": "64aabf3d28f413f08d51cc00",
                        "avatar": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png",
                        "username": "admin",
                        "nickname": "ZY·Admin",
                        "password": "$2a$10$MPIYm/7XO6.vEFGy7N9IvujPFDsvBM8buX1LgNNz65ZnHuStI0qVK",
                        "roleId": "64a423816f4197cfc70375e3",
                        "status": true,
                        "createdAt": "2023-07-09T14:07:57.766Z",
                        "updatedAt": "2023-08-30T07:02:46.204Z",
                        "type": "admin",
                        "email": "1840354092@qq.com",
                        "address": "贵州省贵阳市 电信",
                        "userIp": "111.121.40.63",
                        "platform": "Chrome.v115",
                        "website": "http://www.zhouyi.run"
                    }
                ]
            },
            {
                "_id": "64d9ca3da0d58a3cda8cbf31",
                "title": "原生项目使用Webpack实现实时预览和热更新html",
                "cover": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691994584741.png",
                "abstract": "当涉及到前端开发中的实时预览和热更新，Webpack 是一个强大的工具，它提供了热模块替换（HMR）功能，我们可以在不刷新整个页面的情况下，实时查看代码的修改。如何在项目中配置和使用Webpack",
                "content": " <a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691994623945.gif\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691994623945.gif\" alt=\"1691994623945.gif\" width=\"100%\">\n</a>\n\n\n当涉及到前端开发中的实时预览和热更新，Webpack 是一个强大的工具，它提供了热模块替换（Hot Module Replacement，HMR）功能，我们可以在不刷新整个页面的情况下，实时查看代码的修改。如何在项目中配置和使用Webpack的HMR功能，以实现实时预览和热更新效果。\n\n#### 什么是热模块替换（HMR）？\n\n热模块替换（HMR）是一种前端开发工具，它允许在不刷新整个页面的情况下，更新代码和资源。这意味着你可以在修改代码时立即看到效果，而不需要等待整个页面重新加载。HMR 将只更新修改过的模块，而保留应用程序的状态。\n\n#### 热更新有什么好处\n热更新（Hot Module Replacement，HMR）是一个在开发过程中非常有用的功能，尤其在大型复杂的项目中。尽管在某些情况下可能觉得很难察觉到它的优势，但实际上它可以提供一些重要的好处：\n1. 实时预览： 在开启热更新的情况下，你可以在不刷新整个页面的情况下实时查看代码的更改。这可以极大地提高开发效率，节省刷新页面的时间。\n2. 保持应用状态： HMR 允许在修改代码时保持应用程序的状态。如果你在应用程序中已经执行了某些操作（例如填写表单、展开折叠菜单等），在代码更新后，这些状态将被保留下来，而不会像刷新整个页面那样丢失。\n3. 快速反馈循环： HMR 可以在你修改代码后立即显示结果，这有助于快速迭代和调试。\n4. 无需手动刷新： 在热更新开启的情况下，你无需手动刷新浏览器，这在大项目中特别有用。\n5. 模块级别更新： HMR 不仅仅局限于 JavaScript 文件，还可以应用于 CSS、模板等资源，以及你可能在项目中使用的其他模块。\n\n#### 配置Webpack以启用HMR\n首先，确保你的项目已经使用Webpack进行配置。如果你还没有配置Webpack，可以使用以下步骤开始：\n\n1. 在项目根目录中创建一个 package.json 文件，如果还没有的话，使用以下命令初始化：\n ```shell\nnpm init -y\n```\n2. 安装Webpack及其相关依赖：\n ```shell\nnpm install webpack webpack-cli webpack-dev-server --save-dev\n```\n3. 在项目根目录下创建一个 src 文件夹，并在其中创建一个 index.html 和 index.js 文件作为入口文件。\n\n4. 在项目根目录下创建一个 webpack.config.js 文件来配置Webpack：\n``` js\nconst path = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nmodule.exports = {\n    mode: 'development', // 设置开发环境\n    entry: './src/index.js',\n    output: {\n        filename: 'bundle.js',\n        path: path.resolve(__dirname, 'dist')\n    },\n\n    devServer: {\n        hot: true,\n        port: 3000 // 使用不同的端口号\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            template: './src/index.html',\n            filename: 'index.html' // 输出的 HTML 文件名\n        })\n    ]\n};\n\n```\n在上述配置中，我们启用了 hot: true，这将启用Webpack Dev Server的HMR功能。\n#### 编写实时预览的代码\n在入口文件 src/index.html 中，添加一些简单的代码来测试HMR。例如：\n``` js\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Webpack 实时预览</title>\n    <style>\n        body {\n            text-align: center;\n        }\n\n        h1 {\n            color: #0e59c7;\n        }\n\n        p {\n            color: #0e59c7;\n            font-family: 华文楷体;\n            font-size: 2rem;\n        }\n    </style>\n</head>\n<body>\n\n</body>\n</html>\n```\n在入口文件 src/index.js 中，也可以添加一些简单的代码来测试HMR。例如：\n``` js\nfunction component() {\n    const element = document.createElement('h1');\n    element.textContent = 'Hello, Webpack 热更新!';\n    return element;\n}\n\nfunction component2() {\n    const element = document.createElement('p');\n    element.textContent = 'Webpack Dev Server 热更新将会触发浏览器的局部自动刷新，以加载最新的文件内容，更新页面显示。这将让你一边修改代码，一边看到实时的效果，就像是在刷新页面一样。';\n    return element;\n}\n\ndocument.body.appendChild(component());\ndocument.body.appendChild(component2());\n```\n#### 运行Webpack Dev Server\n在package.json中添加启动命令\n``` js\n \"scripts\": {\n    \"start\": \"webpack serve --open\"\n  },\n```\n打开终端输入命令\n``` js\nnpm start\n```\n\n现在，当修改 src/index.js 文件中的代码时，Webpack Dev Server 将会自动检测变化并触发热更新。你会看到浏览器中的页面立即更新，而不需要手动刷新。\n\n#### 总结\n通过配置Webpack和使用其热模块替换（HMR）功能，可以在前端开发过程中实现实时预览和热更新。这大大提高了开发效率，可以在修改代码时立即看到效果，而不需要等待整个页面重新加载。Webpack Dev Server的HMR功能使得前端开发更加流畅和高效。\n\n\n\n#### 最后\n\n可以改变 ` hot: false` 来尝试一下就会发现 直接去修改html 文件可以浏览器自动刷新的功能\n``` js\n  devServer: {\n        hot: false,\n        port: 3000 // 使用不同的端口号\n    },\n```\n---\n\n#### 其他自动刷新技术\nBrowsersync 是一个用于开发的工具，它可以在多个浏览器中同步显示你的应用程序，并自动刷新页面。它支持 HTML、CSS 和 JavaScript 的自动刷新。\n安装 Browsersync：\n\n ``` shell\nnpm install browser-sync --save-dev\n```\n\n在项目根目录下创建一个 bs-config.js 文件，并添加以下内容：\n\n``` javascript\nCopy code\nmodule.exports = {\n  files: ['./src/**/*'], // 监视的文件路径\n  server: {\n    baseDir: './src' // 服务器根目录\n  }\n};\n```\n在终端中运行以下命令启动 Browsersync：\n\n``` bash\nbrowser-sync start --config bs-config.js\n```\n然后也可以实现在编辑 HTML 内容时实现实时更新和预览效果。赶快去试试吧\n\n#### Demo源码地址：\n[https://github.com/ZHYI-source/Zspace.git](https://github.com/ZHYI-source/Zspace.git)\n",
                "userId": "64aabf3d28f413f08d51cc00",
                "category": "随记",
                "viewNum": 16,
                "likeNum": 0,
                "isReship": false,
                "recommended": true,
                "likeToken": [],
                "status": true,
                "createdAt": "2023-08-14T06:31:25.182Z",
                "updatedAt": "2023-09-05T02:52:35.283Z",
                "user": [
                    {
                        "_id": "64aabf3d28f413f08d51cc00",
                        "avatar": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png",
                        "username": "admin",
                        "nickname": "ZY·Admin",
                        "password": "$2a$10$MPIYm/7XO6.vEFGy7N9IvujPFDsvBM8buX1LgNNz65ZnHuStI0qVK",
                        "roleId": "64a423816f4197cfc70375e3",
                        "status": true,
                        "createdAt": "2023-07-09T14:07:57.766Z",
                        "updatedAt": "2023-08-30T07:02:46.204Z",
                        "type": "admin",
                        "email": "1840354092@qq.com",
                        "address": "贵州省贵阳市 电信",
                        "userIp": "111.121.40.63",
                        "platform": "Chrome.v115",
                        "website": "http://www.zhouyi.run"
                    }
                ]
            },
            {
                "_id": "64d9a1b5a0d58a3cda8cbe9a",
                "title": "markdown语法 demo",
                "cover": "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "abstract": "markdown demo",
                "content": "\n__Advertisement :)__\n\n- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image\n  resize in browser.\n- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly\n  i18n with plurals support and easy syntax.\n\nYou will like those projects!\n\n---\n\n# h1 Heading 8-)\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n\n\n## Horizontal Rules\n\n___\n\n---\n\n***\n\n\n## Typographic replacements\n\nEnable typographer option to see result.\n\n(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n\ntest.. test... test..... test?..... test!....\n\n!!!!!! ???? ,,  -- ---\n\n\"Smartypants, double quotes\" and 'single quotes'\n\n## 图表\n\n```js\n\tpie\n        title 今天晚上吃什么？\n        \"火锅\" : 8\n        \"外卖\" : 60\n        \"自己煮\" : 8\n        \"海底捞\" : 9\n        \"海鲜\" : 5\n        \"烧烤\" : 5\n        \"不吃\" : 5\n```\n\n```mermaid\n\tpie\n        title 今天晚上吃什么？\n        \"火锅\" : 8\n        \"外卖\" : 60\n        \"自己煮\" : 8\n        \"海底捞\" : 9\n        \"海鲜\" : 5\n        \"烧烤\" : 5\n        \"不吃\" : 5\n```\n\n```js\n\tmermaid\ngraph LR\nA[矩形] -.->B(圆角矩形) --> C{菱形} ==> D((圆形)) \nE([体育场形])--实线文本--> F[[子程序形]]==粗实线文本==>G[(圆柱形)]-.虚线文本.->H{{六角形}}\nI[/平行四边形/]-.-J[\\反向平行四边形\\]---K[/梯形\\]===L[\\反向梯形/]\n```\n     \n\n```mermaid\ngraph LR\nA[矩形] -.->B(圆角矩形) --> C{菱形} ==> D((圆形)) \nE([体育场形])--实线文本--> F[[子程序形]]==粗实线文本==>G[(圆柱形)]-.虚线文本.->H{{六角形}}\nI[/平行四边形/]-.-J[\\反向平行四边形\\]---K[/梯形\\]===L[\\反向梯形/]\n```\n\n```js\ngraph RL\n        User((用户))--1.用户登录-->Login(登录)\n        Login --2.查询-->SERVER[服务器]\n subgraph 查询数据库\n        SERVER--3.查询数据-->DB[(数据库)]\n        DB--4.返回结果-->SERVER\n end\n        SERVER--5.校验数据-->Condition{判断}\n        Condition -->|校验成功| OK[登录成功]\n        Condition -->|校验失败| ERR[登录失败]\n        OK-->SYS[进入系统]\n\n        ERR -->|返回登录页面,重新登录| Login\n```\n\n```mermaid\ngraph RL\n        User((用户))--1.用户登录-->Login(登录)\n        Login --2.查询-->SERVER[服务器]\n subgraph 查询数据库\n        SERVER--3.查询数据-->DB[(数据库)]\n        DB--4.返回结果-->SERVER\n end\n        SERVER--5.校验数据-->Condition{判断}\n        Condition -->|校验成功| OK[登录成功]\n        Condition -->|校验失败| ERR[登录失败]\n        OK-->SYS[进入系统]\n\n        ERR -->|返回登录页面,重新登录| Login\n```\n\n\n\n## Emphasis\n\n**This is bold text**\n\n__This is bold text__\n\n*This is italic text*\n\n_This is italic text_\n\n~~Strikethrough~~\n\n\n## Blockquotes\n\n\n> Blockquotes can also be nested...\n>> ...by using additional greater-than signs right next to each other...\n> > > ...or with spaces between arrows.\n\n\n## Lists\n\nUnordered\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\nOrdered\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa\n\n\n1. You can use sequential numbers...\n1. ...or keep all the numbers as `1.`\n\nStart numbering with offset:\n\n57. foo\n1. bar\n\n\n## Code\n\nInline `code`\n\nIndented code\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\nBlock code \"fences\"\n\n```\nSample text here...\n```\n\nSyntax highlighting\n\n``` js\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n```\n\n## Tables\n\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\n\n## Links\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ \"title text!\")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n\n\n## Images\n\n![Minion](https://octodex.github.com/images/minion.png)\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg \"The Stormtroopocat\")\n\nLike links, Images also have a footnote style syntax\n\n![Alt text][id]\n\nWith a reference later in the document defining the URL location:\n\n[id]: https://octodex.github.com/images/dojocat.jpg  \"The Dojocat\"\n\n\n## Plugins\n\nThe killer feature of `markdown-it` is very effective support of\n[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).\n\n\n### [Emojies](https://github.com/markdown-it/markdown-it-emoji)\n\n> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:\n>\n> Shortcuts (emoticons): :-) :-( 8-) ;)\n\nsee [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.\n\n\n### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)\n\n- 19^th^\n- H~2~O\n\n\n### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)\n\n++Inserted text++\n\n\n### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)\n\n==Marked text==\n\n\n### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)\n\nFootnote 1 link[^first].\n\nFootnote 2 link[^second].\n\nInline footnote^[Text of inline footnote] definition.\n\nDuplicated footnote reference[^second].\n\n[^first]: Footnote **can have markup**\n\n    and multiple paragraphs.\n\n[^second]: Footnote text.\n\n\n### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)\n\nTerm 1\n\n:   Definition 1\nwith lazy continuation.\n\nTerm 2 with *inline markup*\n\n:   Definition 2\n\n        { some code, part of Definition 2 }\n\n    Third paragraph of definition 2.\n\n_Compact style:_\n\nTerm 1\n  ~ Definition 1\n\nTerm 2\n  ~ Definition 2a\n  ~ Definition 2b\n\n\n### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)\n\nThis is HTML abbreviation example.\n\nIt converts \"HTML\", but keep intact partial entries like \"xxxHTMLyyy\" and so on.\n\n*[HTML]: Hyper Text Markup Language\n\n### [Custom containers](https://github.com/markdown-it/markdown-it-container)\n\n::: warning\n*here be dragons*\n:::\n",
                "userId": "64aabf3d28f413f08d51cc00",
                "category": "markdown",
                "viewNum": 6,
                "likeNum": 0,
                "isReship": false,
                "recommended": false,
                "likeToken": [],
                "status": true,
                "createdAt": "2023-08-14T03:38:29.173Z",
                "updatedAt": "2023-08-30T10:12:32.109Z",
                "user": [
                    {
                        "_id": "64aabf3d28f413f08d51cc00",
                        "avatar": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png",
                        "username": "admin",
                        "nickname": "ZY·Admin",
                        "password": "$2a$10$MPIYm/7XO6.vEFGy7N9IvujPFDsvBM8buX1LgNNz65ZnHuStI0qVK",
                        "roleId": "64a423816f4197cfc70375e3",
                        "status": true,
                        "createdAt": "2023-07-09T14:07:57.766Z",
                        "updatedAt": "2023-08-30T07:02:46.204Z",
                        "type": "admin",
                        "email": "1840354092@qq.com",
                        "address": "贵州省贵阳市 电信",
                        "userIp": "111.121.40.63",
                        "platform": "Chrome.v115",
                        "website": "http://www.zhouyi.run"
                    }
                ]
            },
            {
                "_id": "64d5b819a0d58a3cda8cb7af",
                "title": "技巧总结-检测浏览器对CSS属性的支持",
                "cover": "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "abstract": "检测浏览器对CSS属性的支持前言经常会出现使用某些 CSS 属性的时候需要判断浏览器的支持情况的场景，这里介绍几种常见的方式@supports@supports 是 CSS 语法，可以指定依赖于浏览器中的一个或多个特定的CSS功能的支持声明。这被称为特性查询。声明语法@supports at-rul",
                "content": "# 检测浏览器对CSS属性的支持\n\n## 前言\n\n经常会出现使用某些 CSS 属性的时候需要判断浏览器的支持情况的场景，这里介绍几种常见的方式\n\n## @supports\n\n[`@supports`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@supports) 是 CSS 语法，可以指定依赖于浏览器中的一个或多个特定的CSS功能的支持声明。这被称为*特性查询*。\n\n- **声明语法**\n\n  `@supports` at-rule 由一组样式声明和一条*支持条件*构成。支持条件由一条或多条使用 逻辑与（`and`）、逻辑或（`or`）、逻辑非（`not`）结合的名称-值对（name-value pair）组成。可以使用圆括号调整操作符的优先级。\n\n```css\n@supports (display: grid) {\n  div {\n    display: grid;\n  }\n}\n```\n\n```css\n@supports not (display: grid) {\n  div {\n    float: right;\n  }\n}\n```\n\n```css\n@supports (display: table-cell) and (display: list-item) {}\n@supports (transform-style: preserve) or (-moz-transform-style: preserve) {}\n```\n\n注意下面这种**用括号控制优先层级的形式**：\n\n```css\n@supports (transform-style: preserve-3d) or ((-moz-transform-style: preserve-3d) or\n          ((-o-transform-style: preserve-3d) or (-webkit-transform-style: preserve-3d))) {}\n```\n\n- **函数语法**\n\n  `selector()`\n\n  测试浏览器是否支持经过测试的选择器语法。如果浏览器支持[子组合器](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)，则以下示例返回true：\n\n  ```js\n  @supports selector(A > B) {}\n  ```\n\n- **兼容性**\n\n  <a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691728031511.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691728031511.png\" alt=\"1691728031511.png\" width=\"100%\">\n</a>\n\n## Js 中 CSS.supports 函数\n\n[`CSS.supports()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CSS/supports) 静态方法返回一个 Boolean 值，用来校验浏览器是否支持一个给定的CSS特性。\n\n- **语法**\n\n  ```js\n  boolValue = CSS.supports(propertyName, value);\n  boolValue = CSS.supports(supportCondition);\n  ```\n\n有两种不同的传值形式。第一种用来检验浏览器对于一对“属性-属性值”的支持：\n\n- **propertyName**\n\n  字符串。用来检测的CSS属性名。\n\n- **value**\n\n  字符串。用来检测的CSS属性值。\n\n- **supportCondition**\n\n  字符串。用来检测的CSS声明、表达式或者语法。\n\n- **使用**\n\n  ```js\n  CSS.supports('display', 'grid');\n  CSS.supports('display:grid');\n  ```\n\n- **兼容性**\n\n  和 `@support` 一样\n\n## JS 再实现\n\n上面的方法有个问题，`supports` 这个玩意，本身在 Edge81 以下就不支持，那他就没法检测其他属性了。\n\n这里再实现一个更加通用的方式，来源自 [JS检测CSS属性浏览器是否支持的多种方法 - 张旭鑫的博客](https://www.zhangxinxu.com/wordpress/2019/11/js-css-supports-detect/)：\n\n### 原理\n\n当浏览器不支持某个CSS属性的时候，就算你强制设置，获取的计算值也不会是你设置的属性值。\n\n### 写法\n\n```js\ndocument.head.style.filter = 'blur(5px)';\nresult = window.getComputedStyle(document.head).filter == 'blur(5px)';\n```\n\n我们看下上面代码在实际浏览器中的表现，首先是支持的Chrome浏览器，`result`的值是`true`：\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691727769869.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691727769869.png\" alt=\"Chrome浏览器下截图\" width=\"100%\">\n</a>\n然后是不支持的IE11浏览器，`result`的值是`false`：\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691727804254.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691727804254.png\" alt=\"IE11下的截图\" width=\"100%\">\n</a>\n\n此方法原理很简单，兼容性也非常好，实现的关键点就是使用[getComputedStyle这个IE9+支持的DOM API方法](https://www.zhangxinxu.com/wordpress/2012/05/getcomputedstyle-js-getpropertyvalue-currentstyle/)，不能使用`dom.style.xxxx`直接获取。\n\n如果是想要实现类似or或者and逻辑，例如带私有前缀那种，可以下面这样处理，正则匹配关键的部分：\n\n```js\ndocument.head.style.width= 'fit-content';\ndocument.head.style.width= '-moz-fit-content';\nresult = /fit-content/.test(window.getComputedStyle(document.head).width);\n```\n\n例如Firefox浏览器下的结果：\n\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691727838749.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691727838749.png\" alt=\"Firefox浏览器下截图\" width=\"100%\">\n</a>\n\n### 兼容性\n\nIE9+\n\n### 注意点\n\n`getComputedStyle()`方法返回的是**计算值**，很多时候和设置的属性值并不同。\n\n例如设置行高为小数，在IE浏览器下返回就是px计算值。\n\n又或者设置`background`属性值，结果返回的是background兄弟姐妹一大家子值：\n\n```js\ndocument.head.style.background = 'paint(abc)';\nresult = /paint/.test(window.getComputedStyle(document.head).background);\n// result值是true\nwindow.getComputedStyle(document.head).background\n// \"rgba(0, 0, 0, 0) paint(abc) repeat scroll 0% 0% / auto padding-box border-box\"\n```\n\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691727862027.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691727862027.png\" alt=\"1691727862027.png\" width=\"100%\">\n</a>\n\n需要使用模糊匹配才行。",
                "userId": "64aabf3d28f413f08d51cc00",
                "category": "CSS",
                "viewNum": 17,
                "likeNum": 0,
                "isReship": false,
                "recommended": true,
                "likeToken": [],
                "status": true,
                "createdAt": "2023-08-11T04:24:57.736Z",
                "updatedAt": "2023-08-16T03:00:52.515Z",
                "user": [
                    {
                        "_id": "64aabf3d28f413f08d51cc00",
                        "avatar": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png",
                        "username": "admin",
                        "nickname": "ZY·Admin",
                        "password": "$2a$10$MPIYm/7XO6.vEFGy7N9IvujPFDsvBM8buX1LgNNz65ZnHuStI0qVK",
                        "roleId": "64a423816f4197cfc70375e3",
                        "status": true,
                        "createdAt": "2023-07-09T14:07:57.766Z",
                        "updatedAt": "2023-08-30T07:02:46.204Z",
                        "type": "admin",
                        "email": "1840354092@qq.com",
                        "address": "贵州省贵阳市 电信",
                        "userIp": "111.121.40.63",
                        "platform": "Chrome.v115",
                        "website": "http://www.zhouyi.run"
                    }
                ]
            },
            {
                "_id": "64d5b1bba0d58a3cda8cb781",
                "title": "JavaScript 中有趣的 9 个常用编码套路",
                "cover": "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "abstract": "这篇文章是面向新手的，但如果幸运的话，希望能给各位大佬们带来一些小小的启发。1、set对象：数组快速去重常规情况下，我们想要筛选唯一值，一般会想到遍历数组然后逐个对比，或者使用成熟的库比如lodash之类的。不过，ES6带来了一个新玩意儿！它引入了一个全新的对象类型：Set！而且，如果结合上...展",
                "content": "这篇文章是面向新手的，但如果幸运的话，希望能给各位大佬们带来一些小小的启发。\n### 1、set对象：数组快速去重\n常规情况下，我们想要筛选唯一值，一般会想到遍历数组然后逐个对比，或者使用成熟的库比如lodash之类的。\n\n不过，ES6带来了一个新玩意儿！它引入了一个全新的对象类型：Set！而且，如果结合上...展开运算符，我们可以超级快速地创建一个已经去重的全新数组！\n``` js\nconst arr = [10, 10, 10, 20, 20, 30, 40, 40, 50, 60, 60, 70];\nconst uniArr = [...new Set(array)];\nconsole.log(uniArr);\n// [10, 20, 30, 40, 50, 60, 70]\n```\n这个技巧只适用于包含基本类型的数组，比如undefined、null、boolean、string和number。\n\n但是要记住哦，如果数组里面还有对象、函数或其他数组的话，就不能用这个方法了！\n\n### 2、include方法：简化（ || 或）条件判断\n当我们使用逻辑运算符||进行条件判断时，如果有很多可选值，代码会变得冗长。\n\n不过，我们可以使用includes方法来简化对数组的遍历操作，方便地判断数组是否包含某个特定的元素。\n\n这样一来，我们就可以更简洁地列出可选值，而不必写一长串的条件判断语句。includes方法可以帮助我们轻松判断数组中是否存在指定的元素。\n``` js\nconst myNum = '3';\nconst numArr = ['1', '2', '3'];\n\n// 使用 || \nif (myNum === '1' || myNum === '2' || myNum === '3') {\n    //……\n}\n\n// 使用 include\nif (numArr.includes(myNum)) {\n    //……\n} \n```\n### 3、截断数组：改变length就可以\n操作数组时，我们通常会优先使用array对象中的高级函数。\n\n不过，我这里要介绍一种更简单的方法来改变数组长度，我喜欢它的原因是它非常直观且易读。\n\n只需使用length属性并传递一个数字，就可以改变数组的长度。这样做非常方便！\n``` js\nlet array = ['1', '2', '3', '4'];\narray.length = 2;\nconsole.log(array); // ['1', '2']\n```\n当然 ，如果你更注重性能，还是请使用 array.slice()。\n### 4、数字分割符：提高数字可读性\n若要提高数字的可读性，你可以使用下划线作为分隔符来更好地区分数字的各个部分。这样做可以让数字更易读，让人一目了然。\n``` js\nconst num = 1_000_000_000;\nconsole.log(num); // 1000000000\n```\n### 5、控制台打印：用对象包裹更清晰\n\n在使用console.log()时，你可以将参数括在大括号中，这样可以在控制台输出时同时显示变量的名称和值。这种方式非常方便，让你更清晰地了解每个变量的内容。\n\n``` js\n\nconst name = \"道长王jj\";\nconsole.log({ name });\n\n// {\n//     \"name\": \"道长王jj\"\n// }\n```\n### 6、短路运算：简化条件判断\nif...else条件判断是代码过程中最常用的，几乎在任何情况下，我们都会快速地敲下它来控制逻辑流程。\n\n不过，有时候我们也希望代码更加简洁、快速，不占那么多篇幅。我们想尽可能地简洁且快速，于是就会用到三元运算符：\n\n``` js\nconst num = 75;\nconst result1 = num > 100 ? '大于100' : '小于100';\n```\n但是我在这里并不是推荐使用“三元运算”，其实有时候三元运算符可能会让代码逻辑变得有点复杂哦！比如这样：\n``` js\nconst result2 = num > 100 ? (num > 200 ? '大于200' : '介于100和200之间') : '小于100';\n```\n这个时候，使用 && 和 || 这类逻辑运算符反而能更简洁的表达算式。\n\n举个例子：\n``` js\n// 假设，我们有三个已经打过分的相亲对象必须选择一个来当女朋友，使用 `&&` 可以很好的帮我们做出选择。\nconst one = 8;\nconst two = 9;\nconst three = 10;\n// 返回10\nconsole.log(one && two && three); \n// 返回0\nconsole.log(0 && null);\n```\n``` js\n// 当然，如果你足够独特~~（变态）~~，就是不要女朋友，如果选只选最差的，你可以使用 `||` 来帮你做吹选择。\nconst one = 8;\nconst two = 9;\nconst three = 10;\n// 返回8\nconsole.log(one || two || three); \n// 返回null\nconsole.log(0 || null);\n```\n\n哦，这个情况在工作场景中确实很常见。\n\n假设我们想返回变量的 length ，但我们不确定接口会不会给我们需要的类型。\n\n这个时候我们就可以使用 if/else 语句来检查是可接受的类型，但它会让我们的代码非常臃肿。\n\n这时候，我们可以使用短路运算来简化代码，而且有极高的健壮性：\n``` js\n// 使用if\nlet temp = getArray();\n\nif (!temp) {\n    tempLength = 0;\n} else {\n    tempLength = temp.length\n}\n\n// 使用 ||\n// 如果变量 tempArray 为真，则将返回该变量。否则，将返回 []\nconst temp = (tempArray || []).length;\n```\n### 7、可选链：更加安全地访问对象属性\n你有没有遇到过访问嵌套对象属性的困扰？\n\n就是有时候你根本不确定这个对象或者它的子属性到底存不存在，结果就报错了！以至于程序崩溃无法运行\n\n``` js\nconsole.log(abc.ss)\n// ceError: abc is not defined\n//     at <anonymous>:1:1\n// (匿名) @ VM190795\n```\n为了不让报错阻止我们的程序运行，我们通常会将它包装在一个if……else代码块中：\n``` js\n\nif (abc.ss) {\n  console.log(abc.ss);\n} else {\n  console.log('没有abc这个变量喏~');\n}\n\n// 还可以用短路运算\nconsole.log(abc && abc.ss)\n```\n不过，ES6的可选链可以让我们彻底抛弃掉上面的写法了，我们可以直接这样做：\n``` js\nconsole.log(abc?.ss?.aa?.bb?.cc)\n```\n### 8、巧用运算符：快速类型转换\n\n在这之前需要科普一些小知识：\n\n除了常规的true和false之外，其他变量也可以被当成true 或者 false。\n\n除了0、\"\"(空字符串)、null、undefined、NaN、false 之外呢，JavaScript中的所有其他值都是\"真的\"哦！\n\n所以呢，基于这个认知。\n\n我们可以使用负运算符 ! ，将类型转换为 \"boolean\" 。\n\n``` js\nconst x = Boolean(expression);     // 推荐\nconst x = !!(expression);          // 推荐\nconst x = new Boolean(expression); // 不太好\n```\n我们可以使用连接运算符 + 后跟一组空引号 ''，将类型转换为 \"string\" 。\n``` js\nconst value = 12 + '';\nconsole.log(value); // '12'\n```\n\n我们可以使用减法运算符 -，将类型转换为 \"number\" 。\n``` js\n\nlet myValue = '12';\nmyValue = myValue - 1;\nconsole.log(myValue); // 11\n\n// 当然也可以转换 Boolean 变成 Number \n// 工作中不推荐这样用！！！！\nconsole.log(+true); // 1\nconsole.log(+false); // 0\n```\n### 9、快速运算：更快更简洁的数学运算操作符\n以前我们在使用JavaScript进行数学运算时，总是要借助Math库进行运算。很奇怪的是，但是很多教程并没有提醒我们，ES7其实带来的全新运算符。\n\n如果想示乘方操作，通常我们会调用Math.pow(5, 7)这个方法。但是现在我们可以使用幂运算符**了，而且性能更快更好。\n\n``` js\nconsole.log(5 ** 7); // 78125\n```\n如果想将浮点数转换为整数，通常我们会使用Math.floor()、Math.ceil()或Math.round()这些方法。不过，其实可以使用 | 将浮点数直接截断为整数。这个技巧可以让你的代码更简洁高效哦！\n``` js\n// 正数，则向下舍入\nconsole.log(34.9 | 0);  // Result: 34\n// 负数，则向上舍入\nconsole.log(-12.9 | 0); // Result: -12\n```\n以前我们只取千分位需要进行类型转换后才能进行取数\n``` js\n\nlet str = \"33545\"; \nNumber(str.substring(0, str.length - 3)); // 33\n```\n但是我们可以更优雅地这样做：\n``` js\nconsole.log(33545 / 1000 | 0)  // Result: 33\n```\n希望本文能够帮助到你， 虽然真的很基础很基础。",
                "userId": "64aabf3d28f413f08d51cc00",
                "category": "随记",
                "viewNum": 10,
                "likeNum": 0,
                "isReship": true,
                "isReshipUrl": "https://juejin.cn/post/7239895900297740344",
                "isReshipName": "JavaScript 中有趣的 9 个常用编码套路",
                "recommended": true,
                "likeToken": [],
                "status": true,
                "createdAt": "2023-08-11T03:57:47.190Z",
                "updatedAt": "2023-08-30T15:33:35.265Z",
                "user": [
                    {
                        "_id": "64aabf3d28f413f08d51cc00",
                        "avatar": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png",
                        "username": "admin",
                        "nickname": "ZY·Admin",
                        "password": "$2a$10$MPIYm/7XO6.vEFGy7N9IvujPFDsvBM8buX1LgNNz65ZnHuStI0qVK",
                        "roleId": "64a423816f4197cfc70375e3",
                        "status": true,
                        "createdAt": "2023-07-09T14:07:57.766Z",
                        "updatedAt": "2023-08-30T07:02:46.204Z",
                        "type": "admin",
                        "email": "1840354092@qq.com",
                        "address": "贵州省贵阳市 电信",
                        "userIp": "111.121.40.63",
                        "platform": "Chrome.v115",
                        "website": "http://www.zhouyi.run"
                    }
                ]
            },
            {
                "_id": "64d5ae75a0d58a3cda8cb75a",
                "title": "如何完成一个完全不依赖客户端时间的倒计时",
                "cover": "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "abstract": "最近在做一个调查问卷系统，其中有一个需求就是倒计 40 分钟以后自动提交问卷。由于 UI 库使用的是 antd，一个完全不依赖客户端时间的倒计时组件",
                "content": "> 作者：xinglee\n> https://juejin.cn/post/7229898205256417341\n\n### 前言\n\n最近在做一个调查问卷系统，其中有一个需求就是倒计 40 分钟以后自动提交问卷。由于 UI 库使用的是 `antd`，所以我第一反应是使用 `antd` 的 `CountDown` 组件。于是我就愉快的写出以下代码：\n``` js\nimport { Statistic } from 'antd';\nconst { Countdown } = Statistic;\n\nconst TOTAL_TIME = 40;\nconst deadline = dayjs(startTime).add(TOTAL_TIME, 'minute').valueOf();\n\n\nfunction TitleAndCountDown() {\n  useEffect(() => {\n    if (currentTime >= deadline) {\n      onFinish();\n    }\n  }, []);\n\n  return (\n    <Countdown\n      value={deadline}\n      onFinish={onFinish}\n      format=\"mm:ss\"\n      prefix={<img src={clock} style={{ width: 25, height: 25 }} />}\n    />\n  );\n}\n```\n其中 `startTime` ，`currentTime` 是服务端给我返回的开始答题时间以及现在的时间，`onFinish` 是提交问卷的函数。测试一切正常，并且看起来好像没有依赖客户端时间，于是我就愉快的提交了代码。\n### antd 的问题\n上线后，有客户反映倒计时不正常，进入系统后直接显示 9000 多秒，导致业务直接进行不下去。这个时候我就懵了，我的代码中并没有依赖任何客户端时间，问题肯定是出现在 `antd` 的 `CountDown` 组件上。于是我就去看了一下 `antd` 的 `CountDown` 组件的源码，果不其然\n``` js\n // 30帧\n const REFRESH_INTERVAL= 1000 / 30;\n\n  const stopTimer = () => {\n    onFinish?.();\n    if (countdown.current) {\n      clearInterval(countdown.current);\n      countdown.current = null;\n    }\n  };\n\n  const syncTimer = () => {\n    const timestamp = getTime(value);\n    if (timestamp >= Date.now()) {\n      countdown.current = setInterval(() => {\n        forceUpdate();\n        onChange?.(timestamp - Date.now());\n        if (timestamp < Date.now()) {\n          stopTimer();\n        }\n      }, REFRESH_INTERVAL);\n    }\n  };\n\n  React.useEffect(() => {\n    syncTimer();\n    return () => {\n      if (countdown.current) {\n        clearInterval(countdown.current);\n        countdown.current = null;\n      }\n    };\n  }, [value]);\n```\n核心代码就是这段，本质 `CountDown` 并不是一个倒计时，而是根据客户端时间算出来的一个时间差值，这也能解释为啥这个倒计时相对比较准确。\n\n但是依赖了客户端时间，就意味客户的本地时间会影响这个倒计时的准确性，甚至可以直接通过修改本地时间来绕过倒计时。一开始我的方案是加入 `diff` 值修正客户端时间，我也给 antd 官方提了一个 PR ( https://github.com/ant-design/ant-design/pull/41918 )，但是被拒绝了。后来想了一下 `CountDown` 组件可以直接传入 `diff` 后的 `value`，确实没有必要新增 `props`。\n\n这个方案后来也是被否了，因为还是依赖了客户端时间。客户的机房条件比较复杂，可能一开始时间不对，但是做题途中时间会校正回来。因为我们这个调查系统短时间有几十万人参加调查，为了不给服务器过多的压力，查询服务器时间接口的频率是 1 分钟一次，所以会有很长时间的倒计时异常。\n\n### 完全不依赖客户端时间的倒计时\n倒计时的方案大致有 4 种， `setTimeout`，`setInterval`，`requestAnimationFrame`，`Web Worker` 。`requestAnimationFrame` 和 `Web Worker` 因为兼容性问题暂时放弃。\n\n`setInterval` 实现倒计时是比较方便的，但是 `setInterval` 有两个缺点\n\n使用 `setInterval` 时，某些间隔会被跳过；\n可能多个定时器会连续执行；\n每个 `setTimeout` 产生的任务会直接 `push` 到任务队列中；而 `setInterval` 在每次把任务`push`到任务队列前，都要进行一下判断(看上次的任务是否仍在队列中)。\n\n可以看到，主线程的渲染都会对 `setTimeout` 和 `setInterval` 的执行时间产生影响，但是 `setTimeout` 的影响小一点。所以我们可以使用 `setTimeout` 来实现倒计时.\n``` js\nconst INTERVAL = 1000;\n\ninterface CountDownProps {\n  restTime: number;\n  format?: string;\n  onFinish: () => void;\n  key: number;\n}\nexport const CountDown = ({ restTime, format = 'mm:ss', onFinish }: CountDownProps) => {\n  const timer = useRef<NodeJS.Timer | null>(null);\n  const [remainingTime, setRemainingTime] = useState(restTime);\n\n  useEffect(() => {\n    if (remainingTime < 0 && timer.current) {\n      onFinish?.();\n      clearTimeout(timer.current);\n      timer.current = null;\n      return;\n    }\n    timer.current = setTimeout(() => {\n      setRemainingTime((time) => time - INTERVAL);\n    }, INTERVAL);\n    return () => {\n      if (timer.current) {\n        clearTimeout(timer.current);\n        timer.current = null;\n      }\n    };\n  }, [remainingTime]);\n\n  return <span>{dayjs(remainingTime > 0 ? remainingTime : 0).format(format)}</span>;\n};\n```\n为了修正 `setTimeout` 的时间误差,我们需要在 `聚焦页面的时候` 以及 `定时一分钟`请求一次服务器时间来修正误差。这里我们使用 `swr` 来轻松实现这个功能。\n``` js\nconst REFRESH_INTERVAL = 60 * 1000;\n\nexport function useServerTime() {\n  const { data } = useSWR('/api/getCurrentTime', swrFetcher, {\n    // revalidateOnFocus 默认是开启的，但是我们项目中给关了，所以需要重新激活\n    revalidateOnFocus: true,\n    refreshInterval: REFRESH_INTERVAL,\n  });\n  return { currentTime: data?.currentTime };\n}\n```\n最后我们把 `CountDown` 组件和 `useServerTime` 结合起来\n``` js\nfunction TitleAndCountDown() {\n  const { currentTime } = useServerTime();\n\n  return (\n    <Countdown\n      restTime={deadline - currentTime}\n      onFinish={onFinish}\n      key={deadline - currentTime}\n    />\n  );\n}\n```\n这样，就完成了一个完全不依赖客户端时间的倒计时组件。\n### 总结\n- 上面方案中的 `setTimeout` 其实换成 `requestAnimationFrame` 计时会更加准确，也解决了 `requestAnimationFrame` 在 未被激活的页面中 中不会执行的问题。\n- `setInterval` 和 `setTimeout` 的时间误差是由于主线程的渲染时间造成的，所以如果我们的页面中有很多的动画，那么这个误差会更大。\n- 未激活的页面，`setTimeout` 的最小执行间隔是 `1000ms`",
                "userId": "64aabf3d28f413f08d51cc00",
                "category": "随记",
                "viewNum": 10,
                "likeNum": 0,
                "isReship": false,
                "recommended": true,
                "likeToken": [
                    "111.121.46.147"
                ],
                "status": true,
                "createdAt": "2023-08-11T03:43:49.036Z",
                "updatedAt": "2023-08-23T13:11:04.153Z",
                "user": [
                    {
                        "_id": "64aabf3d28f413f08d51cc00",
                        "avatar": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png",
                        "username": "admin",
                        "nickname": "ZY·Admin",
                        "password": "$2a$10$MPIYm/7XO6.vEFGy7N9IvujPFDsvBM8buX1LgNNz65ZnHuStI0qVK",
                        "roleId": "64a423816f4197cfc70375e3",
                        "status": true,
                        "createdAt": "2023-07-09T14:07:57.766Z",
                        "updatedAt": "2023-08-30T07:02:46.204Z",
                        "type": "admin",
                        "email": "1840354092@qq.com",
                        "address": "贵州省贵阳市 电信",
                        "userIp": "111.121.40.63",
                        "platform": "Chrome.v115",
                        "website": "http://www.zhouyi.run"
                    }
                ]
            }
        ]
    );

    const navigate = useNavigate();

    return (
        <>
            <section className="post-box">
                <section className="search-box">
                    <input placeholder="搜索"/>
                </section>
                <ul className="menu-list">
                    <li>🪐ALL</li>
                    <li>🥏VUE</li>
                    <li>🚦REACT</li>
                    <li>🎯移动H5</li>
                    <li>💡小程序</li>
                </ul>
                <section className="post-list">
                    {postData.map((item) => {
                        return (
                            <article className="post-item" key={item._id}
                                     onClick={() => navigate('/PostDetail', {state:{id: item._id}})}>
                                <header className="blog-header">
                                    <h2>{item.title}</h2>
                                    <p>{item.abstract}</p>
                                    <div className="blog-tip">
                                        <span>{TimeUtils.formatRelativeTime(item.createdAt)} 发布</span>
                                        <span><i className="iconfont icon-chakan"></i> {item.viewNum}</span>
                                    </div>
                                </header>
                                <div className="blog-cover">
                                    <img
                                        alt="cover"
                                        src="http://www.zhouyi.run:3089/v1/common/files/preview/img/1691571900783.png"/>
                                </div>
                            </article>
                        )
                    })}
                </section>
                {
                    postData.length > 5 && <section className="pagenation">
                        <Pagination defaultCurrent={1} total={5}/>
                    </section>
                }

            </section>
        </>
    );
};

export default PostList;
