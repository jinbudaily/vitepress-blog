import { DefaultTheme } from 'vitepress';
import { JsSidebar } from './sidebar/javascript';
import { netSidebar } from './sidebar/net'
import { algorithmSidebar } from './sidebar/algorithms';
export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/JavaScript/': JsSidebar,
  '/column/计算机网络/': netSidebar,
  '/column/算法/': algorithmSidebar
};