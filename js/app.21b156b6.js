(function(t){function e(e){for(var n,s,a=e[0],c=e[1],d=e[2],l=0,p=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-to-do/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var u=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"17dd":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=o("59ca"),i=(o("ea7b"),o("e71f"),o("2103")),s=o.n(i),a={apiKey:"AIzaSyAF0ixKrukUjN7XnETJieygHxGFXW0M6Bk",authDomain:"vue-to-do-4fa82.firebaseapp.com",databaseURL:"https://vue-to-do-4fa82.firebaseio.com",projectId:"vue-to-do-4fa82",storageBucket:"vue-to-do-4fa82.appspot.com",messagingSenderId:"620060105724",appId:"1:620060105724:web:a699ea67cf75948ab07079"},c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"app__container"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"app__loading"},[o("p",[t._v("Warming up")]),o("LoadingIcon")],1),o("router-view",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]})],1)])},d=[],u=(o("a481"),o("7f7f"),{functional:!0,render(t,e){const{_c:o,_v:n,data:r,children:i=[]}=e,{class:s,staticClass:a,style:c,staticStyle:d,attrs:u={},...l}=r;return o("svg",{class:[s,a],style:[c,d],attrs:Object.assign({viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"},u),...l},i.concat([o("defs",[o("linearGradient",{attrs:{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"}},[o("stop",{attrs:{"stop-color":"#fff","stop-opacity":"0",offset:"0%"}}),o("stop",{attrs:{"stop-color":"#fff","stop-opacity":".631",offset:"63.146%"}}),o("stop",{attrs:{"stop-color":"#fff",offset:"100%"}})])]),o("g",{attrs:{transform:"translate(1 1)",fill:"none","fill-rule":"evenodd"}},[o("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",stroke:"url(#a)","stroke-width":"2"}},[o("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"}})]),o("circle",{attrs:{fill:"#fff",cx:"36",cy:"18",r:"1"}},[o("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"}})])])]))}}),l={name:"App",components:{LoadingIcon:u},data:function(){return{loading:!0}},beforeCreate:function(){var t=this;r["auth"]().onAuthStateChanged((function(e){e&&(t.$store.commit({type:"setUser",user:{id:e.uid,email:e.email}}),"todos"!==t.$router.name&&t.$router.replace("todos")),t.loading=!1}))}},p=l,f=(o("5c0b"),o("2877")),m=Object(f["a"])(p,c,d,!1,null,null,null),h=m.exports,v=o("8c4f"),g=(o("7514"),o("6b54"),o("2f62"));n["a"].use(g["a"]);var w=new g["a"].Store({state:{user:null,todos:[]},mutations:{setUser:function(t,e){t.user=e.user},receiveTodos:function(t,e){t.todos=e.todos},addTodo:function(t,e){t.todos.push({id:Date.now().toString(),description:e.description,checked:!1})},checkTodo:function(t,e){var o=t.todos.find((function(t){return t.id===e.id}));o.checked=!o.checked},removeTodo:function(t,e){t.todos=t.todos.filter((function(t){return t.id!==e.id}))},editTodo:function(t,e){var o=t.todos.find((function(t){return t.id===e.id}));o.description=e.description}},plugins:[function(t){t.subscribe((function(t,e){"setUser"!==t.type&&ht.collection("todos").doc(e.user.id).set({data:e.todos})}))}]}),b=w,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todos"},[o("div",{staticClass:"header"},[o("h2",{staticClass:"header__title"},[t._v("Get things done")]),o("User")],1),o("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]},[o("p",[t._v("Loading todos...")])]),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"todos-container"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.orderedTodos.length,expression:"!orderedTodos.length"}],staticClass:"todos-empty"},[o("h3",[t._v("Don't you have anything to do?")]),o("p",[t._v("Nice, go read a book or something...")]),o("p",[t._v("Or you could add a todo below.")])]),t._l(t.orderedTodos,(function(t){return o("TodoItem",{key:t.id,attrs:{todo:t}})}))],2),o("div",{staticClass:"todos-add"},[o("form",{staticClass:"todos-add__controls"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",placeholder:"e.g. Eat that frog"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),o("Button",{staticClass:"todos-add__button",attrs:{disabled:!t.description,"on-click":t.addTodo,type:"submit"}},[t._v("Add todo")])],1)])])},y=[],k=o("75fc"),x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"todo-item--checked":t.todo.checked}},[o("div",[o("input",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"},{name:"model",rawName:"v-model",value:t.editDescription,expression:"editDescription"}],ref:"editDescription",attrs:{type:"text"},domProps:{value:t.editDescription},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:function(){return t.editTodo(t.todo.id)}()},blur:function(){return t.editTodo(t.todo.id)},input:function(e){e.target.composing||(t.editDescription=e.target.value)}}}),o("h4",{directives:[{name:"show",rawName:"v-show",value:!t.edit,expression:"!edit"}],staticClass:"todo-item__description",on:{click:t.enableEditTodo}},[t._v("\n      "+t._s(t.todo.description)+"\n    ")])]),o("div",{staticClass:"todo-item__actions"},[o("BinIcon",{directives:[{name:"show",rawName:"v-show",value:t.todo.checked,expression:"todo.checked"}],staticClass:"todo-item__actions__delete",on:{click:function(){return t.removeTodo(t.todo.id)}}}),o("CustomCheckbox",{attrs:{id:t.todo.id,checked:t.todo.checked},on:{checked:t.checkTodo}})],1)])},O=[],C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("input",{staticClass:"checkbox",attrs:{id:"checkbox-"+t.id,type:"checkbox",name:t.id},domProps:{checked:t.checked},on:{change:t.change}}),o("label",{staticClass:"custom-checkbox",attrs:{for:"checkbox-"+t.id}})])},T=[],j={name:"CustomCheckbox",props:{checked:{type:Boolean},id:{default:"0",type:String}},methods:{change:function(t){this.$emit("checked",t.target.name)}}},$=j,P=(o("90f3"),Object(f["a"])($,C,T,!1,null,"6d5895a2",null)),S=P.exports,A={functional:!0,render(t,e){const{_c:o,_v:n,data:r,children:i=[]}=e,{class:s,staticClass:a,style:c,staticStyle:d,attrs:u={},...l}=r;return o("svg",{class:[s,a],style:[c,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58 76"},u),...l},i.concat([o("path",{attrs:{d:"M48.002 16.873l-1.854 51a.682.682 0 01-.654.627H12.506c-.326 0-.642-.305-.654-.627l-1.854-51a3.5 3.5 0 00-6.996.254l1.855 51c.148 4.086 3.555 7.373 7.649 7.373h32.988c4.1 0 7.5-3.28 7.65-7.373l1.854-51a3.5 3.5 0 00-6.996-.254z"}}),o("path",{attrs:{d:"M26.5 27v34a2.5 2.5 0 005 0V27a2.5 2.5 0 00-5 0zm-11.499.073l1 34a2.5 2.5 0 004.998-.147l-1-34a2.5 2.5 0 00-4.998.147zm23-.146l-1 34a2.5 2.5 0 004.998.147l1-34A2.5 2.5 0 0038 26.927zM4 18h50a3.5 3.5 0 100-7H4a3.5 3.5 0 100 7z"}}),o("path",{attrs:{d:"M22.395 12.849l1.03-4.117c.147-.588.97-1.232 1.571-1.232h8.008c.601 0 1.424.643 1.571 1.232l1.03 4.117 6.79-1.698-1.029-4.117C40.44 3.33 36.818.5 33.004.5h-8.008c-3.814 0-7.437 2.832-8.362 6.534l-1.03 4.117 6.792 1.698z"}})]))}},N={name:"TodoItem",components:{CustomCheckbox:S,BinIcon:A},props:{todo:{default:function(){return[]},type:[Array,Object]}},data:function(){return{edit:!1,editDescription:this.todo.description}},methods:{checkTodo:function(t){this.$store.commit({type:"checkTodo",id:t})},removeTodo:function(t){this.$store.commit({type:"removeTodo",id:t})},enableEditTodo:function(){var t=this;this.edit=!0,this.$nextTick((function(){t.$refs.editDescription.focus()}))},editTodo:function(t){if(!this.editDescription)return this.$store.commit({type:"removeTodo",id:t});this.$store.commit({type:"editTodo",id:t,description:this.editDescription}),this.edit=!1}}},D=N,E=(o("c79a"),Object(f["a"])(D,x,O,!1,null,"b665c446",null)),B=E.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideShowAccount,expression:"hideShowAccount"}],staticClass:"user"},[o("div",{staticClass:"user__name",on:{click:t.toggleShowAccount}},[t._v(t._s(t.user.email))]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showAccount,expression:"showAccount"}],staticClass:"user__menu"},[o("Button",{attrs:{"on-click":t.signOut}},[t._v("Sign out")])],1)])},M=[],U=(o("8e6e"),o("ac6a"),o("456d"),o("bd86")),z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{on:{click:t.onClick}},[t._t("default",[t._v("Button")])],2)},L=[],W={name:"Button",props:{onClick:{type:Function,required:!0}}},q=W,F=(o("da83"),Object(f["a"])(q,z,L,!1,null,"71b4b24d",null)),G=F.exports;function H(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function J(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?H(o,!0).forEach((function(e){Object(U["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):H(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var K={name:"User",components:{Button:G},data:function(){return{showAccount:!1}},computed:J({},Object(g["b"])(["user"])),methods:{toggleShowAccount:function(){this.showAccount=!this.showAccount},hideShowAccount:function(){this.showAccount=!1},signOut:function(){var t=this;r["auth"]().signOut().then((function(){t.$store.commit({type:"setUser",user:null}),t.$router.replace("login")}))}}},X=K,Y=(o("dbfe"),Object(f["a"])(X,I,M,!1,null,"386dfb64",null)),R=Y.exports,V={name:"Todos",components:{TodoItem:B,Button:G,User:R},data:function(){return{description:"",loading:!0}},computed:{orderedTodos:function(){return this.$store.state.todos.reduce((function(t,e){return!1===e.checked?[e].concat(Object(k["a"])(t)):[].concat(Object(k["a"])(t),[e])}),[])}},mounted:function(){this.getTodos()},methods:{getTodos:function(){var t=this;ht.collection("todos").doc(this.$store.state.user.id).get().then((function(e){t.loading=!1;var o=e.data(),n=o.data;t.$store.commit({type:"receiveTodos",todos:n})}))},addTodo:function(t){t.preventDefault(),this.$store.commit({type:"addTodo",description:this.description}),this.description=""}}},Q=V,Z=(o("a2c7"),Object(f["a"])(Q,_,y,!1,null,"4da994da",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("h2",{staticClass:"login__title"},[t._v("Login to your account")]),o("form",[o("label",[t._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"e.g. joe@bananas.com",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),o("label",[t._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Your password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),o("p",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}]},[t._v(t._s(t.error))]),o("Button",{staticClass:"login__button",attrs:{"on-click":t.login,disabled:!t.email||!t.password}},[t._v("Login")]),o("p",{staticClass:"login__link"},[t._v("\n      Don't have an account?\n      "),o("router-link",{attrs:{to:"/signup"}},[t._v("Sign up here")])],1)],1)])},ot=[],nt={name:"Login",components:{Button:G},data:function(){return{email:"",password:"",error:""}},methods:{login:function(t){var e=this;t.preventDefault(),this.error="",r["auth"]().signInWithEmailAndPassword(this.email,this.password).then((function(){e.$router.replace("todos")})).catch((function(t){e.error=t.message}))}}},rt=nt,it=(o("5782"),Object(f["a"])(rt,et,ot,!1,null,"14e6b081",null)),st=it.exports,at=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("h2",{staticClass:"login__title"},[t._v("Sign up to get started")]),o("form",[o("label",[t._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"e.g. joe@bananas.com",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),o("label",[t._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Your password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),o("p",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}]},[t._v(t._s(t.error))]),o("Button",{staticClass:"login__button",attrs:{"on-click":t.signup,disabled:!t.email||!t.password}},[t._v("Sign up")]),o("p",{staticClass:"login__link"},[t._v("\n      Already got an account?\n      "),o("router-link",{attrs:{to:"/login"}},[t._v("Log in here")])],1)],1)])},ct=[],dt={name:"Signup",components:{Button:G},data:function(){return{email:"",password:"",error:""}},methods:{signup:function(t){var e=this;t.preventDefault(),r["auth"]().createUserWithEmailAndPassword(this.email,this.password).then((function(){e.$router.replace("todos")})).catch((function(t){e.error=t.message}))}}},ut=dt,lt=(o("aeaf"),Object(f["a"])(ut,at,ct,!1,null,"f637c6da",null)),pt=lt.exports;n["a"].use(v["a"]);var ft=new v["a"]({mode:"history",base:"/vue-to-do/",routes:[{path:"*",redirect:"login"},{path:"/",redirect:"login"},{path:"/login",name:"login",component:st},{path:"/signup",name:"signup",component:pt},{path:"/todos",name:"todos",component:tt,meta:{requiresAuth:!0}}]});ft.beforeEach((function(t,e,o){var n=b.state.user,r=t.matched.some((function(t){return t.meta.requiresAuth}));return r&&!n?o("login"):!r&&n?o("todos"):void o()}));var mt=ft;o.d(e,"db",(function(){return ht})),n["a"].use(s.a),n["a"].config.productionTip=!1,r["initializeApp"](a);var ht=r["firestore"]();new n["a"]({router:mt,store:b,render:function(t){return t(h)}}).$mount("#app")},5782:function(t,e,o){"use strict";var n=o("fc68"),r=o.n(n);r.a},"5c0b":function(t,e,o){"use strict";var n=o("e332"),r=o.n(n);r.a},"84a2":function(t,e,o){},"874f":function(t,e,o){},"90f3":function(t,e,o){"use strict";var n=o("d0a3"),r=o.n(n);r.a},a2c7:function(t,e,o){"use strict";var n=o("17dd"),r=o.n(n);r.a},aeaf:function(t,e,o){"use strict";var n=o("84a2"),r=o.n(n);r.a},c79a:function(t,e,o){"use strict";var n=o("874f"),r=o.n(n);r.a},d0a3:function(t,e,o){},d131:function(t,e,o){},da83:function(t,e,o){"use strict";var n=o("d131"),r=o.n(n);r.a},dbfe:function(t,e,o){"use strict";var n=o("f7df"),r=o.n(n);r.a},e332:function(t,e,o){},f7df:function(t,e,o){},fc68:function(t,e,o){}});
//# sourceMappingURL=app.21b156b6.js.map