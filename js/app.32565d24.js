(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},r=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"03ae":function(t,e,s){"use strict";var n=s("70d0"),a=s.n(n);a.a},"11ac":function(t,e,s){"use strict";var n=s("1c1f"),a=s.n(n);a.a},"1c1f":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("a026"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"fade"}},[s("router-view",{attrs:{id:"section"}})],1),s("Header"),s("Toast"),t.loading&&t.shouldShowLoading?s("div",{staticClass:"app-loading"},[s("ProgressView")],1):t._e()],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("Menu")],1)},o=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu flex-row items-center"},t._l(t.items,function(e){return s("div",{key:e.name,staticClass:"flex-fill"},[s("div",{staticClass:"menu-item slow-hover",class:{selected:e.name===t.selected.name},on:{click:function(s){return t.onClickMenu(e)}}},[t._v("\n            "+t._s(e.name)),s("span",{staticClass:"c-vscode-text"},[t._v("()")])])])}),0)},l=[],u=(s("7514"),s("7f7f"),{name:"Menu",data:function(){return{selected:{}}},computed:{items:function(){return[{name:"about"},{name:"techs"},{name:"projects"},{name:"post"}]}},methods:{onClickMenu:function(t){this.selected=t,this.$router.push({name:t.name})}},mounted:function(){var t=this;this.selected=this.items.find(function(e){return e.name.toLowerCase()===t.$route.name.toLowerCase()})}}),d=u,p=s("2877"),m=Object(p["a"])(d,c,l,!1,null,null,null),v=m.exports,f={name:"Header",components:{Menu:v}},h=f,g=Object(p["a"])(h,i,o,!1,null,null,null),b=g.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-down"}},[t.toast.show?s("div",{staticClass:"toast-wrapper"},[s("div",{staticClass:"toast shadow",class:{"bgm-green":"success"===t.toast.type,"bgm-red":"error"===t.toast.type},on:{click:function(e){return e.stopPropagation(),t.toastClicked(e)}}},[s("div",{domProps:{innerHTML:t._s(t.html)}}),"dismiss"===t.toast.type?s("i",{staticClass:"zmdi zmdi-close",on:{click:t.dismiss}}):t._e()])]):t._e()])},_=[],y=(s("a481"),{methods:{dismiss:function(){this.$store.dispatch("removeToast")},toastClicked:function(){}},computed:{showToast:function(){return this.toast.show},toast:function(){return this.$store.getters.toast},html:function(){if(this.toast.message)return this.$translate(this.toast.message).replace(/\n/g,"<br>")}},watch:{showToast:function(){var t=this;if(this.toast.show)switch(this.toastTimeout&&clearTimeout(this.toastTimeout),this.toast.type){case"dismiss":break;default:this.toastTimeout=setTimeout(function(){t.$store.dispatch("removeToast")},1500)}}}}),C=y,k=Object(p["a"])(C,w,_,!1,null,"75a12d46",null),x=k.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("Preloader")],1)},j=[],O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"preloader-wrapper small active"},[s("div",{staticClass:"spinner-layer"},[s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])])])}],T={},A=Object(p["a"])(T,O,P,!1,null,null,null),R=A.exports,L={components:{Preloader:R}},M=L,E=(s("949a"),Object(p["a"])(M,S,j,!1,null,"0db84384",null)),I=E.exports,$={name:"App",components:{Header:b,Toast:x,ProgressView:I},data:function(){return{shouldShowLoading:!1}},watch:{loading:function(){var t=this;this.shouldShowLoading=!1,this.loading&&setTimeout(function(){t.shouldShowLoading=!0},150)}},computed:{loading:function(){return this.$store.getters.loading}}},H=$,W=(s("7c55"),Object(p["a"])(H,a,r,!1,null,null,null)),G=W.exports,N=s("8c4f"),D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h2",{staticClass:"c-vscode-template m-b-8"},[t._v("Profile")]),s("div",{staticClass:"profile m-b-24 p-8"},t._l(t.profile,function(e){return s("div",{key:e.key,staticClass:"m-b-8"},[s("span",{staticClass:"c-vscode-key"},[t._v(t._s(e.key)+":")]),s("span",{staticClass:"c-vscode-string m-l-8"},[t._v(t._s(e.value))])])}),0),s("h2",{staticClass:"c-vscode-template m-b-8"},[t._v("Intro")]),s("div",{staticClass:"c-vscode-text introduction p-8",domProps:{innerHTML:t._s(t.introduction)}})])},J=[],V={profile:'  <span class="c-vscode-function"><a target="_blank" href="https://golang.org/">Go</a></span>와 <span class="c-vscode-function"><a target="_blank" href="https://vuejs.org/">Vue</a></span>의 열렬한 팬이며, 하나의 서비스를 제공하기 위한 아키텍쳐 설계 & 개발 & 배포 & 서버 운영이 모두 가능한 <span class="c-vscode-function f-700"><a target="_blank" href="https://brunch.co.kr/@supims/17">풀스택 웹 개발자</a></span><span class="text-linethrough o-50 c-gray">잡부</span>입니다.\n\n  현재 주로 하는 일은 SPA (혹은 PWA) (+ 필요시 SSR) 및 백엔드 API 개발입니다.\n\n  DB조회하는 backoffice페이지 같은건 한나절이면 간단하게 만들고 백엔드와 연동가능할 정도로 수없이 만들어왔으며, REST API와의 연동용도로 개인적으로 제작해서 사용중인 테이블 프레임워크도 있습니다.(ng-table같은...)\n\n  orm, cache, transaction, router, controller, context, session, cron, auth... 등등 모던 웹에 필요한 요소들을 이해하고 있고 필요에 따라 어느 언어로든(ㄹㅇ?) 구현, 작성하고 완성된 서비스를 배포할 수 있습니다.\n\n  전통적인 SSR 언어들인 PHP, JSP 등이나, Nuxt와 같은 미들웨어를 통한 SSR 모두 익숙하며, SEO에 대한 이해가 있습니다.\n(prerender, dynamic render, ssr... 어떤 경우에 어떤 기법을 선택하는 것이 좋을지 생각해보셨나요?)\n\n  대학 시절 <span class="text-linethrough o-50 c-gray">혹독한 고문을 통해</span> 재귀적인 사고에도 익숙해져서 LISP 계통 언어도 잘 하는 편이며, 개인적으로는 커리어 중 하스켈이나 얼랭같은 함수형 언어를 쓸 기회가 꼭 있었으면 합니다. 특히나 LOL이나 왓츠앱의 채팅 서버에 사용되어 발군의 성능을 보여주고 있다는 Erlang으로 그정도 대규모 채팅 트래픽을 처리해볼 기회를 가져보고 싶습니다.\n\n  여가시간에는 개인적인 토이 프로젝트를 진행하거나 YouTube에서 computerphile, 포프tv등 관심분야의 영상들을 찾아보면서 좋은 개발자가 되기 위한 철학들이나 좋은 코딩습관, 학창시절 배웠던 알고리즘이나 컴퓨터 과학 이론들 등을 보고 배우고 익히는 복습하는 것을 즐깁니다.\n\n코딩할 때 항상 생각하는 것들 & 경험들:\n\n- 코드를 읽는 것 자체가 주석이 될 수 있을 정도의 직관적인 변수, 함수 네이밍.\n- 성능이 매우 중요한게 아니라면 함수콜이 늘어나더라도 로직을 최대한 잘게 쪼개서 보기좋게.\n- 두 군데 이상에서 사용되는 것이라면 함수로.\n- 내가 짠 코드를 나중에 남이 리팩토링하는 일이 최대한 없도록 하자.\n- 눈 앞에 닥친 일은 특정한 경우만을 처리하는 것일지라도, 케이스가 추가되는 경우를 위해 처음부터 generic하게 하는게 건강에 좋더라.\n- 서비스 규모가 커져서 이 함수가 나중에 몇십만번, 몇천만번 불려도 괜찮을까?\n- 내가 edge 케이스를 하나 더 떠올릴 때마다 회사의 QA 비용이 줄어든다.\n- 정의된 모델이 아닌 통계를 위한 값은 raw query 사용. 특히 ORM이 특정 필드만 가져오는 기능을 지원하지 않는 경우 더더욱.\n- 성능 문제가 크리티컬한 경우가 아니면 ORM + Query Builder를 쓰는게 유지보수는 편하더라.\n- query는 최소한으로 (n+1 문제 등은 가급적 절대 피해야 하기 때문에 습관적으로 배열을 대상으로 자식 모델들을 populate해주는 함수를 짜고(WHERE in), 이 함수를 wrapping해서 단일 대상을 populate하는 함수를 만드는 편.)\n- 음... Map을 쓸까 Array를 쓸까?\n\n같이 일하고 싶은 기획자나 디자이너는...\n\n- 개발을 조금은 아시면 분이면 좋겠습니다\n- 픽셀 단위까지 철저하신분\n- 디자인에 일관성이 있으신분 (일관성과 패턴만 있다면 디자인이나 기획이 자주 바뀌는 것은 상관없습니다.)\n- 어떤 기능이 왜 필요한지, 필요하다면 어떤게 긍정적 UX가 될지 고민하시는 분'},z={name:"about",computed:{introduction:function(){return V.profile},profile:function(){return[{key:"Love",value:"Rule, Protocols (Web, HTTP, JSON, POW, Music...) ..."},{key:"Lang",value:"Golang, Javascript, C"},{key:"Do",value:"Code, Sing, Compose, Game..."},{key:"Major",value:"CSE"},{key:"Education",value:"Seoul National University (2008 ~ 2016)"},{key:"Interested in",value:"Scalable Architecture"}]}}},B=z,Q=(s("5795"),Object(p["a"])(B,D,J,!1,null,null,null)),F=Q.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"techs"},t._l(t.techs,function(e,n){return s("div",{key:n,staticClass:"category m-b-24"},[s("span",{staticClass:"text-xl",class:e.class},[t._v(t._s(e.category))]),s("ul",{staticClass:"c-vscode-text p-l-16"},[t._l(e.items,function(e){return s("li",{key:e,staticClass:"f-16 m-b-5"},[t._v(t._s(e))])}),s("li",{staticClass:"f-16 m-b-5"},[t._v("...")])],2)])}),0)},q=[],X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"languages m-b-48"},[s("div",{staticClass:"m-b-16"},[s("span",{staticClass:"c-cyan"},[t._v("console")]),t._v("."),s("span",{staticClass:"c-yellow"},[t._v("log")]),t._v("()\n        ")]),s("div",{staticClass:"m-b-16"},[s("span",{staticClass:"c-primary"},[t._v("var_dump")]),t._v("()\n        ")]),s("div",{staticClass:"m-b-16"},[s("span",{staticClass:"c-gray"},[t._v("fmt")]),t._v("."),s("span",{staticClass:"c-yellow"},[t._v("Println")]),t._v("()\n        ")]),s("div",{staticClass:"m-b-16"},[s("span",{staticClass:"c-yellow"},[t._v("print")]),t._v("()\n        ")]),s("div",{staticClass:"m-b-16"},[s("span",{staticClass:"c-red"},[t._v("printf")]),t._v("()\n        ")]),s("div",{staticClass:"m-b-16"},[s("span",{staticClass:"c-green"},[t._v("System")]),t._v("."),s("span",{staticClass:"c-blue"},[t._v("out")]),t._v("."),s("span",{staticClass:"c-yellow"},[t._v("println")]),t._v("()\n        ")])]),s("div",{staticClass:"devops"},[s("div",{staticClass:"m-b-16",staticStyle:{"font-family":"Gulim"}},[t._v("It Works!")]),s("div",{staticClass:"m-b-16",staticStyle:{"font-family":"Gulim"}},[t._v("Welcome to nginx!")]),s("div",{staticClass:"vue bgm-black p-16",staticStyle:{"font-family":"Gulim"}},[s("div",{staticClass:"m-b-40"},[s("span",{staticClass:"p-5 m-r-16 bgm-green"},[t._v("DONE")]),s("span",{staticClass:"c-green"},[t._v("Compiled successfully in 177ms")])]),s("div",{staticClass:"p-16"},[s("div",{staticClass:"c-white m-b-5"},[t._v("App runing at:")]),s("div",{staticClass:"flex-row"},[s("div",{staticClass:"flex-wrap c-white",staticStyle:{width:"160px"}},[t._v("- Local:")]),s("div",{staticClass:"c-cyan"},[t._v("http://localhost:8080/")])]),s("div",{staticClass:"flex-row"},[s("div",{staticClass:"flex-wrap c-white",staticStyle:{width:"160px"}},[t._v("- Network:")]),s("div",{staticClass:"c-cyan"},[t._v("http://1.2.3.4:8080/")])])])])])])}],K={name:"Home",components:{}},Z=K,tt=(s("03ae"),Object(p["a"])(Z,X,Y,!1,null,null,null)),et=tt.exports,st={name:"techs",components:{Home:et},computed:{techs:function(){return[{class:"c-vscode-template",category:"Backend",items:["golang (beego)","java (spring)","php (laravel, ci)","python (django)","node (express)"]},{class:"c-accent",category:"Frontend",items:["javascript (vue, angular)","webpack","nuxt","websocket"]},{class:"c-blue",category:"Publishing",items:["html5","css","less","sass"]},{class:"c-pink",category:"Design Pattern",items:["oop","mv(w)","flux","prototype","composition"]},{class:"c-teal",category:"DevOps",items:["aws","apache","nginx","git","mysql","redis","pm2","supervisor","phinx","zsh","docker","jenkins"]},{class:"c-orange",category:"Language EXP",items:["c","c++","basic (vb)","java","golang","prolog","lisp","ocaml","python","javascript","php","html","asm"]}]}}},nt=st,at=(s("11ac"),Object(p["a"])(nt,U,q,!1,null,"45cd7ed4",null)),rt=at.exports,it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projects"},[s("div",{staticClass:"p-8"},t._l(t.items,function(e){return s("div",{key:e.title,staticClass:"project m-b-24"},[s("h3",{staticClass:"c-vscode-template",class:{"text-linethrough":e.deprecated}},[t._v(t._s(e.title)+" ("+t._s(e.period)+")")]),s("div",{staticClass:"p-8"},[s("div",{staticClass:"c-vscode-key"},[t._v(t._s(e.desc))]),s("div",{staticClass:"c-vscode-string"},[t._v(t._s(e.charge))]),s("div",{staticClass:"c-vscode-text"},[t._v(t._s(e.tech))]),s("div",t._l(e.links,function(e){return s("a",{key:e,staticClass:"c-vscode-function text-underline display-table",attrs:{target:"_blank",href:e}},[t._v("\n                        "+t._s(e)+"\n                    ")])}),0)])])}),0),s("div",{staticClass:"social"},[s("transition-group",{attrs:{name:"list"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showSocial,expression:"!showSocial"}],key:0,staticClass:"c-vscode-function pointer-cursor text-underline",on:{click:function(e){t.showSocial=!0}}},[t._v("아직 내가 머신러닝보다 잘하는 것들")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showSocial,expression:"showSocial"}],key:1},[s("i",{staticClass:"zmdi zmdi-close pointer-cursor",on:{click:function(e){t.showSocial=!1}}}),t._l(t.socialItems,function(e){return s("div",{key:e.link,staticClass:"item m-b-16"},[s("a",{staticClass:"c-vscode-function text-underline display-block m-b-8",attrs:{target:"_blank",href:e.link}},[t._v("\n                        "+t._s(e.link)+"\n                    ")]),s("div",{staticClass:"limited-width c-vscode-text",domProps:{innerHTML:t._s(e.desc)}})])})],2)])],1)])},ot=[],ct={name:"projects",data:function(){return{showSocial:!1}},computed:{items:function(){return[{period:"2019-01 ~",type:"personal",title:"MAPLETs",desc:"메이플스토리 유틸리티, 시뮬레이터들 및 커뮤니티",charge:"기획 / 디자인 / 개발 / 배포",tech:"Vue / Go / MySQL / Redis / Websocket / GA",links:["http://maplets.kispi.net/"]},{period:"2019-04 ~",type:"job",title:"Vanillabridge",desc:"주선자가 해주는 진짜 소개팅! 바닐라브릿지입니다",charge:"바닐라브릿지 앱, 주선자용 웹 앱, CS용 Admin PWA 개발",tech:"Ionic / Vue / ROR / Go / Firebase"},{period:"2018-01 ~ 2019-04",type:"job",title:"TokoTalk",desc:"인도네시아 소상공인들을 대상으로 한 E-Commerce 솔루션",charge:"Go, AngularJS, Vue를 이용한 풀스택 (Frontend, RestAPI) 개발",links:["https://tokoadmin.tokotalk.com/","https://shop.tokotalk.com/"]},{period:"2017-05 ~ 2017-12",deprecated:!0,type:"job",title:"Porter",desc:"인도네시아 물류 배달 앱",charge:"PHP (Laravel), 안드로이드 유지 보수"},{period:"2016-05 ~ 2016-08",type:"job",title:"Fanmaum",charge:"PHP (Codeignitor) 개발",tech:"PHP / MySQL / JQuery / Docker",links:["https://fanmaum.com/"]}]},socialItems:function(){return[{link:"https://github.com/kispi",desc:"진지하게 하는 프로젝트들부터 장난감들까지 다 있습니다. 잘 찾아보면 보물이 있을수도(!)"},{link:"https://blog.naver.com/kispi",desc:"20대 초반까지 클래식에 미쳐있었을 때 열심히 하던 블로그입니다."}]}}},lt=ct,ut=(s("9f6b"),Object(p["a"])(lt,it,ot,!1,null,null,null)),dt=ut.exports,pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container"},[s("div",{staticClass:"c-vscode-string"},[t._v("COMING SOON")])])}],vt={name:"post"},ft=vt,ht=Object(p["a"])(ft,pt,mt,!1,null,null,null),gt=ht.exports;n["a"].use(N["a"]);var bt=new N["a"]({routes:[{path:"/about",name:"about",component:F},{path:"/techs",name:"techs",component:rt},{path:"/projects",name:"projects",component:dt},{path:"/post",name:"post",component:gt},{path:"/",name:"about",component:F}],mode:"history"}),wt=s("2f62"),_t=(s("96cf"),s("3b8d")),yt={toast:{message:null,type:null,show:!1},loading:!1,background:window.localStorage.getItem("background")||"show",chat:window.localStorage.getItem("chat")||"show",selectedArcaneRiverArea:window.localStorage.getItem("selectedArcaneRiverArea")||"vanishing_road",users:[],userWhisperedToMe:null},Ct={toast:function(t){return t.toast},loading:function(t){return t.loading},selectedArcaneRiverArea:function(t){return t.selectedArcaneRiverArea},chat:function(t){return t.chat},background:function(t){return t.background},users:function(t){return t.users},userWhisperedToMe:function(t){return t.userWhisperedToMe}},kt={setToast:function(){var t=Object(_t["a"])(regeneratorRuntime.mark(function t(e,s){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,s.show=!0,t.abrupt("return",n("setToast",s));case 3:case"end":return t.stop()}},t)}));function e(e,s){return t.apply(this,arguments)}return e}(),removeToast:function(){var t=Object(_t["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,t.abrupt("return",s("setToast",{show:!1}));case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),setLoading:function(){var t=Object(_t["a"])(regeneratorRuntime.mark(function t(e,s){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.abrupt("return",n("setLoading",s));case 2:case"end":return t.stop()}},t)}));function e(e,s){return t.apply(this,arguments)}return e}()},xt={setChat:function(t,e){-1!==["show","hide"].indexOf(e)&&(t.chat=e,window.localStorage.setItem("chat",t.chat))},background:function(t,e){-1!==["show","hide"].indexOf(e)&&(t.background=e,window.localStorage.setItem("background",t.background))},updateUsersList:function(t,e){e&&(t.users=e)},setUserWhisperedToMe:function(t,e){e&&(t.userWhisperedToMe=e)},setToast:function(t,e){e?(void 0!==e.type&&(t.toast.type=e.type),void 0!==e.message&&(t.toast.message=e.message),void 0!==e.show&&(t.toast.show=e.show)):t={toast:{message:null,type:null,show:!1}}},setArcaneRiverArea:function(t,e){void 0!==e&&(t.selectedArcaneRiverArea=e.value,window.localStorage.setItem("selectedArcaneRiverArea",t.selectedArcaneRiverArea))},setLoading:function(t,e){void 0!==e&&(t.loading=e)}},St={state:yt,getters:Ct,actions:kt,mutations:xt},jt={translation:function(t){return t.translation}},Ot={setTranslation:function(t,e){e&&void 0!==e.locale&&(t.translation.locale=e.locale,window.localStorage.setItem("locale",e.locale))}},Pt=!1,Tt={setLocale:function(){var t=Object(_t["a"])(regeneratorRuntime.mark(function t(e,s){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,e.dispatch,window.localStorage.setItem("locale",s),t.abrupt("return",n("setTranslation",{locale:s}));case 3:case"end":return t.stop()}},t)}));function e(e,s){return t.apply(this,arguments)}return e}(),loadLocale:function(){var t=Object(_t["a"])(regeneratorRuntime.mark(function t(e,s){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,e.dispatch,!Pt){t.next=3;break}return t.abrupt("return");case 3:return Pt=!0,s||(s=window.localStorage.getItem("locale")||"id"),t.abrupt("return",n("setTranslation",{locale:s}));case 6:case"end":return t.stop()}},t)}));function e(e,s){return t.apply(this,arguments)}return e}()},At=s("b9a8"),Rt=["kr","en"],Lt="kr",Mt=window.localStorage.getItem("locale");-1!==Rt.indexOf(Mt)?Lt=Mt:window.localStorage.setItem("locale",Lt);var Et={state:{translation:{locale:Lt,texts:At}},getters:jt,mutations:Ot,actions:Tt};n["a"].use(wt["a"]);var It=new wt["a"].Store({modules:{App:St,Translation:Et}});s("6e0c"),n["a"].config.productionTip=!1,new n["a"]({router:bt,store:It,render:function(t){return t(G)}}).$mount("#app")},5795:function(t,e,s){"use strict";var n=s("7513"),a=s.n(n);a.a},"5c48":function(t,e,s){},"6e0c":function(t,e,s){},"70d0":function(t,e,s){},7513:function(t,e,s){},"7c55":function(t,e,s){"use strict";var n=s("5c48"),a=s.n(n);a.a},"949a":function(t,e,s){"use strict";var n=s("b3cd"),a=s.n(n);a.a},"9f6b":function(t,e,s){"use strict";var n=s("d4a6"),a=s.n(n);a.a},b3cd:function(t,e,s){},b9a8:function(t){t.exports={BOARD:{en:"Board",kr:"게시판"}}},d4a6:function(t,e,s){}});
//# sourceMappingURL=app.32565d24.js.map