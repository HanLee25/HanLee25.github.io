(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1/Ks":function(e,t,a){"use strict";a("EU/P")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},"2RVH":function(e,t,a){"use strict";a.r(t),a.d(t,"workQuery",(function(){return m}));var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("9eSz"),o=a.n(i),s=a("Bl7J"),u=a("vrFN"),c=a("d+8V");var m="2981924333";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return l.a.createElement(s.a,null,l.a.createElement(u.a,{keywords:["product designer","illustrator","UI designer","UX designer"],title:"Works"}),l.a.createElement("section",{className:"content-section"},l.a.createElement("header",{className:"content-section__header"},l.a.createElement("h2",{className:"h2"},"Works")),l.a.createElement(c.a,null),l.a.createElement("div",{className:"project-list"},t.map((function(e){var t=e.node.frontmatter;return l.a.createElement("article",{key:t.slug,className:"project-list__item"},l.a.createElement(r.Link,{to:t.slug,className:"button button--link"},l.a.createElement(o.a,{fluid:t.cover.childImageSharp.fluid,className:"project-list__thumbnail"})),l.a.createElement("div",{className:"project-list__detail"},l.a.createElement("header",{className:"project-list__header"},l.a.createElement("h3",{className:"project-list__title h4"},t.title),l.a.createElement("small",{className:"project-list__meta"},l.a.createElement("time",{dateTime:"{frontmatter.date}"},t.date)," ","at"," ",l.a.createElement("a",{href:t.teamUrl,target:"_blank",rel:"noreferrer"},t.team))),l.a.createElement("p",{className:"project-list__description"},t.excerpt),t.tags?l.a.createElement("ul",{className:"inline-list"},t.tags.map((function(e){return l.a.createElement("li",{key:e+"tag",className:"inline-list__item"},l.a.createElement("span",{className:"tag"},e))}))):null,l.a.createElement("div",null,l.a.createElement(r.Link,{to:t.slug,className:"text-sm text-gray-600"},"Read more"))))})))))}},EkpX:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"group":[{"fieldValue":"Front-end","totalCount":2},{"fieldValue":"HTML / SCSS","totalCount":1},{"fieldValue":"Interaction","totalCount":4},{"fieldValue":"JS","totalCount":1},{"fieldValue":"PWA","totalCount":1},{"fieldValue":"Persona","totalCount":2},{"fieldValue":"Prototype","totalCount":3},{"fieldValue":"REACT JS","totalCount":1},{"fieldValue":"RWD","totalCount":1},{"fieldValue":"Style guide","totalCount":2},{"fieldValue":"Styled components","totalCount":1},{"fieldValue":"UI design","totalCount":4},{"fieldValue":"UX research","totalCount":4},{"fieldValue":"User flow","totalCount":2},{"fieldValue":"Wireframe","totalCount":3},{"fieldValue":"iOS HIG","totalCount":3}]}}}')},HQAx:function(e,t,a){"use strict";var n=a("P8UN"),l=a("ewoU"),r=a("DFzH"),i=a("kiRH"),o=a("nONw"),s=a("ytzU");n(n.P,"Array",{flatMap:function(e){var t,a,n=r(this);return o(e),t=i(n.length),a=s(n,0),l(a,n,n,t,0,1,e,arguments[1]),a}}),a("Dq1/")("flatMap")},I17o:function(e,t,a){"use strict";var n=a("P8UN"),l=a("pTxf"),r=a("CL53"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);n(n.P+n.F*i,"String",{padEnd:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},"QzX/":function(e,t,a){"use strict";a("EU/P")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},Rw9D:function(e,t,a){"use strict";var n=a("P8UN"),l=a("/+AL");n(n.P+n.F*!a("h/qr")([].reduceRight,!0),"Array",{reduceRight:function(e){return l(this,e,arguments.length,arguments[1],!0)}})},"Y++M":function(e,t,a){"use strict";var n=a("DFzH"),l=a("dTG6"),r=a("kiRH");e.exports=function(e){for(var t=n(this),a=r(t.length),i=arguments.length,o=l(i>1?arguments[1]:void 0,a),s=i>2?arguments[2]:void 0,u=void 0===s?a:l(s,a);u>o;)t[o++]=e;return t}},YuTi:function(e,t,a){a("R48M"),e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"d+8V":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("EkpX"),o=function(){return i.data.allMarkdownRemark.group},s=a("LvDl");t.a=function(){var e=o();return l.a.createElement("ul",{className:"filter inline-list"},l.a.createElement("li",{className:"inline-list__item"},l.a.createElement(r.Link,{to:"/works",className:"button button--ghost button--sm",activeClassName:"button--active",partiallyActive:!0},"All"," ",l.a.createElement("span",{className:"badge"},l.a.createElement("span",{className:"badge__value"},"8")))),e.map((function(e){return l.a.createElement("li",{key:e.fieldValue,className:"inline-list__item"},l.a.createElement(r.Link,{to:"/tags/"+Object(s.kebabCase)(e.fieldValue),className:"button button--ghost button--sm",activeClassName:"button--active",partiallyActive:!0},e.fieldValue," ",l.a.createElement("span",{className:"badge"},l.a.createElement("span",{className:"badge__value"},e.totalCount))))})))}},ewoU:function(e,t,a){"use strict";var n=a("tuyV"),l=a("BjK0"),r=a("kiRH"),i=a("ot9L"),o=a("sOol")("isConcatSpreadable");e.exports=function e(t,a,s,u,c,m,d,f){for(var p,g,h=c,v=0,N=!!d&&i(d,f,3);v<u;){if(v in s){if(p=N?N(s[v],v,a):s[v],g=!1,l(p)&&(g=void 0!==(g=p[o])?!!g:n(p)),g&&m>0)h=e(t,a,p,r(p.length),h,m-1)-1;else{if(h>=9007199254740991)throw TypeError();t[h]=p}h++}v++}return h}},lizw:function(e,t,a){"use strict";var n=a("P8UN"),l=a("pTxf"),r=a("CL53"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);n(n.P+n.F*i,"String",{padStart:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},n0hJ:function(e,t,a){var n=a("P8UN");n(n.P,"Array",{fill:a("Y++M")}),a("Dq1/")("fill")},nMRu:function(e,t,a){"use strict";var n=a("P8UN"),l=a("DFzH"),r=a("kxs/");n(n.P+n.F*a("96qb")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=l(this),a=r(t);return"number"!=typeof a||isFinite(a)?t.toISOString():null}})},pTxf:function(e,t,a){var n=a("kiRH"),l=a("gd4K"),r=a("ap2Z");e.exports=function(e,t,a,i){var o=String(r(e)),s=o.length,u=void 0===a?" ":String(a),c=n(t);if(c<=s||""==u)return o;var m=c-s,d=l.call(u,Math.ceil(m/u.length));return d.length>m&&(d=d.slice(0,m)),i?d+o:o+d}}}]);
//# sourceMappingURL=component---src-pages-works-js-bc1f9b0566143808fe4b.js.map