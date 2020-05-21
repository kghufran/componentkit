(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{194:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var o=t(2),i=t(10),r=(t(0),t(201)),a={title:"Component Hosting View"},c={id:"component-hosting-view",title:"Component Hosting View",description:"So you've created a component and now need some way to render it on screen. If your use case involves using components inside a UICollectionView, you should be using CKCollectionViewDataSource. However, there are some cases where you want to render a component standalone. CKComponentHostingView was built for this purpose.",source:"@site/docs/component-hosting-view.md",permalink:"/docs/component-hosting-view",sidebar:"docs",previous:{title:"Keep Controller in Component",permalink:"/docs/keep-controller-in-component"},next:{title:"Why C++",permalink:"/docs/why-cpp"}},s=[{value:"Setting the model",id:"setting-the-model",children:[]},{value:"Size Range Provider",id:"size-range-provider",children:[]},{value:"Layout",id:"layout",children:[]}],l={rightToc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"So you've created a component and now need some way to render it on screen. If your use case involves using components inside a ",Object(r.b)("inlineCode",{parentName:"p"},"UICollectionView"),", you should be using ",Object(r.b)("inlineCode",{parentName:"p"},"CKCollectionViewDataSource"),". However, there are some cases where you want to render a component standalone. ",Object(r.b)("inlineCode",{parentName:"p"},"CKComponentHostingView")," was built for this purpose."),Object(r.b)("h2",{id:"setting-the-model"},"Setting the model"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CKComponentHostingView")," provides a ",Object(r.b)("inlineCode",{parentName:"p"},"updateModel:mode:")," method that you can call to update the model for the hosting view. Similarly a secondary context object is also provided. Updating either model or context will trigger a re-generation of the component in the hosting view."),Object(r.b)("h2",{id:"size-range-provider"},"Size Range Provider"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CKComponentHostingView")," requires a size range provider to be passed into the initializer. The size range provider is an object that responds to a single method (",Object(r.b)("inlineCode",{parentName:"p"},"-sizeRangeForBoundingSize:"),") that calculates a constraining size for a given view bounding size."),Object(r.b)("p",null,"Typically you'll want to use ",Object(r.b)("inlineCode",{parentName:"p"},"CKComponentFlexibleSizeRangeProvider"),", a class that conforms to ",Object(r.b)("inlineCode",{parentName:"p"},"CKComponentSizeRangeProviding")," and implements a set of common sizing behaviors where none, either, or both dimensions (width and height) can be constrained to the view's bounding dimensions."),Object(r.b)("h2",{id:"layout"},"Layout"),Object(r.b)("p",null,"To determine an appropriate size for a component hosting view, call ",Object(r.b)("inlineCode",{parentName:"p"},"-sizeThatFits:")," with the constraining size."),Object(r.b)("p",null,"If an internal state change in the component causes its size to be invalidated, ",Object(r.b)("inlineCode",{parentName:"p"},"CKComponentHostingView")," calls its delegate method ",Object(r.b)("inlineCode",{parentName:"p"},"-componentHostingViewDidInvalidateSize:")," in order to notify the owner of the view that it should resize the view (the view will ",Object(r.b)("strong",{parentName:"p"},"not")," resize itself)."))}p.isMDXComponent=!0},201:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var o=t(0),i=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},d=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,b=d["".concat(a,".").concat(m)]||d[m]||u[m]||r;return t?i.a.createElement(b,c({ref:n},l,{components:t})):i.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);