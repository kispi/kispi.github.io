(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)o=i[p],a[o]&&d.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03ae":function(t,e,n){"use strict";var s=n("70d0"),a=n.n(s);a.a},"245b":function(t,e,n){},3362:function(t,e,n){"use strict";var s=n("245b"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[n("router-view",{attrs:{id:"section"}})],1),n("Header"),n("Toast"),t.loading&&t.shouldShowLoading?n("div",{staticClass:"app-loading"},[n("ProgressView")],1):t._e()],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("Menu")],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu flex-row items-center"},t._l(t.items,function(e){return n("div",{key:e.name,staticClass:"flex-fill"},[n("div",{staticClass:"menu-item slow-hover",class:{selected:e.name===t.selected.name},on:{click:function(n){return t.onClickMenu(e)}}},[t._v("\n            "+t._s(e.name)+"\n        ")])])}),0)},l=[],u=(n("7514"),n("7f7f"),{name:"Menu",data:function(){return{selected:{}}},computed:{items:function(){return[{name:"About"},{name:"Techs"},{name:"Projects"},{name:"Post"}]}},methods:{onClickMenu:function(t){this.selected=t,this.$router.push({name:t.name})}},mounted:function(){var t=this;this.selected=this.items.find(function(e){return e.name.toLowerCase()===t.$route.name.toLowerCase()})}}),p=u,d=n("2877"),m=Object(d["a"])(p,c,l,!1,null,null,null),f=m.exports,v={name:"Header",components:{Menu:f}},h=v,g=Object(d["a"])(h,o,i,!1,null,null,null),w=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[t.toast.show?n("div",{staticClass:"toast-wrapper"},[n("div",{staticClass:"toast shadow",class:{"bgm-green":"success"===t.toast.type,"bgm-red":"error"===t.toast.type},on:{click:function(e){return e.stopPropagation(),t.toastClicked(e)}}},[n("div",{domProps:{innerHTML:t._s(t.html)}}),"dismiss"===t.toast.type?n("i",{staticClass:"zmdi zmdi-close",on:{click:t.dismiss}}):t._e()])]):t._e()])},_=[],y=(n("a481"),{methods:{dismiss:function(){this.$store.dispatch("removeToast")},toastClicked:function(){}},computed:{showToast:function(){return this.toast.show},toast:function(){return this.$store.getters.toast},html:function(){if(this.toast.message)return this.$translate(this.toast.message).replace(/\n/g,"<br>")}},watch:{showToast:function(){var t=this;if(this.toast.show)switch(this.toastTimeout&&clearTimeout(this.toastTimeout),this.toast.type){case"dismiss":break;default:this.toastTimeout=setTimeout(function(){t.$store.dispatch("removeToast")},1500)}}}}),C=y,x=Object(d["a"])(C,b,_,!1,null,"75a12d46",null),k=x.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("Preloader")],1)},j=[],T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preloader-wrapper small active"},[n("div",{staticClass:"spinner-layer"},[n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])])])}],P={},A=Object(d["a"])(P,T,O,!1,null,null,null),R=A.exports,$={components:{Preloader:R}},E=$,L=(n("949a"),Object(d["a"])(E,S,j,!1,null,"0db84384",null)),M=L.exports,I={name:"App",components:{Header:w,Toast:k,ProgressView:M},data:function(){return{shouldShowLoading:!1}},watch:{loading:function(){var t=this;this.shouldShowLoading=!1,this.loading&&setTimeout(function(){t.shouldShowLoading=!0},150)}},computed:{loading:function(){return this.$store.getters.loading}}},H=I,W=(n("7c55"),Object(d["a"])(H,a,r,!1,null,null,null)),B=W.exports,D=n("8c4f"),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"introduction",domProps:{innerHTML:t._s(t.introduction)}})])},q=[],z={profile:'<span class="c-primary"><a target="_blank" href="https://golang.org/">Go</a></span>와 <span class="c-accent"><a target="_blank" href="https://vuejs.org/">Vue</a></span>의 열렬한 팬이며, 하나의 서비스를 제공하기 위한 아키텍쳐 설계 & 개발 & 배포 & 서버 운영이 모두 가능한 <span class="c-orange f-700"><a target="_blank" href="https://brunch.co.kr/@supims/17">풀스택 웹 개발자</a></span><span class="text-linethrough o-50 c-gray">잡부</span>입니다.\n\n현재 주로 하는 일은 SPA (혹은 PWA) (+ 필요시 SSR) 및 백엔드 API 개발입니다.\n\nDB조회하는 backoffice페이지 같은건 한나절이면 간단하게 만들고 백엔드와 연동가능할 정도로 수없이 만들어왔으며, REST API와의 연동용도로 개인적으로 제작해서 사용중인 테이블 프레임워크도 있습니다.(ng-table같은...)\n\norm, cache, transaction, router, controller, context, session, cron, auth... 등등 모던 웹에 필요한 요소들을 이해하고 있고 필요에 따라 어느 언어로든(ㄹㅇ?) 구현, 작성하고 완성된 서비스를 배포할 수 있습니다.\n\n전통적인 SSR 언어들인 PHP, JSP 등이나, Nuxt와 같은 미들웨어를 통한 SSR 모두 익숙하며, SEO에 대한 이해가 있습니다.\n(prerender, dynamic render, ssr... 어떤 경우에 어떤 기법을 선택하는 것이 좋을지 생각해보셨나요?)\n\n대학 시절 <span class="text-linethrough o-50 c-gray">혹독한 고문을 통해</span> 재귀적인 사고에도 익숙해져서 LISP 계통 언어도 잘 하는 편이며, 개인적으로는 커리어 중 하스켈이나 얼랭같은 함수형 언어를 쓸 기회가 꼭 있었으면 합니다. 특히나 LOL이나 왓츠앱의 채팅 서버에 사용되어 발군의 성능을 보여주고 있다는 Erlang으로 그정도 대규모 채팅 트래픽을 처리해볼 기회를 가져보고 싶습니다.\n\n여가시간에는 개인적인 토이 프로젝트를 진행하거나 YouTube에서 computerphile, 포프tv등 관심분야의 영상들을 찾아보면서 좋은 개발자가 되기 위한 철학들이나 좋은 코딩습관, 학창시절 배웠던 알고리즘이나 컴퓨터 과학 이론들 등을 보고 배우고 익히는 복습하는 것을 즐깁니다.\n\n코딩할 때 항상 생각하는 것들 & 경험들:\n- 코드를 읽는 것 자체가 주석이 될 수 있을 정도의 직관적인 변수, 함수 네이밍.\n- 성능이 매우 중요한게 아니라면 함수콜이 늘어나더라도 로직을 최대한 잘게 쪼개서 보기좋게.\n- 두 군데 이상에서 사용되는 것이라면 함수로.\n- 내가 짠 코드를 나중에 남이 리팩토링하는 일이 최대한 없도록 하자.\n- 눈 앞에 닥친 일은 특정한 경우만을 처리하는 것일지라도, 케이스가 추가되는 경우를 위해 처음부터 generic하게 하는게 건강에 좋더라.\n- 서비스 규모가 커져서 이 함수가 나중에 몇십만번, 몇천만번 불려도 괜찮을까?\n- 내가 edge 케이스를 하나 더 떠올릴 때마다 회사의 QA 비용이 줄어든다.\n- 정의된 모델이 아닌 통계를 위한 값은 raw query를 쓰는게 낫더라. 특히 ORM이 특정 필드만 가져오는 기능을 지원하지 않는 경우 더더욱.\n- 성능 문제가 크리티컬한 경우가 아니면 ORM + Query Builder를 쓰는게 유지보수는 편하더라\n- query는 최소한으로 (n+1 문제 등은 가급적 절대 피해야 하기 때문에 습관적으로 배열을 대상으로 자식 모델들을 populate해주는 함수를 짜고(WHERE in), 단일 대상을 populate하는 함수는 앞 함수를 wrapping해서 만드는 편.)\n\n같이 일하고 싶은 기획자나 디자이너는...\n- 개발을 조금은 아시면 분이면 좋겠습니다\n- 픽셀 단위까지 철저하신분\n- 디자인에 일관성이 있으신분 (일관성과 패턴만 있다면 디자인이나 기획이 자주 바뀌는 것은 상관없습니다.)\n- 어떤 기능이 왜 필요한지, 필요하다면 어떤게 긍정적 UX가 될지 고민하시는 분'},J={name:"About",computed:{introduction:function(){return z.profile}}},N=J,U=(n("5795"),Object(d["a"])(N,G,q,!1,null,null,null)),V=U.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"techs"},t._l(t.techs,function(e,s){return n("div",{key:s,staticClass:"category m-b-24"},[n("span",{staticClass:"text-xl",class:e.class},[t._v(t._s(e.category))]),n("ul",{staticClass:"p-l-16"},[t._l(e.items,function(e){return n("li",{key:e,staticClass:"f-16 m-b-5"},[t._v(t._s(e))])}),n("li",{staticClass:"f-16 m-b-5"},[t._v("...")])],2)])}),0)},X=[],F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"languages m-b-48"},[n("div",{staticClass:"m-b-16"},[n("span",{staticClass:"c-cyan"},[t._v("console")]),t._v("."),n("span",{staticClass:"c-yellow"},[t._v("log")]),t._v("()\n        ")]),n("div",{staticClass:"m-b-16"},[n("span",{staticClass:"c-primary"},[t._v("var_dump")]),t._v("()\n        ")]),n("div",{staticClass:"m-b-16"},[n("span",{staticClass:"c-gray"},[t._v("fmt")]),t._v("."),n("span",{staticClass:"c-yellow"},[t._v("Println")]),t._v("()\n        ")]),n("div",{staticClass:"m-b-16"},[n("span",{staticClass:"c-yellow"},[t._v("print")]),t._v("()\n        ")]),n("div",{staticClass:"m-b-16"},[n("span",{staticClass:"c-red"},[t._v("printf")]),t._v("()\n        ")]),n("div",{staticClass:"m-b-16"},[n("span",{staticClass:"c-green"},[t._v("System")]),t._v("."),n("span",{staticClass:"c-blue"},[t._v("out")]),t._v("."),n("span",{staticClass:"c-yellow"},[t._v("println")]),t._v("()\n        ")])]),n("div",{staticClass:"devops"},[n("div",{staticClass:"m-b-16",staticStyle:{"font-family":"Gulim"}},[t._v("It Works!")]),n("div",{staticClass:"m-b-16",staticStyle:{"font-family":"Gulim"}},[t._v("Welcome to nginx!")]),n("div",{staticClass:"vue bgm-black p-16",staticStyle:{"font-family":"Gulim"}},[n("div",{staticClass:"m-b-40"},[n("span",{staticClass:"p-5 m-r-16 bgm-green"},[t._v("DONE")]),n("span",{staticClass:"c-green"},[t._v("Compiled successfully in 177ms")])]),n("div",{staticClass:"p-16"},[n("div",{staticClass:"c-white m-b-5"},[t._v("App runing at:")]),n("div",{staticClass:"flex-row"},[n("div",{staticClass:"flex-wrap c-white",staticStyle:{width:"160px"}},[t._v("- Local:")]),n("div",{staticClass:"c-cyan"},[t._v("http://localhost:8080/")])]),n("div",{staticClass:"flex-row"},[n("div",{staticClass:"flex-wrap c-white",staticStyle:{width:"160px"}},[t._v("- Network:")]),n("div",{staticClass:"c-cyan"},[t._v("http://1.2.3.4:8080/")])])])])])])}],K={name:"Home",components:{}},Z=K,tt=(n("03ae"),Object(d["a"])(Z,F,Y,!1,null,null,null)),et=tt.exports,nt={name:"Techs",components:{Home:et},computed:{techs:function(){return[{category:"Backend",items:["golang (beego)","java (spring)","php (laravel, ci)","python (django)","node (express)"]},{class:"c-accent",category:"Frontend",items:["javascript (vue, angular)","webpack","nuxt","websocket"]},{class:"c-blue",category:"Puslishing",items:["html5","css","less","sass"]},{class:"c-pink",category:"Design Pattern",items:["oop","mv(w)","flux","prototype","composition"]},{class:"c-teal",category:"DevOps",items:["aws","apache","nginx","git","mysql","redis","pm2","supervisor","phinx","zsh","docker","jenkins"]},{class:"c-orange",category:"Language EXP",items:["c","c++","basic (vb)","java","golang","prolog","lisp","ocaml","python","javascript","php","html","asm"]}]}}},st=nt,at=(n("3362"),Object(d["a"])(st,Q,X,!1,null,"f6f6505c",null)),rt=at.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects"},[t._v("\n    Projects\n")])},it=[],ct={name:"Projects"},lt=ct,ut=Object(d["a"])(lt,ot,it,!1,null,null,null),pt=ut.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("ul",t._l(t.posts,function(e){return n("li",{key:e},[t._v("\n            "+t._s(e)+"\n        ")])}),0)])},mt=[],ft={name:"Post",computed:{posts:function(){return["a","b","c"]}}},vt=ft,ht=Object(d["a"])(vt,dt,mt,!1,null,null,null),gt=ht.exports;s["a"].use(D["a"]);var wt=new D["a"]({routes:[{path:"/about",name:"About",component:V},{path:"/techs",name:"Techs",component:rt},{path:"/projects",name:"Projects",component:pt},{path:"/post",name:"Post",component:gt},{path:"/",name:"About",component:V}],mode:"history"}),bt=n("2f62"),_t=(n("96cf"),n("3b8d")),yt={toast:{message:null,type:null,show:!1},loading:!1,background:window.localStorage.getItem("background")||"show",chat:window.localStorage.getItem("chat")||"show",selectedArcaneRiverArea:window.localStorage.getItem("selectedArcaneRiverArea")||"vanishing_road",users:[],userWhisperedToMe:null},Ct={toast:function(t){return t.toast},loading:function(t){return t.loading},selectedArcaneRiverArea:function(t){return t.selectedArcaneRiverArea},chat:function(t){return t.chat},background:function(t){return t.background},users:function(t){return t.users},userWhisperedToMe:function(t){return t.userWhisperedToMe}},xt={setToast:function(){var t=Object(_t["a"])(regeneratorRuntime.mark(function t(e,n){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,n.show=!0,t.abrupt("return",s("setToast",n));case 3:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),removeToast:function(){var t=Object(_t["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.abrupt("return",n("setToast",{show:!1}));case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),setLoading:function(){var t=Object(_t["a"])(regeneratorRuntime.mark(function t(e,n){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,t.abrupt("return",s("setLoading",n));case 2:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()},kt={setChat:function(t,e){-1!==["show","hide"].indexOf(e)&&(t.chat=e,window.localStorage.setItem("chat",t.chat))},background:function(t,e){-1!==["show","hide"].indexOf(e)&&(t.background=e,window.localStorage.setItem("background",t.background))},updateUsersList:function(t,e){e&&(t.users=e)},setUserWhisperedToMe:function(t,e){e&&(t.userWhisperedToMe=e)},setToast:function(t,e){e?(void 0!==e.type&&(t.toast.type=e.type),void 0!==e.message&&(t.toast.message=e.message),void 0!==e.show&&(t.toast.show=e.show)):t={toast:{message:null,type:null,show:!1}}},setArcaneRiverArea:function(t,e){void 0!==e&&(t.selectedArcaneRiverArea=e.value,window.localStorage.setItem("selectedArcaneRiverArea",t.selectedArcaneRiverArea))},setLoading:function(t,e){void 0!==e&&(t.loading=e)}},St={state:yt,getters:Ct,actions:xt,mutations:kt},jt={translation:function(t){return t.translation}},Tt={setTranslation:function(t,e){e&&void 0!==e.locale&&(t.translation.locale=e.locale,window.localStorage.setItem("locale",e.locale))}},Ot=!1,Pt={setLocale:function(){var t=Object(_t["a"])(regeneratorRuntime.mark(function t(e,n){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,e.dispatch,window.localStorage.setItem("locale",n),t.abrupt("return",s("setTranslation",{locale:n}));case 3:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),loadLocale:function(){var t=Object(_t["a"])(regeneratorRuntime.mark(function t(e,n){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.commit,e.dispatch,!Ot){t.next=3;break}return t.abrupt("return");case 3:return Ot=!0,n||(n=window.localStorage.getItem("locale")||"id"),t.abrupt("return",s("setTranslation",{locale:n}));case 6:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()},At=n("b9a8"),Rt=["kr","en"],$t="kr",Et=window.localStorage.getItem("locale");-1!==Rt.indexOf(Et)?$t=Et:window.localStorage.setItem("locale",$t);var Lt={state:{translation:{locale:$t,texts:At}},getters:jt,mutations:Tt,actions:Pt};s["a"].use(bt["a"]);var Mt=new bt["a"].Store({modules:{App:St,Translation:Lt}});n("6e0c"),s["a"].config.productionTip=!1,new s["a"]({router:wt,store:Mt,render:function(t){return t(B)}}).$mount("#app")},5795:function(t,e,n){"use strict";var s=n("7513"),a=n.n(s);a.a},"5c48":function(t,e,n){},"6e0c":function(t,e,n){},"70d0":function(t,e,n){},7513:function(t,e,n){},"7c55":function(t,e,n){"use strict";var s=n("5c48"),a=n.n(s);a.a},"949a":function(t,e,n){"use strict";var s=n("b3cd"),a=n.n(s);a.a},b3cd:function(t,e,n){},b9a8:function(t){t.exports={BOARD:{en:"Board",kr:"게시판"}}}});
//# sourceMappingURL=app.53ef84ba.js.map