"use strict";(self.webpackChunkblog_2023=self.webpackChunkblog_2023||[]).push([[5197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=o,b=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(b,c(c({ref:t},s),{},{components:r})):n.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={title:"csrf \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020",date:new Date("2019-10-21T00:00:00.000Z"),tags:["http/https"]},c=void 0,l={permalink:"/blog/http/csrf",source:"@site/blog/http/csrf.md",title:"csrf \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020",description:"\u5b9a\u4e49",date:"2019-10-21T00:00:00.000Z",formattedDate:"October 21, 2019",tags:[{label:"http/https",permalink:"/blog/tags/http-https"}],readingTime:1.53,hasTruncateMarker:!0,authors:[],frontMatter:{title:"csrf \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020",date:"2019-10-21T00:00:00.000Z",tags:["http/https"]},prevItem:{title:"\u4ece\u8f93\u5165 URL \u5230\u9875\u9762\u5c55\u793a\u5230\u5e95\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f",permalink:"/blog/common/url2page"},nextItem:{title:"css\u76d2\u5b50\u6a21\u578b",permalink:"/blog/css/box"}},p={authorsImageUrls:[]},i=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2}],s={toc:i},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,o.kt)("p",null,"Cross-site request forgery\uff1a\u653b\u51fb\u8005\u8bf1\u5bfc\u53d7\u5bb3\u8005\u8fdb\u5165",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"\u7b2c\u4e09\u65b9\u7f51\u7ad9")),"\uff0c\u5728\u7b2c\u4e09\u65b9\u7f51\u7ad9\u4e2d\uff0c\u5411\u88ab\u653b\u51fb\u7f51\u7ad9\u53d1\u9001\u8de8\u7ad9\u8bf7\u6c42\uff0c\n\u5229\u7528\u53d7\u5bb3\u8005\u5728\u88ab\u653b\u51fb\u7f51\u7ad9\u5df2\u7ecf\u83b7\u53d6\u7684\u6ce8\u518c\u51ed\u8bc1\uff0c\u7ed5\u8fc7\u540e\u53f0\u7684\u7528\u6237\u9a8c\u8bc1\uff0c\u8fbe\u5230\u5192\u5145\u7528\u6237\u5bf9\u88ab\u653b\u51fb\u7684\u7f51\u7ad9\u6267\u884c\u67d0\u9879\u64cd\u4f5c\u7684\u76ee\u7684\u3002"))}f.isMDXComponent=!0}}]);