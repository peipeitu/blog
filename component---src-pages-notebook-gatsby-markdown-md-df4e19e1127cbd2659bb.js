"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[924],{1877:function(a,e,n){n.r(e),n.d(e,{_frontmatter:function(){return p},default:function(){return r}});var t=n(3366),s=(n(7294),n(4983)),m=["components"],p={title:"Gatsby 之 markdown文件展示",date:"2015-05-01T22:12:03.284Z",description:"在Gatsby项目下将markdown转换为页面的具体操作及扩展",type:"gatsby"},o={_frontmatter:p};function r(a){var e=a.components,n=(0,t.Z)(a,m);return(0,s.mdx)("wrapper",Object.assign({},o,n,{components:e,mdxType:"MDXLayout"}),(0,s.mdx)("h4",{id:"生成目录",style:{position:"relative"}},(0,s.mdx)("a",{parentName:"h4",href:"#%E7%94%9F%E6%88%90%E7%9B%AE%E5%BD%95","aria-label":"生成目录 permalink",className:"anchor before"},(0,s.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,s.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"生成目录"),(0,s.mdx)("hr",null),(0,s.mdx)("h5",{id:"1-获取目录数据",style:{position:"relative"}},(0,s.mdx)("a",{parentName:"h5",href:"#1-%E8%8E%B7%E5%8F%96%E7%9B%AE%E5%BD%95%E6%95%B0%E6%8D%AE","aria-label":"1 获取目录数据 permalink",className:"anchor before"},(0,s.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,s.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"1. 获取目录数据"),(0,s.mdx)("p",null,"在markdown文件展示的template文件中的graphQL查询代码中添加",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"tableOfContents")),(0,s.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},(0,s.mdx)("pre",{parentName:"div",className:"language-javascript"},(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"markdownRemark"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.mdx)("span",{parentName:"code",className:"token parameter"},"fields",(0,s.mdx)("span",{parentName:"span",className:"token operator"},":")," ",(0,s.mdx)("span",{parentName:"span",className:"token punctuation"},"{")," slug",(0,s.mdx)("span",{parentName:"span",className:"token operator"},":")," ",(0,s.mdx)("span",{parentName:"span",className:"token punctuation"},"{")," eq",(0,s.mdx)("span",{parentName:"span",className:"token operator"},":")," $slug ",(0,s.mdx)("span",{parentName:"span",className:"token punctuation"},"}")," ",(0,s.mdx)("span",{parentName:"span",className:"token punctuation"},"}")),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    id\n    excerpt\n    html\n    tableOfContents\n    frontmatter ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      title\n      tags\n      ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"date"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"("),"formatString",(0,s.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.mdx)("span",{parentName:"code",className:"token string"},'"MMMM DD, YYYY"'),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},")"),"\n    ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),"\n  ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),"\n",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}")))),(0,s.mdx)("h5",{id:"2-注入锚点",style:{position:"relative"}},(0,s.mdx)("a",{parentName:"h5",href:"#2-%E6%B3%A8%E5%85%A5%E9%94%9A%E7%82%B9","aria-label":"2 注入锚点 permalink",className:"anchor before"},(0,s.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,s.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"2. 注入锚点"),(0,s.mdx)("p",null,"引入插件",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"gatsby-remark-autolink-headers"),"并在",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"gatsby-config.js"),"文件中配置"),(0,s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.mdx)("pre",{parentName:"div",className:"language-bash"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},(0,s.mdx)("span",{parentName:"code",className:"token function"},"npm")," ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"install")," --save gatsby-remark-autolink-headers"))),(0,s.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},(0,s.mdx)("pre",{parentName:"div",className:"language-javascript"},(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"module",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"."),"exports ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  plugins",(0,s.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"["),"\n    ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"...")," ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"..."),"\n    ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      resolve",(0,s.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.mdx)("span",{parentName:"code",className:"token template-string"},(0,s.mdx)("span",{parentName:"span",className:"token template-punctuation string"},"`"),(0,s.mdx)("span",{parentName:"span",className:"token string"},"gatsby-transformer-remark"),(0,s.mdx)("span",{parentName:"span",className:"token template-punctuation string"},"`")),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n      options",(0,s.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        plugins",(0,s.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"["),"\n          ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"...")," ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"..."),"\n          ",(0,s.mdx)("span",{parentName:"code",className:"token template-string"},(0,s.mdx)("span",{parentName:"span",className:"token template-punctuation string"},"`"),(0,s.mdx)("span",{parentName:"span",className:"token string"},"gatsby-remark-autolink-headers"),(0,s.mdx)("span",{parentName:"span",className:"token template-punctuation string"},"`")),"\n          ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"...")," ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"..."),"\n        ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n      ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"...")," ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"..."),"\n  ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"]"),"\n",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}")))),(0,s.mdx)("p",null,"注：如果使用了prismjs插件，那么autolink要放在前面，prismjs放在后面，不然有冲突。"))}r.isMDXComponent=!0},3366:function(a,e,n){function t(a,e){if(null==a)return{};var n,t,s={},m=Object.keys(a);for(t=0;t<m.length;t++)n=m[t],e.indexOf(n)>=0||(s[n]=a[n]);return s}n.d(e,{Z:function(){return t}})}}]);
//# sourceMappingURL=component---src-pages-notebook-gatsby-markdown-md-df4e19e1127cbd2659bb.js.map