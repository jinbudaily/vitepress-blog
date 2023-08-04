import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/JavaScript/': [
     // 第一部分
    {
      text: 'JavaScript核心语法',
      items: [
        {
          text: '数据类型与堆栈内存',
          link: '/column/JavaScript/数据类型与堆栈内存'
        },
        {
            text: '函数执行机制',
            link: '/column/JavaScript/函数执行机制'
        },
        {
            text: '闭包作用域与垃圾回收机制',
            link: '/column/JavaScript/闭包作用域与垃圾回收机制'
        },
        {
            text: '闭包的应用',
            link: '/column/JavaScript/闭包的应用'
        },
        {
            text: 'this是谁',
            link: '/column/JavaScript/this是谁'
        },
        {
            text: '模块化发展历程',
            link: '/column/JavaScript/模块化发展历程'
        },
        {
            text: 'js面向对象',
            link: '/column/JavaScript/js面向对象'
        },
        {
            text: '异步编程',
            link: '/column/JavaScript/异步编程'
        },
        {
            text: 'DOM与事件',
            link: '/column/JavaScript/DOM与事件'
        },
      ]
    },
    // 第二部分
    {
      text: 'ES6',
      items: [
        {
          text: 'ES6语法',
          link: '/column/JavaScript/ES6语法'
        },
      ]
    }
  ]
};