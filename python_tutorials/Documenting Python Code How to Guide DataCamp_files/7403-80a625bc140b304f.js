(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7403],{19035:function(e,t,n){"use strict";t.Z=void 0,n(47042);var r=function(e,t,n){var r=e.currentTarget,o=(null===t||void 0===t?void 0:t.current)&&(null===t||void 0===t?void 0:t.current.querySelectorAll("a")),i=Array.prototype.slice.call(o);n(i&&i.indexOf(r))};t.Z=r},8206:function(e,t){"use strict";t.qG=t.qk=void 0;t.qG=function(e,t,n,r,o,i){if(t){var s=i.current&&i.current.querySelectorAll("a");switch(e.key){case"Escape":return n(!t),o.current&&o.current.focus();case"ArrowDown":return e.preventDefault(),s&&r!==s.length-1?s[r+1].focus():o.current&&o.current.focus();case"ArrowUp":return e.preventDefault(),0===r||-1===r?o.current&&o.current.focus():s&&s[r-1].focus();default:return null}}return null};t.qk=function(e,t,n){" "!==e.key&&"Enter"!==e.key||n(!t)}},42414:function(e,t){"use strict";t.Z={sizing:{small:"28px",medium:"36px",large:"48px"},spacing:{xsmall:"4px",small:"8px",medium:"16px",large:"24px",xlarge:"32px",xxlarge:"64px"},colors:{navyLight:"#213147",navy:"#05192D",navyDark:"#000820",navySubtleTextOnDark:"#9BA3AB",navySubtleTextOnLight:"#65707C",greenLight:"#65FF8F",green:"#03EF62",greenDark:"#00C74E",greenDarkText:"#008031",white:"#FFFFFF",greySubtle:"#F7F7FC",greyLight:"#EFEFEF",grey:"#E8E8EA",greyMedium:"#D9D9E2",greyDark:"#848C92",beigeSubtle:"#FFFBF3",beigeLight:"#F7F3EB",beige:"#EFEBE4",beigeMedium:"#E5E1DA",redLight:"#FF782D",red:"#FF5400",redDark:"#DD3400",redDarkText:"#C01100",orangeLight:"#FFBC4B",orange:"#FF931E",orangeDark:"#D87300",orangeDarkText:"#B75900",yellowLight:"#FFEC3C",yellow:"#FCCE0D",yellowDark:"#CFA600",yellowDarkText:"#907000",blueLight:"#60E7FF",blue:"#06BDFC",blueDark:"#009BD8",blueDarkText:"#0075AD",purpleLight:"#974DFF",purple:"#7933FF",purpleDark:"#5646A5",purpleDarkText:"#5646A5",pinkLight:"#FF95CF",pink:"#FF6EA9",pinkDark:"#DC4D8B",pinkDarkText:"#BF3072",brandFacebook:"#1778F2",brandTwitter:"#00ACEE",brandGoogle:"#DB4437",brandLinkedIn:"#0A66C2"},borderRadius:{medium:"4px",circle:"50%"},borderWidth:{thin:"1px",medium:"2px",thick:"3px",xthick:"4px"},boxShadow:{thin:"0px 0px 2px 0px rgba(5, 25, 45, 0.3)",medium:"0px 1px 4px -1px rgba(5, 25, 45, 0.3)",thick:"0px 3px 5px -1px rgba(5, 25, 45, 0.3)",xthick:"0px 8px 12px -4px rgba(5, 25, 45, 0.3)"},fontWeights:{regular:400,bold:800},fontFamilies:{sansSerif:"Studio-Feixen-Sans, Arial, sans-serif",mono:"JetBrainsMonoNL, Menlo, Monaco, 'Courier New', monospace"},fontSizes:{xsmall:"10px",small:"12px",medium:"14px",large:"16px",xlarge:"18px",xxlarge:"20px",huge:"28px"},letterSpacing:{tight:"-0.5px",default:"0px",relaxed:"1.5px"},lineHeights:{tight:1,default:1.25,relaxed:1.5},opacity:{low:.1,medium:.4,high:.6},zIndex:{default:1,sticky:100,popup:5e3,dropdown:7e3,overlay:8e3,modal:9e3,toast:1e4},breakpoints:{small:"480px",medium:"820px",large:"1480px"}}},2350:function(){},65235:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},77913:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(92648).Z,o=n(17273).Z,i=r(n(11720)),s=n(12199),l=n(51630),a=n(59541),u=n(6163),c=n(27215),d=n(65235),f=n(70729);const p={};function h(e,t,n,r){if(!e)return;if(!s.isLocalURL(t))return;Promise.resolve(e.prefetch(t,n,r)).catch((e=>{0}));const o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;p[t+"%"+n+(o?"%"+o:"")]=!0}var m=i.default.forwardRef((function(e,t){let n;const{href:r,as:m,children:v,prefetch:g,passHref:y,replace:_,shallow:x,scroll:S,locale:b,onClick:F,onMouseEnter:C,onTouchStart:k,legacyBehavior:R=!0!==Boolean(!0)}=e,j=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,!R||"string"!==typeof n&&"number"!==typeof n||(n=i.default.createElement("a",null,n));const E=!1!==g;let w=i.default.useContext(a.RouterContext);const D=i.default.useContext(u.AppRouterContext);D&&(w=D);const{href:z,as:A}=i.default.useMemo((()=>{const[e,t]=s.resolveHref(w,r,!0);return{href:e,as:m?s.resolveHref(w,m):t||e}}),[w,r,m]),T=i.default.useRef(z),L=i.default.useRef(A);let M;if(R)M=i.default.Children.only(n);else;const O=R?M&&"object"===typeof M&&M.ref:t,[B,I,N]=c.useIntersection({rootMargin:"200px"}),P=i.default.useCallback((e=>{L.current===A&&T.current===z||(N(),L.current=A,T.current=z),B(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[A,O,z,N,B]);i.default.useEffect((()=>{const e=I&&E&&s.isLocalURL(z),t="undefined"!==typeof b?b:w&&w.locale,n=p[z+"%"+A+(t?"%"+t:"")];e&&!n&&h(w,z,A,{locale:t})}),[A,z,I,b,E,w]);const q={ref:P,onClick:e=>{R||"function"!==typeof F||F(e),R&&M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,l,a,u,c,d){const{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s.isLocalURL(n)))return;e.preventDefault();const p=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:u,scroll:a}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};c?i.default.startTransition(p):p()}(e,w,z,A,_,x,S,b,Boolean(D),E)},onMouseEnter:e=>{R||"function"!==typeof C||C(e),R&&M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),!E&&D||s.isLocalURL(z)&&h(w,z,A,{priority:!0})},onTouchStart:e=>{R||"function"!==typeof k||k(e),R&&M.props&&"function"===typeof M.props.onTouchStart&&M.props.onTouchStart(e),!E&&D||s.isLocalURL(z)&&h(w,z,A,{priority:!0})}};if(!R||y||"a"===M.type&&!("href"in M.props)){const e="undefined"!==typeof b?b:w&&w.locale,t=w&&w.isLocaleDomain&&d.getDomainLocale(A,e,w.locales,w.domainLocales);q.href=t||f.addBasePath(l.addLocale(A,e,w&&w.defaultLocale))}return R?i.default.cloneElement(M,q):i.default.createElement("a",Object.assign({},j,q),n)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},27215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:a}=e;const u=a||!i,[c,d]=r.useState(!1),[f,p]=r.useState(null);r.useEffect((()=>{if(i){if(u||c)return;if(f&&f.tagName){const e=function(e,t,n){const{id:r,observer:o,elements:i}=function(e){const t={root:e.root||null,margin:e.rootMargin||""},n=l.find((e=>e.root===t.root&&e.margin===t.margin));let r;if(n&&(r=s.get(n),r))return r;const o=new Map,i=new IntersectionObserver((e=>{e.forEach((e=>{const t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return r={id:t,observer:i,elements:o},l.push(t),s.set(t,r),r}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),s.delete(r);const e=l.findIndex((e=>e.root===r.root&&e.margin===r.margin));e>-1&&l.splice(e,1)}}}(f,(e=>e&&d(e)),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){const e=o.requestIdleCallback((()=>d(!0)));return()=>o.cancelIdleCallback(e)}}),[f,u,n,t,c]);const h=r.useCallback((()=>{d(!1)}),[]);return[p,c,h]};var r=n(11720),o=n(98065);const i="function"===typeof IntersectionObserver,s=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(92648).Z)(n(11720));const o=r.default.createContext(null);t.AppRouterContext=o;const i=r.default.createContext(null);t.LayoutRouterContext=i;const s=r.default.createContext(null);t.GlobalLayoutRouterContext=s;const l=r.default.createContext(null);t.TemplateContext=l},33395:function(e,t,n){var r=n(83454);n(2350);var o=n(11720);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=i(o);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a="undefined"!==typeof r&&r.env&&!0,u=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,o=t.optimizeForSpeed,i=void 0===o?a:o;d(u(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",d("boolean"===typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var s=document.querySelector('meta[property="csp-nonce"]');this._nonce=s?s.getAttribute("content"):null}var t,n,r,o=e.prototype;return o.setOptimizeForSpeed=function(e){d("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},o.isOptimizeForSpeed=function(){return this._optimizeForSpeed},o.inject=function(){var e=this;if(d(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},o.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},o.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},o.insertRule=function(e,t){if(d(u(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(o){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},o.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];d(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},o.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];d(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},o.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]},o.cssRules=function(){var e=this;return this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[])},o.makeStyleTag=function(e,t,n){t&&d(u(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&l(t.prototype,n),r&&l(t,r),e}();function d(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}var f=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},p={};function h(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return p[r]||(p[r]="jsx-"+f(e+"-"+n)),p[r]}function m(e,t){var n=e+t;return p[n]||(p[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),p[n]}var v=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,i=void 0!==o&&o;this._sheet=r||new c({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),r&&"boolean"===typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var n=e[0],r=e[1];return s.default.createElement("style",{id:"__"+n,key:"__"+n,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var o=h(r,n);return{styleId:o,rules:Array.isArray(t)?t.map((function(e){return m(o,e)})):[m(o,t)]}}return{styleId:h(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();var g=o.createContext(null);function y(){return new v}function _(){return o.useContext(g)}g.displayName="StyleSheetContext";var x=s.default.useInsertionEffect||s.default.useLayoutEffect,S=y();function b(e){var t=S||_();return t?(x((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}b.dynamic=function(e){return e.map((function(e){return h(e[0],e[1])})).join(" ")},t.style=b},77521:function(e,t,n){e.exports=n(33395).style},41664:function(e,t,n){e.exports=n(77913)},39784:function(e,t,n){"use strict";var r=n(75263),o=n(64836);t.Z=void 0;var i=o(n(45697)),s=r(n(11720)),l=n(70917),a=s.forwardRef((function(e,t){var n=e["aria-hidden"],r=void 0!==n&&n,o=e.className,i=e.color,s=void 0===i?"currentColor":i,a=e.size,u=void 0===a?18:a,c=e.title,d=e.titleId;return(0,l.jsx)("svg",{viewBox:"0 0 18 18","aria-hidden":r,className:o,height:u,ref:t,role:"img",width:u,"aria-labelledby":d},void 0===c?(0,l.jsx)("title",{id:d},"Down Chevron"):c?(0,l.jsx)("title",{id:d},c):null,(0,l.jsx)("path",{fill:s,d:"M8.244 12.155l-4.95-4.947a1 1 0 111.415-1.415l4.294 4.291 4.293-4.279a.998.998 0 011.413.003c.39.392.388 1.025-.003 1.415l-5.002 4.986a.998.998 0 01-1.46-.054z",fillRule:"evenodd"}))}));a.propTypes={"aria-hidden":i.default.bool,className:i.default.string,color:i.default.string,size:i.default.oneOf([12,18,24]),title:i.default.string,titleId:i.default.string};var u=a;t.Z=u},4682:function(e,t,n){"use strict";var r=n(75263),o=n(64836);t.Z=void 0;var i=o(n(45697)),s=r(n(11720)),l=n(70917),a=s.forwardRef((function(e,t){var n=e["aria-hidden"],r=void 0!==n&&n,o=e.className,i=e.color,s=void 0===i?"currentColor":i,a=e.size,u=void 0===a?18:a,c=e.title,d=e.titleId;return(0,l.jsx)("svg",{viewBox:"0 0 18 18","aria-hidden":r,className:o,height:u,ref:t,role:"img",width:u,"aria-labelledby":d},void 0===c?(0,l.jsx)("title",{id:d},"Search"):c?(0,l.jsx)("title",{id:d},c):null,(0,l.jsx)("path",{fill:s,d:"M13.26 12.303l4.408 3.953a1 1 0 01-1.336 1.488L11.78 13.66a7.5 7.5 0 111.482-1.358zM7.5 13a5.5 5.5 0 100-11 5.5 5.5 0 000 11z",fillRule:"evenodd"}))}));a.propTypes={"aria-hidden":i.default.bool,className:i.default.string,color:i.default.string,size:i.default.oneOf([12,18,24]),title:i.default.string,titleId:i.default.string};var u=a;t.Z=u}}]);
//# sourceMappingURL=7403-80a625bc140b304f.js.map