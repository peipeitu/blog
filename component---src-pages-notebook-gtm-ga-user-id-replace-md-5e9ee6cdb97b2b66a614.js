"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[790],{7919:function(e,a,r){r.r(a),r.d(a,{_frontmatter:function(){return i},default:function(){return n}});var l=r(3366),t=(r(7294),r(4983)),d=["components"],i={title:"GTM 替换GA中的用户ID",date:"2019-09-29T03:31:19.284Z",description:"替换GA中的用户ID，和系统用户体系联系起来",type:"Google Tag Manager"},m={_frontmatter:i};function n(e){var a=e.components,r=(0,l.Z)(e,d);return(0,t.mdx)("wrapper",Object.assign({},m,r,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("h4",{id:"1-设定ga中的user-id",style:{position:"relative"}},(0,t.mdx)("a",{parentName:"h4",href:"#1-%E8%AE%BE%E5%AE%9Aga%E4%B8%AD%E7%9A%84user-id","aria-label":"1 设定ga中的user id permalink",className:"anchor before"},(0,t.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,t.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"1. 设定GA中的User-ID"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("code",{parentName:"li",className:"language-text"},"管理 → 媒体资源→ 跟踪信息 → User-ID"),",同意启用User-ID政策"),(0,t.mdx)("li",{parentName:"ul"},"下一步",(0,t.mdx)("code",{parentName:"li",className:"language-text"},"设置User-ID"),"，不用管"),(0,t.mdx)("li",{parentName:"ul"},"下一步，",(0,t.mdx)("code",{parentName:"li",className:"language-text"},"创建User-ID视图"))),(0,t.mdx)("hr",null),(0,t.mdx)("h4",{id:"2-在gtm中获取user-id的方法",style:{position:"relative"}},(0,t.mdx)("a",{parentName:"h4",href:"#2-%E5%9C%A8gtm%E4%B8%AD%E8%8E%B7%E5%8F%96user-id%E7%9A%84%E6%96%B9%E6%B3%95","aria-label":"2 在gtm中获取user id的方法 permalink",className:"anchor before"},(0,t.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,t.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"2. 在GTM中获取User ID的方法"),(0,t.mdx)("h6",{id:"-让开发者使用datalayer方式传递user-id",style:{position:"relative"}},(0,t.mdx)("a",{parentName:"h6",href:"#-%E8%AE%A9%E5%BC%80%E5%8F%91%E8%80%85%E4%BD%BF%E7%94%A8datalayer%E6%96%B9%E5%BC%8F%E4%BC%A0%E9%80%92user-id","aria-label":" 让开发者使用datalayer方式传递user id permalink",className:"anchor before"},(0,t.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,t.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"# 让开发者使用",(0,t.mdx)("code",{parentName:"h6",className:"language-text"},"datalayer"),"方式传递User ID"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"开发者通过",(0,t.mdx)("code",{parentName:"li",className:"language-text"},"windows.dataLayer.push({userId:'123456'})"),"传递ID"),(0,t.mdx)("li",{parentName:"ul"},"在GTM 的变量中，声明好变量",(0,t.mdx)("code",{parentName:"li",className:"language-text"},"User_id"),"，类型为",(0,t.mdx)("code",{parentName:"li",className:"language-text"},"数据层变量"),"，命名与开发者传递的一致")),(0,t.mdx)("h6",{id:"-将id存储在cookie中",style:{position:"relative"}},(0,t.mdx)("a",{parentName:"h6",href:"#-%E5%B0%86id%E5%AD%98%E5%82%A8%E5%9C%A8cookie%E4%B8%AD","aria-label":" 将id存储在cookie中 permalink",className:"anchor before"},(0,t.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,t.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"# 将ID存储在cookie中"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"开发者将ID存储在cookie中，可以在GTM中的自定义变量 - cookie中获取。")),(0,t.mdx)("h6",{id:"-使用javascript变量寻找id",style:{position:"relative"}},(0,t.mdx)("a",{parentName:"h6",href:"#-%E4%BD%BF%E7%94%A8javascript%E5%8F%98%E9%87%8F%E5%AF%BB%E6%89%BEid","aria-label":" 使用javascript变量寻找id permalink",className:"anchor before"},(0,t.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,t.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"# 使用javascript变量寻找ID"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"当ID存在于js全局变量中时，可以使用。")),(0,t.mdx)("h6",{id:"-在dom中寻找id",style:{position:"relative"}},(0,t.mdx)("a",{parentName:"h6",href:"#-%E5%9C%A8dom%E4%B8%AD%E5%AF%BB%E6%89%BEid","aria-label":" 在dom中寻找id permalink",className:"anchor before"},(0,t.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,t.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"# 在DOM中寻找ID"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"当页面展示内容中存在ID，可以通过DOM获取ID。")),(0,t.mdx)("h6",{id:"-在url中找id",style:{position:"relative"}},(0,t.mdx)("a",{parentName:"h6",href:"#-%E5%9C%A8url%E4%B8%AD%E6%89%BEid","aria-label":" 在url中找id permalink",className:"anchor before"},(0,t.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,t.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"# 在URL中找ID"),(0,t.mdx)("hr",null),(0,t.mdx)("h4",{id:"3-更新ga设置变量",style:{position:"relative"}},(0,t.mdx)("a",{parentName:"h4",href:"#3-%E6%9B%B4%E6%96%B0ga%E8%AE%BE%E7%BD%AE%E5%8F%98%E9%87%8F","aria-label":"3 更新ga设置变量 permalink",className:"anchor before"},(0,t.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,t.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"3. 更新GA设置变量"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"在之前配置好的",(0,t.mdx)("code",{parentName:"li",className:"language-text"},"GA设置"),"变量中，选择更多设置，添加字段",(0,t.mdx)("code",{parentName:"li",className:"language-text"},"userId - {{userId}}"),",将在上一步中定义好的变量赋值给userId"),(0,t.mdx)("li",{parentName:"ul"},"在GA中新建好userId维度，同时在",(0,t.mdx)("code",{parentName:"li",className:"language-text"},"GA设置"),"中设置维度，注意维度的ID要一致，也赋值userId")))}n.isMDXComponent=!0},3366:function(e,a,r){function l(e,a){if(null==e)return{};var r,l,t={},d=Object.keys(e);for(l=0;l<d.length;l++)r=d[l],a.indexOf(r)>=0||(t[r]=e[r]);return t}r.d(a,{Z:function(){return l}})}}]);
//# sourceMappingURL=component---src-pages-notebook-gtm-ga-user-id-replace-md-5e9ee6cdb97b2b66a614.js.map