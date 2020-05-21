(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{178:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var o=t(2),i=t(10),r=(t(0),t(201)),l={title:"Lifecycle Methods"},a={id:"lifecycle-methods",title:"Lifecycle Methods",description:"Component controllers expose lifecycle methods that allow you to perform custom operations as components mount, unmount, update, and acquire views.",source:"@site/docs/lifecycle-methods.md",permalink:"/docs/lifecycle-methods",sidebar:"docs",previous:{title:"Component Controllers",permalink:"/docs/component-controllers"},next:{title:"Debugging",permalink:"/docs/debugging"}},c=[{value:"Ordering",id:"ordering",children:[{value:"Mounting",id:"mounting",children:[]},{value:"Remounting",id:"remounting",children:[]},{value:"Unmounting",id:"unmounting",children:[]},{value:"Updating",id:"updating",children:[]}]},{value:"Uses",id:"uses",children:[{value:"Mutating the View",id:"mutating-the-view",children:[]}]}],b={rightToc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/component-controllers"}),"Component controllers")," expose lifecycle methods that allow you to perform custom operations as components mount, unmount, update, and acquire views."),Object(r.b)("div",{class:"note"},Object(r.b)("p",null,"Whenever possible, avoid using lifecycle methods. Think of them as an emergency escape hatch for integrating with stateful code.")),Object(r.b)("h2",{id:"ordering"},"Ordering"),Object(r.b)("p",null,"Lifecycle methods have the following defined ordering."),Object(r.b)("h3",{id:"mounting"},"Mounting"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"willMount")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"componentDidAcquireView")," ",Object(r.b)("em",{parentName:"li"},"if")," the controller's component has a view"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"didMount")," after the component ",Object(r.b)("em",{parentName:"li"},"and")," all of its children are mounted")),Object(r.b)("h3",{id:"remounting"},"Remounting"),Object(r.b)("p",null,"Remounting occurs when the controller's component is already mounted and either the component is being updated or the root component is being attached to a different view."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"willRemount")),Object(r.b)("li",{parentName:"ol"},"If the controller's component creates a view and its previous view cannot be recycled:",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"componentWillRelinquishView")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"componentDidAcquireView")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"didRemount"))),Object(r.b)("h3",{id:"unmounting"},"Unmounting"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"willUnmount")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"componentWillRelinquishView")," ",Object(r.b)("em",{parentName:"li"},"if")," the controller's component has a view"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"didUnmount"))),Object(r.b)("div",{class:"note-important"},Object(r.b)("p",null,"There are no guarantees that the component's children or parents are mounted in ",Object(r.b)("inlineCode",{parentName:"p"},"willUnmount")," or ",Object(r.b)("inlineCode",{parentName:"p"},"componentWillRelinquishView"),". You ",Object(r.b)("b",null,"must not")," use ",Object(r.b)("inlineCode",{parentName:"p"},"CKComponentActionSend")," or any other method that assumes the component's parents are mounted.")),Object(r.b)("h3",{id:"updating"},"Updating"),Object(r.b)("p",null,"The controller's component can be updated to a new version of the component as part of the mounting or remounting process. In this case, you'll receive the following callbacks:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"willUpdateComponent")," before ",Object(r.b)("inlineCode",{parentName:"li"},"willMount")," or ",Object(r.b)("inlineCode",{parentName:"li"},"willRemount")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"didUpdateComponent")," after ",Object(r.b)("inlineCode",{parentName:"li"},"didMount")," or ",Object(r.b)("inlineCode",{parentName:"li"},"didRemount"))),Object(r.b)("h2",{id:"uses"},"Uses"),Object(r.b)("h3",{id:"mutating-the-view"},"Mutating the View"),Object(r.b)("p",null,"Generally views are a hidden implementation detail of ComponentKit, but you may need to break that abstraction:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Animations that cannot be implemented using ",Object(r.b)("inlineCode",{parentName:"li"},"animationsFromPreviousComponent:"),". Be sure you remove all animations in ",Object(r.b)("inlineCode",{parentName:"li"},"componentWillRelinquishView"),"."),Object(r.b)("li",{parentName:"ul"},"Interfacing with views that only expose event callbacks via a delegate API. Make the component controller the view's delegate in ",Object(r.b)("inlineCode",{parentName:"li"},"componentDidAcquireView")," and nil out the view's delegate in ",Object(r.b)("inlineCode",{parentName:"li"},"componentWillRelinquishView"),".")),Object(r.b)("div",{class:"note"},Object(r.b)("p",null,"In your ",Object(r.b)("inlineCode",{parentName:"p"},"componentDidAcquireView")," and ",Object(r.b)("inlineCode",{parentName:"p"},"componentWillRelinquishView")," implementations you may only reference the view via the component controller's ",Object(r.b)("inlineCode",{parentName:"p"},"view")," property. Remember, these lifecycle methods are called before the component has finished being mounted. Trying to use the component's view context will not work until the component has been mounted.")))}p.isMDXComponent=!0},201:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return s}));var o=t(0),i=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),p=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},m=function(e){var n=p(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,s=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return t?i.a.createElement(s,a({ref:n},b,{components:t})):i.a.createElement(s,a({ref:n},b))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var b=2;b<r;b++)l[b]=t[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);