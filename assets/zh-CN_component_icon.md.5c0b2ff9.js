import{r as e,o as _,c as v,a as n,w as s,b as a,u as t,E as c,S as k,D as r,a6 as b,l as g,N as i,e as l,d as o}from"./app.f71a985e.js";const f=l(`<h1 id="icon-\u56FE\u6807" tabindex="-1">Icon \u56FE\u6807 <a class="header-anchor" href="#icon-\u56FE\u6807" aria-hidden="true">#</a></h1><p>Element Plus \u63D0\u4F9B\u4E86\u4E00\u5957\u5E38\u7528\u7684\u56FE\u6807\u96C6\u5408\u3002</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Element Plus \u56E2\u961F\u6B63\u5728\u5C06\u539F\u6709\u7EC4\u4EF6\u5185\u7684 <strong>Font Icon</strong> \u5411 <strong>SVG Icon</strong> \u8FC1\u79FB\uFF0C\u8BF7\u591A\u591A\u7559\u610F<a href="/#/zh-CN/component/changelog">\u66F4\u65B0\u65E5\u5FD7</a>, \u53CA\u65F6\u83B7\u53D6\u5230\u66F4\u65B0\u4FE1\u606F\uFF0C<strong>Font Icon</strong> \u5C06\u4F1A\u5728\u7B2C\u4E00\u4E2A\u6B63\u5F0F\u53D1\u5E03\u88AB\u5E9F\u5F03\uFF0C\u8BF7\u5C3D\u5FEB\u8FC1\u79FB\u3002</p></div><h2 id="\u4F7F\u7528-svg-\u56FE\u6807" tabindex="-1">\u4F7F\u7528 SVG \u56FE\u6807 <a class="header-anchor" href="#\u4F7F\u7528-svg-\u56FE\u6807" aria-hidden="true">#</a></h2><ul><li><p>\u5982\u679C\u4F60\u60F3\u50CF\u7528\u4F8B\u4E00\u6837<strong>\u76F4\u63A5\u4F7F\u7528</strong>\uFF0C\u4F60\u9700\u8981<a href="https://v3.vuejs.org/guide/component-registration.html#global-registration" target="_blank" rel="noopener noreferrer">\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6</a>\uFF0C\u624D\u80FD\u591F\u76F4\u63A5\u5728\u9879\u76EE\u91CC\u4F7F\u7528\u3002</p></li><li><p>\u82E5\u60F3\u67E5\u770B\u6240\u6709\u7684\u7EC4\u4EF6\uFF0C\u8BF7\u8BBF\u95EE <a href="https://unpkg.com/browse/@element-plus/icons@latest/lib/" target="_blank" rel="noopener noreferrer">@element-plus/icons</a> \u548C\u6E90\u4EE3\u7801 <a href="https://github.com/element-plus/element-plus-icons" target="_blank" rel="noopener noreferrer">Github/ElementPlus/icons</a>\uFF0C\u6216\u8005 <a href="/zh-CN/component/icon.html#svg\u56FE\u6807\u96C6\u5408-\u9002\u7528\u4E8E1-0-2-beta-66\u53CA\u4EE5\u540E\u7684\u7248\u672C">SVG \u56FE\u6807\u96C6\u5408</a></p></li></ul><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u5F53\u524D\u7684\u56FE\u6807\u53EA\u9002\u7528\u4E8E <a href="https://v3.vuejs.org" target="_blank" rel="noopener noreferrer">Vue 3</a>\u3002</p><h2 id="\u4F7F\u7528\u5305\u7BA1\u7406\u5668" tabindex="-1">\u4F7F\u7528\u5305\u7BA1\u7406\u5668 <a class="header-anchor" href="#\u4F7F\u7528\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code>$ <span class="token function">yarn</span> <span class="token function">add</span> @element-plus/icons
<span class="token comment"># \u6216\u8005</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @element-plus/icons
</code></pre></div><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u56E0\u4E3A HTML \u6807\u51C6\u5DF2\u7ECF\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u4E3A <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" target="_blank" rel="noopener noreferrer">menu</a> \u7684\u6807\u7B7E\uFF0C \u5982\u679C\u60A8\u6CE8\u518C\u7684 <code>menu</code> \u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u60A8\u9700\u8981\u4F7F\u7528\u522B\u540D\u6765\u6E32\u67D3\u56FE\u6807\u3002</p></div><div class="language-vue"><pre><code><span class="token comment">&lt;!-- Use el-icon to provide attributes to SVG icon --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>edit</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Or use it independently without derive attributes from parent --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>edit</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,12),y=l(`<h2 id="\u7ED3\u5408-el-icon-\u4F7F\u7528" tabindex="-1">\u7ED3\u5408 <code>el-icon</code> \u4F7F\u7528 <a class="header-anchor" href="#\u7ED3\u5408-el-icon-\u4F7F\u7528" aria-hidden="true">#</a></h2><p><code>el-icon</code> \u4E3A raw SVG \u56FE\u6807\u63D0\u4F9B\u989D\u5916\u7684\u5C5E\u6027, \u63D0\u4F9B\u7684\u8BE6\u7EC6\u5C5E\u6027\u8BF7\u7EE7\u7EED\u9605\u8BFB\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    with extra class <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>is-loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#409EFC<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-inherit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>share</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>is-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>loading</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>search</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> Search <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,3),q=a("p",null,[o(" \u901A\u8FC7\u6DFB\u52A0\u989D\u5916\u7684\u7C7B\u540D "),a("b",null,"is-loading"),o("\uFF0C\u4F60\u7684\u56FE\u6807\u5C31\u53EF\u4EE5\u5728 2 \u79D2\u5185\u65CB\u8F6C 360 \u5EA6\uFF0C\u4F46\u8BA9\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u6539\u5199\u60F3\u8981\u7684\u52A8\u753B\u3002 ")],-1),S={style:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},T=a("span",{style:{"vertical-align":"middle"}},"\u641C\u7D22",-1),x=l(`<h2 id="\u76F4\u63A5\u4F7F\u7528-svg-\u56FE\u6807" tabindex="-1">\u76F4\u63A5\u4F7F\u7528 SVG \u56FE\u6807 <a class="header-anchor" href="#\u76F4\u63A5\u4F7F\u7528-svg-\u56FE\u6807" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Since svg icons do not carry any attributes by default --&gt;</span>
    <span class="token comment">&lt;!-- You need to provide attributes directly --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>share</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>search</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),I={style:{"font-size":"20px"}},V={id:"svg-\u56FE\u6807\u96C6\u5408-\u9002\u7528\u4E8E-1-0-2-beta-66-\u53CA\u4EE5\u540E\u7684\u7248\u672C",tabindex:"-1"},E=o("SVG \u56FE\u6807\u96C6\u5408 "),w=o("\u9002\u7528\u4E8E 1.0.2-beta.66 \u53CA\u4EE5\u540E\u7684\u7248\u672C"),C=o(),N=a("a",{class:"header-anchor",href:"#svg-\u56FE\u6807\u96C6\u5408-\u9002\u7528\u4E8E-1-0-2-beta-66-\u53CA\u4EE5\u540E\u7684\u7248\u672C","aria-hidden":"true"},"#",-1),z=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,"\u53EA\u8981\u4F60\u5B89\u88C5\u4E86 @element-plus/icons\uFF0C**\u5C31\u53EF\u4EE5\u5728\u4EFB\u610F\u7248\u672C\u91CC\u4F7F\u7528 SVG \u56FE\u6807 **\u3002"),a("p",null,[a("strong",null,"\u60A8\u53EF\u4EE5\u70B9\u51FB\u56FE\u6807\u590D\u5236\u4EE3\u7801\u3002")])],-1),G=l('<h3 id="icon-\u5C5E\u6027" tabindex="-1">Icon \u5C5E\u6027 <a class="header-anchor" href="#icon-\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>color</td><td>svg \u7684 fill \u989C\u8272</td><td>Pick&lt;CSSProperties, &#39;color&#39;&gt;</td><td>-</td><td>inherit</td></tr><tr><td>size</td><td>SVG \u56FE\u6807\u7684\u5927\u5C0F\uFF0Csize x size</td><td>number \\</td><td>string</td><td>-</td></tr></tbody></table><h2 id="icon-\u63D2\u69FD" tabindex="-1">Icon \u63D2\u69FD <a class="header-anchor" href="#icon-\u63D2\u69FD" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table>',4),L='{"title":"Icon \u56FE\u6807","description":"","frontmatter":{"title":"Icon \u56FE\u6807","lang":"zh-CN"},"headers":[{"level":2,"title":"\u4F7F\u7528 SVG \u56FE\u6807","slug":"\u4F7F\u7528-svg-\u56FE\u6807"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528\u5305\u7BA1\u7406\u5668","slug":"\u4F7F\u7528\u5305\u7BA1\u7406\u5668"},{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u7ED3\u5408 el-icon \u4F7F\u7528","slug":"\u7ED3\u5408-el-icon-\u4F7F\u7528"},{"level":2,"title":"\u76F4\u63A5\u4F7F\u7528 SVG \u56FE\u6807","slug":"\u76F4\u63A5\u4F7F\u7528-svg-\u56FE\u6807"},{"level":3,"title":"SVG \u56FE\u6807\u96C6\u5408","slug":"svg-\u56FE\u6807\u96C6\u5408-\u9002\u7528\u4E8E-1-0-2-beta-66-\u53CA\u4EE5\u540E\u7684\u7248\u672C"},{"level":3,"title":"Icon \u5C5E\u6027","slug":"icon-\u5C5E\u6027"},{"level":2,"title":"Icon \u63D2\u69FD","slug":"icon-\u63D2\u69FD"}],"relativePath":"zh-CN/component/icon.md","lastUpdated":1635658937853}',P={};function A(R){return(D,j)=>{const p=e("ElIcon"),u=e("ElRow"),d=e("ElButton"),h=e("ElTag"),m=e("IconList");return _(),v("div",null,[f,n(u,null,{default:s(()=>[a("div",null,[n(p,{size:30},{default:s(()=>[n(t(c))]),_:1}),n(t(c))])]),_:1}),y,n(u,null,{default:s(()=>[q,a("div",S,[n(p,{size:20},{default:s(()=>[n(t(c))]),_:1}),n(p,{color:"#409EFC",class:"no-inherit"},{default:s(()=>[n(t(k))]),_:1}),n(p,null,{default:s(()=>[n(t(r))]),_:1}),n(p,{class:"is-loading"},{default:s(()=>[n(t(b))]),_:1}),n(d,{type:"primary"},{default:s(()=>[n(p,{style:{"vertical-align":"middle",color:"#fff"}},{default:s(()=>[n(t(g))]),_:1}),T]),_:1})])]),_:1}),x,n(u,null,{default:s(()=>[a("div",I,[i(" Since svg icons do not carry any attributes by default "),i(" You need to provide attributes directly "),n(t(c),{style:{width:"1em",height:"1em","margin-right":"8px"}}),n(t(k),{style:{width:"1em",height:"1em","margin-right":"8px"}}),n(t(r),{style:{width:"1em",height:"1em","margin-right":"8px"}}),n(t(g),{style:{width:"1em",height:"1em","margin-right":"8px"}})])]),_:1}),a("h3",V,[E,n(h,null,{default:s(()=>[w]),_:1}),C,N]),z,n(m),i(` <ul class="icon-list">
  <li
    v-for="component in $svgIcons"
    :key="component"
    @click="$copySvgIcon(component)">
    <span class="demo-svg-icon">
      <el-icon color="#000">
        <component :is="component" />
      </el-icon>
      <span class="icon-name">{{component}}</span>
    </span>
  </li>
</ul> `),G])}}const F=Object.assign(P,{setup:A});export{L as __pageData,F as default};