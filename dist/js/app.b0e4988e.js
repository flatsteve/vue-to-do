(function(t){function e(e){for(var n,i,r=e[0],c=e[1],d=e[2],u=0,p=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,d||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-to-do/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0a31":function(t,e,o){"use strict";var n=o("934d"),a=o.n(n);a.a},"0ed8":function(t,e,o){"use strict";var n=o("ef5a"),a=o.n(n);a.a},"15c2":function(t,e,o){},"17ca":function(t,e,o){"use strict";var n=o("8ebe"),a=o.n(n);a.a},"1a72":function(t,e,o){},3418:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),a=o("59ca"),s=(o("ea7b"),o("e71f"),o("2103")),i=o.n(s),r={apiKey:"AIzaSyAF0ixKrukUjN7XnETJieygHxGFXW0M6Bk",authDomain:"vue-to-do-4fa82.firebaseapp.com",databaseURL:"https://vue-to-do-4fa82.firebaseio.com",projectId:"vue-to-do-4fa82",storageBucket:"vue-to-do-4fa82.appspot.com",messagingSenderId:"620060105724",appId:"1:620060105724:web:a699ea67cf75948ab07079"},c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"app__container"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"app__loading"},[o("p",[t._v("Warming up")]),o("LoadingIcon")],1),o("router-view",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]})],1)])},d=[],l=(o("a481"),o("7f7f"),{functional:!0,render(t,e){const{_c:o,_v:n,data:a,children:s=[]}=e,{class:i,staticClass:r,style:c,staticStyle:d,attrs:l={},...u}=a;return o("svg",{class:[i,r],style:[c,d],attrs:Object.assign({viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"},l),...u},s.concat([o("g",{attrs:{transform:"translate(1 1)","stroke-width":"2",fill:"none","fill-rule":"evenodd"}},[o("circle",{attrs:{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}}),o("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[o("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})])])]))}}),u={name:"App",components:{LoadingIcon:l},data:function(){return{loading:!0}},beforeCreate:function(){var t=this;a["auth"]().onAuthStateChanged((function(e){e&&(t.$store.commit({type:"setUser",user:{id:e.uid,email:e.email}}),"todos"!==t.$router.name&&t.$router.replace("todos")),t.loading=!1}))}},p=u,f=(o("5c0b"),o("2877")),v=Object(f["a"])(p,c,d,!1,null,null,null),h=v.exports,m=o("8c4f"),g=(o("6762"),o("7514"),o("6b54"),o("2f62"));n["a"].use(g["a"]);var w=["addTodo","checkTodo","removeTodo","editTodo"],_=new g["a"].Store({state:{user:null,todos:[],saved:!1},mutations:{setUser:function(t,e){t.user=e.user},receiveTodos:function(t,e){t.todos=e.todos},addTodo:function(t,e){t.todos.push({id:Date.now().toString(),description:e.description,checked:!1})},checkTodo:function(t,e){var o=t.todos.find((function(t){return t.id===e.id}));o.checked=!o.checked},removeTodo:function(t,e){t.todos=t.todos.filter((function(t){return t.id!==e.id}))},editTodo:function(t,e){var o=t.todos.find((function(t){return t.id===e.id}));o.description=e.description},setSaved:function(t,e){t.saved=e.saved}},actions:{login:function(t,e){var o=e.credentials;return a["auth"]().signInWithEmailAndPassword(o.email,o.password)},signUp:function(t,e){var o=e.credentials;return a["auth"]().createUserWithEmailAndPassword(o.email,o.password)},signOut:function(t){var e=t.commit;return a["auth"]().signOut().then((function(){e({type:"setUser",user:null}),e({type:"receiveTodos",todos:[]})}))},getTodos:function(t){var e=t.commit,o=t.state;return Kt.collection("todos").doc(o.user.id).get().then((function(t){if(t.exists){var o=t.data(),n=o.data;e({type:"receiveTodos",todos:n})}}),(function(t){console.log(t)})).catch((function(t){console.log(t)}))}},plugins:[function(t){var e;t.subscribe((function(o,n){w.includes(o.type)&&n.user&&Kt.collection("todos").doc(n.user.id).set({data:n.todos}).then((function(){t.commit({type:"setSaved",saved:!0}),e&&clearTimeout(e),e=setTimeout((function(){t.commit({type:"setSaved",saved:!1})}),2e3)}),(function(t){console.log(t)}))}))}]}),b=_,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todos"},[o("div",{staticClass:"header"},[o("Date"),o("User")],1),t.loading?[o("div",{staticClass:"todos__loading"},[o("p",[t._v("Loading your todos")]),o("LoadingIcon")],1)]:[o("SavedIndicator"),o("div",{staticClass:"todos-container"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.orderedTodos.length,expression:"!orderedTodos.length"}],staticClass:"todos-empty"},[o("h3",[t._v("Don't you have anything to do?")]),o("p",[t._v("Nice, go read a book or something...")]),o("p",[t._v("Or you could add a todo below.")])]),t._l(t.orderedTodos,(function(t){return o("TodoItem",{key:t.id,attrs:{todo:t}})}))],2),o("transition",{attrs:{name:"slide"}},[t.showAdd?o("AddTodo",{on:{addTodo:t.addTodo,toggleShowAdd:t.toggleShowAdd}}):t._e()],1),o("Fab",{attrs:{"on-click":t.toggleShowAdd}},[t._v("Add")])]],2)},k=[],x=o("75fc"),C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"todo-item--checked":t.todo.checked}},[o("div",[o("input",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"},{name:"model",rawName:"v-model",value:t.editDescription,expression:"editDescription"}],ref:"editDescription",attrs:{type:"text"},domProps:{value:t.editDescription},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:function(){return t.editTodo(t.todo.id)}()},blur:function(){return t.editTodo(t.todo.id)},input:function(e){e.target.composing||(t.editDescription=e.target.value)}}}),o("h4",{directives:[{name:"show",rawName:"v-show",value:!t.edit,expression:"!edit"}],staticClass:"todo-item__description",on:{click:t.enableEditTodo}},[t._v("\n      "+t._s(t.todo.description)+"\n    ")])]),o("div",{staticClass:"todo-item__actions"},[o("BinIcon",{directives:[{name:"show",rawName:"v-show",value:t.todo.checked,expression:"todo.checked"}],staticClass:"todo-item__actions__delete",on:{click:function(){return t.removeTodo(t.todo.id)}}}),o("CustomCheckbox",{attrs:{id:t.todo.id,checked:t.todo.checked},on:{checked:t.checkTodo}})],1)])},O=[],T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("input",{staticClass:"checkbox",attrs:{id:"checkbox-"+t.id,type:"checkbox",name:t.id},domProps:{checked:t.checked},on:{change:t.change}}),o("label",{staticClass:"custom-checkbox",attrs:{for:"checkbox-"+t.id}})])},S=[],j={name:"CustomCheckbox",props:{checked:{type:Boolean},id:{default:"0",type:String}},methods:{change:function(t){this.$emit("checked",t.target.name)}}},A=j,$=(o("0a31"),Object(f["a"])(A,T,S,!1,null,"598833ae",null)),D=$.exports,I={functional:!0,render(t,e){const{_c:o,_v:n,data:a,children:s=[]}=e,{class:i,staticClass:r,style:c,staticStyle:d,attrs:l={},...u}=a;return o("svg",{class:[i,r],style:[c,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58 76"},l),...u},s.concat([o("path",{attrs:{d:"M48.002 16.873l-1.854 51a.682.682 0 01-.654.627H12.506c-.326 0-.642-.305-.654-.627l-1.854-51a3.5 3.5 0 00-6.996.254l1.855 51c.148 4.086 3.555 7.373 7.649 7.373h32.988c4.1 0 7.5-3.28 7.65-7.373l1.854-51a3.5 3.5 0 00-6.996-.254z"}}),o("path",{attrs:{d:"M26.5 27v34a2.5 2.5 0 005 0V27a2.5 2.5 0 00-5 0zm-11.499.073l1 34a2.5 2.5 0 004.998-.147l-1-34a2.5 2.5 0 00-4.998.147zm23-.146l-1 34a2.5 2.5 0 004.998.147l1-34A2.5 2.5 0 0038 26.927zM4 18h50a3.5 3.5 0 100-7H4a3.5 3.5 0 100 7z"}}),o("path",{attrs:{d:"M22.395 12.849l1.03-4.117c.147-.588.97-1.232 1.571-1.232h8.008c.601 0 1.424.643 1.571 1.232l1.03 4.117 6.79-1.698-1.029-4.117C40.44 3.33 36.818.5 33.004.5h-8.008c-3.814 0-7.437 2.832-8.362 6.534l-1.03 4.117 6.792 1.698z"}})]))}},P={name:"TodoItem",components:{CustomCheckbox:D,BinIcon:I},props:{todo:{default:function(){return[]},type:[Array,Object]}},data:function(){return{edit:!1,editDescription:this.todo.description}},methods:{checkTodo:function(t){this.$store.commit({type:"checkTodo",id:t})},removeTodo:function(t){this.$store.commit({type:"removeTodo",id:t})},enableEditTodo:function(){var t=this;this.edit=!0,this.$nextTick((function(){t.$refs.editDescription.focus()}))},editTodo:function(t){if(!this.editDescription)return this.$store.commit({type:"removeTodo",id:t});this.$store.commit({type:"editTodo",id:t,description:this.editDescription}),this.edit=!1}}},E=P,N=(o("d7a6"),Object(f["a"])(E,C,O,!1,null,"09fe14bc",null)),L=N.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"date"},[o("h1",{staticClass:"date__day"},[t._v(t._s(t.date))]),o("div",{staticClass:"date__info"},[o("h4",[t._v(t._s(t.day))]),o("p",[t._v(t._s(t.monthYear))])])])},U=[],M={name:"Date",computed:{date:function(){return(new Date).toLocaleDateString("en-UK",{day:"numeric"})},day:function(){return(new Date).toLocaleDateString("en-UK",{weekday:"long"})},monthYear:function(){return(new Date).toLocaleDateString("en-UK",{month:"short",year:"numeric"})}}},z=M,F=(o("a331"),Object(f["a"])(z,B,U,!1,null,"38e66550",null)),q=F.exports,K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideShowAccount,expression:"hideShowAccount"}],staticClass:"user",class:{"user--open":t.showAccount}},[o("div",{staticClass:"user__name",on:{click:t.toggleShowAccount}},[t._v("\n    "+t._s(t.user.email)+"\n    "),o("ChevronIcon")],1),o("transition",{attrs:{name:"fade"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showAccount,expression:"showAccount"}],staticClass:"user__menu"},[o("Button",{attrs:{"on-click":t.signOut}},[t._v("Sign out")])],1)])],1)},W=[],Y=(o("8e6e"),o("ac6a"),o("456d"),o("bd86")),H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:{loading:t.loading},on:{click:t.onClick}},[o("LoadingIcon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t._t("default",[t._v("Button")])],2)},J=[],X={name:"Button",components:{LoadingIcon:l},props:{onClick:{type:Function,required:!0},loading:{type:Boolean,required:!1}}},G=X,R=(o("9c88"),Object(f["a"])(G,H,J,!1,null,"74eed50a",null)),V=R.exports,Q={functional:!0,render(t,e){const{_c:o,_v:n,data:a,children:s=[]}=e,{class:i,staticClass:r,style:c,staticStyle:d,attrs:l={},...u}=a;return o("svg",{class:[i,r],style:[c,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 10"},l),...u},s.concat([o("path",{attrs:{d:"M8.69 9.69a1.103 1.103 0 01-.796-.34L.998 2.18a1.1 1.1 0 01-.308-.765A1.103 1.103 0 012.589.649l6.1 6.345L14.792.65a1.103 1.103 0 111.59 1.53L9.486 9.35a1.103 1.103 0 01-.795.339"}})]))}};function Z(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function tt(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?Z(o,!0).forEach((function(e){Object(Y["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):Z(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var et={name:"User",components:{Button:V,ChevronIcon:Q},data:function(){return{showAccount:!1}},computed:tt({},Object(g["b"])(["user"])),methods:{toggleShowAccount:function(){this.showAccount=!this.showAccount},hideShowAccount:function(){this.showAccount=!1},signOut:function(){var t=this;this.$store.dispatch("signOut").then((function(){t.$router.replace("login")}))}}},ot=et,nt=(o("95ae"),Object(f["a"])(ot,K,W,!1,null,"3a554f7a",null)),at=nt.exports,st=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"SavedIndicator"},[o("small",{staticClass:"SavedIndicator__text",class:{"SavedIndicator__text--saved":t.saved}},[t._v("Changes saved")])])},it=[],rt={name:"SavedIndicator",computed:{saved:function(){return this.$store.state.saved}}},ct=rt,dt=(o("ca9c"),Object(f["a"])(ct,st,it,!1,null,"33b478a4",null)),lt=dt.exports,ut=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{on:{click:t.onClick}},[t._t("default",[t._v("Fab")])],2)},pt=[],ft={name:"Fab",props:{onClick:{type:Function,required:!0}}},vt=ft,ht=(o("71ac"),Object(f["a"])(vt,ut,pt,!1,null,"17e78866",null)),mt=ht.exports,gt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],staticClass:"todos-add"},[o("div",{staticClass:"todos-add__close",on:{click:t.close}},[o("CloseIcon")],1),o("form",{staticClass:"todos-add__controls"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",placeholder:"e.g. Eat that frog"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),o("Button",{staticClass:"todos-add__button",attrs:{disabled:!t.description,"on-click":t.addTodo,type:"submit"}},[t._v("Add todo")])],1)])},wt=[],_t={functional:!0,render(t,e){const{_c:o,_v:n,data:a,children:s=[]}=e,{class:i,staticClass:r,style:c,staticStyle:d,attrs:l={},...u}=a;return o("svg",{class:[i,r],style:[c,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},l),...u},s.concat([o("path",{attrs:{d:"M26.828 24l6.366 6.366a1.994 1.994 0 01-.002 2.826 2 2 0 01-2.826.002L24 26.828l-6.366 6.366a1.994 1.994 0 01-2.826-.002 2 2 0 01-.002-2.826L21.172 24l-6.366-6.366a1.994 1.994 0 01.002-2.826 2 2 0 012.826-.002L24 21.172l6.366-6.366a1.994 1.994 0 012.826.002 2 2 0 01.002 2.826L26.828 24zM24 48C10.745 48 0 37.255 0 24S10.745 0 24 0s24 10.745 24 24-10.745 24-24 24zm0-4c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z"}})]))}},bt={name:"AddTodo",components:{Button:V,CloseIcon:_t},data:function(){return{description:""}},methods:{addTodo:function(t){t.preventDefault(),this.$emit("addTodo",this.description),this.description="",this.$emit("toggleShowAdd")},close:function(){this.$emit("toggleShowAdd")}}},yt=bt,kt=(o("0ed8"),Object(f["a"])(yt,gt,wt,!1,null,"4132a71a",null)),xt=kt.exports,Ct={name:"Todos",components:{TodoItem:L,Date:q,User:at,SavedIndicator:lt,LoadingIcon:l,Fab:mt,AddTodo:xt},data:function(){return{loading:!0,showAdd:!1}},computed:{orderedTodos:function(){return this.$store.state.todos.reduce((function(t,e){return!1===e.checked?[e].concat(Object(x["a"])(t)):[].concat(Object(x["a"])(t),[e])}),[])}},mounted:function(){this.getTodos()},methods:{getTodos:function(){var t=this;this.$store.dispatch("getTodos").then((function(){t.loading=!1}))},toggleShowAdd:function(){this.showAdd=!this.showAdd},addTodo:function(t){this.$store.commit({type:"addTodo",description:t})}}},Ot=Ct,Tt=(o("de2d"),Object(f["a"])(Ot,y,k,!1,null,"dfc2e854",null)),St=Tt.exports,jt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("h2",{staticClass:"login__title"},[t._v("Login to your account")]),o("form",[o("label",[t._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"e.g. joe@bananas.com",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),o("label",[t._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Your password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),o("p",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"login__error"},[t._v(t._s(t.error))]),o("Button",{staticClass:"login__button",attrs:{"on-click":t.login,disabled:!t.email||!t.password,loading:t.loading}},[t._v("Login")]),o("p",{staticClass:"login__link"},[t._v("\n      Don't have an account?\n      "),o("router-link",{attrs:{to:"/signup"}},[t._v("Sign up here")])],1)],1)])},At=[],$t={name:"Login",components:{Button:V},data:function(){return{email:"",password:"",error:"",loading:!1}},methods:{login:function(t){var e=this;t.preventDefault(),this.error="",this.loading=!0;var o=this.email,n=this.password;this.$store.dispatch({type:"login",credentials:{email:o,password:n}}).then((function(){e.$router.replace("todos")})).catch((function(t){e.error=t.message,e.loading=!1}))}}},Dt=$t,It=(o("c483"),Object(f["a"])(Dt,jt,At,!1,null,"07c2f2b8",null)),Pt=It.exports,Et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("h2",{staticClass:"login__title"},[t._v("Sign up to get started")]),o("form",[o("label",[t._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"e.g. joe@bananas.com",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),o("label",[t._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Your password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),o("p",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"login__error"},[t._v(t._s(t.error))]),o("Button",{staticClass:"login__button",attrs:{"on-click":t.signup,disabled:!t.email||!t.password}},[t._v("Sign up")]),o("p",{staticClass:"login__link"},[t._v("\n      Already got an account?\n      "),o("router-link",{attrs:{to:"/login"}},[t._v("Log in here")])],1)],1)])},Nt=[],Lt={name:"Signup",components:{Button:V},data:function(){return{email:"",password:"",error:"",loading:!1}},methods:{signup:function(t){var e=this;t.preventDefault(),this.error="",this.loading=!0;var o=this.email,n=this.password;this.$store.dispatch({type:"signUp",credentials:{email:o,password:n}}).then((function(){e.$router.replace("todos")})).catch((function(t){e.error=t.message,e.loading=!1}))}}},Bt=Lt,Ut=(o("17ca"),Object(f["a"])(Bt,Et,Nt,!1,null,"f81fd892",null)),Mt=Ut.exports;n["a"].use(m["a"]);var zt=new m["a"]({mode:"history",base:"/vue-to-do/",routes:[{path:"*",redirect:"login"},{path:"/",redirect:"login"},{path:"/login",name:"login",component:Pt},{path:"/signup",name:"signup",component:Mt},{path:"/todos",name:"todos",component:St,meta:{requiresAuth:!0}}]});zt.beforeEach((function(t,e,o){var n=b.state.user,a=t.matched.some((function(t){return t.meta.requiresAuth}));return a&&!n?o("login"):!a&&n?o("todos"):void o()}));var Ft=zt,qt=o("9483");Object(qt["a"])("".concat("/vue-to-do/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o.d(e,"db",(function(){return Kt})),n["a"].use(i.a),n["a"].config.productionTip=!1,a["initializeApp"](r);var Kt=a["firestore"]();new n["a"]({router:Ft,store:b,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("e332"),a=o.n(n);a.a},"71ac":function(t,e,o){"use strict";var n=o("978a"),a=o.n(n);a.a},"86a8":function(t,e,o){},"8ebe":function(t,e,o){},"934d":function(t,e,o){},"95ae":function(t,e,o){"use strict";var n=o("ed99"),a=o.n(n);a.a},"978a":function(t,e,o){},"9c88":function(t,e,o){"use strict";var n=o("1a72"),a=o.n(n);a.a},a331:function(t,e,o){"use strict";var n=o("a9fd"),a=o.n(n);a.a},a9fd:function(t,e,o){},aae6:function(t,e,o){},c483:function(t,e,o){"use strict";var n=o("3418"),a=o.n(n);a.a},ca9c:function(t,e,o){"use strict";var n=o("aae6"),a=o.n(n);a.a},d7a6:function(t,e,o){"use strict";var n=o("86a8"),a=o.n(n);a.a},de2d:function(t,e,o){"use strict";var n=o("15c2"),a=o.n(n);a.a},e332:function(t,e,o){},ed99:function(t,e,o){},ef5a:function(t,e,o){}});
//# sourceMappingURL=app.b0e4988e.js.map