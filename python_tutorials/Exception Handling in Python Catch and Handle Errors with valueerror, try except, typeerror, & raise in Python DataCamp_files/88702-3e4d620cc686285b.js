"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88702],{88702:function(e,t,n){n.d(t,{Fx:function(){return M}});var r=n(11720),o=n(83952);new WeakMap;const i=r.default.createContext(null);i.displayName="PressResponderContext";new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);class s{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function u(e){let t=(0,r.useRef)({isFocused:!1,onBlur:e,observer:null});return t.current.onBlur=e,(0,o.bt)((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]),(0,r.useCallback)((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let n=e.target,r=e=>{var r,o;t.current.isFocused=!1,n.disabled&&(null===(o=(r=t.current).onBlur)||void 0===o||o.call(r,new s("blur",e))),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};n.addEventListener("focusout",r,{once:!0}),t.current.observer=new MutationObserver((()=>{t.current.isFocused&&n.disabled&&(t.current.observer.disconnect(),n.dispatchEvent(new FocusEvent("blur")),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0})))})),t.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}}),[])}let a=null,d=new Set,c=!1,l=!1,f=!1;const p={Tab:!0,Escape:!0};function v(e,t){for(let n of d)n(e,t)}function h(e){l=!0,function(e){return!(e.metaKey||!(0,o.V5)()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(a="keyboard",v("keyboard",e))}function b(e){a="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(l=!0,v("pointer",e))}function g(e){(0,o.Zj)(e)&&(l=!0,a="virtual")}function w(e){e.target!==window&&e.target!==document&&(l||f||(a="virtual",v("virtual",e)),l=!1,f=!1)}function m(){l=!1,f=!0}function y(){if("undefined"===typeof window||c)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){l=!0,e.apply(this,arguments)},document.addEventListener("keydown",h,!0),document.addEventListener("keyup",h,!0),document.addEventListener("click",g,!0),window.addEventListener("focus",w,!0),window.addEventListener("blur",m,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",b,!0),document.addEventListener("pointermove",b,!0),document.addEventListener("pointerup",b,!0)):(document.addEventListener("mousedown",b,!0),document.addEventListener("mousemove",b,!0),document.addEventListener("mouseup",b,!0)),c=!0}function E(){return"pointer"!==a}function F(e,t,n){y(),(0,r.useEffect)((()=>{let t=(t,r)=>{(function(e,t,n){return!(e&&"keyboard"===t&&n instanceof KeyboardEvent&&!p[n.key])})(null===n||void 0===n?void 0:n.isTextInput,t,r)&&e(E())};return d.add(t),()=>{d.delete(t)}}),t)}"undefined"!==typeof document&&("loading"!==document.readyState?y():document.addEventListener("DOMContentLoaded",y));const T=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];T.join(":not([hidden]),");T.push('[tabindex]:not([tabindex="-1"]):not([disabled])');T.join(':not([hidden]):not([tabindex="-1"]),');function L(e,t){return t.some((t=>t.contains(e)))}class C{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!==t&&void 0!==t?t:null),o=new k({scopeRef:e});r.addChild(o),o.parent=r,this.fastMap.set(e,o),n&&(o.nodeToRestore=n)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e),n=t.parent;for(let o of this.traverse())o!==t&&t.nodeToRestore&&o.nodeToRestore&&t.scopeRef.current&&L(o.nodeToRestore,t.scopeRef.current)&&(o.nodeToRestore=t.nodeToRestore);let r=t.children;n.removeChild(t),r.length>0&&r.forEach((e=>n.addChild(e))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.length>0)for(let t of e.children)yield*this.traverse(t)}clone(){let e=new C;for(let t of this.traverse())e.addTreeNode(t.scopeRef,t.parent.scopeRef,t.nodeToRestore);return e}constructor(){this.fastMap=new Map,this.root=new k({scopeRef:null}),this.fastMap.set(null,this.root)}}class k{addChild(e){this.children.push(e),e.parent=this}removeChild(e){this.children.splice(this.children.indexOf(e),1),e.parent=void 0}constructor(e){this.children=[],this.contain=!1,this.scopeRef=e.scopeRef}}new C;function M(e={}){let{autoFocus:t=!1,isTextInput:n,within:o}=e,i=(0,r.useRef)({isFocused:!1,isFocusVisible:t||E()}),[s,a]=(0,r.useState)(!1),[d,c]=(0,r.useState)((()=>i.current.isFocused&&i.current.isFocusVisible)),l=(0,r.useCallback)((()=>c(i.current.isFocused&&i.current.isFocusVisible)),[]),f=(0,r.useCallback)((e=>{i.current.isFocused=e,a(e),l()}),[l]);F((e=>{i.current.isFocusVisible=e,l()}),[],{isTextInput:n});let{focusProps:p}=function(e){let{isDisabled:t,onFocus:n,onBlur:o,onFocusChange:i}=e;const s=(0,r.useCallback)((e=>{if(e.target===e.currentTarget)return o&&o(e),i&&i(!1),!0}),[o,i]),a=u(s),d=(0,r.useCallback)((e=>{e.target===e.currentTarget&&(n&&n(e),i&&i(!0),a(e))}),[i,n,a]);return{focusProps:{onFocus:!t&&(n||i||o)?d:void 0,onBlur:t||!o&&!i?null:s}}}({isDisabled:o,onFocusChange:f}),{focusWithinProps:v}=function(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:o,onFocusWithinChange:i}=e,s=(0,r.useRef)({isFocusWithin:!1}),a=(0,r.useCallback)((e=>{s.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(s.current.isFocusWithin=!1,n&&n(e),i&&i(!1))}),[n,i,s]),d=u(a),c=(0,r.useCallback)((e=>{s.current.isFocusWithin||(o&&o(e),i&&i(!0),s.current.isFocusWithin=!0,d(e))}),[o,i,d]);return t?{focusWithinProps:{onFocus:null,onBlur:null}}:{focusWithinProps:{onFocus:c,onBlur:a}}}({isDisabled:!o,onFocusWithinChange:f});return{isFocused:s,isFocusVisible:i.current.isFocused&&d,focusProps:o?v:p}}},83952:function(e,t,n){n.d(t,{V5:function(){return h},Zj:function(){return b},bt:function(){return i},dG:function(){return d}});var r=n(11720),o=n(86010);const i="undefined"!==typeof window?r.default.useLayoutEffect:()=>{};let s=new Map;function u(e,t){if(e===t)return e;let n=s.get(e);if(n)return n(t),t;let r=s.get(t);return r?(r(e),e):t}function a(...e){return(...t)=>{for(let n of e)"function"===typeof n&&n(...t)}}function d(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"===typeof n&&"function"===typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=a(n,i):"className"!==e&&"UNSAFE_className"!==e||"string"!==typeof n||"string"!==typeof i?"id"===e&&n&&i?t.id=u(n,i):t[e]=void 0!==i?i:n:t[e]=(0,o.Z)(n,i)}}return t}new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let c=new Map,l=new Set;function f(){if("undefined"===typeof window)return;let e=t=>{let n=c.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),c.delete(t.target)),0===c.size)){for(let e of l)e();l.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=c.get(t.target);n||(n=new Set,c.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?f():document.addEventListener("DOMContentLoaded",f));"undefined"!==typeof window&&window.visualViewport;new Map;function p(e){var t;return"undefined"!==typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function v(e){var t;return"undefined"!==typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function h(){return v(/^Mac/i)}function b(e){return!(0!==e.mozInputSource||!e.isTrusted)||(p(/Android/i)&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}},86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.Z=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}}}]);
//# sourceMappingURL=88702-3e4d620cc686285b.js.map