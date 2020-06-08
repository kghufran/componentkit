(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var i=n(2),o=n(11),a=(n(0),n(219)),r={title:"Why C++",id:"why-cpp"},c={id:"why-cpp",title:"Why C++",description:"Using Objective-C++ in ComponentKit offers some serious wins in syntax. However this does mean you need to touch a limited subset of C++ to work with ComponentKit.  Don't worry, it's not too bad!",source:"@site/docs/why-cpp.md",permalink:"/docs/why-cpp",sidebar:"docs",previous:{title:"Keep Controller in Component",permalink:"/docs/keep-controller-in-component"},next:{title:"Advanced Views",permalink:"/docs/advanced-views"}},l=[{value:"Aggregate Initialization",id:"aggregate-initialization",children:[]},{value:"Type Safety",id:"type-safety",children:[]},{value:"Efficiency",id:"efficiency",children:[]},{value:"Nil Safety",id:"nil-safety",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Using Objective-C++ in ComponentKit offers some serious wins in syntax. However this does mean you need to touch a limited subset of C++ to work with ComponentKit.  Don't worry, it's not too bad!"),Object(a.b)("p",null,"Here again is a generic article component:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"[CKFlexboxComponent\n newWithView:{}\n size:{}\n style:{\n  .direction = CKFlexboxDirectionColumn,\n }\n children:{\n   {[HeaderComponent newWithArticle:article]},\n   {[MessageComponent newWithArticle:article]},\n   {[FooterComponent newWithArticle:article]},\n }];\n")),Object(a.b)("p",null,"Here's what it might look like in pure Objective-C:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec-redhighlight"}),"[CKFlexboxComponent newWithView:[[UIView alloc] init]\n                           size:CGSizeZero\n                          style:[[CKFlexboxComponentStyle alloc] initWithDirection:CKFlexboxDirectionColumn\n                                                                    justifyContent:CKFlexboxJustifyContentStart\n                                                                        alignItems:CKFlexboxAlignItemsStart\n                                                                           spacing:0.0]\n                       children:@[\n  [CKFlexboxComponentChild childWithComponent:[HeaderComponent newWithArticle:article]\n                                   topPadding:0\n                                  leftPadding:0\n                                bottomPadding:0],\n  [CKFlexboxComponentChild childWithComponent:[MessageComponent newWithArticle:article]\n                                   topPadding:0\n                                  leftPadding:0\n                                bottomPadding:0],\n  [CKFlexboxComponentChild childWithComponent:[FooterComponent newWithArticle:article]\n                                   topPadding:0\n                                  leftPadding:0\n                                bottomPadding:0]\n")),Object(a.b)("h2",{id:"aggregate-initialization"},"Aggregate Initialization"),Object(a.b)("p",null,"C and C++ have ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"http://en.cppreference.com/w/cpp/language/aggregate_initialization"}),"aggregate initialization"),", which allows initializing a struct with very terse syntax. We need Objective-C++ to take advantage of this syntax because, unlike Objective-C, Objective-C++ allows putting Objective-C objects in structs when ARC is enabled."),Object(a.b)("p",null,"You can be as expressive as you like; you can use ",Object(a.b)("inlineCode",{parentName:"p"},"{ .name = value, ... }")," or just ",Object(a.b)("inlineCode",{parentName:"p"},"{ value1, value2, ... }"),". (The latter form is shorter, but fragile to argument reordering and sometimes harder to read.) Note that you can easily omit fields; in the C++ example above, the padding-related values are omitted and default to 0."),Object(a.b)("h2",{id:"type-safety"},"Type Safety"),Object(a.b)("p",null,"In the previous example the C++ would fail to compile if we inserted a child of the wrong type, while the Objective-C example compiles with any type in the array\u2014even an ",Object(a.b)("inlineCode",{parentName:"p"},"NSString *"),"."),Object(a.b)("h2",{id:"efficiency"},"Efficiency"),Object(a.b)("p",null,"Being fully declarative and immutable means you use a ",Object(a.b)("em",{parentName:"p"},"lot")," of objects. C++ objects are far more efficient to create because they can be stack-allocated, ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"http://stackoverflow.com/questions/4303513/push-back-vs-emplace-back"}),"emplaced"),", ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"http://www.cprogramming.com/c++11/rvalue-references-and-move-semantics-in-c++11.html"}),"moved"),", etc."),Object(a.b)("h2",{id:"nil-safety"},"Nil Safety"),Object(a.b)("p",null,"Objective-C containers throw if you insert ",Object(a.b)("inlineCode",{parentName:"p"},"nil")," elements in them but C++ containers do not. Relaxing this constraint makes it convenient to write hierarchies where any individual child may be nil:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"children:{\n  headerComponent,\n  messageComponent,\n  attachmentComponent,\n  footerComponent\n}\n")),Object(a.b)("p",null,"The alternative would be a bunch of conditionals in Objective-C:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec-redhighlight"}),"NSMutableArray *children = [NSMutableArray array];\nif (headerComponent) {\n  [children addObject:headerComponent];\n}\nif (messageComponent) {\n  [children addObject:messageComponent];\n}\nif (attachmentComponent) {\n  [children addObject:attachmentComponent];\n}\nif (footerComponent) {\n  [children addObject:footerComponent];\n}\n")))}s.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=i,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||a;return n?o.a.createElement(u,c({ref:t},p,{components:n})):o.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<a;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);