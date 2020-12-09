---
title: VsCode 编辑器
---

## 基础运用
```javascript
/**  快速注释
```
## 插件

### 格式化插件

-   Prettier - Code formatter (vue 中可能需要安装**vetur**配合才能生效)

> 首选项->设置 搜索 formmat On Save 勾选 保存代码自动格式化(如果格式化插件可用的话); 快捷键：**alt+shift+p**

### 找括号

-   Bracket Pair Colorizer 2

> 可以清楚看到多层括号层级关系，并行 js 中对层级划分

### 自动更改 HTML 配对标签1

-   Auto Rename Tag

### 自动补全

-   Path Intellisense

### 通过类找到样式定义地址

-   CSS Peek

> 选择 class **F12**显示（vue 中无法找到组件内的类）

### 美化

-   vscode-icon (设置文件夹与文件的图标)

### css3 兼容前缀

1、安装

```
npm install -g 	autoprefixer
```

2、vscode 找到 Autoprefixer  
3、在 css、scss、less 等样式页面，按 shift+ctrl+p 调出搜索宽 选择 autoprefixer CSS  
4、vscode 上 3.x 无效的话可以先转 2.2.0 版本


## 快捷键
[参考资料](https://www.cnblogs.com/jpfss/p/10956650.html)
## editorconfig配置
[参考资料](https://juejin.cn/post/6860440041039069191#heading-10)