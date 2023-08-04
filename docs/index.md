---
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: 爱读书的二丙子的博客
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
    name: 爱读书的二丙子 <br/>
    text: The Way to FrontEnd Developer
    tagline: 一以贯之的努力，不得懈怠的人生，每天的微小积累会决定最终的结果，这就是答案
    image:
        # 首页右边的图片
        src: /avatar.png
        # 图片的描述
        alt: avatar
    # 按钮相关
    actions:
    - theme: brand
      text: 进入主页
      link: /column/views/guide
    - theme: alt
      text: 个人成长
      link: /column/Growing/
# 按钮下方的描述
features:
  - icon: 🧐
    title: Web前端
    details: 00后,现居杭州，职业是Web前端
    link: /column/views/guide
  - icon: 📖
    title: 喜欢读书
    details: 迷茫中，所以通过看书来进行自我改造～～
  - icon: 🧩
    title: 长期主义
    details: 正在努力践行长期主义和利他哲学
---



<!-- 自定义组件 -->
<!-- <script setup>
import home from './components/home.vue';
</script>

<home /> -->