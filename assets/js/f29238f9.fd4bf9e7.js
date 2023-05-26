"use strict";(self.webpackChunkblog_2023=self.webpackChunkblog_2023||[]).push([[7857],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1034:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={title:"\u4ece\u8f93\u5165 URL \u5230\u9875\u9762\u5c55\u793a\u5230\u5e95\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f",date:new Date("2020-02-06T00:00:00.000Z"),tags:["Interview"]},o=void 0,i={permalink:"/blog/common/url2page",source:"@site/blog/common/url2page.md",title:"\u4ece\u8f93\u5165 URL \u5230\u9875\u9762\u5c55\u793a\u5230\u5e95\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f",description:"1. \u8f93\u5165\u5730\u5740\uff08\u8fd9\u8fb9\u53ea\u8ba8\u8bba\u8f93\u5165\u57df\u540d\u6216\u8005ip\uff0c\u5176\u4ed6\u4e0d\u8003\u8651\uff09",date:"2020-02-06T00:00:00.000Z",formattedDate:"February 6, 2020",tags:[{label:"Interview",permalink:"/blog/tags/interview"}],readingTime:3.225,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u4ece\u8f93\u5165 URL \u5230\u9875\u9762\u5c55\u793a\u5230\u5e95\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f",date:"2020-02-06T00:00:00.000Z",tags:["Interview"]},prevItem:{title:"ES6\u5b66\u4e60\u2014Promise\u7684\u4f7f\u7528",permalink:"/blog/promise-base"},nextItem:{title:"csrf \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020",permalink:"/blog/http/csrf"}},p={authorsImageUrls:[]},c=[{value:"1. \u8f93\u5165\u5730\u5740\uff08\u8fd9\u8fb9\u53ea\u8ba8\u8bba\u8f93\u5165\u57df\u540d\u6216\u8005ip\uff0c\u5176\u4ed6\u4e0d\u8003\u8651\uff09",id:"1-\u8f93\u5165\u5730\u5740\u8fd9\u8fb9\u53ea\u8ba8\u8bba\u8f93\u5165\u57df\u540d\u6216\u8005ip\u5176\u4ed6\u4e0d\u8003\u8651",level:2},{value:"2. DNS\uff08Domain Name System\uff09 \u57df\u540d\u89e3\u6790\u7cfb\u7edf",id:"2-dnsdomain-name-system-\u57df\u540d\u89e3\u6790\u7cfb\u7edf",level:2},{value:"3. \u5efa\u7acb TCP \u8fde\u63a5",id:"3-\u5efa\u7acb-tcp-\u8fde\u63a5",level:2},{value:"4. \u53d1\u9001 http \u8bf7\u6c42",id:"4-\u53d1\u9001-http-\u8bf7\u6c42",level:2},{value:"5. \u6e32\u67d3\u6811\u6784\u5efa\u3001\u5e03\u5c40\u53ca\u7ed8\u5236",id:"5-\u6e32\u67d3\u6811\u6784\u5efa\u5e03\u5c40\u53ca\u7ed8\u5236",level:2}],u={toc:c},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u8f93\u5165\u5730\u5740\u8fd9\u8fb9\u53ea\u8ba8\u8bba\u8f93\u5165\u57df\u540d\u6216\u8005ip\u5176\u4ed6\u4e0d\u8003\u8651"},"1. \u8f93\u5165\u5730\u5740\uff08\u8fd9\u8fb9\u53ea\u8ba8\u8bba\u8f93\u5165\u57df\u540d\u6216\u8005ip\uff0c\u5176\u4ed6\u4e0d\u8003\u8651\uff09"),(0,a.kt)("p",null,"\u5904\u7406\u7528\u6237\u8f93\u5165\uff0c\u5982\u679c\u7528\u6237\u8f93\u5165\u7684\u662f ip \u5730\u5740\uff0c\u76f4\u63a5\u7ed5\u8fc7\u7b2c\u4e8c\u6b65\uff0c\u4ece\u7b2c\u4e09\u6b65\u5f00\u59cb\u5904\u7406\uff1b\u5982\u679c\u7528\u6237\u8f93\u5165\u7684\u662f\u57df\u540d\uff0c\u5219\u8fdb\u884c\u4e0b\u4e00\u6b65\uff1a\u57df\u540d\u89e3\u6790 "),(0,a.kt)("h2",{id:"2-dnsdomain-name-system-\u57df\u540d\u89e3\u6790\u7cfb\u7edf"},"2. DNS\uff08Domain Name System\uff09 \u57df\u540d\u89e3\u6790\u7cfb\u7edf"),(0,a.kt)("p",null,"\u5b83\u662f\u4e00\u4e2a\u5c06\u57df\u540d\u548c ip \u5730\u5740\u76f8\u4e92\u6620\u5c04\u7684\u4e00\u4e2a\u5206\u5e03\u5f0f\u6570\u636e\u5e93\uff0c\u5b83\u7684\u4f5c\u7528\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u57df\u540d\u5230 ip \u7684\u8f6c\u6362"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"www.baidu.com  --\x3e  DNS  --\x3e 180.101.49.21\n")),(0,a.kt)("p",null,"\u57df\u540d\u89e3\u6790\u7684\u8fc7\u7a0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668 DNS \u7f13\u5b58\uff0c\u6bd4\u5982 chrome \u6d4f\u89c8\u5668\u53ef\u4ee5\u901a\u8fc7\u5730\u5740\u680f\u8f93\u5165 chrome://net-internals/#dns \u67e5\u770b\u5f53\u524d\u7f13\u5b58"),(0,a.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf DNS \u7f13\u5b58"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0a\u9762\u4e24\u4e2a\u7f13\u5b58\u4e2d\u90fd\u6ca1\u6709\u5339\u914d\u5230\uff0c\u5c31\u5728 host \u6587\u4ef6\u4e2d\u67e5\u627e"),(0,a.kt)("li",{parentName:"ul"},"\u8def\u7531\u5668\u7f13\u5b58\uff0c\u90e8\u5206\u8def\u7531\u5668\u4e5f\u4f1a\u63d0\u4f9b DNS \u7f13\u5b58\u7684\u529f\u80fd\uff0c\u8bbf\u95ee\u8fc7\u7684\u57df\u540d\u4f1a\u4fdd\u5b58\u4e2d\u8def\u7531\u5668\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"ISP \u4e92\u8054\u7f51\u670d\u52a1\u63d0\u4f9b\u5546\uff08\u5982\u4e2d\u56fd\u7535\u4fe1\uff09\u63d0\u4f9b\u7684 DNS \u670d\u52a1\uff0c\u6bd4\u5982\u5f88\u5e38\u7528\u7684 114.114.114.114\u30018.8.8.8(google)\uff0cISP\u4f1a\u5728\u5f53\u524d\u670d\u52a1\u5668\u7f13\u5b58\u4e2d\u67e5\u627e\u89e3\u6790\u8bb0\u5f55\uff0c\u5982\u679c\u6709\uff0c\u8fd4\u56de ip \uff0c\u5982\u679c\u6ca1\u6709\uff0c\u5f00\u59cb\u5411 DNS \u6839\u670d\u52a1\u5668\u8bf7\u6c42\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"DNS \u6839\u670d\u52a1\u5668\u5224\u65ad\u57df\u540d \u662f\u6388\u6743\u5230\u54ea\u53f0\u57df\u670d\u52a1\u5668\uff0c\u6bd4\u5982\u6211\u4eec\u8f93\u5165\u7684\u5730\u5740\u662f ",(0,a.kt)("a",{parentName:"li",href:"http://www.baidu.com%EF%BC%8C%E5%88%99%E5%9F%9F%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%B0%B1%E6%98%AF"},"www.baidu.com\uff0c\u5219\u57df\u670d\u52a1\u5668\u5c31\u662f")," .com \u57df\u670d\u52a1\u5668\uff0c\u7136\u540e\u518d\u67e5\u627e\u5230 baidu.com \u57df\u670d\u52a1\u5668\u62ff\u5230 ip \u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef")),(0,a.kt)("h2",{id:"3-\u5efa\u7acb-tcp-\u8fde\u63a5"},"3. \u5efa\u7acb TCP \u8fde\u63a5"),(0,a.kt)("p",null,"\u6709\u4e86 ip \u5730\u5740\uff0c\u5ba2\u6237\u7aef\u5c31\u53ef\u4ee5\u4e0e\u8d44\u6e90\u670d\u52a1\u5668\u901a\u8fc7\u4e09\u6b21\u63e1\u624b\u5efa\u7acb TCP \u8fde\u63a5\u5566\u3002"),(0,a.kt)("h2",{id:"4-\u53d1\u9001-http-\u8bf7\u6c42"},"4. \u53d1\u9001 http \u8bf7\u6c42"),(0,a.kt)("p",null,"\u57fa\u4e8e TCP \u8fde\u63a5\uff0c\u5ba2\u6237\u7aef\u5c31\u53ef\u4ee5\u5411\u8d44\u6e90\u670d\u52a1\u5668\u53d1\u9001\u4e00\u6b21 http \u8bf7\u6c42\uff0c\u83b7\u53d6\u5230 html \u6587\u6863\u5185\u5bb9\uff1b\u8fd9\u4e00\u6b65\u4f1a\u6d89\u53ca\u5230\u53e6\u4e00\u4e2a\u7f13\u5b58\u4e0a\u7684\u4f18\u5316\uff0c\u6d4f\u89c8\u5668\u7f13\u5b58\uff0c\u5982\u679c\u547d\u4e2d\u5f3a\u7f13\u5b58\uff0c\u5219\u4e0d\u9700\u8981\u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\uff0c\n\u76f4\u63a5\u4ece\u672c\u5730\u7f13\u5b58\u4e2d\u53d6\u51fa html \u5185\u5bb9\uff0c\u5982\u679c\u672a\u547d\u4e2d\uff0c\u5219\u4e0e\u670d\u52a1\u5668\u901a\u4fe1\uff0c\u5224\u65ad\u662f\u5426\u547d\u4e2d\u534f\u5546\u7f13\u5b58\uff0c\u5982\u679c\u547d\u4e2d\uff0c\u670d\u52a1\u5668\u8fd4\u56de 304 \u72b6\u6001\u7801\uff0c\u5ba2\u6237\u7aef\u4ece\u6d4f\u89c8\u5668\u7f13\u5b58\u4e2d\u83b7\u53d6\u5185\u5bb9\uff0c\u5982\u679c\u672a\u547d\u4e2d\u534f\u5546\u7f13\u5b58\uff0c\u670d\u52a1\u5668\n\u8fd4\u56de\u6700\u65b0\u7684 html \u6587\u6863\uff0c\u4ee5\u53ca http code 200\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Request URL: http://www.baidu.com/\nRequest Method: GET\nStatus Code: 200 OK\nRemote Address: 180.101.49.11:443\nReferrer Policy: strict-origin-when-cross-origin\n")),(0,a.kt)("h2",{id:"5-\u6e32\u67d3\u6811\u6784\u5efa\u5e03\u5c40\u53ca\u7ed8\u5236"},"5. \u6e32\u67d3\u6811\u6784\u5efa\u3001\u5e03\u5c40\u53ca\u7ed8\u5236"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5904\u7406 HTML \u6807\u8bb0\u5e76\u6784\u5efa DOM \u6811"),(0,a.kt)("li",{parentName:"ul"},"\u5904\u7406 CSS \u6807\u8bb0\u5e76\u6784\u5efa CSSOM \u6811"),(0,a.kt)("li",{parentName:"ul"},"\u5c06 DOM \u4e0e CSSOM \u5408\u5e76\u4e3a RENDER TREE"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e RENDER TREE \u6765\u5e03\u5c40\uff0c\u8ba1\u7b97\u6bcf\u4e2a\u8282\u70b9\u7684\u51e0\u4f55\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u7ed8\u5236\u8282\u70b9")))}s.isMDXComponent=!0}}]);