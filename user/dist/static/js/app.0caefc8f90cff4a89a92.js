webpackJsonp([1],{"6yFU":function(t,e){},"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.e204c4a.png"},CFBV:function(t,e){},GFZO:function(t,e){},GiyR:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a={name:"Header",computed:{},methods:{activeLink:function(t){return t===this.$route.path?"active":""},is_noone:function(){return"/login"===this.$route.path?"none":""},logout:function(){this.$store.dispatch("logout")},goto:function(t){document.getElementById("toggler").checked=!1,this.$router.push("/"+t)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("nav",{staticClass:"nav",class:t.is_noone()},[t._m(0),t._v(" "),n("div",{staticClass:"menu-wrap"},[n("input",{staticClass:"toggler",attrs:{type:"checkbox",id:"toggler"}}),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"menu"},[n("div",[n("div",[n("ul",[n("li",[n("p",{staticClass:"nav-link",class:t.activeLink("/"),on:{click:function(e){return t.goto("")}}},[t._v("Главная")])]),t._v(" "),n("li",[n("p",{staticClass:"nav-link",class:t.activeLink("/project"),on:{click:function(e){return t.goto("project")}}},[t._v("Проект")])]),t._v(" "),n("li",[n("p",{staticClass:"nav-link pointer p-2",on:{click:function(e){return t.logout()}}},[t._v("Выйти")])])])])])])])]),t._v(" "),this.$store.getters.REQUEST?n("div",{staticClass:"loading-bar"},[n("div",{staticClass:"loading-elem"})]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"brand"},[e("img",{staticClass:"img",attrs:{src:n("7Otq"),width:"38",height:"34",alt:"logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hamburger"},[e("div")])}]};var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("footer",{staticClass:"bg-dark mt-2",class:this.is_noone()},[e("h3",{staticClass:"text-center text-light  p-3",staticStyle:{"margin-bottom":"0px"}},[this._v("ДомЛес")])])])},staticRenderFns:[]};var o={name:"App",components:{Header:n("VU/8")(a,r,!1,function(t){n("GFZO")},"data-v-105d2bcd",null).exports,Footer:n("VU/8")({name:"Footer",methods:{is_noone:function(){return"/login"===this.$route.path?"none":""}}},i,!1,function(t){n("GiyR")},"data-v-06770976",null).exports},created:{},beforeCreate:{start:function(){this.$store.getters.SELF.logged||router.push("/login")}},methods:{}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"wrapper"}},[e("Header"),this._v(" "),e("div",{staticClass:"divider"}),this._v(" "),e("router-view")],1),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var l=n("VU/8")(o,c,!1,function(t){n("UNDz")},null,null).exports,u=n("/ocq"),m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wprapper"}},[n("div",{staticClass:"full-page d-flex justify-content-center align-items-center flex-column"},[n("form",{staticClass:"col-sm-9 col-md-8 col-lg-7 col-xl-6"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"h3",attrs:{for:"exampleInputEmail1 "}},[t._v("Логин")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1",placeholder:"example@mail.ru"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"h3",attrs:{for:"exampleInputPassword1 "}},[t._v("Пароль")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"123456"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"btn btn-primary ",attrs:{type:"submit"},on:{click:function(e){return t.submit()}}},[n("p",{staticClass:"h5"},[this.$store.getters.REQUEST?n("span",[t._v("Отправка")]):n("span",[t._v("Вход")])])])])])},staticRenderFns:[]};var p=n("VU/8")({name:"Login",data:function(){return{login:"",password:""}},methods:{submit:function(){this.$store.dispatch("login",{login:this.login,password:this.password})}}},m,!1,function(t){n("6yFU")},"data-v-46f404be",null).exports,d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper container-fluid"},[n("button",{staticClass:"btn btn-primary mt-2 mb-1",on:{click:function(e){return t.getCameras()}}},[t._v("Получить данные с камер")]),t._v(" "),t.camera()?n("span",[n("h3",[t._v(" "+t._s(t.camera().name))]),t._v(" "),n("img",{staticClass:"d-block mx-auto img-fluid",attrs:{src:t.camera().connection_string,id:"camera",alt:""}}),t._v(" "),n("div",{staticClass:"row d-flex justify-content-center"},[n("button",{staticClass:"btn btn-primary m-1",on:{click:function(e){return t.before()}}},[t._v(" ← ")]),t._v(" "),n("button",{staticClass:"btn btn-primary m-1",on:{click:function(e){return t.next()}}},[t._v(" → ")])])]):t._e()])},staticRenderFns:[]};var v=n("VU/8")({name:"Home",data:function(){return{current_camera:0,width:300,height:300}},computed:{},beforeCreate:function(){!1===this.$store.getters.SELF.logged&&this.$router.push("login")},methods:{cameras_amount:function(){return this.$store.getters.CAMERAS.length},camera:function(){var t=this.$store.getters.CAMERAS[this.current_camera];return t},next:function(){this.current_camera+1>=this.cameras_amount()?this.current_camera=0:this.current_camera++},before:function(){this.current_camera-1<0?this.current_camera=this.cameras_amount()-1:this.current_camera--},getCameras:function(){this.$store.dispatch("camerasRequest")}}},d,!1,function(t){n("yC9K")},"data-v-7d3eec78",null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wrapper"}},[e("h1",[this._v("Chats")])])}]};var f=n("VU/8")({name:"Chats"},h,!1,function(t){n("CFBV")},"data-v-5e1f0c89",null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper container-fluid "},[n("h2",{staticClass:"mt-3"},[t._v("Сосновая избушка")]),t._v(" "),n("div",{staticClass:"progress mt-4"},[n("div",{staticClass:"progress-bar progress-bar-striped",staticStyle:{width:"30%"},attrs:{role:"progressbar","aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("30%")])]),t._v(" "),n("div",{staticClass:"steps mt-4"},[n("div",{staticClass:"step my-1 alert alert-success"},[t._v("Заливка бетона")]),t._v(" "),n("div",{staticClass:"step my-1 alert alert-success"},[t._v("Возведение стен")]),t._v(" "),n("div",{staticClass:"step my-1 alert alert-success"},[t._v("Укладка крыши")]),t._v(" "),n("div",{staticClass:"step my-1 alert alert-light"},[t._v("Что-то там...")]),t._v(" "),n("div",{staticClass:"step my-1 alert alert-light"},[t._v("Шаг05")]),t._v(" "),n("div",{staticClass:"step my-1 alert alert-light"},[t._v("Шаг06")]),t._v(" "),n("div",{staticClass:"step my-1 alert alert-light"},[t._v("Шаг07")]),t._v(" "),n("div",{staticClass:"step my-1 alert alert-light"},[t._v("Шаг08")]),t._v(" "),n("div",{staticClass:"step my-1 alert alert-light"},[t._v("Шаг09")]),t._v(" "),n("div",{staticClass:"step my-1 alert alert-light"},[t._v("Шаг10")])])])}]};var g,C=n("VU/8")({name:"Project"},_,!1,function(t){n("Q2Gn")},"data-v-efae1f42",null).exports,b=n("NYxO"),w=n("Xxa5"),y=n.n(w),x=n("exGp"),k=n.n(x),E=this,$={state:{cameras:[]},getters:{CAMERAS:function(t){return t.cameras}},mutations:{renewCameras:function(t,e){return t.cameras=e}},actions:{camerasRequest:(g=k()(y.a.mark(function t(e){e.state;var n=e.rootState,s=e.commit;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:s("request_status",!0),fetch(n.api.url+"/api/cameras",{credentials:"include",method:"GET",headers:{Authorization:n.api.token}}).then(function(t){return 200===t.status?t.json():null}).then(function(t){return s("renewCameras",t)}).catch(function(t){return alert("Ошибка получения данных камер")}).finally(function(){return s("request_status",!1)});case 2:case"end":return t.stop()}},t,E)})),function(t){return g.apply(this,arguments)})}},F=n("mvHQ"),R=n.n(F),q=this,S={state:{id:null,login:"",logged:!1},getters:{SELF:function(t){return t}},mutations:{login:function(t,e){t.login=e.login,t.id=e.id,t.logged=!0,j.push("/")},logout:function(t){t.id=null,t.login=null,t.logged=!1,j.push("login")}},actions:{login:function(){var t=k()(y.a.mark(function t(e,n){e.state;var s=e.rootState,a=e.commit;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a("request_status",!0),fetch(s.api.url+"/login",{method:"POST",headers:{"Content-Type":"Application/json"},body:R()({login:n.login,password:n.password})}).then(function(t){return 200===t.status?t.json():alert("Ошибка авторизации")}).then(function(t){null!==t&&(a("login",t),a("token",t.token))}).catch(function(t){return console.log(t)}).finally(function(){return a("request_status",!1)});case 2:case"end":return t.stop()}},t,q)}));return function(e,n){return t.apply(this,arguments)}}(),logout:function(t){var e=t.commit;e("logout"),e("token_destroy")}}},U={state:{url:"https://domles-camera.herokuapp.com",is_request:!1,token:null},getters:{API:function(t){return t},REQUEST:function(t){return t.is_request},TOKEN:function(t){return t.token}},mutations:{request_status:function(t,e){t.is_request=e},token:function(t,e){t.token=e},token_destroy:function(t){t.token=null}},actions:{}};s.a.use(b.a);var A=new b.a.Store({state:{},getters:{},mutations:{},actions:{},modules:{cameras:$,self:S,api:U}});s.a.use(u.a);var j=new u.a({routes:[{path:"/login",name:"login",component:p},{path:"/chats",name:"chats",component:f},{path:"/project",name:"project",component:C},{path:"/",name:"home",component:v}]});n("qb6w"),n("Bb4J");s.a.config.productionTip=!1,new s.a({el:"#app",router:j,store:A,components:{App:l},template:"<App/>"})},Q2Gn:function(t,e){},UNDz:function(t,e){},qb6w:function(t,e){},yC9K:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0caefc8f90cff4a89a92.js.map