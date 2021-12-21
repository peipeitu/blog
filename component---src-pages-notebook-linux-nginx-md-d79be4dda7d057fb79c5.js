"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[217],{6341:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return o},default:function(){return r}});var t=n(3366),s=(n(7294),n(4983)),m=["components"],o={title:"Nginx 安装和学习",date:"2019-12-01T08:12:03.000Z",description:"Nginx 安装和学习",type:"Linux使用"},c={_frontmatter:o};function r(e){var a=e.components,n=(0,t.Z)(e,m);return(0,s.mdx)("wrapper",Object.assign({},c,n,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h4",{id:"安装nginx",style:{position:"relative"}},(0,s.mdx)("a",{parentName:"h4",href:"#%E5%AE%89%E8%A3%85nginx","aria-label":"安装nginx permalink",className:"anchor before"},(0,s.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,s.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"安装Nginx"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"安装")),(0,s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.mdx)("pre",{parentName:"div",className:"language-bash"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},(0,s.mdx)("span",{parentName:"code",className:"token function"},"sudo")," ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"apt")," update\n",(0,s.mdx)("span",{parentName:"code",className:"token function"},"sudo")," ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"apt")," ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"install")," nginx"))),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"检查状态")),(0,s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.mdx)("pre",{parentName:"div",className:"language-bash"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"systemctl status nginx"))),(0,s.mdx)("h4",{id:"nginx-配置",style:{position:"relative"}},(0,s.mdx)("a",{parentName:"h4",href:"#nginx-%E9%85%8D%E7%BD%AE","aria-label":"nginx 配置 permalink",className:"anchor before"},(0,s.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,s.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Nginx 配置"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"单页应用静态文件部署，需要加上如下配置：")),(0,s.mdx)("div",{className:"gatsby-highlight","data-language":"text"},(0,s.mdx)("pre",{parentName:"div",className:"language-text"},(0,s.mdx)("code",{parentName:"pre",className:"language-text"},"location / {\n  try_files $uri $uri/ /index.html;\n}"))),(0,s.mdx)("h4",{id:"nginx-限制ip访问频率",style:{position:"relative"}},(0,s.mdx)("a",{parentName:"h4",href:"#nginx-%E9%99%90%E5%88%B6ip%E8%AE%BF%E9%97%AE%E9%A2%91%E7%8E%87","aria-label":"nginx 限制ip访问频率 permalink",className:"anchor before"},(0,s.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,s.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Nginx 限制IP访问频率"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"添加",(0,s.mdx)("code",{parentName:"li",className:"language-text"},"limit_req_zone"),"。这个变量只能在http使用")),(0,s.mdx)("div",{className:"gatsby-highlight","data-language":"text"},(0,s.mdx)("pre",{parentName:"div",className:"language-text"},(0,s.mdx)("code",{parentName:"pre",className:"language-text"},"http{\n  ...\n  # 定义一个名为allips的limit_req_zone用来存储session，大小10M，\n  # 以$binary_remote_addr为key，限制平均每秒的请求为5个，\n  # 1M能存储16000个状态，rate值必须为整数，\n  # 如果限制两秒一个请求，可以设置为30r/m\n  limit_req_zone $binary_remote_addr zone=allips:10m rate=5r/s;\n}"))),(0,s.mdx)("ol",{start:2},(0,s.mdx)("li",{parentName:"ol"},"添加",(0,s.mdx)("code",{parentName:"li",className:"language-text"},"limit_req"),"。这个变量可以在http,server,location使用。")),(0,s.mdx)("div",{className:"gatsby-highlight","data-language":"text"},(0,s.mdx)("pre",{parentName:"div",className:"language-text"},(0,s.mdx)("code",{parentName:"pre",className:"language-text"},"...\nserver{\n  ...\n  location {\n    ...\n    #限制每ip每秒不超过20个请求，漏桶数burst为5\n    #brust的意思就是，如果第1秒、2,3,4秒请求为19个，\n    #第5秒的请求为25个是被允许的。\n    #但是如果你第1秒就25个请求，第2秒超过20的请求返回503错误。\n    #nodelay，如果不设置该选项，严格使用平均速率限制请求数，\n    #第1秒25个请求时，5个请求放到第2秒执行，\n    #设置nodelay，25个请求将在第1秒执行。\n    limit_req zone=allips burst=5 nodelay;\n    ...\n  }\n...\n}\n..."))),(0,s.mdx)("h4",{id:"配置https",style:{position:"relative"}},(0,s.mdx)("a",{parentName:"h4",href:"#%E9%85%8D%E7%BD%AEhttps","aria-label":"配置https permalink",className:"anchor before"},(0,s.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,s.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"配置HTTPS"),(0,s.mdx)("p",null,"可以使用",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"certbot"),"进行设置，在这里只记录",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"ubuntu18"),"的",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"nginx"),"设置方法，其他的",(0,s.mdx)("a",{parentName:"p",href:"https://certbot.eff.org/lets-encrypt/ubuntuxenial-nginx"},"点此查看")),(0,s.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.mdx)("pre",{parentName:"div",className:"language-bash"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},(0,s.mdx)("span",{parentName:"code",className:"token comment"},"# 添加Certbot PPA"),"\n",(0,s.mdx)("span",{parentName:"code",className:"token function"},"sudo")," ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"apt")," update\n",(0,s.mdx)("span",{parentName:"code",className:"token function"},"sudo")," ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"apt")," ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"install")," software-properties-common\n",(0,s.mdx)("span",{parentName:"code",className:"token function"},"sudo")," add-apt-repository universe\n",(0,s.mdx)("span",{parentName:"code",className:"token function"},"sudo")," add-apt-repository ppa:certbot/certbot\n",(0,s.mdx)("span",{parentName:"code",className:"token function"},"sudo")," ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"apt")," update\n\n",(0,s.mdx)("span",{parentName:"code",className:"token comment"},"# 安装Certbot"),"\n",(0,s.mdx)("span",{parentName:"code",className:"token function"},"sudo")," ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"apt")," ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"install")," certbot python-certbot-nginx\n\n",(0,s.mdx)("span",{parentName:"code",className:"token comment"},"# 安装证书"),"\n",(0,s.mdx)("span",{parentName:"code",className:"token function"},"sudo")," certbot --nginx\n\nSaving debug log to /var/log/letsencrypt/letsencrypt.log\nPlugins selected: Authenticator nginx, Installer nginx\n",(0,s.mdx)("span",{parentName:"code",className:"token comment"},"# 选择要安装证书的域名,域名需要在nginx配置填写好才能搜索"),"\nWhich names would you like to activate HTTPS for?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n",(0,s.mdx)("span",{parentName:"code",className:"token number"},"1"),": www.example.com\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nSelect the appropriate numbers separated by commas and/or spaces, or leave input\nblank to ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"select")," all options shown ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"("),"Enter ",(0,s.mdx)("span",{parentName:"code",className:"token string"},"'c'")," to cancel",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},")"),": ",(0,s.mdx)("span",{parentName:"code",className:"token number"},"1"),"  \n",(0,s.mdx)("span",{parentName:"code",className:"token comment"},"# 这里的认证需要保证当前nginx正确工作，并且域名正确指向本台服务器，即验证这个域名是否归你所有"),"\nObtaining a new certificate\nPerforming the following challenges:\nhttp-01 challenge ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"for")," www.example.com\nWaiting ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"for")," verification",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},".."),".\nCleaning up challenges\nDeploying Certificate to VirtualHost /etc/nginx/sites-enabled/node\n",(0,s.mdx)("span",{parentName:"code",className:"token comment"},"# 是否将所有请求都跳转到https上"),"\nPlease choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n",(0,s.mdx)("span",{parentName:"code",className:"token number"},"1"),": No redirect - Make no further changes to the webserver configuration.\n",(0,s.mdx)("span",{parentName:"code",className:"token number"},"2"),": Redirect - Make all requests redirect to secure HTTPS access. Choose this ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"for"),"\nnew sites, or ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"if")," you",(0,s.mdx)("span",{parentName:"code",className:"token string"},"'re confident your site works on HTTPS. You can undo this\nchange by editing your web server'"),"s configuration.\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nSelect the appropriate number ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.mdx)("span",{parentName:"code",className:"token number"},"1"),"-2",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"]")," ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"then")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"["),"enter",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"]")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"("),"press ",(0,s.mdx)("span",{parentName:"code",className:"token string"},"'c'")," to cancel",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},")"),": ",(0,s.mdx)("span",{parentName:"code",className:"token number"},"2")," \nRedirecting all traffic on port ",(0,s.mdx)("span",{parentName:"code",className:"token number"},"80")," to ssl ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"in")," /etc/nginx/sites-enabled/node\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nCongratulations",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"!")," You have successfully enabled https://www.example.com\n\nYou should ",(0,s.mdx)("span",{parentName:"code",className:"token builtin class-name"},"test")," your configuration at:\nhttps://www.ssllabs.com/ssltest/analyze.html?d",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"="),"www.example.com\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n\n",(0,s.mdx)("span",{parentName:"code",className:"token comment"},"# 安装完成后，certbot会自动新建定时任务来定时刷新证书，避免过期"),"\n",(0,s.mdx)("span",{parentName:"code",className:"token comment"},"# 通过以下命令检查自动更新是否能顺利进行"),"\n$ ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"sudo")," certbot renew --dry-run\n\n",(0,s.mdx)("span",{parentName:"code",className:"token comment"},"# 检查定时任务是否正确添加"),"\n$ ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"sudo")," systemctl list-timers\n\nNEXT                         LEFT         LAST                         PASSED             UNIT                         ACTIVATES\nMon ",(0,s.mdx)("span",{parentName:"code",className:"token number"},"2019"),"-12-16 ",(0,s.mdx)("span",{parentName:"code",className:"token number"},"20"),":31:18 CST  3h 9min left Mon ",(0,s.mdx)("span",{parentName:"code",className:"token number"},"2019"),"-12-16 07:45:10 CST  9h ago             apt-daily.timer              apt-daily.service\nTue ",(0,s.mdx)("span",{parentName:"code",className:"token number"},"2019"),"-12-17 06:09:19 CST  12h left     Mon ",(0,s.mdx)("span",{parentName:"code",className:"token number"},"2019"),"-12-16 06:32:56 CST  10h ago            apt-daily-upgrade.timer      apt-daily-upgrade.service\nTue ",(0,s.mdx)("span",{parentName:"code",className:"token number"},"2019"),"-12-17 09:06:43 CST  15h left     n/a                          n/a                certbot.timer                certbot.service\n"))))}r.isMDXComponent=!0},3366:function(e,a,n){function t(e,a){if(null==e)return{};var n,t,s={},m=Object.keys(e);for(t=0;t<m.length;t++)n=m[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}n.d(a,{Z:function(){return t}})}}]);
//# sourceMappingURL=component---src-pages-notebook-linux-nginx-md-d79be4dda7d057fb79c5.js.map