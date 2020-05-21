(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(10),a=(n(0),n(201)),i=n(203),c={title:"Responder Chain"},s={id:"responder-chain",title:"Responder Chain",description:"ComponentKit has a responder chain that is similar to the responder chain on iOS. The ComponentKit responder chain is separate from UIView's responder chain, so you must manually bridge over to the component responder chain if desired.",source:"@site/docs/responder-chain.md",permalink:"/docs/responder-chain",sidebar:"docs",previous:{title:"Views",permalink:"/docs/views"},next:{title:"Actions",permalink:"/docs/actions"}},p=[],l={rightToc:p};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ComponentKit has a responder chain that is similar to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/library/ios/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/event_delivery_responder_chain/event_delivery_responder_chain.html"}),"responder chain on iOS"),". The ComponentKit responder chain is separate from ",Object(a.b)("inlineCode",{parentName:"p"},"UIView"),"'s responder chain, so you must manually bridge over to the component responder chain if desired."),Object(a.b)("img",{src:Object(i.a)("assets/responder-chain.png"),alt:"Responder Chain",width:"618",height:"443"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The next responder of a component is its ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/component-controllers"}),"controller"),", if it has one."),Object(a.b)("li",{parentName:"ol"},"The next responder of a component's controller is its component's parent component."),Object(a.b)("li",{parentName:"ol"},"If a component doesn't have a controller, its next responder is its parent component."),Object(a.b)("li",{parentName:"ol"},"The next responder of the root component is the view it is attached to."),Object(a.b)("li",{parentName:"ol"},"As normal, a view's next responder is its superview."),Object(a.b)("li",{parentName:"ol"},"Eventually, this will reach the same root view as the component hierarchy."),Object(a.b)("li",{parentName:"ol"},"It's up to you to manually bridge from the view responder chain into the component responder chain if desired by using ",Object(a.b)("inlineCode",{parentName:"li"},"CKComponentActionSend")," or one of the helpers described below.")),Object(a.b)("p",null,"Note that a component is not a subclass of ",Object(a.b)("inlineCode",{parentName:"p"},"UIResponder")," and it cannot become the first responder. It does implement both ",Object(a.b)("inlineCode",{parentName:"p"},"nextResponder")," and ",Object(a.b)("inlineCode",{parentName:"p"},"targetForAction:withSender:"),", however."),Object(a.b)("h1",{id:"tap-handling"},"Tap Handling"),Object(a.b)("p",null,"The easiest way to handle taps on ",Object(a.b)("inlineCode",{parentName:"p"},"UIControl")," views is to use ",Object(a.b)("inlineCode",{parentName:"p"},"CKComponentActionAttribute"),". It returns a component attribute that triggers a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/actions"}),"component action")," when any given ",Object(a.b)("inlineCode",{parentName:"p"},"UIControlEvent")," occurs. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec"}),"@implementation SomeComponent\n\n+ (instancetype)new\n{\n  return [self newWithView:{\n    [UIButton class],\n    {CKComponentActionAttribute(@selector(didTapButton))}\n  }];\n}\n\n- (void)didTapButton\n{\n  // Aha! The button has been tapped.\n}\n\n@end\n")),Object(a.b)("h1",{id:"gestures"},"Gestures"),Object(a.b)("p",null,"That works for ",Object(a.b)("inlineCode",{parentName:"p"},"UIControls"),", but what about other views? Fear not, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"CKComponentTapGestureAttribute"),". This allows you to install a tap gesture recognizer on any ",Object(a.b)("inlineCode",{parentName:"p"},"UIView")," and be notified when the tap occurs."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec"}),"@implementation SomeComponent\n\n+ (instancetype)new\n{\n  return [self newWithView:{\n    [UIView class],\n    {CKComponentTapGestureAttribute(@selector(didTapView))}\n  }];\n}\n\n- (void)didTapView\n{\n  // The view has been tapped.\n}\n\n@end\n")),Object(a.b)("h1",{id:"advanced-gestures"},"Advanced Gestures"),Object(a.b)("p",null,"What about advanced gestures like panning, pinching, swiping, and so on?"),Object(a.b)("p",null,'These are more complicated. The way the reactive-update model is implemented in ComponentKit is fairly limited, so the best option is to build an "escape hatch" from the reactive data flow for these at present. Drop down and mutate the underlying views directly as the user performs a gesture.'))}d.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(m,c({ref:t},p,{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},202:function(e,t,n){"use strict";var r=n(0),o=n(56);t.a=function(){return Object(r.useContext)(o.a)}},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(204);var r=n(202);function o(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},204:function(e,t,n){"use strict";var r=n(8),o=n(14),a=n(205),i="".startsWith;r(r.P+r.F*n(206)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})},205:function(e,t,n){var r=n(80),o=n(29);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},206:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);