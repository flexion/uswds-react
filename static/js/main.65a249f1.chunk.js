(this["webpackJsonpuswds-react"]=this["webpackJsonpuswds-react"]||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/logo.5047b988.svg"},30:function(e,t,a){e.exports=a(47)},42:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),o=a(8),i=a(15),u=a(11),s=a(27),m=a(28),d=(a(42),a(25)),b=a.n(d),f=a(2),p=a(6),g=a(7),E=a.n(g),O=function(e){var t=e.className,a=e.children,n=Object(p.a)(e,["className","children"]);return c.a.createElement("div",Object.assign({className:E()(Object(f.a)({"grid-container":!0},t,t))},n),a)},v=function(e){var t,a=e.className,n=e.gap,r=e.children,l=Object(p.a)(e,["className","gap","children"]);return c.a.createElement("div",Object.assign({className:E()((t={"grid-row":!0},Object(f.a)(t,"grid-gap-".concat(n),n),Object(f.a)(t,a,a),t))},l),r)},j=function(e){var t,a=e.className,n=e.size,r=e.tablet,l=e.desktop,o=e.offset,i=e.children,u=Object(p.a)(e,["className","size","tablet","desktop","offset","children"]);return c.a.createElement("div",Object.assign({className:E()((t={},Object(f.a)(t,"grid-col-".concat(n),n),Object(f.a)(t,"tablet:grid-col-".concat(r),r),Object(f.a)(t,"desktop:grid-col-".concat(l),l),Object(f.a)(t,a,a),Object(f.a)(t,"grid-offset-".concat(o),o),t))},u),i)};j.defaultProps={size:"12"};var h=a(29),N=a(16),y={a:function(e){var t=e.to,a=e.children,n=(e.type,Object(p.a)(e,["to","children","type"]));return c.a.createElement("a",Object.assign({},n,{href:t,target:"_blank",rel:"noopener noreferrer"}),a)},b:function(e){e.to;var t=e.type,a=void 0===t?"button":t,n=Object(p.a)(e,["to","type"]);return c.a.createElement("button",Object.assign({type:a},n))},link:function(e){e.type;var t=Object(p.a)(e,["type"]);return c.a.createElement(i.b,t)}},k=function(e){var t,a=e.children,n=e.className,r=e.color,l=e.variant,o=e.raised,i=e.to,u=e.onClick,s=e.external,m=(e.forceExternalOff,e.fullwidth),d=e.type,b=Object(p.a)(e,["children","className","color","variant","raised","to","onClick","external","forceExternalOff","fullwidth","type"]),g=E()((t={"use-button":!0},Object(f.a)(t,"usa-button--".concat(r),r),Object(f.a)(t,"usa-button--".concat(r,"-").concat(l),l),Object(f.a)(t,"usa-button--fullwidth",m),Object(f.a)(t,"usa-button--raised",o),Object(f.a)(t,n,n),t)),O="string"===typeof i?i:"",v=u||d?y.b:s?y.a:y.link;return c.a.createElement(v,Object.assign({to:O,type:d,onClick:u},b,{className:g}),a)};k.defaultProps={color:"primary",forceExternalOff:!1};var w,x=k,C=a(21),_=a(22),A=a.n(_),z=a(26),B=a(12),P=function(e){return new Promise((function(t){return setTimeout(t,e)}))},S=Object(B.b)("counter/incrementAsync",function(){var e=Object(z.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(2e3);case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(B.c)({name:"counter",initialState:{loading:!1,value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:(w={},Object(f.a)(w,S.pending,(function(e,t){return Object(C.a)(Object(C.a)({},e),{},{pending:!0})})),Object(f.a)(w,S.fulfilled,(function(e,t){return{pending:!1,value:e.value+t.payload}})),w)}),J=I.actions,W=J.increment,D=J.decrement,M=J.incrementByAmount,R=function(e){return e.counter.value},T=function(e){return e.counter.pending},$=I.reducer;a(45);function q(){var e=Object(o.c)(R),t=Object(o.c)(T),a=Object(o.b)(),r=Object(n.useState)("2"),l=Object(h.a)(r,2),i=l[0],u=l[1];return c.a.createElement(O,null,c.a.createElement(v,{className:"Counter__header"},c.a.createElement(j,null,c.a.createElement(x,{"aria-label":"Increment value",variant:"link",onClick:function(){return a(W())}},c.a.createElement(N.a,{icon:"plus-circle"})),c.a.createElement("h2",{className:"Counter__count"},e),c.a.createElement(x,{"aria-label":"Decrement value",variant:"link",onClick:function(){return a(D())}},c.a.createElement(N.a,{icon:"minus-circle"})))),c.a.createElement(v,{className:"Counter__form"},c.a.createElement(j,{size:12},c.a.createElement("input",{className:"usa-input","aria-label":"Set increment amount",value:i,disabled:t,onChange:function(e){return u(e.target.value)}}))),c.a.createElement(v,{gap:4},c.a.createElement(j,{size:12,className:"text-center"},c.a.createElement("div",{className:"display-inline-block"},c.a.createElement("ul",{class:"usa-button-group usa-button-group--segmented"},c.a.createElement("li",{class:"usa-button-group__item"},c.a.createElement(x,{onClick:function(){return a(M(Number(i)||0))}},"Add Amount")),c.a.createElement("li",{class:"usa-button-group__item"},c.a.createElement(x,{className:!0,color:"accent-warm",disabled:t,onClick:function(){return a(S(Number(i)||0))}},t?c.a.createElement("span",null,c.a.createElement(N.a,{className:"margin-right-1 display-inline-block",icon:"spinner",spin:!0})," ","Pending..."):"Add Async")))))))}a(46);var F=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(O,null,c.a.createElement(v,null,c.a.createElement(j,{size:12,className:"text-center padding-y-6"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}))))),c.a.createElement(q,null))},G=Object(B.a)({reducer:{counter:$}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.b.add(s.a,m.a),l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,null,c.a.createElement(o.a,{store:G},c.a.createElement(F,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.65a249f1.chunk.js.map