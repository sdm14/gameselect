(this.webpackJsonpjetruby=this.webpackJsonpjetruby||[]).push([[0],[,,,,,,,,function(e,t,i){e.exports=i.p+"static/media/shapi.e630fe0d.png"},function(e,t,i){e.exports=i.p+"static/media/gazinski.194ac6a6.png"},function(e,t,i){e.exports=i.p+"static/media/ari.529366d0.png"},function(e,t,i){e.exports=i.p+"static/media/kabella.00d15043.png"},function(e,t,i){e.exports=i.p+"static/media/klasson.243915a0.png"},function(e,t,i){e.exports=i.p+"static/media/safonov.93a8d54f.png"},function(e,t,i){e.exports=i.p+"static/media/utkin.4714fd65.png"},function(e,t,i){e.exports=i.p+"static/media/wanderson.9288ce07.png"},,,function(e,t,i){e.exports=i.p+"static/media/logo.5f6bf064.png"},,function(e,t,i){e.exports=i(32)},,,,,,,,,,,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),c=i(3),r=i.n(c),s=i(18),o=i.n(s),m=i(1),l=i(16),d=i(2),u=i(8),p=i.n(u),g=i(9),f=i.n(g),h=i(10),w=i.n(h),E=i(11),S=i.n(E),_=i(12),O=i.n(_),b=i(13),v=i.n(b),N=i(14),j=i.n(N),I=i(15),x=i.n(I),k={item:[{id:1,img:p.a,isShow:!1},{id:2,img:v.a,isShow:!1},{id:3,img:O.a,isShow:!1},{id:4,img:w.a,isShow:!1},{id:5,img:S.a,isShow:!1},{id:6,img:f.a,isShow:!1},{id:7,img:j.a,isShow:!1},{id:8,img:x.a,isShow:!1},{id:9,img:S.a,isShow:!1},{id:10,img:j.a,isShow:!1},{id:11,img:p.a,isShow:!1},{id:12,img:f.a,isShow:!1},{id:13,img:x.a,isShow:!1},{id:14,img:v.a,isShow:!1},{id:15,img:w.a,isShow:!1},{id:16,img:O.a,isShow:!1}],selectedItem:[]},y=function(e){var t=Object(m.b)(),i=Object(m.c)((function(e){return e.selectedItem}));return setTimeout((function(){2===i.length&&(i[0].img===i[1].img&&t({type:"NEW_ROUND_WIN"}),t({type:"NEW_ROUND_LOSE"}))}),2e3),a.a.createElement("div",{className:"logo",onClick:function(){return n=e.el.img,a=e.el.id,void(i.length<2&&-1===i.findIndex((function(e){return e.id===a}))&&t(function(e,t){return{type:"CHOOSE_ITEM",img:e,id:t}}(n,a)));var n,a}},a.a.createElement("img",{src:e.el.isShow?e.el.img:o.a,className:e.el.isShow?"logo__back":"logo__front"}))},W=function(e){var t=Object(m.c)((function(e){return e.selectedItem})),i=t&&t[t.length-1];return a.a.createElement("div",{className:"item__photo__wrapper"},a.a.createElement("span",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0432\u0443\u0445 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0445 \u0444\u0443\u0442\u0431\u043e\u043b\u0438\u0441\u0442\u043e\u0432"),a.a.createElement("img",{src:i&&i.img}))};var D=function(e){var t=Object(m.c)((function(e){return e.item}));return a.a.createElement(a.a.Fragment,null,t.length>0?a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"item__wrapper"},t.map((function(e){return a.a.createElement(y,{key:e.id,el:e})}))),a.a.createElement("div",{className:"right__side"},a.a.createElement(W,null))):a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"win__message"},a.a.createElement("span",null,"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e, \u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438!"))))},R=(i(31),i(4)),U=Object(R.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHOOSE_ITEM":return Object(d.a)(Object(d.a)({},e),{},{item:e.item.map((function(e){if(e.id===t.id){var i=e;return i.isShow=!0,i}return e})),selectedItem:[].concat(Object(l.a)(e.selectedItem),[{id:t.id,img:t.img}])});case"NEW_ROUND_WIN":return Object(d.a)(Object(d.a)({},e),{},{item:Object(l.a)(e.item.filter((function(e){return!e.isShow}))),selectedItem:[]});case"NEW_ROUND_LOSE":return Object(d.a)(Object(d.a)({},e),{},{item:e.item.map((function(e){var t=e;return t.isShow=!1,t})),selectedItem:[]});default:return e}}));window.store=U,r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m.a,{store:U},a.a.createElement(D,null))),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.007ef305.chunk.js.map