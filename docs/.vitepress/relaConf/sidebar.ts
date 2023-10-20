import { DefaultTheme } from 'vitepress';
import { JsSidebar } from './sidebar/javascript';
import { netSidebar } from './sidebar/net'
import { algorithmSidebar } from './sidebar/algorithms';
import { reactSidebar } from './sidebar/react';
export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/JavaScript/': JsSidebar,
  '/column/Network/': netSidebar,
  '/column/算法/': algorithmSidebar,
  '/column/React/': reactSidebar
};