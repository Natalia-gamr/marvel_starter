(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{209:function(e,t,c){},220:function(e,t,c){"use strict";c.r(t);var n=c(36),r=c(33),i=c(4),s=c(1),a=c(5),o=c(34),j=c(9),u=c(28),b=(c(209),c(0)),l=function(e,t,c){switch(e){case"waiting":return Object(b.jsx)(j.a,{});case"loading":return c?Object(b.jsx)(t,{}):Object(b.jsx)(j.a,{});case"confirmed":return Object(b.jsx)(t,{});case"error":return Object(b.jsx)(u.a,{});default:throw new Error("Unexpected process state")}},m=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],j=Object(s.useState)(!1),u=Object(i.a)(j,2),m=u[0],d=u[1],O=Object(s.useState)(0),f=Object(i.a)(O,2),h=f[0],x=f[1],p=Object(s.useState)(!1),_=Object(i.a)(p,2),v=_[0],g=_[1],y=Object(o.a)(),w=y.getAllComics,N=y.process,S=y.setProcess;Object(s.useEffect)((function(){k(h,!0)}),[]);var k=function(e,t){d(!t),w(e).then(A).then((function(){return S("confirmed")}))},A=function(e){var t=!1;e.length<8&&(t=!0),n([].concat(Object(r.a)(c),Object(r.a)(e))),d(!1),x(h+8),g(t)};return Object(b.jsxs)("div",{className:"comics__list",children:[l(N,(function(){return function(e){var t=e.map((function(e,t){return Object(b.jsx)("li",{className:"comics__item",children:Object(b.jsxs)(a.b,{to:"/comics/".concat(e.id),children:[Object(b.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:e.title}),Object(b.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)}));return Object(b.jsx)("ul",{className:"comics__grid",children:t})}(c)}),m),Object(b.jsx)("button",{disabled:m,style:{display:v?"none":"block"},className:"button button__main button__long",onClick:function(){return k(h)},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})},d=c(90);t.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(n.a,{children:[Object(b.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(b.jsx)("title",{children:"Comics page"})]}),Object(b.jsx)(d.a,{}),Object(b.jsx)(m,{})]})}},33:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(7);var r=c(6);function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=7.2de64b18.chunk.js.map