(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1/Ks":function(e,t,r){"use strict";r("EU/P")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},"2RVH":function(e,t,r){"use strict";r.r(t),r.d(t,"workQuery",(function(){return f}));var n=r("q1tI"),a=r.n(n),i=r("Wbzz"),l=r("LvDl"),c=r("9eSz"),s=r.n(c),o=r("Bl7J"),u=r("vrFN");var f="2981924333";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return a.a.createElement(o.a,null,a.a.createElement(u.a,{keywords:["product designer","illustrator","UI designer","UX designer"],title:"Works"}),a.a.createElement("section",{className:"content-section"},a.a.createElement("header",{className:"content-section__header"},a.a.createElement("h2",{className:"h2"},"Works")),a.a.createElement("div",{className:"project-list"},t.map((function(e){var t=e.node.frontmatter;return a.a.createElement("article",{key:t.slug,className:"project-list__item"},a.a.createElement(i.Link,{to:t.slug,className:"button button--link"},a.a.createElement(s.a,{fluid:t.cover.childImageSharp.fluid,className:"project-list__thumbnail"})),a.a.createElement("div",{className:"project-list__detail"},a.a.createElement("header",{className:"project-list__header"},a.a.createElement("h3",{className:"project-list__title h4"},t.title),a.a.createElement("small",{className:"project-list__meta"},a.a.createElement("time",{dateTime:"{frontmatter.date}"},t.date)," ","at"," ",a.a.createElement("a",{href:t.teamUrl,target:"_blank",rel:"noreferrer"},t.team))),a.a.createElement("p",{className:"project-list__description"},t.excerpt),t.tags?a.a.createElement("ul",{className:"tag-list"},t.tags.map((function(e){return a.a.createElement("li",{key:e+"tag",className:"tag-list__item"},a.a.createElement(i.Link,{to:"/tags/"+Object(l.kebabCase)(e)+"/",className:"tag"},e))}))):null,a.a.createElement("div",null,a.a.createElement(i.Link,{to:t.slug,className:"text-sm text-gray-600"},"Read more"))))})))))}},HQAx:function(e,t,r){"use strict";var n=r("P8UN"),a=r("ewoU"),i=r("DFzH"),l=r("kiRH"),c=r("nONw"),s=r("ytzU");n(n.P,"Array",{flatMap:function(e){var t,r,n=i(this);return c(e),t=l(n.length),r=s(n,0),a(r,n,n,t,0,1,e,arguments[1]),r}}),r("Dq1/")("flatMap")},I17o:function(e,t,r){"use strict";var n=r("P8UN"),a=r("pTxf"),i=r("CL53"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);n(n.P+n.F*l,"String",{padEnd:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},"QzX/":function(e,t,r){"use strict";r("EU/P")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},Rw9D:function(e,t,r){"use strict";var n=r("P8UN"),a=r("/+AL");n(n.P+n.F*!r("h/qr")([].reduceRight,!0),"Array",{reduceRight:function(e){return a(this,e,arguments.length,arguments[1],!0)}})},"Y++M":function(e,t,r){"use strict";var n=r("DFzH"),a=r("dTG6"),i=r("kiRH");e.exports=function(e){for(var t=n(this),r=i(t.length),l=arguments.length,c=a(l>1?arguments[1]:void 0,r),s=l>2?arguments[2]:void 0,o=void 0===s?r:a(s,r);o>c;)t[c++]=e;return t}},YuTi:function(e,t,r){r("R48M"),e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ewoU:function(e,t,r){"use strict";var n=r("tuyV"),a=r("BjK0"),i=r("kiRH"),l=r("ot9L"),c=r("sOol")("isConcatSpreadable");e.exports=function e(t,r,s,o,u,f,m,d){for(var p,h,g=u,v=0,N=!!m&&l(m,d,3);v<o;){if(v in s){if(p=N?N(s[v],v,r):s[v],h=!1,a(p)&&(h=void 0!==(h=p[c])?!!h:n(p)),h&&f>0)g=e(t,r,p,i(p.length),g,f-1)-1;else{if(g>=9007199254740991)throw TypeError();t[g]=p}g++}v++}return g}},lizw:function(e,t,r){"use strict";var n=r("P8UN"),a=r("pTxf"),i=r("CL53"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);n(n.P+n.F*l,"String",{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},n0hJ:function(e,t,r){var n=r("P8UN");n(n.P,"Array",{fill:r("Y++M")}),r("Dq1/")("fill")},nMRu:function(e,t,r){"use strict";var n=r("P8UN"),a=r("DFzH"),i=r("kxs/");n(n.P+n.F*r("96qb")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=a(this),r=i(t);return"number"!=typeof r||isFinite(r)?t.toISOString():null}})},pTxf:function(e,t,r){var n=r("kiRH"),a=r("gd4K"),i=r("ap2Z");e.exports=function(e,t,r,l){var c=String(i(e)),s=c.length,o=void 0===r?" ":String(r),u=n(t);if(u<=s||""==o)return c;var f=u-s,m=a.call(o,Math.ceil(f/o.length));return m.length>f&&(m=m.slice(0,f)),l?m+c:c+m}}}]);
//# sourceMappingURL=component---src-pages-works-js-bda4a8f6699f635a4dec.js.map