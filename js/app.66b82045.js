(function(t){function e(e){for(var n,a,s=e[0],c=e[1],d=e[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},r=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-to-do/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0732":function(t,e,o){"use strict";var n=o("5b50"),i=o.n(n);i.a},"0a8b":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),i=o("59ca"),r=(o("ea7b"),o("66ce"),o("2103")),a=o.n(r),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"app__container"},[o("router-view")],1)])},c=[],d=(o("5c0b"),o("2877")),u={},l=Object(d["a"])(u,s,c,!1,null,null,null),p=l.exports,f=o("8c4f"),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todos"},[o("div",{staticClass:"header"},[o("h2",{staticClass:"header__title"},[t._v("Get things done")]),o("User")],1),o("div",{staticClass:"todos-container"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.orderedTodos.length,expression:"!orderedTodos.length"}],staticClass:"todos-empty"},[o("h3",[t._v("Don't you have anything to do?")]),o("p",[t._v("Nice, go read a book or something...")]),o("p",[t._v("Or you could add a todo below.")])]),t._l(t.orderedTodos,(function(t){return o("TodoItem",{key:t.id,attrs:{todo:t}})}))],2),o("div",{staticClass:"todos-add"},[o("form",{staticClass:"todos-add__controls"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",placeholder:"e.g. Eat that frog"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),o("Button",{staticClass:"todos-add__button",attrs:{disabled:!t.description,"on-click":t.addTodo,type:"submit"}},[t._v("Add todo")])],1)])])},m=[],v=o("75fc"),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"todo-item--checked":t.todo.checked}},[o("div",[o("input",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"},{name:"model",rawName:"v-model",value:t.editDescription,expression:"editDescription"}],ref:"editDescription",attrs:{type:"text"},domProps:{value:t.editDescription},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:function(){return t.editTodo(t.todo.id)}()},blur:function(){return t.editTodo(t.todo.id)},input:function(e){e.target.composing||(t.editDescription=e.target.value)}}}),o("h4",{directives:[{name:"show",rawName:"v-show",value:!t.edit,expression:"!edit"}],staticClass:"todo-item__description",on:{click:t.enableEditTodo}},[t._v("\n      "+t._s(t.todo.description)+"\n    ")])]),o("div",{staticClass:"todo-item__actions"},[o("BinIcon",{directives:[{name:"show",rawName:"v-show",value:t.todo.checked,expression:"todo.checked"}],staticClass:"todo-item__actions__delete",on:{click:function(){return t.removeTodo(t.todo.id)}}}),o("CustomCheckbox",{attrs:{id:t.todo.id,checked:t.todo.checked},on:{checked:t.checkTodo}})],1)])},b=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("input",{staticClass:"checkbox",attrs:{id:"checkbox-"+t.id,type:"checkbox",name:t.id},domProps:{checked:t.checked},on:{change:t.change}}),o("label",{staticClass:"custom-checkbox",attrs:{for:"checkbox-"+t.id}})])},_=[],k=(o("7f7f"),{name:"CustomCheckbox",props:{checked:{type:Boolean},id:{default:"0",type:String}},methods:{change:function(t){this.$emit("checked",t.target.name)}}}),y=k,x=(o("90f3"),Object(d["a"])(y,w,_,!1,null,"6d5895a2",null)),C=x.exports,T={functional:!0,render(t,e){const{_c:o,_v:n,data:i,children:r=[]}=e,{class:a,staticClass:s,style:c,staticStyle:d,attrs:u={},...l}=i;return o("svg",{class:[a,s],style:[c,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58 76"},u),...l},r.concat([o("path",{attrs:{d:"M48.002 16.873l-1.854 51a.682.682 0 01-.654.627H12.506c-.326 0-.642-.305-.654-.627l-1.854-51a3.5 3.5 0 00-6.996.254l1.855 51c.148 4.086 3.555 7.373 7.649 7.373h32.988c4.1 0 7.5-3.28 7.65-7.373l1.854-51a3.5 3.5 0 00-6.996-.254z"}}),o("path",{attrs:{d:"M26.5 27v34a2.5 2.5 0 005 0V27a2.5 2.5 0 00-5 0zm-11.499.073l1 34a2.5 2.5 0 004.998-.147l-1-34a2.5 2.5 0 00-4.998.147zm23-.146l-1 34a2.5 2.5 0 004.998.147l1-34A2.5 2.5 0 0038 26.927zM4 18h50a3.5 3.5 0 100-7H4a3.5 3.5 0 100 7z"}}),o("path",{attrs:{d:"M22.395 12.849l1.03-4.117c.147-.588.97-1.232 1.571-1.232h8.008c.601 0 1.424.643 1.571 1.232l1.03 4.117 6.79-1.698-1.029-4.117C40.44 3.33 36.818.5 33.004.5h-8.008c-3.814 0-7.437 2.832-8.362 6.534l-1.03 4.117 6.792 1.698z"}})]))}},O={name:"TodoItem",components:{CustomCheckbox:C,BinIcon:T},props:{todo:{default:function(){return[]},type:[Array,Object]}},data:function(){return{edit:!1,editDescription:this.todo.description}},methods:{checkTodo:function(t){this.$store.commit({type:"checkTodo",id:t})},removeTodo:function(t){this.$store.commit({type:"removeTodo",id:t})},enableEditTodo:function(){var t=this;this.edit=!0,this.$nextTick((function(){t.$refs.editDescription.focus()}))},editTodo:function(t){this.$store.commit({type:"editTodo",id:t,description:this.editDescription}),this.edit=!1}}},j=O,S=(o("e1a4"),Object(d["a"])(j,g,b,!1,null,"0f2c4de9",null)),A=S.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideShowAccount,expression:"hideShowAccount"}],staticClass:"user"},[o("div",{staticClass:"user__name",on:{click:t.toggleShowAccount}},[t._v("info@flatsteve.com")]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showAccount,expression:"showAccount"}],staticClass:"user__menu"},[o("Button",{attrs:{"on-click":t.signOut}},[t._v("Sign out")])],1)])},$=[],E=(o("a481"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{on:{click:t.onClick}},[t._t("default",[t._v("Button")])],2)}),P=[],B={name:"Button",props:{onClick:{type:Function,required:!0}}},D=B,I=(o("da83"),Object(d["a"])(D,E,P,!1,null,"71b4b24d",null)),M=I.exports,z={name:"User",components:{Button:M},data:function(){return{showAccount:!1}},methods:{toggleShowAccount:function(){this.showAccount=!this.showAccount},hideShowAccount:function(){this.showAccount=!1},signOut:function(){var t=this;i["auth"]().signOut().then((function(){t.$router.replace("login")}))}}},U=z,F=(o("0732"),Object(d["a"])(U,N,$,!1,null,"4d4b7ea0",null)),J=F.exports,L={name:"Todos",components:{TodoItem:A,Button:M,User:J},data:function(){return{description:""}},computed:{orderedTodos:function(){return this.$store.state.todos.reduce((function(t,e){return!1===e.checked?[e].concat(Object(v["a"])(t)):[].concat(Object(v["a"])(t),[e])}),[])}},methods:{addTodo:function(t){t.preventDefault(),this.$store.commit({type:"addTodo",description:this.description}),this.description=""}}},q=L,H=(o("8ef4"),Object(d["a"])(q,h,m,!1,null,"4a0f2c16",null)),W=H.exports,G=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("h2",{staticClass:"login__title"},[t._v("Login to your account")]),o("form",[o("label",[t._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"e.g. joe@bananas.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),o("label",[t._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Your password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),o("p",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}]},[t._v(t._s(t.error))]),o("Button",{staticClass:"login__button",attrs:{"on-click":t.login,disabled:!t.email||!t.password}},[t._v("Login")]),o("p",{staticClass:"login__link"},[t._v("\n      Don't have an account?\n      "),o("router-link",{attrs:{to:"/signup"}},[t._v("Sign up here")])],1)],1)])},K=[],X={name:"Login",components:{Button:M},data:function(){return{email:"",password:"",error:""}},methods:{login:function(t){var e=this;t.preventDefault(),this.error="",i["auth"]().signInWithEmailAndPassword(this.email,this.password).then((function(){e.$router.replace("todos")})).catch((function(t){e.error=t.message}))}}},Y=X,R=(o("b0cf"),Object(d["a"])(Y,G,K,!1,null,"33ee7724",null)),V=R.exports,Q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("h2",{staticClass:"login__title"},[t._v("Sign up to get started")]),o("form",[o("label",[t._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"e.g. joe@bananas.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),o("label",[t._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Your password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),o("p",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}]},[t._v(t._s(t.error))]),o("Button",{staticClass:"login__button",attrs:{"on-click":t.signup,disabled:!t.email||!t.password}},[t._v("Sign up")]),o("p",{staticClass:"login__link"},[t._v("\n      Already got an account?\n      "),o("router-link",{attrs:{to:"/login"}},[t._v("Log in here")])],1)],1)])},Z=[],tt={name:"Signup",components:{Button:M},data:function(){return{email:"",password:"",error:""}},methods:{signup:function(t){var e=this;t.preventDefault(),i["auth"]().createUserWithEmailAndPassword(this.email,this.password).then((function(){e.$router.replace("todos")})).catch((function(t){e.error=t.message}))}}},et=tt,ot=(o("74d2"),Object(d["a"])(et,Q,Z,!1,null,"411a7c80",null)),nt=ot.exports;n["a"].use(f["a"]);var it=new f["a"]({mode:"history",base:"/vue-to-do/",routes:[{path:"*",redirect:"login"},{path:"/",redirect:"login"},{path:"/login",name:"login",component:V},{path:"/signup",name:"signup",component:nt},{path:"/todos",name:"todos",component:W,meta:{requiresAuth:!0}}]});it.beforeEach((function(t,e,o){var n=i["auth"]().currentUser,r=t.matched.some((function(t){return t.meta.requiresAuth}));return r&&!n?o("login"):!r&&n?o("todo"):void o()}));var rt=it,at=(o("7514"),o("6b54"),o("2f62"));n["a"].use(at["a"]);var st,ct=new at["a"].Store({state:{todos:JSON.parse(localStorage.getItem("app_todos"))||[]},mutations:{addTodo:function(t,e){t.todos.push({id:Date.now().toString(),description:e.description,checked:!1})},checkTodo:function(t,e){var o=t.todos.find((function(t){return t.id===e.id}));o.checked=!o.checked},removeTodo:function(t,e){t.todos=t.todos.filter((function(t){return t.id!==e.id}))},editTodo:function(t,e){var o=t.todos.find((function(t){return t.id===e.id}));o.description=e.description}},plugins:[function(t){t.subscribe((function(t,e){localStorage.setItem("app_todos",JSON.stringify(e.todos))}))}]}),dt=o("9483");Object(dt["a"])("".concat("/vue-to-do/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].use(a.a),n["a"].config.productionTip=!1;var ut={apiKey:"AIzaSyAF0ixKrukUjN7XnETJieygHxGFXW0M6Bk",authDomain:"vue-to-do-4fa82.firebaseapp.com",databaseURL:"https://vue-to-do-4fa82.firebaseio.com",projectId:"vue-to-do-4fa82",storageBucket:"vue-to-do-4fa82.appspot.com",messagingSenderId:"620060105724",appId:"1:620060105724:web:a699ea67cf75948ab07079"};i["initializeApp"](ut),i["auth"]().onAuthStateChanged((function(){st||(st=new n["a"]({router:rt,store:ct,render:function(t){return t(p)}}).$mount("#app"))}))},"5b50":function(t,e,o){},"5c0b":function(t,e,o){"use strict";var n=o("e332"),i=o.n(n);i.a},"72c1":function(t,e,o){},"74d2":function(t,e,o){"use strict";var n=o("bbb5"),i=o.n(n);i.a},"802e":function(t,e,o){},"8ef4":function(t,e,o){"use strict";var n=o("0a8b"),i=o.n(n);i.a},"90f3":function(t,e,o){"use strict";var n=o("d0a3"),i=o.n(n);i.a},b0cf:function(t,e,o){"use strict";var n=o("72c1"),i=o.n(n);i.a},bbb5:function(t,e,o){},d0a3:function(t,e,o){},d131:function(t,e,o){},da83:function(t,e,o){"use strict";var n=o("d131"),i=o.n(n);i.a},e1a4:function(t,e,o){"use strict";var n=o("802e"),i=o.n(n);i.a},e332:function(t,e,o){}});
//# sourceMappingURL=app.66b82045.js.map