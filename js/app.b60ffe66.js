(function(e){function t(t){for(var n,i,a=t[0],s=t[1],d=t[2],u=0,f=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},c=[];function i(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9c4c5747"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=i(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(u);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",d.name="ChunkLoadError",d.type=n,d.request=c,o[1](d)}r[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-to-do/",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=d;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"3de6":function(e,t,o){},4599:function(e,t,o){"use strict";var n=o("9dbd"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"app__container"},[o("router-view"),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[e._v("Todos")]),o("router-link",{attrs:{to:"/about"}},[e._v("Settings")])],1)],1)])},c=[],i=(o("5c0b"),o("2877")),a={},s=Object(i["a"])(a,r,c,!1,null,null,null),d=s.exports,u=o("8c4f"),l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Todo")},f=[],p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"todo"},[o("h1",{staticClass:"todo-title"},[e._v("Get shit done")]),o("div",{staticClass:"todo-container"},e._l(e.orderedTodos,(function(e){return o("TodoItem",{key:e.id,attrs:{todo:e}})})),1),o("div",{staticClass:"todo-add"},[o("div",{staticClass:"todo-add__controls"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{type:"text",placeholder:"e.g. eat that frog"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),o("button",{attrs:{disabled:!e.description},on:{click:e.addTodo}},[e._v("Add todo")])])])])},h=[],m=o("75fc"),v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"todo",class:{"todo--checked":e.todo.checked}},[o("h4",{staticClass:"todo__description"},[e._v(e._s(e.todo.description))]),o("CustomCheckbox",{attrs:{id:e.todo.id,checked:e.todo.checked},on:{checked:e.checkTodo}})],1)},b=[],g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("input",{staticClass:"checkbox",attrs:{id:"checkbox-"+e.id,type:"checkbox",name:e.id},domProps:{checked:e.checked},on:{change:e.change}}),o("label",{staticClass:"custom-checkbox",attrs:{for:"checkbox-"+e.id}})])},k=[],y=(o("7f7f"),{name:"CustomCheckbox",props:{checked:{type:Boolean},id:{default:"0",type:String}},methods:{change:function(e){this.$emit("checked",e.target.name)}}}),_=y,w=(o("6a52"),Object(i["a"])(_,g,k,!1,null,"3651e2a0",null)),O=w.exports,T={name:"TodoItem",components:{CustomCheckbox:O},props:{todo:{default:function(){return[]},type:[Array,Object]}},methods:{checkTodo:function(e){this.$store.commit({type:"checkTodo",id:e})}}},j=T,x=(o("ed83"),Object(i["a"])(j,v,b,!1,null,"4b5a89f5",null)),C=x.exports,S={name:"Todo",components:{TodoItem:C},data:function(){return{description:""}},computed:{orderedTodos:function(){return this.$store.state.todos.reduce((function(e,t){return!1===t.checked?[t].concat(Object(m["a"])(e)):[].concat(Object(m["a"])(e),[t])}),[])}},methods:{addTodo:function(){this.$store.commit({type:"addTodo",description:this.description}),this.description=""}}},P=S,$=(o("4599"),Object(i["a"])(P,p,h,!1,null,"eb0aa004",null)),E=$.exports,A={name:"Home",components:{Todo:E}},N=A,I=Object(i["a"])(N,l,f,!1,null,null,null),J=I.exports;n["a"].use(u["a"]);var M=new u["a"]({mode:"history",base:"/vue-to-do/",routes:[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]}),q=(o("7514"),o("6b54"),o("2f62"));n["a"].use(q["a"]);var B=new q["a"].Store({state:{todos:JSON.parse(localStorage.getItem("app_todos"))||[]},mutations:{addTodo:function(e,t){e.todos.push({id:Date.now().toString(),description:t.description,checked:!1})},checkTodo:function(e,t){var o=e.todos.find((function(e){return e.id===t.id}));o.checked=!o.checked}},plugins:[function(e){e.subscribe((function(e,t){localStorage.setItem("app_todos",JSON.stringify(t.todos))}))}]}),F=o("9483");Object(F["a"])("".concat("/vue-to-do/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,new n["a"]({router:M,store:B,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var n=o("e332"),r=o.n(n);r.a},"6a52":function(e,t,o){"use strict";var n=o("3de6"),r=o.n(n);r.a},"9dbd":function(e,t,o){},e2f8:function(e,t,o){},e332:function(e,t,o){},ed83:function(e,t,o){"use strict";var n=o("e2f8"),r=o.n(n);r.a}});
//# sourceMappingURL=app.b60ffe66.js.map