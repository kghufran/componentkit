(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(2),r=n(11),a=(n(0),n(219)),c=n(221),i={title:"Faster Props Update"},p={id:"infrastructure/fb/rendercomponents/faster-props-update",title:"Faster Props Update",description:"Faster state updates work out-of-the-box. However, in case of props updates, we don't know if we can reuse a component or not. Similar to React, we introduced a new life cycle method that can guide the infrastructure to reuse a component:",source:"@site/docs/infrastructure/fb/rendercomponents/faster-props-update.md",permalink:"/docs/infrastructure/fb/rendercomponents/faster-props-update"},s=[{value:"When this method will be called?",id:"when-this-method-will-be-called",children:[]},{value:"CKComponentContext and CKComponentMutableContext",id:"ckcomponentcontext-and-ckcomponentmutablecontext",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Faster state updates work out-of-the-box. However, in case of props updates, we don't know if we can reuse a component or not. Similar to React, we introduced a new life cycle method that can guide the infrastructure to reuse a component:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"// The default return value is YES\n- (BOOL)shouldComponentUpdate:(id<CKRenderComponentProtocol>)component;\n")),Object(a.b)("p",null,"If this method returns ",Object(a.b)("inlineCode",{parentName:"p"},"NO"),", the component and its subtree will be reused. Similar to faster state updates, the reuse life cycle method will be called:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"// This method is being called on the new component with the reused component.\n- (void)didReuseComponent:(id<CKRenderComponentProtocol>)component\n")),Object(a.b)("h2",{id:"when-this-method-will-be-called"},"When this method will be called?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Props update"),Object(a.b)("li",{parentName:"ul"},"State update on a parent component (if component B has a parent A with a state update, it's the same as Props updates)")),Object(a.b)("h2",{id:"ckcomponentcontext-and-ckcomponentmutablecontext"},"CKComponentContext and CKComponentMutableContext"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"TL;DR")),Object(a.b)("p",null," Unless you expect your context value to be changed during component generations, you should always use ",Object(a.b)("inlineCode",{parentName:"p"},"CKComponentContext")," (instead of ",Object(a.b)("inlineCode",{parentName:"p"},"CKComponentMutableContext"),")."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CKComponentMutableContext Issue")),Object(a.b)("p",null,"If one of the component's children reads a value from ",Object(a.b)("inlineCode",{parentName:"p"},"CKComponentMutableContext"),", a component cannot not be reused. The reason is that in case of a component reuse, the component might have an incorrect value from the context. Unfortunately, the existing context API doesn't allow us to compare values between component generations."),Object(a.b)("img",{src:Object(c.a)("assets/fb/rendercomponents/faster_props_update.png"),alt:"Faster Props Update"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CKComponentContext as a solution")),Object(a.b)("p",null,"In order to mitigate this issue, we introduced ",Object(a.b)("inlineCode",{parentName:"p"},"CKComponentContext"),", which expect the value of the context to stay the same between component generations (such as QE values). ",Object(a.b)("inlineCode",{parentName:"p"},"CKComponentContext")," does support Faster Props Updates and will allow your component generation to be faster."))}l.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),b=o,m=l["".concat(c,".").concat(b)]||l[b]||d[b]||a;return n?r.a.createElement(m,i({ref:t},s,{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},220:function(e,t,n){"use strict";var o=n(0),r=n(59);t.a=function(){return Object(o.useContext)(r.a)}},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(222);var o=n(220);function r(e){var t=(Object(o.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},222:function(e,t,n){"use strict";var o=n(8),r=n(10),a=n(223),c="".startsWith;o(o.P+o.F*n(224)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return c?c.call(t,o,n):t.slice(n,n+o.length)===o}})},223:function(e,t,n){var o=n(86),r=n(30);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},224:function(e,t,n){var o=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);