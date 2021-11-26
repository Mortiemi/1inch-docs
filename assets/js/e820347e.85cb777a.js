"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[2513],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),s=p(n),u=a,k=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return n?r.createElement(k,i(i({ref:e},m),{},{components:n})):r.createElement(k,i({ref:e},m))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93552:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},c="TokenMock",p={unversionedId:"limit-order-protocol/smart-contract/mocks/TokenMock",id:"limit-order-protocol/smart-contract/mocks/TokenMock",isDocsHomePage:!1,title:"TokenMock",description:"Generic token for testing purposes",source:"@site/docs/limit-order-protocol/smart-contract/mocks/TokenMock.md",sourceDirName:"limit-order-protocol/smart-contract/mocks",slug:"/limit-order-protocol/smart-contract/mocks/TokenMock",permalink:"/docs/limit-order-protocol/smart-contract/mocks/TokenMock",editUrl:"https://github.com/1inch/1inch-docs/edit/master/website/docs/limit-order-protocol/smart-contract/mocks/TokenMock.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mocks",permalink:"/docs/limit-order-protocol/smart-contract/mocks/README"},next:{title:"WrappedTokenMock",permalink:"/docs/limit-order-protocol/smart-contract/mocks/WrappedTokenMock"}},m=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"mint",id:"mint",children:[]},{value:"burn",id:"burn",children:[]},{value:"getChainId",id:"getchainid",children:[]}]}],d={toc:m};function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tokenmock"},"TokenMock"),(0,o.kt)("p",null,"Generic token for testing purposes"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n  string name,\n  string symbol\n) public\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"symbol")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"mint"},"mint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function mint(\n  address account,\n  uint256 amount\n) external\n")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"account")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amount")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"burn"},"burn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function burn(\n  address account,\n  uint256 amount\n) external\n")),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"account")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amount")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"getchainid"},"getChainId"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function getChainId(\n) external returns (uint256)\n")))}s.isMDXComponent=!0}}]);