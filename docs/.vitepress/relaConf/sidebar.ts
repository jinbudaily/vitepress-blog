import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/JavaScript/': [
     // 第一部分
    {
      text: '原型链',
      items: [
        {
          text: '贪心算法',
          link: '/column/JavaScript/原型和原型链'
        }
      ]
    },
    // 第二部分
    {
      text: 'this',
      items: [
        {
          text: 'this是谁',
          link: '/column/JavaScript/this是谁'
        },
      ]
    }
  ]
};