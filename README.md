# b-loading

```
npm install bb-loading -S
```

#### main.js

```
import BLoading from 'bb-loading'
Vue.use(BLoading)
this.$Bloading.init(config) // config可选参数

```

#### 其他页面使用

1. 调用模式

```
this.$Bloading.show() // 显示
this.$Bloading.hide() // 隐藏
```

2. 指令模式

```
<div v-bloading="loading"></div>


export default {
    data() {
        return {
            loading: true
        }
    }
}
```

##### config

```
config: {
    type: 0, // 修改图标 0 || 1
    mask: 'rgba(44, 42, 57, 0.3)', // 遮罩层背景色
    color: '#1890ff', // 图标颜色
    text: 'Loading...', // 显示文本
    textColor: '#FFF' // 文本颜色
    iconColor: '#1890ff', // 图标颜色
    iconSize: 24 // 图标大小
}
```

### 更新记录

V0.0.10

1. 第一版本

---

V1.0.0

1. 新增指令模式调用
2. 新增 loading icon
3. 新增 config 配置项

---

V1.0.4

1. 解决循环中使用指令时只加载最后一个的问题
