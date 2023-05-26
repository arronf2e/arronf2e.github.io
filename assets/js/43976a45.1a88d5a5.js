"use strict";(self.webpackChunkblog_2023=self.webpackChunkblog_2023||[]).push([[823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(n),y=a,f=u["".concat(c,".").concat(y)]||u[y]||m[y]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"TypeScript\u6cdb\u578b",date:new Date("2021-04-30T00:00:00.000Z"),tags:["TypeScript"]},l=void 0,p={permalink:"/blog/ts/generics",source:"@site/blog/ts/generics.md",title:"TypeScript\u6cdb\u578b",description:"ts\u6cdb\u578b\u7684\u5b66\u4e60\u8bb0\u5f55",date:"2021-04-30T00:00:00.000Z",formattedDate:"April 30, 2021",tags:[{label:"TypeScript",permalink:"/blog/tags/type-script"}],readingTime:1.39,hasTruncateMarker:!0,authors:[],frontMatter:{title:"TypeScript\u6cdb\u578b",date:"2021-04-30T00:00:00.000Z",tags:["TypeScript"]},prevItem:{title:"react hooks \u5b66\u4e60",permalink:"/blog/react-hooks"},nextItem:{title:"TypeScript\u7c7b",permalink:"/blog/ts-class"}},c={authorsImageUrls:[]},i=[{value:"\u4ec0\u4e48\u662f\u6cdb\u578b\uff1f",id:"\u4ec0\u4e48\u662f\u6cdb\u578b",level:2},{value:"\u7b80\u5355\u793a\u4f8b",id:"\u7b80\u5355\u793a\u4f8b",level:2},{value:"\u6cdb\u578b\u7ea6\u675f",id:"\u6cdb\u578b\u7ea6\u675f",level:2}],s={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ts\u6cdb\u578b\u7684\u5b66\u4e60\u8bb0\u5f55"),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u6cdb\u578b"},"\u4ec0\u4e48\u662f\u6cdb\u578b\uff1f"),(0,a.kt)("p",null,"\u6cdb\u578b\u662f\u6307\u5728\u5b9a\u4e49\u51fd\u6570\u3001\u63a5\u53e3\u7684\u65f6\u5019\uff0c\u4e0d\u6307\u5b9a\u5177\u4f53\u7684\u7c7b\u578b\uff0c\u800c\u662f\u5728\u4f7f\u7528\u7684\u65f6\u5019\u518d\u6307\u5b9a\u5177\u4f53\u7c7b\u578b\uff0c\u8fd9\u6837\u5c31\u5927\u5927\u7684\u63d0\u9ad8\u4e86\u65b9\u6cd5\u3001\u63a5\u53e3\u7684\u590d\u7528\u6027\uff0c\u4f7f\u5f97\u65b9\u6cd5\u3001\u63a5\u53e3\u5341\u5206\u7684\u7075\u6d3b\u3002"),(0,a.kt)("h2",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function sayName<T>(name: T): T {\n  return name;\n}\nconst returnName1 = sayName('2');\nconst returnName2 = sayName(2);\nconsole.log(returnName1, returnName2, 'name')\n\n// \u591a\u4e2a\u7c7b\u578b\u53c2\u6570\nfunction swap<T, U>(tuple: [T, U]): [T, U] {\n  return [tuple[0], tuple[1]]\n}\nswap(['xiaoming', 20])\n")),(0,a.kt)("h2",{id:"\u6cdb\u578b\u7ea6\u675f"},"\u6cdb\u578b\u7ea6\u675f"),(0,a.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u5728\u4f7f\u7528\u7684\u65f6\u5019\u8fd8\u4e0d\u786e\u5b9a\u7c7b\u578b\uff0c\u6240\u4ee5\u5728\u51fd\u6570\u5185\u90e8\u4f7f\u7528\u53d8\u91cf\u7684\u65f6\u5019\uff0c\u4e0d\u80fd\u968f\u4fbf\u64cd\u4f5c\u5b83\u7684\u65b9\u6cd5\u6216\u8005\u5c5e\u6027\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function sayHello<T>(params: T): T {\n  console.log(params.length)  // Property 'length' does not exist on type 'T'.(2339)\uff1b\u5f88\u7b80\u5355\uff0c\u5982\u679c\u6211\u4eec\u7684 T \u4e3a number \u7c7b\u578b\uff0c\u5f88\u663e\u793a number \u662f\u6ca1\u6709 length \u8fd9\u4e2a\u5c5e\u6027\u7684\u3002\n  return params\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u9700\u8981\u5bf9\u6cdb\u578b\u8fdb\u884c\u7ea6\u675f\uff0c\u9650\u5236\u8be5\u51fd\u6570\u53ea\u5141\u8bb8\u4f20\u5165\u542b\u6709 length \u5c5e\u6027\u7684\u53d8\u91cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface MustLength {\n  length: number;\n}\nfunction sayHello<T extends MustLength>(params: T): T {\n  console.log(params.length);\n  return params;\n}\n")))}m.isMDXComponent=!0}}]);