"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[8974],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3145:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={sidebar_position:0},c="Introduction",l={unversionedId:"fusion-swap/introduction",id:"fusion-swap/introduction",isDocsHomePage:!1,title:"Introduction",description:"Overview",source:"@site/docs/fusion-swap/introduction.mdx",sourceDirName:"fusion-swap",slug:"/fusion-swap/introduction",permalink:"/docs/fusion-swap/introduction",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/fusion-swap/introduction.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"IUniswapV3SwapCallback",permalink:"/docs/aggregation-protocol/smart-contract/interfaces/IUniswapV3SwapCallback"},next:{title:"How to become a resolver",permalink:"/docs/fusion-swap/becoming-a-resolver/how-to-become-resolver"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Dutch auction filling rate",id:"dutch-auction-filling-rate",children:[]}],p={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The 1inch Fusion Mode offers users a way to execute swaps without spending gas or risking being front-run. To the user, Fusion Mode looks like a swap, but technically it is a limit order with a variable exchange rate filled by a third party called a Resolver. An order's exchange rate decreases from the desired rate to the minimal return amount (Dutch auction) until it becomes profitable for Resolvers to fill the order. Multiple resolvers compete for the order to ensure it is filled before the rate falls to the minimal return amount. Here are some examples of opportunities for resolvers to gain profit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Dutch auction constantly decreases the order rate;"),(0,o.kt)("li",{parentName:"ul"},"Gas economy when filling matching orders;"),(0,o.kt)("li",{parentName:"ul"},"Gas economy due to batch filling.")),(0,o.kt)("p",null,"For Resolvers and integrators there is a fusion ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/1inch/fusion-sdk"},"SDK available")," to help with the integration."),(0,o.kt)("h2",{id:"dutch-auction-filling-rate"},"Dutch auction filling rate"),(0,o.kt)("p",null,"Each order has an auction start timestamp, which is calculated as the order's signature timestamp plus a waiting period. The waiting period is a delay that compensates for different block generation speeds on different networks. Before the auction begins, an order can be filled at the auction start rate, which is the maximum rate that a user can receive. After the auction begins, the order filling rate gradually decreases over time."),(0,o.kt)("p",null,"The order filling rate is a piecewise linear function that depends on multiple parameters, such as swap volume, gas costs, and the chosen preset (e.g., fast, fair, auction). To reduce price impact, the source token volume is divided into parts, which results in several price points, assuming that arbitragers will move the price back after each resolver\u2019s trade. This approach benefits users by providing better rates, while also allowing resolvers to make a profit from each transaction."),(0,o.kt)("p",null,"Therefore, we recommend that resolvers try to partially fill orders by splitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"remainingMakerAmount")," into 6-10 parts and checking if at least one of those parts can be filled."),(0,o.kt)("p",null,"Below is a real-life example."),(0,o.kt)("img",{src:"/img/fusion/auction-4.png",alt:"dutch-auction-example"}))}f.isMDXComponent=!0}}]);