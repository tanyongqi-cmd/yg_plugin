# yg_plugin

## 安装
```
npm i yg_plugin
```
## 介绍

### ygDialog

|  方法名   | 说明  | 	参数  |
|  ----  | ----  | ----  |
| show  | 打开弹框 | (title,type,option,row) 

|  参数   | 参数类型  | 说明  |
|  ----  | ----  | ----  |
| title  | string  |  弹框标题 |
| type  | string  |  进入的组件名 |
| option  | object  |  弹框配置项具体配置参考下面 |
| option.top  | string  | 	Dialog CSS 中的 margin-top 值
| option.width  | string  | Dialog 的宽度
| option.fullscreen  | boolean  | 是否为全屏 Dialog |
| row  | object | 自定义参数  |

|  事件名称   | 说明  | 	回调参数  |
|  ----  | ----  | ----  |
| cancel  | 弹框关闭回调事件 | row 自定义回调参数

### ygDrawer

|  方法名   | 说明  | 	参数  |
|  ----  | ----  | ----  |
| show  | 打开弹框 | (title,type,option,row)

|  参数   | 参数类型  | 说明  |
|  ----  | ----  | ----  |
| title  | string  |  弹框标题 |
| type  | string  |  进入的组件名 |
| option  | object  |  抽屉配置项 |
| option.size  | string/number  | Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释 |
| option.direction  | string  | Drawer 打开的方向(rtl 右/ ltr 左/ ttb 上/ btt 下) |
| option.wrapperClosable  | boolean  | 点击遮罩层是否可以关闭 Drawer |
| option.withHeader  | boolean  | object 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效 |
| row  | object | 自定义参数  |


|  事件名称   | 说明  | 	回调参数  |
|  ----  | ----  | ----  |
| cancel  | 弹框关闭回调事件 | row 自定义回调参数

### ygRegionSelector(暂不可用)

|  参数   | 说明  |
|  ----  | ----  |
| value / v-model	  | 地区id集合 |
| placeholder  | 提示文本 |
| options  | 未开发(暂不可用) |

### npm仓库地址
https://www.npmjs.com/package/yg_plugin/
