# b-loading

```
npm install bb-loading -S
```

#### main.js

```
import BLoading from 'bb-loading'
Vue.use(BLoading)
```

#### 其他页面使用

```
this.$Bloading.show(config) // 显示 config可选参数
this.$Bloading.hide() // 隐藏
```

##### config

```
config: {
    mask: 'rgba(44, 42, 57, 0.3)', // 遮罩层背景色
    color: '#1890ff', // 图标颜色
    text: 'Loading...', // 显示文本
    textColor: '#FFF' // 文本颜色
}
```
