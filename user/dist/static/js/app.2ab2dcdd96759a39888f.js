webpackJsonp([1],{0:function(t,e){},"3YZq":function(t,e){},"7Otq":function(t,e,s){t.exports=s.p+"static/img/logo.e204c4a.png"},BHUt:function(t,e){},"BY+9":function(t,e){},EwxJ:function(t,e){},G0tC:function(t,e){},GNnL:function(t,e){},H5yx:function(t,e){},Jogr:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a={name:"Header",computed:{},methods:{activeLink:function(t){return t===this.$route.path?"active":""},is_noone:function(){return"/login"===this.$route.path?"none":""},logout:function(){this.$store.dispatch("logout")},goto:function(t){document.getElementById("toggler").checked=!1,this.$router.push("/"+t)},id:function(){return this.$store.getters.SELF.id}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("nav",{staticClass:"nav",class:t.is_noone()},[t._m(0),t._v(" "),s("div",{staticClass:"menu-wrap"},[s("input",{staticClass:"toggler",attrs:{type:"checkbox",id:"toggler"}}),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"menu"},[s("div",[s("div",{staticStyle:{overflow:"auto"}},[s("ul",{staticStyle:{"padding-left":"0px"}},[s("li",[s("p",{staticClass:"nav-link",class:t.activeLink("/"),on:{click:function(e){return t.goto("")}}},[t._v("Main")])]),t._v(" "),s("li",[s("p",{staticClass:"nav-link",class:t.activeLink("/chat"),on:{click:function(e){t.goto("chat/"+t.id())}}},[t._v("Chat")])]),t._v(" "),s("li",[s("p",{staticClass:"nav-link",class:t.activeLink("/coasts"),on:{click:function(e){return t.goto("coasts")}}},[t._v("Pricing")])]),t._v(" "),s("li",[s("p",{staticClass:"nav-link",class:t.activeLink("/benefit"),on:{click:function(e){return t.goto("benefit")}}},[t._v("Benefits")])]),t._v(" "),s("li",[s("p",{staticClass:"nav-link",class:t.activeLink("/unswers"),on:{click:function(e){return t.goto("unswers")}}},[t._v("FAQ")])]),t._v(" "),s("li",[s("p",{staticClass:"nav-link",class:t.activeLink("/works"),on:{click:function(e){return t.goto("works")}}},[t._v("Completed")])]),t._v(" "),s("li",[s("p",{staticClass:"nav-link",class:t.activeLink("/news"),on:{click:function(e){return t.goto("news")}}},[t._v("New")])]),t._v(" "),s("li",[s("p",{staticClass:"nav-link",class:t.activeLink("/bonuses"),on:{click:function(e){return t.goto("bonuses")}}},[t._v("Bonuses")])]),t._v(" "),s("li",[s("p",{staticClass:"nav-link pointer p-2",on:{click:function(e){return t.logout()}}},[t._v("Logout")])])])])])])])]),t._v(" "),this.$store.getters.REQUEST?s("div",{staticClass:"loading-bar"},[s("div",{staticClass:"loading-elem"})]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"brand"},[e("img",{staticClass:"img",attrs:{src:s("7Otq"),width:"38",height:"34",alt:"logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hamburger"},[e("div")])}]};var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("footer",{staticClass:"bg-dark mt-2",class:this.is_noone()},[e("h3",{staticClass:"text-center text-light  p-3",staticStyle:{"margin-bottom":"0px"}},[this._v("Video Managment")])])])},staticRenderFns:[]};var i={name:"App",data:function(){return{io:null}},components:{Header:s("VU/8")(a,o,!1,function(t){s("G0tC")},"data-v-603d64e8",null).exports,Footer:s("VU/8")({name:"Footer",methods:{is_noone:function(){return"/login"===this.$route.path?"none":""}}},r,!1,function(t){s("weTe")},"data-v-6c644ca4",null).exports},created:{},beforeCreate:function(){var t=localStorage.getItem("token")||null,e=localStorage.getItem("login")||null,s=localStorage.getItem("id")||null;t&&e&&s&&(this.$store.dispatch("loginUserByStorage",{login:e,id:s,token:t}),this.$store.dispatch("connect")),this.$store.getters.SELF.logged||router.push("/login")},mounted:function(){},methods:{},updated:function(){}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"wrapper"}},[e("Header"),this._v(" "),e("div",{staticClass:"divider"}),this._v(" "),e("router-view")],1),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var u=s("VU/8")(i,c,!1,function(t){s("StNY")},null,null).exports,l=s("/ocq"),m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"wprapper"}},[s("div",{staticClass:"full-page d-flex justify-content-center align-items-center flex-column"},[s("form",{staticClass:"col-sm-9 col-md-8 col-lg-7 col-xl-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"h3",attrs:{for:"exampleInputEmail1 "}},[t._v("Login")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1",placeholder:"example@mail.ru"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"h3",attrs:{for:"exampleInputPassword1 "}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"123456"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),s("br"),t._v(" "),s("button",{staticClass:"btn btn-primary ",attrs:{type:"submit"},on:{click:function(e){return t.submit()}}},[s("p",{staticClass:"h5"},[this.$store.getters.REQUEST?s("span",[t._v("Sending...")]):s("span",[t._v("Send")])])])])])},staticRenderFns:[]};var d=s("VU/8")({name:"Login",data:function(){return{login:"",password:""}},methods:{submit:function(){this.$store.dispatch("login",{login:this.login,password:this.password})}},beforeCreate:function(){}},m,!1,function(t){s("BY+9")},"data-v-79cc6387",null).exports,g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper container-fluid"},[s("button",{staticClass:"btn btn-primary mt-2 mb-1",on:{click:function(e){return t.getCameras()}}},[t._v("Get Video")]),t._v(" "),t.camera()?s("span",[s("h3",[t._v(" "+t._s(t.camera().name))]),t._v(" "),s("img",{staticClass:"d-block mx-auto img-fluid",attrs:{src:t.$store.getters.API.url+"/proxy/"+t.camera().connection_string,id:"camera",alt:""}}),t._v(" "),s("div",{staticClass:"row d-flex justify-content-center"},[s("button",{staticClass:"btn btn-primary m-1",on:{click:function(e){return t.before()}}},[t._v(" ← ")]),t._v(" "),s("button",{staticClass:"btn btn-primary m-1",on:{click:function(e){return t.next()}}},[t._v(" → ")])])]):t._e()])},staticRenderFns:[]};var v=s("VU/8")({name:"Home",data:function(){return{current_camera:0,width:300,height:300}},computed:{},beforeCreate:function(){!1===this.$store.getters.SELF.logged&&this.$router.push("login")},methods:{cameras_amount:function(){return this.$store.getters.CAMERAS.length},camera:function(){var t=this.$store.getters.CAMERAS[this.current_camera];return t},next:function(){this.current_camera+1>=this.cameras_amount()?this.current_camera=0:this.current_camera++},before:function(){this.current_camera-1<0?this.current_camera=this.cameras_amount()-1:this.current_camera--},getCameras:function(){this.$store.dispatch("camerasRequest")}}},g,!1,function(t){s("Jogr")},"data-v-ae46497a",null).exports,h=s("Xxa5"),p=s.n(h),f=s("exGp"),_=s.n(f),C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper "},[s("p",{staticClass:"text ",class:t.myMessageSide},[t._v("\n            "+t._s(t.text)+"\n            "),s("br"),t._v(" "),s("span",{staticClass:"text-muted mini"},[t._v("\n                "+t._s(t._createdAt)+"\n            ")])])])},staticRenderFns:[]};var w=s("VU/8")({name:"Message",props:["text","room","user_id","createdAt","id","_id"],data:function(){return{myMess:null}},methods:{},computed:{myMessageSide:function(){return this.myMess?"myMessage":"noMyMessage"},_createdAt:function(){return this.createdAt.split("T")[0]}},created:function(){this.myMess=~~this.user_id==~~this._id}},C,!1,function(t){s("3YZq")},"data-v-fac4e634",null).exports,k=s("mtWM"),b=s.n(k),$=(s("OMJi"),{name:"Chat",components:{message:w},data:function(){return{message:"",room_id:null}},computed:{messages:function(){return this.$store.getters.MESSAGES},id:function(){return this.$store.getters.SELF.id},offset:function(){return this.$store.getters.MESSAGES.length}},methods:{sendMessage:function(){this.message.length>=140?alert("Message length not more then 140 symbols"):(this.$store.dispatch("sendMessage",this.message),this.message="")},getMessages:function(){var t=this;return _()(p.a.mark(function e(){var s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("request_status",!0),e.prev=1,e.next=4,b.a.get(t.$store.getters.API.url+"/messages/"+t.room_id+"/"+t.offset,{headers:{"Content-Type":"application/json",Authorization:t.$store.getters.API.token}});case 4:s=e.sent,0===t.offset&&setTimeout("window.scrollTo(0, document.body.offsetHeight + 100);",275),t.$store.dispatch("getMessages",s),t.$store.commit("request_status",!1),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),alert("Error receiving messages"),t.$store.commit("request_status",!1);case 15:case"end":return e.stop()}},e,t,[[1,10]])}))()},TopScroll:function(){this.$store.getters.REQUEST||0!==window.scrollY||this.getMessages()}},created:function(){window.addEventListener("scroll",this.TopScroll)},destroyed:function(){window.removeEventListener("scroll",this.TopScroll)},watch:{},mounted:function(){var t=this;this.$store.getters.IO.emit("createRoom",this.$route.params.id),0===this.$store.getters.IO.listeners("message").length&&this.$store.getters.IO.on("message",function(e){t.$store.dispatch("getMessage",e)}),this.room_id=this.$route.params.id,this.getMessages()},beforeDestroy:function(){this.$store.getters.IO.emit("leaveRoom",this.room_id),this.$store.dispatch("clearMessages")}}),x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container-fluid "},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-sm-12 messages-box "},[s("div",{},[s("transition-group",{staticClass:"messages row p-2 mb-1",attrs:{name:"message"}},t._l(t.messages,function(e){return s("message",t._b({key:e.id,staticClass:"col-sm-12 col-md-12 col-lg-12",attrs:{_id:t.id}},"message",e,!1))}),1)],1)])])]),t._v(" "),s("div",{staticClass:"bottom-panel"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"bottom-input",attrs:{type:"text"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),s("button",{staticClass:"bottom-btn",on:{click:function(e){return t.sendMessage()}}},[t._v("Send")])])])},staticRenderFns:[]};var y=s("VU/8")($,x,!1,function(t){s("QvAg")},"data-v-a9b57b14",null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper container-fluid "},[s("h2",{staticClass:"mt-3"},[t._v("Сосновая избушка")]),t._v(" "),s("div",{staticClass:"progress mt-4"},[s("div",{staticClass:"progress-bar progress-bar-striped",staticStyle:{width:"30%"},attrs:{role:"progressbar","aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("30%")])]),t._v(" "),s("div",{staticClass:"steps mt-4"},[s("div",{staticClass:"step my-1 alert alert-success"},[t._v("Заливка бетона")]),t._v(" "),s("div",{staticClass:"step my-1 alert alert-success"},[t._v("Возведение стен")]),t._v(" "),s("div",{staticClass:"step my-1 alert alert-success"},[t._v("Укладка крыши")]),t._v(" "),s("div",{staticClass:"step my-1 alert alert-light"},[t._v("Что-то там...")]),t._v(" "),s("div",{staticClass:"step my-1 alert alert-light"},[t._v("Шаг05")]),t._v(" "),s("div",{staticClass:"step my-1 alert alert-light"},[t._v("Шаг06")]),t._v(" "),s("div",{staticClass:"step my-1 alert alert-light"},[t._v("Шаг07")]),t._v(" "),s("div",{staticClass:"step my-1 alert alert-light"},[t._v("Шаг08")]),t._v(" "),s("div",{staticClass:"step my-1 alert alert-light"},[t._v("Шаг09")]),t._v(" "),s("div",{staticClass:"step my-1 alert alert-light"},[t._v("Шаг10")])])])}]};var S=s("VU/8")({name:"Project",beforeCreate:function(){!1===this.$store.getters.SELF.logged&&this.$router.push("login")}},E,!1,function(t){s("GNnL")},"data-v-420e3bf1",null).exports,q={name:"benefit",data:function(){return{benefits:[]}},beforeCreate:function(){!1===this.$store.getters.SELF.logged&&this.$router.push("login")},methods:{getQuestions:function(){var t=this;this.$store.commit("request_status",!0),b.a.get(this.$store.getters.API.url+"/api/benefits",{headers:{Authorization:this.$store.getters.API.token}}).then(function(e){t.benefits=e.data,t.$store.commit("request_status",!0)}).catch(function(e){alert("Error receiving benefits"),t.$store.commit("request_status",!0)})}},mounted:function(){this.getQuestions()}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container pt-4"},[s("h2",[t._v("Benefits")]),t._v(" "),s("hr"),t._v(" "),t._l(t.benefits,function(e,n){return s("div",{key:n,staticClass:"row justify-content-between px-2"},[s("div",{staticClass:"col-sm-12 col-md-8 col-lg-6 col-xl-6 p-2"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-title border-bottom"},[s("h4",{staticClass:" px-2 pt-2"},[t._v(t._s(e.question))])]),t._v(" "),s("p",{staticClass:"px-2 pt-2"},[t._v(t._s(e.unswer))])])])])})],2)},staticRenderFns:[]};var M=s("VU/8")(q,A,!1,function(t){s("VCMU")},"data-v-591da55a",null).exports,I={name:"Bonuses",data:function(){return{questions:[]}},beforeCreate:function(){!1===this.$store.getters.SELF.logged&&this.$router.push("login")},methods:{getQuestions:function(){var t=this;this.$store.commit("request_status",!0),b.a.get(this.$store.getters.API.url+"/api/bonuses",{headers:{Authorization:this.$store.getters.API.token}}).then(function(e){t.questions=e.data,t.$store.commit("request_status",!0)}).catch(function(e){alert("Error receiving bonuses"),t.$store.commit("request_status",!0)})}},mounted:function(){this.getQuestions()}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container pt-4"},[s("h2",[t._v("Our Bonuses")]),t._v(" "),s("hr"),t._v(" "),t._l(t.questions,function(e,n){return s("div",{key:n,staticClass:"row justify-content-between px-2"},[s("div",{staticClass:"col-sm-12 col-md-8 col-lg-6 col-xl-6 p-2"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-title border-bottom"},[s("h4",{staticClass:" px-2 pt-2"},[t._v(t._s(e.bonuses))])]),t._v(" "),s("p",{staticClass:"px-2 pt-2"},[t._v(t._s(e.unswer))]),t._v(" "),s("a",{staticClass:"px-2 pt-2",attrs:{href:e.link}},[t._v("More...")])])])])})],2)},staticRenderFns:[]};var P=s("VU/8")(I,F,!1,function(t){s("EwxJ")},"data-v-33784eed",null).exports,L={name:"Coasts",data:function(){return{coasts:[]}},beforeCreate:function(){!1===this.$store.getters.SELF.logged&&this.$router.push("login")},methods:{getCoasts:function(){var t=this;this.$store.commit("request_status",!0),b.a.get(this.$store.getters.API.url+"/api/coasts",{headers:{Authorization:this.$store.getters.API.token}}).then(function(e){t.coasts=e.data,t.$store.commit("request_status",!1)}).catch(function(e){alert("Error receiving pricing"),t.$store.commit("request_status",!1)})}},mounted:function(){this.getCoasts()}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container pt-4"},[s("h2",[t._v("Pricing")]),t._v(" "),s("hr"),t._v(" "),t._l(t.coasts,function(e,n){return s("div",{key:n,staticClass:"px-2"},[s("div",{staticClass:"row my-2 px-2 justify-content-between"},[s("h6",{},[t._v(t._s(e.name)+" ")]),t._v(" "),s("h6",{},[t._v(t._s(e.coast)+" $")])])])})],2)},staticRenderFns:[]};var R=s("VU/8")(L,U,!1,function(t){s("o1/b")},"data-v-9dac6376",null).exports,T={name:"News",data:function(){return{questions:[]}},beforeCreate:function(){!1===this.$store.getters.SELF.logged&&this.$router.push("login")},methods:{getQuestions:function(){var t=this;this.$store.commit("request_status",!0),b.a.get(this.$store.getters.API.url+"/api/news",{headers:{Authorization:this.$store.getters.API.token}}).then(function(e){t.questions=e.data,t.$store.commit("request_status",!0)}).catch(function(e){alert("Error receiving news"),t.$store.commit("request_status",!0)})}},mounted:function(){this.getQuestions()}},V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container pt-4"},[s("h2",[t._v("New")]),t._v(" "),s("hr"),t._v(" "),t._l(t.questions,function(e,n){return s("div",{key:n,staticClass:"row justify-content-between px-2"},[s("div",{staticClass:"col-sm-12 col-md-8 col-lg-6 col-xl-6 p-2"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-title border-bottom"},[s("h4",{staticClass:" px-2 pt-2"},[t._v(t._s(e.news))])]),t._v(" "),s("p",{staticClass:"px-2 pt-2"},[t._v(t._s(e.description))])])])])})],2)},staticRenderFns:[]};var j=s("VU/8")(T,V,!1,function(t){s("norF")},"data-v-1ba8141f",null).exports,Q={name:"Unswers",data:function(){return{questions:[]}},beforeCreate:function(){!1===this.$store.getters.SELF.logged&&this.$router.push("login")},methods:{getQuestions:function(){var t=this;this.$store.commit("request_status",!0),b.a.get(this.$store.getters.API.url+"/api/questions",{headers:{Authorization:this.$store.getters.API.token}}).then(function(e){t.questions=e.data,t.$store.commit("request_status",!0)}).catch(function(e){alert("Ошибка получения расценок"),t.$store.commit("request_status",!0)})}},mounted:function(){this.getQuestions()}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container pt-4"},[s("h2",[t._v("FAQ")]),t._v(" "),s("hr"),t._v(" "),t._l(t.questions,function(e,n){return s("div",{key:n,staticClass:"row justify-content-between px-2"},[s("div",{staticClass:"col-sm-12 col-md-8 col-lg-6 col-xl-6 p-2"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-title border-bottom"},[s("h4",{staticClass:" px-2 pt-2"},[t._v(t._s(e.question))])]),t._v(" "),s("p",{staticClass:"px-2 pt-2"},[t._v(t._s(e.unswer))])])])])})],2)},staticRenderFns:[]};var B=s("VU/8")(Q,N,!1,function(t){s("PxhD")},"data-v-acf5d2b2",null).exports,H={name:"Works",beforeCreate:function(){!1===this.$store.getters.SELF.logged&&this.$router.push("login")},data:function(){return{works:[]}},methods:{getWorks:function(){var t=this;this.$store.commit("request_status",!0),b.a.get(this.$store.getters.API.url+"/api/works",{headers:{Authorization:this.$store.getters.API.token}}).then(function(e){t.works=e.data,t.$store.commit("request_status",!0)}).catch(function(e){alert("Error reciving works"),t.$store.commit("request_status",!0)})}},mounted:function(){this.getWorks()}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container pt-4"},[s("h2",[t._v("Completed")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row justify-content-center"},t._l(t.works,function(e,n){return s("div",{key:n,staticClass:"work col-12 p-2"},[s("div",{staticClass:"card "},[s("div",{staticClass:"card-title border-bottom px-3 pt-1"},[s("h4",[t._v(t._s(e.name))])]),t._v(" "),s("div",{staticClass:"map"},[s("div",{staticClass:"mapouter col-12"},[s("div",{staticClass:"gmap_canvas"},[s("iframe",{attrs:{width:"100%",height:"300",id:"gmap_canvas",src:"https://maps.google.com/maps?q="+e.shir+","+e.dolg+"&t=&z=13&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}})])])]),t._v(" "),s("p",{staticClass:"px-3 pt-1 my-3"},[t._v("\n                    "+t._s(e.desc)+"\n                ")]),t._v(" "),s("router-link",{staticClass:"btn btn-primary m-2",attrs:{to:"/work/"+e.id}},[t._v("\n                    Photos\n                ")])],1)])}),0)])},staticRenderFns:[]};var z=s("VU/8")(H,O,!1,function(t){s("H5yx")},"data-v-70ab33be",null).exports,G={name:"Work",data:function(){return{work_id:null,image:null,work:{}}},beforeCreate:function(){!1===this.$store.getters.SELF.logged&&this.$router.push("login")},mounted:function(){this.work_id=this.$route.params.id,this.getWork()},methods:{getWork:function(){var t=this;return _()(p.a.mark(function e(){var s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("request_status",!0),e.prev=1,e.next=4,b.a.get(t.$store.getters.API.url+"/work/"+t.work_id,{headers:{"Content-Type":"application/json",Authorization:t.$store.getters.API.token}});case 4:s=e.sent,t.work=s.data[0],t.$store.commit("request_status",!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),alert("Error reciving images"),console.log(e.t0),t.$store.commit("request_status",!1);case 14:case"end":return e.stop()}},e,t,[[1,9]])}))()}}},W={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container pt-4"},[s("h2",[t._v("Photos")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"images"},t._l(t.work.images,function(e,n){return s("img",{key:n,staticClass:"img-fluid p-2 my-2 img-thumbnail",attrs:{src:t.$store.getters.API.url+"/uploads/"+e,alt:"img"}})}),0)])},staticRenderFns:[]};var Y,J=s("VU/8")(G,W,!1,function(t){s("BHUt")},null,null).exports,D=s("NYxO"),Z=this,K={state:{cameras:[]},getters:{CAMERAS:function(t){return t.cameras}},mutations:{renewCameras:function(t,e){return t.cameras=e}},actions:{camerasRequest:(Y=_()(p.a.mark(function t(e){e.state;var s=e.rootState,n=e.commit;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n("request_status",!0),fetch(s.api.url+"/api/cameras",{credentials:"include",method:"GET",headers:{Authorization:s.api.token}}).then(function(t){return 200===t.status?t.json():null}).then(function(t){return n("renewCameras",t)}).catch(function(t){return alert("Ошибка получения данных камер")}).finally(function(){return n("request_status",!1)});case 2:case"end":return t.stop()}},t,Z)})),function(t){return Y.apply(this,arguments)})}},X=s("mvHQ"),tt=s.n(X),et=this,st={state:{id:null,login:"",logged:!1},getters:{SELF:function(t){return t}},mutations:{login:function(t,e){t.login=e.login,t.id=e.id,t.logged=!0,localStorage.setItem("login",e.login),localStorage.setItem("id",e.id),ct.push("/")},logout:function(t){t.id=null,t.login=null,t.logged=!1,localStorage.removeItem("login"),localStorage.removeItem("id"),ct.push("/login")}},actions:{login:function(){var t=_()(p.a.mark(function t(e,s){e.state;var n=e.rootState,a=e.commit,o=e.dispatch;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a("request_status",!0),fetch(n.api.url+"/login",{method:"POST",headers:{"Content-Type":"Application/json"},body:tt()({login:s.login,password:s.password})}).then(function(t){return 200===t.status?t.json():null}).then(function(t){null!==t?(a("login",t),a("token",t.token),o("connect",n.api.token)):alert("Authorization error")}).catch(function(t){return console.log(t)}).finally(function(){return a("request_status",!1)});case 2:case"end":return t.stop()}},t,et)}));return function(e,s){return t.apply(this,arguments)}}(),logout:function(t){var e=t.commit;e("logout"),e("token_destroy")},loginUserByStorage:function(t,e){var s=t.commit,n=t.rootState,a=t.dispatch;s("token",e.token),s("login",e),a("connect",n.api.token)}}},nt={state:{url:"https://video-surveillance-system.herokuapp.com",is_request:!1,token:null},getters:{API:function(t){return t},REQUEST:function(t){return t.is_request},TOKEN:function(t){return t.token}},mutations:{request_status:function(t,e){t.is_request=e},token:function(t,e){t.token=e,localStorage.setItem("token",t.token)},token_destroy:function(t){localStorage.removeItem("token"),t.token=null}},actions:{}},at=s("DmT9"),ot=s.n(at),rt={state:{io:{},messages:[]},getters:{IO:function(t){return t.io},MESSAGES:function(t){return t.messages}},mutations:{connect:function(t,e){t.io=ot()(e.url,{query:{token:e.token}})},getMessage:function(t,e){t.messages.push(e),setTimeout("window.scrollTo(0, document.body.offsetHeight + 100);",75)},getMessages:function(t,e){t.messages=t.messages.concat(e),t.messages=t.messages.sort(function(t,e){return t.id>e.id?1:t.id<e.id?-1:void 0})},clearMessages:function(t){t.messages=[]}},actions:{connect:function(t){var e=t.commit,s=t.rootState;console.log("connect!"+s.api.url),e("connect",{token:s.api.token,url:s.api.url})},sendMessage:function(t,e){t.commit;t.rootState.socket.io.emit("message",e)},getMessage:function(t,e){(0,t.commit)("getMessage",e)},getMessages:function(t,e){var s=t.commit;console.log(e.data),s("getMessages",e.data)},clearMessages:function(t){(0,t.commit)("clearMessages")}}};n.a.use(D.a);var it=new D.a.Store({state:{},getters:{},mutations:{},actions:{},modules:{cameras:K,self:st,api:nt,socket:rt}});n.a.use(l.a);var ct=new l.a({routes:[{path:"/login",name:"login",component:d},{path:"/coasts",name:"coasts",component:R},{path:"/benefit",name:"benefit",component:M},{path:"/work/:id",name:"work",component:J},{path:"/unswers",name:"unswers",component:B},{path:"/works",name:"works",component:z},{path:"/news",name:"news",component:j},{path:"/bonuses",name:"bonuses",component:P},{path:"/chat/:id",name:"chat",component:y},{path:"/project",name:"project",component:S},{path:"/",name:"home",component:v}]});s("qb6w"),s("Bb4J");n.a.config.productionTip=!1;new n.a({el:"#app",router:ct,store:it,components:{App:u},template:"<App/>"})},PxhD:function(t,e){},QvAg:function(t,e){},StNY:function(t,e){},VCMU:function(t,e){},norF:function(t,e){},"o1/b":function(t,e){},qb6w:function(t,e){},weTe:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2ab2dcdd96759a39888f.js.map