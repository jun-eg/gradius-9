(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{460:function(o,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/handler",function(){return n(7950)}])},7950:function(o,e,n){"use strict";n.r(e);var t=n(5893),r=n(7294),s=n(1290),a=n(3074),l=n.n(a);let c=()=>{let[o,e]=(0,r.useState)(!1),[n,a]=(0,r.useState)(!1),[c,d]=(0,r.useState)(!1),[i,u]=(0,r.useState)(!1),[_,h]=(0,r.useState)(!1),w=o=>{let{id:n}=o.target;console.log("".concat(n,"down")),"up"===n?e(!0):"left"===n?a(!0):"right"===n?d(!0):"down"===n?u(!0):console.log("error")},p=o=>{let{id:n}=o.target;console.log("".concat(n,"up")),"up"===n?e(!1):"left"===n?a(!1):"right"===n?d(!1):"down"===n?u(!1):console.log("error")},g=o=>{let{id:e}=o.target;console.log("".concat(e,"down")),"shoot"===e?(h(!0),f(!0)):console.log("error")},x=o=>{let{id:e}=o.target;console.log("".concat(e,"up")),"shoot"===e?(h(!1),f(!1)):console.log("error")},f=async o=>{let e=await s.x.handler.$get();s.x.shoot.$post({body:{x:e.x,y:e.y,isShooting:o}})};return(0,r.useEffect)(()=>{let e=()=>{o&&s.x.handler.$post({body:{key:"ArrowUp"}}),n&&s.x.handler.$post({body:{key:"ArrowLeft"}}),c&&s.x.handler.$post({body:{key:"ArrowRight"}}),i&&s.x.handler.$post({body:{key:"ArrowDown"}}),console.log(o,n,c,i,_)},t=setInterval(()=>{e()},100);return()=>clearInterval(t)},[o,n,c,i,_]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsxs)("div",{className:l().cross_key_container,onMouseDown:w,onMouseUp:p,children:[(0,t.jsx)("div",{id:"left",className:l().arrowButton,children:"←"}),(0,t.jsxs)("div",{className:l().up_down_container,children:[(0,t.jsx)("div",{id:"up",className:l().arrowButton,children:"↑"}),(0,t.jsx)("div",{id:"down",className:l().arrowButton,children:"↓"})]}),(0,t.jsx)("div",{id:"right",className:l().arrowButton,children:"→"})]}),(0,t.jsx)("div",{id:"shoot",className:l().arrowButton,onMouseDown:g,onMouseUp:x,children:"shoot"})]})})};e.default=c},3074:function(o){o.exports={container:"handler_container__4ZZ_A",cross_key_container:"handler_cross_key_container__kwltn",up_down_container:"handler_up_down_container__ZHu6D",arrowButton:"handler_arrowButton__7vtCo"}}},function(o){o.O(0,[774,888,179],function(){return o(o.s=460)}),_N_E=o.O()}]);