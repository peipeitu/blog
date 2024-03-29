---
title: "GA 基础知识"
date: "2019-08-01T22:12:03.284Z"
description: "GA 基础知识点学习"
type: "Google Analytics"
---

##### # 用户实别

-   `ClientID`：Analytics默认分配，时随机数字加时间戳构成，在切换浏览器或设备，以及清除cookie时，会变化。
    
-   `UserID`：须自行设置并匹配发送，可关联一个用户登录状态下的每次访问。
    

##### # Sessions的切分

-   在三种情况下进行切分：
    
    -   超过过期时间(默认30min)
        
    -   午夜过12点
        
    -   用户通过一个广告系列来到网站，随后离开，然后通过另一个广告系列返回
        

##### # 目标

-   衡量网站或应用完成既定目标的情况。
    

1.  目标网址
    
2.  持续时间
    
3.  每次会话浏览页数/屏幕数
    
4.  事件
    

##### # 过滤器

##### # 传递广告参数到GA (UTM)

-   通过在网址后面加参数来区分不同的渠道和媒介等，会统计到流量模块。可以使用网址构建工具来创建格式正确的网址。
    
-   参数：
    
    -   `utm_source`：广告系列来源
        
    -   `utm_medium`：广告系列媒介，比如email或每次点击
        
    -   `utm_term(可选)`：广告系列字词
        
    -   `utm_content(可选)`：广告系列内容
        
    -   `utm_campaign`：广告系列名称，用于关键字分析
        

##### # 另一种传递广告参数到GA的方法 (GTM)

-   在GTM通过变量配置，将推广url中的特殊渠道参数取出，然后转成GA中的维度

##### # 监测邮件打开情况 (Measurement Protocol)

-   在页面中加入隐藏1像素图片，用户一打开邮件，就会自动向GA发送一次事件，上面的格式化参数就会自动匹配记录，如：

```html

```

-   解读如下：
    
    -   `http://www.google-analytics.com/collect?` API请求地址
        
    -   `v=1`：协议版本
        
    -   `tid=UA-XXXX-Y`：跟踪ID
        
    -   `cid=*|UNIQID|*`：客户端ID，用来匿名标记一个特定的用户，设备或浏览器
        
    -   `t=event`：命中类型
        
    -   `ec=email`：事件类别，对应eventCategory
        
    -   `ea=open`：事件动作，对应eventAction
        
    -   `el=*|UNIQD|*`：事件标签，对应eventLabel
        
    -   `cs=newsletter`：广告系列来源
        
    -   `cm=email`：广告系列媒介
        
    -   `cn=062413`：广告系列名称
        
    -   `cm1=1`：自定义指标1
        
-   如果MP协议上的用户标识没有用到实际的用户标识，建议用一个新的视图存放，避免对原视图造成污染