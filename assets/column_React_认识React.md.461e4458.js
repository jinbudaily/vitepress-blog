import{_ as s,v as a,b as n,R as e}from"./chunks/framework.e2f4824a.js";const l="/vitepress-blog/assets/1684835077004-826b699c-cbd8-4f3a-bf08-103227efba3d.935e0931.png",A=JSON.parse('{"title":"认识React","description":"","frontmatter":{},"headers":[],"relativePath":"column/React/认识React.md","filePath":"column/React/认识React.md"}'),o={name:"column/React/认识React.md"},p=e('<h1 id="认识react" tabindex="-1">认识React <a class="header-anchor" href="#认识react" aria-label="Permalink to &quot;认识React&quot;">​</a></h1><p><code>React</code>是一个用于构建用户界面的JavaScript框架。React的底层逻辑不再基于传统的<code>DOM/BOM</code>操作，而是基于<code>数据驱动视图</code>，开发者无须直接操作DOM,而是通过操作和改变数据来改变视图，当数据改变，页面也会重新渲染，这样有效避免了<code>DOM的重排与重绘</code>，提升了性能。</p><h2 id="mvc模式" tabindex="-1">MVC模式 <a class="header-anchor" href="#mvc模式" aria-label="Permalink to &quot;MVC模式&quot;">​</a></h2><p><code>MVC模式</code>包含了3个部分：</p><ul><li><code>View视图层</code>：React通过<code>JSX</code>构建界面</li><li><code>Model数据层</code>: 在视图中，凡是需要动态变化的（样式或者内容），都需要构建对应的数据模型</li><li><code>Controller控制层</code>: 根据业务需求，当用户进行某些操作的时候，去修改对应的数据，然后React根据最新的数据重新渲染视图，用户看到最新的界面。</li></ul><p>不同于<code>Vue框架</code>的<code>双向数据绑定</code>，React是单向驱动，当视图中的<strong>表单</strong>中的内容发生改变，与之对应的数据不会随之更新，需要开发者基于代码手动实现。 <img src="'+l+`" alt="未命名文件.png"></p><blockquote><p>React中实现状态更新视图渲染的方法主要有两个：</p><ul><li><code>setState</code>: 修改状态的同时通知视图渲染</li><li><code>forceState</code>: 通知视图强制更新</li></ul></blockquote><h2 id="create-react-app的使用" tabindex="-1">create-react-app的使用 <a class="header-anchor" href="#create-react-app的使用" aria-label="Permalink to &quot;create-react-app的使用&quot;">​</a></h2><p><code>React</code>官方为我们提供了<code>create-react-app</code>脚手架，使用<code>create-react-app</code>能够帮我们快速的创建一个<code>React</code>项目，具体安装和使用步骤如下：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 全局安装create-react-app, mac系统要在命令的前面加上 sudo </span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create-react-app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看create-react-app的版本</span></span>
<span class="line"><span style="color:#FFCB6B;">create-react-app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建项目，名称命名只能使用数字、小写字母、_</span></span>
<span class="line"><span style="color:#FFCB6B;">create-react-app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">projectName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入到项目目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">projectName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动项目</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span></code></pre></div><h2 id="react项目目录" tabindex="-1">React项目目录 <a class="header-anchor" href="#react项目目录" aria-label="Permalink to &quot;React项目目录&quot;">​</a></h2><p>你可以在编辑器中打开这个项目，类似下面的文件结构会呈现在你面前：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">|- node_modules  包含安装的模块</span></span>
<span class="line"><span style="color:#A6ACCD;">|- public  页面模板和icon</span></span>
<span class="line"><span style="color:#A6ACCD;">    |- favicon.icon</span></span>
<span class="line"><span style="color:#A6ACCD;">    |- index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">|- src  我们编写的程序</span></span>
<span class="line"><span style="color:#A6ACCD;">    |- index.jsx  程序入口「jsx后缀名可以让文件支持jsx语法」</span></span>
<span class="line"><span style="color:#A6ACCD;">|- package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">|- ...</span></span></code></pre></div><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">dependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">react</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^18.2.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//核心</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">react-dom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^18.2.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//视图编译</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">react-scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5.0.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//对打包命令的集成</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">web-vitals</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^2.1.4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//性能检测工具</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><code>create-react-app</code>脚手架：默认配置的<code>sass</code>，如果使用<code>less</code>,则需要自己处理</p>`,15),c=[p];function t(r,i,y,D,C,d){return a(),n("div",null,c)}const u=s(o,[["render",t]]);export{A as __pageData,u as default};
