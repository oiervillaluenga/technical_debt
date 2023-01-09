"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71734],{51782:function(e,t,n){var o=n(75263),r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(45697)),l=o(n(11720)),d=n(70917),a=l.forwardRef((function(e,t){var n=e["aria-hidden"],o=void 0!==n&&n,r=e.className,i=e.color,l=void 0===i?"currentColor":i,a=e.size,c=void 0===a?18:a,s=e.title,u=e.titleId;return(0,d.jsx)("svg",{viewBox:"0 0 18 18","aria-hidden":o,className:r,height:c,ref:t,role:"img",width:c,"aria-labelledby":u},void 0===s?(0,d.jsx)("title",{id:u},"Cross"):s?(0,d.jsx)("title",{id:u},s):null,(0,d.jsx)("path",{fill:l,d:"M9.005 7.625l4.83-4.83a.976.976 0 011.38 1.38l-4.83 4.83 4.82 4.82a.976.976 0 11-1.38 1.38l-4.82-4.82-4.83 4.83a.976.976 0 01-1.38-1.38l4.83-4.83-4.84-4.84a.976.976 0 111.38-1.38l4.84 4.84z",fillRule:"evenodd"}))}));a.propTypes={"aria-hidden":i.default.bool,className:i.default.string,color:i.default.string,size:i.default.oneOf([12,18,24]),title:i.default.string,titleId:i.default.string};var c=a;t.default=c},11887:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var o=n(59499),r=n(77521),i=n.n(r),l=n(57334),d=n(51782),a=n(11720),c=n(80795),s=n(72555);const u=e=>parseInt(`${(null===e||void 0===e?void 0:e.replace(/[^0-9]/g,""))||4}`,10),p=e=>{const t=u(e),n=[];for(let o=2;o<=t;o++)n.push(`h${o}`);return n.map((e=>`.listed-menu ${e}`)).join(", ")};var f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"h6";const{0:n,1:o}=(0,a.useState)([]);return(0,a.useEffect)((()=>{const n=(()=>{const n=p(t);let o=document.querySelectorAll(`${n}`);if(e){const t=document.querySelector(`#${e}`);o=(null===t||void 0===t?void 0:t.querySelectorAll(n))||document.querySelectorAll(`${n}`)}return Array.from(o)})();o(n.filter((e=>""!==e.id)).map((e=>{let{id:t,tagName:n,textContent:o}=e;return{id:t,tagName:n.toLowerCase(),textContent:o}})))}),[e,t]),{headings:n}},h=n(21911),v=n(44103);var b=e=>{let{activeId:t,applyMenuOffset:n=!1,headings:o}=e;return(0,v.tZ)("ul",{sx:{borderLeft:"3px solid #e5e1da",borderRadius:2,position:"sticky",top:100},children:o.map((e=>{let{id:o,tagName:r,textContent:i}=e;return(0,v.tZ)("li",{sx:{"&:hover":{borderLeft:"3px solid #009bd8"},borderLeft:o===t?"3px solid #009bd8":"3px solid #e5e1da",fontSize:r?16:15,ml:-3,pl:"h2"!==(null===r||void 0===r?void 0:r.toLowerCase())?8*u(null===r||void 0===r?void 0:r.toLowerCase()):0,pr:o===t?3:10,py:7},children:(0,v.tZ)("a",{href:`#${o}`,onClick:e=>{e.preventDefault(),(e=>{const t=document.querySelector(`[id='${e}']`);if(!n)return null===t||void 0===t?void 0:t.scrollIntoView();const o=(null===t||void 0===t?void 0:t.getBoundingClientRect().top)||0;window.scrollTo({behavior:"smooth",top:n?o-80:o})})(`${o}`)},sx:{"&:hover":{fontWeight:"bold"},color:"navy.200",fontWeight:o===t?"bold":"unset",textDecoration:"none"},children:i})},o)}))})};var g=e=>{let{activeId:t,applyMenuOffset:n=!1,headings:o,openModal:r,setOpenModal:i}=e;const l=o.reduce(((e,t)=>e.find((e=>e.id===t.id))?e:e.concat([t])),[]),d=[];return l.forEach((e=>{var t;if("h2"===e.tagName)d.push([e]);else if("h2"===(null===(t=d[d.length-1])||void 0===t?void 0:t[0].tagName)){var n;null===(n=d[d.length-1])||void 0===n||n.push(e)}else d.push([e])})),(0,v.tZ)(c.xu,{sx:{mb:[40,null,null,null,null,0]},children:d.map(((e,o)=>{var l;const d=e.some((e=>e.id===t));return(0,v.tZ)("ul",{children:e.map((o=>{var l,a,c,s;let{id:u,tagName:p,textContent:f}=o;const h="h2"!==(null===p||void 0===p?void 0:p.toLowerCase())&&d?"block":"none";return(0,v.tZ)("li",{sx:{display:(null===(l=e[0])||void 0===l?void 0:l.id)===u?"block":h,fontSize:(null===(a=e[0])||void 0===a?void 0:a.id)!==u?13:14,lineHeight:(null===(c=e[0])||void 0===c?void 0:c.id)===u?"18px":"16.9px",pr:0},children:(0,v.tZ)("a",{"data-trackid":`table-of-content-${u}`,href:`#${u}`,onClick:t=>{var o;t.preventDefault(),(e=>{const t=document.querySelector(`[id='${e}']`);if(!n)return null===t||void 0===t?void 0:t.scrollIntoView();const o=(null===t||void 0===t?void 0:t.getBoundingClientRect().top)||0;window.scrollTo({behavior:"smooth",top:n?o-80:o})})(`${u}`),i&&(1===(null===e||void 0===e?void 0:e.length)||(null===e||void 0===e?void 0:e.length)>1&&(null===(o=e[0])||void 0===o?void 0:o.id)!==u)&&i(!r)},sx:{"&::after":{backgroundColor:u===t?"navy.200":"transparent",bottom:12,content:"''",height:"calc(100% - 12px)",left:-2,position:"absolute",width:2},"&:hover":{color:"#444C54",fontWeight:"unset"},color:u===t?"#444C54":"#65707C",display:"block",fontWeight:"unset",pb:12,pl:(null===(s=e[0])||void 0===s?void 0:s.id)===u?6:16,position:"relative",textDecoration:"none"},children:f})},u)}))},`--key--${(null===(l=e[0])||void 0===l?void 0:l.id)+o}`)}))})};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=e=>{let{extraCss:t={},isSmallScreen:n=!1,openModal:o,applyMenuOffset:r=!1,setOpenModal:u,headingsToAddDepth:x="h4",containerId:y="main-container",mediaContent:O}=e;const w=p(x),{0:C,1:Z}=(0,a.useState)(""),{headings:j}=f(y,x);return(0,h.Z)({elementsToObserve:w,setActiveId:Z}),j.length?(0,v.BX)(v.HY,{children:[!n&&(0,v.BX)(v.HY,{children:[O&&(0,v.tZ)(c.xv,{sx:{display:["none",null,null,null,null,"flex"],fontSize:"12px",fontWeight:800,letterSpacing:"1.5px",lineHeight:"15px",pl:8,textTransform:"uppercase"},children:"CONTENTS"}),(0,v.BX)("nav",{"aria-label":"Table of contents",sx:m({maxWidth:l.Zt,mb:24,mx:"auto",ul:{borderLeft:"none",li:{a:{":hover":{fontWeight:O?"unset":"bold"}}}},width:"100%"},t),children:[O&&(0,v.tZ)(g,{activeId:C,applyMenuOffset:r,headings:j}),!O&&(0,v.tZ)(b,{activeId:C,applyMenuOffset:r,headings:j})]})]}),n&&u&&!O&&(0,v.BX)(c.xu,{onClick:()=>o&&u(!1),sx:{bottom:35,display:"block",left:12,position:"fixed",right:12,zIndex:12},children:[o&&(0,v.tZ)(c.xu,{sx:{backgroundColor:"white",borderRadius:4,boxShadow:"0px 0px 1px rgba(5, 25, 45, 0.3), 0px 8px 12px -4px rgba(5, 25, 45, 0.3)",mb:16,p:16},children:(0,v.tZ)("nav",{"aria-label":"Table of contents",children:(0,v.tZ)(b,{activeId:C,headings:j})})}),(0,v.BX)("button",{onClick:()=>u(!o),sx:{alignItems:"center",appearance:"none",backgroundColor:"white",border:0,borderColor:"rgba(5, 25, 45, 0.6)",borderRadius:4,borderStyle:"solid",borderWidth:2,display:"flex",fontSize:"inherit",fontWeight:"bold",lineHeight:"inherit",m:0,px:16,py:12,textAlign:"center",textDecoration:"none"},children:[(0,v.tZ)(s.Z,{sx:{mr:9,size:18}})," ",(0,v.tZ)(c.xv,{children:"Table of Contents"})]})]}),o&&u&&!O&&(0,v.tZ)(c.xu,{onClick:()=>u(!1),sx:{backgroundColor:"navy.200",bottom:0,left:0,opacity:.8,position:"fixed",right:0,top:0,zIndex:11}}),O&&o&&u&&(0,v.BX)(a.Fragment,{children:[(0,v.tZ)(i(),{id:"2399620642",children:["body{overflow:hidden;}"]}),(0,v.tZ)(c.xu,{onClick:()=>u(!o),sx:{bg:"rgba(5, 25, 45, 0.8)",bottom:0,left:0,position:"fixed",right:0,top:0,zIndex:800}}),(0,v.BX)(c.xu,{onClick:()=>u(!o),sx:{bottom:0,display:"flex",flexDirection:"column",height:"70%",left:0,position:"fixed",right:0,zIndex:900},children:[(0,v.tZ)(c.zx,{"aria-label":"Close menu",onClick:()=>u(!o),sx:{alignSelf:"end",mb:16,mr:16},variant:"navbarIcon",children:(0,v.tZ)(d.default,{"aria-hidden":!0,sx:{color:"white"},title:""})}),(0,v.tZ)(c.xu,{as:"div",sx:{bg:"white",display:"block",height:"100%",overflowY:"auto",zIndex:100},children:(0,v.tZ)("nav",{"aria-label":"Table of contents",sx:{px:16},className:"jsx-2399620642",children:(0,v.BX)(a.Fragment,{children:[(0,v.tZ)(c.xu,{sx:{mb:24,mt:20},children:(0,v.tZ)(c.xv,{sx:{fontSize:"12px",fontWeight:800,letterSpacing:"1.5px",lineHeight:"15px",pl:8,textTransform:"uppercase"},children:"CONTENTS"})}),(0,v.tZ)(g,{activeId:C,applyMenuOffset:r,headings:j,openModal:o,setOpenModal:u})]})})})]})]})]}):null}},21911:function(e,t,n){var o=n(59499),r=n(11720);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}t.Z=e=>{let{customRootMargin:t,elementsToObserve:n,setActiveId:l}=e;const d=(0,r.useRef)({});(0,r.useEffect)((()=>{const e=Array.from(document.querySelectorAll(n)).filter((e=>""!==e.id)),r=new IntersectionObserver((t=>{d.current=t.reduce(((e,t)=>{const n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e);return n[t.target.id]=t,n}),d.current);const n=[];Object.keys(d.current).forEach((e=>{const t=d.current[e];t.isIntersecting&&n.push(t)}));const r=t=>e.findIndex((e=>e.id===t));n.length>1&&n.sort(((e,t)=>r(e.target.id)-r(t.target.id))),n.length&&l(n[0].target.id)}),{rootMargin:t||"0px 0px -40% 0px"});return e.forEach((e=>{r.observe(e)})),()=>r.disconnect()}),[n,l,t])}}}]);
//# sourceMappingURL=71734.a1551ac3910ef4f9.js.map