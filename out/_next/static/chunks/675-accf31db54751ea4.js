(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{8045:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(i=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(u){r=!0,o=u}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.default=function(t){var e=t.src,n=t.sizes,o=t.unoptimized,s=void 0!==o&&o,d=t.priority,f=void 0!==d&&d,h=t.loading,v=t.lazyBoundary,w=void 0===v?"200px":v,A=t.className,k=t.quality,S=t.width,j=t.height,E=t.objectFit,I=t.objectPosition,_=t.onLoadingComplete,P=t.loader,R=void 0===P?x:P,q=t.placeholder,D=void 0===q?"empty":q,L=t.blurDataURL,M=function(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),C=n?"responsive":"intrinsic";"layout"in M&&(M.layout&&(C=M.layout),delete M.layout);var N="";if(function(t){return"object"===typeof t&&(b(t)||function(t){return void 0!==t.src}(t))}(e)){var W=b(e)?e.default:e;if(!W.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(W)));if(L=L||W.blurDataURL,N=W.src,(!C||"fill"!==C)&&(j=j||W.height,S=S||W.width,!W.height||!W.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(W)))}e="string"===typeof e?e:N;var B=z(S),T=z(j),U=z(k),H=!f&&("lazy"===h||"undefined"===typeof h);(e.startsWith("data:")||e.startsWith("blob:"))&&(s=!0,H=!1);m.has(e)&&(H=!1);0;var F,V=r(l.useIntersection({rootMargin:w,disabled:!H}),2),J=V[0],G=V[1],Q=!H||G,K={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y=!1,Z={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:E,objectPosition:I},$="blur"===D?{filter:"blur(20px)",backgroundSize:E||"cover",backgroundImage:'url("'.concat(L,'")'),backgroundPosition:I||"0% 0%"}:{};if("fill"===C)K.display="block",K.position="absolute",K.top=0,K.left=0,K.bottom=0,K.right=0;else if("undefined"!==typeof B&&"undefined"!==typeof T){var tt=T/B,et=isNaN(tt)?"100%":"".concat(100*tt,"%");"responsive"===C?(K.display="block",K.position="relative",Y=!0,X.paddingTop=et):"intrinsic"===C?(K.display="inline-block",K.position="relative",K.maxWidth="100%",Y=!0,X.maxWidth="100%",F='<svg width="'.concat(B,'" height="').concat(T,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===C&&(K.display="inline-block",K.position="relative",K.width=B,K.height=T)}else 0;var nt={src:p,srcSet:void 0,sizes:void 0};Q&&(nt=O({src:e,unoptimized:s,layout:C,width:B,quality:U,sizes:n,loader:R}));var it=e;0;0;var rt=(i(y={},"imagesrcset",nt.srcSet),i(y,"imagesizes",nt.sizes),y);return a.default.createElement("span",{style:K},Y?a.default.createElement("span",{style:X},F?a.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(u.toBase64(F))}):null):null,a.default.createElement("img",Object.assign({},M,nt,{decoding:"async","data-nimg":C,className:A,ref:function(t){J(t),function(t,e,n,i,r){if(!t)return;var o=function(){t.src!==p&&("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===i&&(t.style.filter="none",t.style.backgroundSize="none",t.style.backgroundImage="none"),m.add(e),r){var n=t.naturalWidth,o=t.naturalHeight;r({naturalWidth:n,naturalHeight:o})}}))};t.complete?o():t.onload=o}(t,it,0,D,_)},style:g({},Z,$)})),a.default.createElement("noscript",null,a.default.createElement("img",Object.assign({},M,O({src:e,unoptimized:s,layout:C,width:B,quality:U,sizes:n,loader:R}),{decoding:"async","data-nimg":C,style:Z,className:A,loading:h||"lazy"}))),f?a.default.createElement(c.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+nt.src+nt.srcSet+nt.sizes,rel:"preload",as:"image",href:nt.srcSet?void 0:nt.src},rt))):null)};var a=f(n(7294)),c=f(n(5443)),u=n(6978),s=n(5809),l=n(7190);function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return t&&t.__esModule?t:{default:t}}function g(t){for(var e=arguments,n=function(n){var i=null!=e[n]?e[n]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),r.forEach((function(e){d(t,e,i[e])}))},i=1;i<arguments.length;i++)n(i);return t}var m=new Set,p=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(t){var e=t.root,n=t.src,i=t.width,r=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(t){var e=t.root,n=t.src,i=t.width,r=t.quality,o=new URL("".concat(e).concat(E(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(t){var e=t.root,n=t.src,i=t.width,r=t.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(e).concat(o).concat(E(n))}],["akamai",function(t){var e=t.root,n=t.src,i=t.width;return"".concat(e).concat(E(n),"?imwidth=").concat(i)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(t){return void 0!==t.default}var y,v={deviceSizes:[320,480,600,768,1024,1200],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||s.imageConfigDefault,w=v.deviceSizes,A=v.imageSizes,k=v.loader,S=v.path,j=(v.domains,o(w).concat(o(A)));function O(t){var e=t.src,n=t.unoptimized,i=t.layout,r=t.width,a=t.quality,c=t.sizes,u=t.loader;if(n)return{src:e,srcSet:void 0,sizes:void 0};var s=function(t,e,n){if(n&&("fill"===e||"responsive"===e)){for(var i,r=/(^|\s)(1?\d?\d)vw/g,a=[];i=r.exec(n);i)a.push(parseInt(i[2]));if(a.length){var c,u=.01*(c=Math).min.apply(c,o(a));return{widths:j.filter((function(t){return t>=w[0]*u})),kind:"w"}}return{widths:j,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:w,kind:"w"}:{widths:o(new Set([t,2*t].map((function(t){return j.find((function(e){return e>=t}))||j[j.length-1]})))),kind:"x"}}(r,i,c),l=s.widths,d=s.kind,f=l.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:l.map((function(t,n){return"".concat(u({src:e,quality:a,width:t})," ").concat("w"===d?t:n+1).concat(d)})).join(", "),src:u({src:e,quality:a,width:l[f]})}}function z(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function x(t){var e=h.get(k);if(e)return e(g({root:S},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(k))}function E(t){return"/"===t[0]?t.slice(1):t}w.sort((function(t,e){return t-e})),j.sort((function(t,e){return t-e}))},7190:function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(i=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(u){r=!0,o=u}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!a,u=r.useRef(),s=i(r.useState(!1),2),l=s[0],d=s[1],f=r.useCallback((function(t){u.current&&(u.current(),u.current=void 0),n||l||t&&t.tagName&&(u.current=function(t,e,n){var i=function(t){var e=t.rootMargin||"",n=c.get(e);if(n)return n;var i=new Map,r=new IntersectionObserver((function(t){t.forEach((function(t){var e=i.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return c.set(e,n={id:e,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(t,e),o.observe(t),function(){a.delete(t),o.unobserve(t),0===a.size&&(o.disconnect(),c.delete(r))}}(t,(function(t){return t&&d(t)}),{rootMargin:e}))}),[n,e,l]);return r.useEffect((function(){if(!a&&!l){var t=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(t)}}}),[l]),[f,l]};var r=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=function(t){return window.btoa(t)}},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(t,e,n){t.exports=n(8045)}}]);