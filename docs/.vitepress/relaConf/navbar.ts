import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
    text: '前端开发',
    items: [
      {
        text: '深入浅出JavaScript',
        link: '/column/JavaScript/' // 对应docs/column/Algorithm下的idnex.md文件
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/jinbudaily' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/2436173499730872/posts'
      },
      {
        text: '语雀',
        link: 'https://www.yuque.com/alipayqvfd0cfvgl'
      }
    ]
  }
];