(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(10),c=(n(0),n(201)),a={title:"No Underscores"},i={id:"no-underscores",title:"No Underscores",description:"Don't underscore-prefix private helper methods or static C functions.",source:"@site/docs/no-underscores.md",permalink:"/docs/no-underscores",sidebar:"docs",previous:{title:"Avoid Single Use Constants",permalink:"/docs/avoid-single-use-constants"},next:{title:"Pass in Actions",permalink:"/docs/pass-in-actions"}},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Don't underscore-prefix private helper methods or ",Object(c.b)("inlineCode",{parentName:"p"},"static")," C functions."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec-redhighlight"}),'- (void)_buttonAction:(CKComponent *)sender\n{\n  _logEvent(@"button tapped");\n}\n')),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/never-subclass-components"}),"Subclassing components is discouraged"),", so there's no need to worry about distinguishing public and private methods or colliding with methods in the superclass."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec"}),'- (void)buttonAction:(CKComponent *)sender\n{\n  logEvent(@"button tapped");\n}\n')))}u.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,f=l["".concat(a,".").concat(b)]||l[b]||d[b]||c;return n?o.a.createElement(f,i({ref:t},p,{components:n})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);