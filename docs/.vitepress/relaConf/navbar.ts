import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
    text: '🔥前端开发',
    items: [
      {
        text: '深入浅出JavaScript',
        link: '/column/JavaScript/' // 对应docs/column/Algorithm下的index.md文件
      }
    ]
  },
  {
    text: '💭计算机基础',
    items: [
      {
        text: '计算机网络',
        link: '/column/计算机网络/' // 对应docs/column/Algorithm下的index.md文件
      }
    ]
  },
  {
    text: '🍪React',
    link: '/column/React/'
  },
  {
    text: '🎨数据结构与算法',
    link: '/column/算法/'
  },
  {
    text: '🥳关于我',
    items: [
      { text: 'Github', link: 'https://github.com/jinbudaily' },
      {
        text: '掘金博客',
        link: 'https://juejin.cn/user/2436173499730872/posts'
      },
      {
        text: '语雀知识花园',
        link: 'https://www.yuque.com/alipayqvfd0cfvgl'
      }
    ]
  }
];