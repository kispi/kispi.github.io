(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{248:function(n,t,e){var content=e(252);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(28).default)("652ec9a0",content,!0,{sourceMap:!1})},251:function(n,t,e){"use strict";var r=e(248);e.n(r).a},252:function(n,t,e){(n.exports=e(27)(!1)).push([n.i,".introduction{white-space:pre-wrap;font-size:16px;line-height:20px}",""])},258:function(n,t,e){"use strict";e.r(t);var r='<span class="c-primary"><a target="_blank" href="https://golang.org/">Go</a></span>와 <span class="c-accent"><a target="_blank" href="https://vuejs.org/">Vue</a></span>의 열렬한 팬이며, 하나의 서비스를 제공하기 위한 아키텍쳐 설계 & 개발 & 배포 & 서버 운영이 모두 가능한 <span class="c-orange f-700"><a target="_blank" href="https://brunch.co.kr/@supims/17">풀스택 웹 개발자</a></span><span class="text-linethrough">(잡부)</span>입니다.\n\n현재 주로 하는 일은 SPA (혹은 PWA) (+ 필요시 SSR) 및 백엔드 API 개발입니다.\n\nDB조회하는 backoffice페이지 같은건 한나절이면 간단하게 만들고 백엔드와 연동가능할 정도로 수없이 만들어왔으며, REST API와의 연동용도로 개인적으로 제작해서 사용중인 테이블 프레임워크도 있습니다.(ng-table같은...)\n\norm, cache, transaction, router, controller, context, session, cron, auth... 등등 모던 웹에 필요한 요소들을 이해하고 있고 필요에 따라 어느 언어로든(ㄹㅇ?) 구현, 작성하고 완성된 서비스를 배포할 수 있습니다.\n\n전통적인 SSR 언어들인 PHP, JSP 등이나, Nuxt와 같은 미들웨어를 통한 SSR 모두 익숙하며, SEO에 대한 이해가 있습니다.\n(prerender, dynamic render, ssr... 어떤 경우에 어떤 기법을 선택하는 것이 좋을지 생각해보셨나요?)\n\n대학 시절 <span class="text-linethrough c-red">혹독한 고문을 통해</span> 재귀적인 사고에도 익숙해져서 LISP 계통 언어도 잘 하는 편이며, 개인적으로는 커리어 중 하스켈이나 얼랭같은 함수형 언어를 쓸 기회가 꼭 있었으면 합니다. 특히나 LOL이나 왓츠앱의 채팅 서버에 사용되어 발군의 성능을 보여주고 있다는 Erlang으로 그정도 대규모 채팅 트래픽을 처리해볼 기회를 가져보고 싶습니다.\n\n여가시간에는 개인적인 토이 프로젝트를 진행하거나 YouTube에서 computerphile, 포프tv등 관심분야의 영상들을 찾아보면서 좋은 개발자가 되기 위한 철학들이나 좋은 코딩습관, 학창시절 배웠던 알고리즘이나 컴퓨터 과학 이론들 등을 보고 배우고 익히는 복습하는 것을 즐깁니다.\n\n코딩할 때 항상 생각하는 것들 & 경험들:\n- 코드를 읽는 것 자체가 주석이 될 수 있을 정도의 직관적인 변수, 함수 네이밍.\n- 성능이 매우 중요한게 아니라면 함수콜이 늘어나더라도 로직을 최대한 잘게 쪼개서 보기좋게.\n- 두 군데 이상에서 사용되는 것이라면 함수로.\n- 내가 짠 코드를 나중에 남이 리팩토링하는 일이 최대한 없도록 하자.\n- 눈 앞에 닥친 일은 특정한 경우만을 처리하는 것일지라도, 케이스가 추가되는 경우를 위해 처음부터 generic하게 하는게 건강에 좋더라.\n- 서비스 규모가 커져서 이 함수가 나중에 몇십만번, 몇천만번 불려도 괜찮을까?\n- 내가 edge 케이스를 하나 더 떠올릴 때마다 회사의 QA 비용이 줄어든다.\n- 정의된 모델이 아닌 통계를 위한 값은 raw query를 쓰는게 낫더라. 특히 ORM이 특정 필드만 가져오는 기능을 지원하지 않는 경우 더더욱.\n- 성능 문제가 크리티컬한 경우가 아니면 ORM + Query Builder를 쓰는게 유지보수는 편하더라\n- query는 최소한으로 (n+1 문제 등은 가급적 절대 피해야 하기 때문에 습관적으로 배열을 대상으로 자식 모델들을 populate해주는 함수를 짜고(WHERE in), 단일 대상을 populate하는 함수는 앞 함수를 wrapping해서 만드는 편.)\n\n같이 일하고 싶은 기획자나 디자이너는...\n- 개발을 조금은 아시면 분이면 좋겠습니다\n- 픽셀 단위까지 철저하신분\n- 디자인에 일관성이 있으신분 (일관성과 패턴만 있다면 디자인이나 기획이 자주 바뀌는 것은 상관없습니다.)\n- 어떤 기능이 왜 필요한지, 필요하다면 어떤게 긍정적 UX가 될지 고민하시는 분',o={layout:"BaseLayout",head:function(){return{title:"KiSPi - About",meta:[{content:"KiSPi - About"}]}},computed:{introduction:function(){return r}}},c=(e(251),e(2)),component=Object(c.a)(o,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"about"},[t("div",{staticClass:"introduction",domProps:{innerHTML:this._s(this.introduction)}})])},[],!1,null,null,null);t.default=component.exports}}]);