(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[8],{218:function(e,t,c){"use strict";c.r(t);var s=c(4),n=c(2),a=c(1),r=c(34),i=c(90),l=c(49),o=c(0);t.default=function(e){var t=e.Component,c=e.dataType,j=Object(n.g)().id,u=Object(a.useState)(null),b=Object(s.a)(u,2),d=b[0],O=b[1],h=Object(r.a)(),m=h.getComic,f=h.getCharacter,p=h.clearError,x=h.process,_=h.setProcess;Object(a.useEffect)((function(){k()}),[j]);var k=function(){switch(p(),c){case"comic":m(j).then(v).then((function(){return _("confirmed")}));break;case"character":f(j).then(v).then((function(){return _("confirmed")}))}},v=function(e){O(e)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.a,{}),Object(l.a)(x,t,d)]})}},49:function(e,t,c){"use strict";var s=c(28),n=(c(51),c(0)),a=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsxs)("div",{className:"pulse skeleton__header",children:[Object(n.jsx)("div",{className:"pulse skeleton__circle"}),Object(n.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"})]})]})},r=c(9);t.a=function(e,t,c){switch(e){case"waiting":return Object(n.jsx)(a,{});case"loading":return Object(n.jsx)(r.a,{});case"confirmed":return Object(n.jsx)(t,{data:c});case"error":return Object(n.jsx)(s.a,{});default:throw new Error("Unexpected process state")}}},51:function(e,t,c){}}]);
//# sourceMappingURL=8.6da2762c.chunk.js.map