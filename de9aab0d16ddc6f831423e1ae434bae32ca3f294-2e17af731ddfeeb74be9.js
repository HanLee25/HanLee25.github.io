(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var c=a.prototype;return c.UNSAFE_componentWillMount=function(){s.push(this),u()},c.componentDidUpdate=function(){u()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},c.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(f,"canUseDOM",i),f}}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("f98A"),c=n("Wbzz"),i=n("fO1J"),l=n.n(i),s=n("JT5b"),u=n.n(s);var f=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],i=o.data.site;return a.a.createElement("header",{className:"header"},a.a.createElement("div",{className:"header__wrapper"},a.a.createElement(c.Link,{to:"/"},a.a.createElement("h1",{className:"header__brand"},a.a.createElement(l.a,{className:"header__face","aria-labelledby":"hanFaceTitleID hanFaceDescID"}),a.a.createElement("span",{className:"header__title"},i.siteMetadata.title))),a.a.createElement("button",{className:"button button--svg md:hidden",onClick:function(){return n(!t)}},a.a.createElement(u.a,{className:"icon","aria-labelledby":"burgerIconTitleID burgerIconDescID"})),a.a.createElement("nav",{className:(t?"header__nav--opened":" ")+" header__nav main-nav"},[{route:"/about",title:"About"},{route:"/contact",title:"Contact"}].map((function(e){return a.a.createElement(c.Link,{className:"main-nav__item",key:e.title,to:e.route,activeClassName:"main-nav__item--active"},e.title)})))))};t.a=function(e){var t=e.children;return a.a.createElement("div",{className:"page"},a.a.createElement(f,null),a.a.createElement("main",{className:"main"},t),a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"footer__wrapper"},a.a.createElement("nav",{className:"flex justify-between p-4 mx-auto text-sm md:p-8"},a.a.createElement("p",{className:"footer__credit"},"Created by"," ",a.a.createElement("a",{className:"font-bold no-underline",href:"https://bryant.io",target:"_blank",rel:"noopener noreferrer"},"Han Lee")),a.a.createElement("p",null,a.a.createElement("a",{className:"font-bold no-underline",href:"https://github.com/taylorbryant/gatsby-starter-tailwind",target:"_blank",rel:"noopener noreferrer"},"GitHub"))))))}},C9fy:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},JT5b:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("title",{id:"burgerIconTitleID",key:0},"Hamburger Menu"),r.createElement("desc",{id:"burgerIconDescID",key:1},"Menu icon by Han Lee"),r.createElement("path",{d:"M94.82,60.42H5.18A5.17,5.17,0,0,1,0,55.25H0a5.18,5.18,0,0,1,5.18-5.18H94.82A5.18,5.18,0,0,1,100,55.25h0A5.17,5.17,0,0,1,94.82,60.42Z",className:"icon__part",fill:"#873700",key:2}),r.createElement("path",{d:"M94.82,76.34H5.18A5.18,5.18,0,0,1,0,71.16H0A5.18,5.18,0,0,1,5.18,66H94.82A5.18,5.18,0,0,1,100,71.16h0A5.18,5.18,0,0,1,94.82,76.34Z",className:"icon__part",fill:"#346315",key:3}),r.createElement("path",{d:"M94.82,44.51H5.18A5.18,5.18,0,0,1,0,39.33H0a5.18,5.18,0,0,1,5.18-5.17H94.82A5.18,5.18,0,0,1,100,39.33h0A5.18,5.18,0,0,1,94.82,44.51Z",className:"icon__part",fill:"#d64c16",key:4}),r.createElement("path",{d:"M92.22,29.08H7.78a4.37,4.37,0,0,1-4.37-4.37h0c0-13.34,10.81-23.16,24.16-23.16H72.43c13.35,0,24.16,9.82,24.16,23.16h0A4.37,4.37,0,0,1,92.22,29.08Z",className:"icon__part",fill:"#f4a845",key:5}),r.createElement("path",{d:"M92.22,98.45H7.78a4.37,4.37,0,0,1-4.37-4.37V86.65a4.36,4.36,0,0,1,4.37-4.37H92.22a4.36,4.36,0,0,1,4.37,4.37v7.43A4.37,4.37,0,0,1,92.22,98.45Z",className:"icon__part",fill:"#f4a845",key:6}),r.createElement("circle",{cx:"29.73",cy:"10.24",r:"3.19",className:"icon__part",fill:"#f7d0b0",key:7}),r.createElement("circle",{cx:"19.59",cy:"19.6",r:"3.19",className:"icon__part",fill:"#f7d0b0",key:8}),r.createElement("circle",{cx:"39.87",cy:"19.6",r:"3.19",className:"icon__part",fill:"#f7d0b0",key:9}),r.createElement("path",{d:"M96.59,24.71c0-13.34-10.81-23.16-24.16-23.16H50V29.08H92.22A4.37,4.37,0,0,0,96.59,24.71Z",className:"icon__part",fill:"#e0942f",key:10}),r.createElement("path",{d:"M92.22,98.45a4.37,4.37,0,0,0,4.37-4.37V86.65a4.36,4.36,0,0,0-4.37-4.37H50V98.45Z",className:"icon__part",fill:"#e0942f",key:11})])}a.defaultProps={viewBox:"0 0 100 100",className:"svg-img",role:"img"},e.exports=a,a.default=a},R48M:function(e,t,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},ZhWT:function(e,t,n){n("Ll4R"),n("Ggvi"),n("q8oJ"),n("C9fy"),n("Kz6e"),n("klQ5"),n("MIFh"),n("ToIb"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("xJgp");var r="undefined"!=typeof Element,a="function"==typeof Map,o="function"==typeof Set,c="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var i,l,s,u;if(Array.isArray(t)){if((i=t.length)!=n.length)return!1;for(l=i;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(a&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!n.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],n.get(l.value[0])))return!1;return!0}if(o&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!n.has(l.value[0]))return!1;return!0}if(c&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((i=t.length)!=n.length)return!1;for(l=i;0!=l--;)if(t[l]!==n[l])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((i=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(l=i;0!=l--;)if(!Object.prototype.hasOwnProperty.call(n,s[l]))return!1;if(r&&t instanceof Element)return!1;for(l=i;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],n[s[l]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},f98A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Han Lee"}}}}')},fO1J:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("title",{id:"hanFaceTitleID",key:0},"Han Lee"),r.createElement("desc",{id:"hanFaceDescID",key:1},"Illustrated portraite by Han Lee"),r.createElement("g",{id:"hanFace",className:"face",key:2},[r.createElement("path",{d:"M315.12,213.52h0v-48c0-72.39-59.54-131.93-131.93-131.93H155.45c-72.39,0-131.93,59.54-131.93,131.93v47.36h0c-12.85,1.35-23,12.18-23,24.35v16.92c0,13.53,12.18,25,26.39,25H37.06c23,59.54,73.74,112.31,131.92,112.31h0c58.19,0,108.93-52.77,131.93-112.31h10.15c14.89,0,26.39-11.5,26.39-25V237.19C338.12,225,328,214.87,315.12,213.52Z",className:"face__element face__skin",key:0}),r.createElement("path",{d:"M315.12,213.52v-48c0-72.39-59.54-131.93-131.93-131.93H169v357.9c58.18,0,108.91-52.78,131.91-112.31h10.15c14.89,0,26.39-11.5,26.39-25V237.19C338.12,225,328,214.87,315.12,213.52Z",className:"face__element face__shadow",key:1}),r.createElement("path",{d:"M190,348.83H148.69a3.39,3.39,0,1,1,0-6.77H190a3.39,3.39,0,0,1,0,6.77Z",className:"face__element face__mouse",key:2}),r.createElement("path",{d:"M316.36,165.61c0-73.34-60-133.34-133.34-133.34H155c-73.34,0-133.34,60-133.34,133.34v39.1a95.22,95.22,0,0,0,5.72,32.49.8.8,0,0,0,1.55-.17l11.88-88.51a45.34,45.34,0,0,1,30.77-36.25,77.92,77.92,0,0,1,39.65-2h0l35.56,7.52a97.71,97.71,0,0,0,44.44,0l35.56-7.52h0a77.92,77.92,0,0,1,39.65,2,45.34,45.34,0,0,1,30.77,36.25L309.09,237a.8.8,0,0,0,1.55.17,95.22,95.22,0,0,0,5.72-32.49v-39.1Z",className:"face__element face__hair-base",key:3}),r.createElement("path",{d:"M315.12,204.25H227.84c-20.29,0-46.68,6.77-57.5,6.77h-.68c-11.5,0-37.21-6.77-57.51-6.77H24.88c-4.06,0-6.77,4.74-6.77,10.15s2.71,10.15,6.77,10.15h2A9.25,9.25,0,0,1,36.38,234v9.47A57.46,57.46,0,0,0,93.89,301h4.73a57.46,57.46,0,0,0,57.51-57.51V234.7h0a10.4,10.4,0,0,1,10.15-10.15H173a10.4,10.4,0,0,1,10.15,10.15h0v8.79A57.46,57.46,0,0,0,240.7,301h4.73a57.46,57.46,0,0,0,57.51-57.51V234.7h0a10.4,10.4,0,0,1,10.15-10.15h1.35c4.06,0,6.77-4.74,6.77-10.15S318.5,204.25,315.12,204.25Z",className:"face__glass-frame",key:4}),r.createElement("path",{d:"M290,232.92a17.3,17.3,0,0,0-3.72-9.21l-.1-.14c-.24-.29-.5-.58-.76-.86l-.45-.48-.48-.45c-.29-.27-.57-.52-.87-.77l-.13-.1a17.38,17.38,0,0,0-6.61-3.27L245,287.47h1.12a43.89,43.89,0,0,0,44-44V234.7A17.39,17.39,0,0,0,290,232.92Z",className:"face__element face__lens",key:5}),r.createElement("path",{d:"M274.27,217.19c-.58-.05-1.17-.08-1.77-.08H214.31c-.59,0-1.19,0-1.77.08a17.33,17.33,0,0,0-9.22,3.72l-.13.1c-.3.25-.58.5-.87.77l-.48.45-.45.48c-.26.28-.52.57-.76.86l-.1.14a17.77,17.77,0,0,0-3.81,11v8.79a43.89,43.89,0,0,0,44,44H245l31.89-69.83A18.23,18.23,0,0,0,274.27,217.19Z",className:"face__element face__lens",opacity:"0.9",key:6}),r.createElement("path",{d:"M142.51,232.92a17.3,17.3,0,0,0-3.72-9.21l-.1-.14c-.24-.29-.5-.58-.76-.86l-.45-.48-.48-.45c-.29-.27-.57-.52-.87-.77l-.13-.1a17.38,17.38,0,0,0-6.61-3.27L97.5,287.47h1.12a43.89,43.89,0,0,0,44-44V234.7A17.39,17.39,0,0,0,142.51,232.92Z",className:"face__element face__lens",key:7}),r.createElement("path",{d:"M126.78,217.19c-.58-.05-1.17-.08-1.77-.08H66.82c-.59,0-1.19,0-1.77.08a17.33,17.33,0,0,0-9.22,3.72l-.13.1c-.3.25-.58.5-.87.77l-.48.45-.45.48c-.26.28-.52.57-.76.86l-.1.14a17.77,17.77,0,0,0-3.81,11v8.79a43.89,43.89,0,0,0,44,44H97.5l31.89-69.83A18.23,18.23,0,0,0,126.78,217.19Z",className:"face__element face__lens",opacity:"0.9",key:8}),r.createElement("path",{d:"M28.66,121.5H49.1a15.43,15.43,0,0,0,9.56-3.25c16.3-12.78,43.11-9.68,43.11-9.68,12.17-67.56,58.81-69,106.17-61.81,43.9,6.57,90.14,32.05,104.45,40.43a1.45,1.45,0,0,0,2-2C303.92,67.1,259,2.68,152.47,10.1,28.66,18.73,28.66,121.5,28.66,121.5",className:"face__element face__hair-curl1",key:9}),r.createElement("path",{d:"M287,121.55H308.4S301.64,71,284,51.38c-17.59-19-52.77-26-52.77-26s-58.18-14-63.59,95.44c17.59,3.51,33.82-7.72,57.5-9.83,22.32-2,32.78-5.21,53.17,7.94A15.91,15.91,0,0,0,287,121.55Z",className:"face__element face__hair-curl3",key:10}),r.createElement("path",{d:"M102.3,108.94s1.35-77.61,62.92-78.3,83.21,11.88,83.21,11.88-72.62-1.29-67.2,78.41c-12.86,2.1-29.55-.81-47.81-5.7C115.83,111.73,102.3,108.94,102.3,108.94Z",className:"face__element face__hair-curl1",key:11}),r.createElement("path",{d:"M76.46,110.24s-22.2-92.73,84-107.9c85.4-12.43,137.87,43.25,151,59.24a1.34,1.34,0,0,1-1.56,2.09c-14.62-6.19-60-24.25-100.73-28.24-39.24-3.44-76.9,30.4-74.88,80C133.64,115.47,95.41,104,76.46,110.24Z",className:"face__element face__hair-curl2",key:12}),r.createElement("path",{d:"M149.29,4.43c-93.4,20-72.83,105.81-72.83,105.81,10.66-3.49,27.27-.81,39.92,1.57C104.13,80.17,93.83,22.39,149.29,4.43Z",className:"face__element face__hair-curl4",key:13}),r.createElement("path",{d:"M236.23,81.18C216.46,97,216.35,112.13,189.4,119.32c10.55-2.69,21.88-7.06,35.78-8.3,22.32-2,32.78-5.21,53.17,7.94a15.91,15.91,0,0,0,8.64,2.59H308.4s-.6-10-5.42-27.08C294,62.94,255.89,65.51,236.23,81.18Z",className:"face__element face__hair-curl1",key:14})])])}a.defaultProps={viewBox:"0 0 338 392",className:"svg-img",role:"img"},e.exports=a,a.default=a},klQ5:function(e,t,n){var r=n("emib"),a=n("TUPI"),o=n("rjfK").f,c=n("chL8").f,i=n("mhTz"),l=n("lb9j"),s=r.RegExp,u=s,f=s.prototype,p=/a/g,d=/a/g,m=new s(p)!==p;if(n("QPJK")&&(!m||n("96qb")((function(){return d[n("sOol")("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")})))){s=function(e,t){var n=this instanceof s,r=i(e),o=void 0===t;return!n&&r&&e.constructor===s&&o?e:a(m?new u(r&&!o?e.source:e,t):u((r=e instanceof s)?e.source:e,r&&o?l.call(e):t),n?this:f,s)};for(var h=function(e){e in s||o(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},y=c(u),b=0;y.length>b;)h(y[b++]);f.constructor=s,s.prototype=f,n("IYdN")(r,"RegExp",s)}n("to/b")("RegExp")},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("wZFJ"),n("HQhv"),n("n7j8"),n("1dPr"),n("JHok"),n("OeI1"),n("MIFh"),n("sC2a"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),n("m210"),n("4DPX"),n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK");var r,a,o,c,i=n("17x9"),l=n.n(i),s=n("8+s/"),u=n.n(s),f=n("ZhWT"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("MgzW"),y=n.n(h),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",_="href",A="http-equiv",C="innerHTML",k="itemprop",O="name",N="property",S="rel",I="src",M="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},H="defaultTitle",P="defer",x="encodeSpecialCharacters",L="onChangeClientState",D="titleTemplate",q=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),R=[T.NOSCRIPT,T.SCRIPT,T.STYLE],Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},U=function(e){var t=X(e,T.TITLE),n=X(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,H);return t||r||void 0},V=function(e){return X(e,L)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),c=0;c<o.length;c++){var i=o[c],l=i.toLowerCase();-1===t.indexOf(l)||n===S&&"canonical"===e[n].toLowerCase()||l===S&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(i)||i!==C&&i!==E&&i!==k||(n=i)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),c=0;c<o.length;c++){var i=o[c],l=y()({},r[i],a[i]);r[i]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,c=e.metaTags,i=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;le(T.BODY,r),le(T.HTML,a),ie(f,p);var d={baseTag:se(T.BASE,n),linkTags:se(T.LINK,o),metaTags:se(T.META,c),noscriptTags:se(T.NOSCRIPT,i),scriptTags:se(T.SCRIPT,s),styleTags:se(T.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},ce=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),le(T.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),c=Object.keys(t),i=0;i<c.length;i++){var l=c[i],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==c.join(",")&&n.setAttribute("data-react-helmet",c.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],c=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i=void 0===t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return c=t,n.isEqualNode(e)}))?a.splice(c,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ce(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",c=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(c?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,c=e.metaTags,i=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(T.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(v,a,r),link:pe(T.LINK,o,r),meta:pe(T.META,c,r),noscript:pe(T.NOSCRIPT,i,r),script:pe(T.SCRIPT,l,r),style:pe(T.STYLE,s,r),title:pe(T.TITLE,{title:f,titleAttributes:p},r)}},me=u()((function(e){return{baseTag:G([_,M],e),bodyAttributes:W(b,e),defer:X(e,P),encode:X(e,x),htmlAttributes:W(v,e),linkTags:Q(T.LINK,[S,_],e),metaTags:Q(T.META,[O,w,A,N,k],e),noscriptTags:Q(T.NOSCRIPT,[C],e),onChangeClientState:V(e),scriptTags:Q(T.SCRIPT,[I,C],e),styleTags:Q(T.STYLE,[E],e),title:U(e),titleAttributes:W(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,c=o=function(e){function t(){return F(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(r.type){case T.TITLE:return J({},a,((t={})[r.type]=c,t.titleAttributes=J({},o),t));case T.BODY:return J({},a,{bodyAttributes:J({},o)});case T.HTML:return J({},a,{htmlAttributes:J({},o)})}return J({},a,((n={})[r.type]=J({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(K(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);he.renderStatic=he.rewind}).call(this,n("yLpj"))},ug1A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Han Lee","description":"Product Designer, Illustrator, and Front-end Developer","author":"@hanlee"}}}}')},vrFN:function(e,t,n){"use strict";var r=n("ug1A"),a=n("q1tI"),o=n.n(a),c=n("qhky");function i(e){var t=e.description,n=e.lang,a=e.meta,i=e.keywords,l=e.title,s=r.data.site,u=t||s.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a),title:l,titleTemplate:"%s | "+s.siteMetadata.title})}i.defaultProps={lang:"en",keywords:[],meta:[]},t.a=i},wZFJ:function(e,t,n){"use strict";var r=n("P8UN"),a=n("Wadk")(3);r(r.P+r.F*!n("h/qr")([].some,!0),"Array",{some:function(e){return a(this,e,arguments[1])}})},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=de9aab0d16ddc6f831423e1ae434bae32ca3f294-2e17af731ddfeeb74be9.js.map