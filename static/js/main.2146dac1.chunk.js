(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports={container:"ChooseSide_container__13OGE",item:"ChooseSide_item__Lv1Ps",item__header:"ChooseSide_item__header__2GK9e",item__img:"ChooseSide_item__img__2sP8B",item__light:"ChooseSide_item__light__1n75I",item__dark:"ChooseSide_item__dark__3lqaj",item__neutral:"ChooseSide_item__neutral__2DyAi"}},function(e,t,n){e.exports={wrapper:"PersonFilms_wrapper__14Hfo",list__container:"PersonFilms_list__container__3OVZ9",list__item:"PersonFilms_list__item__UyrO0",item__episode:"PersonFilms_item__episode__13n_0",item__colon:"PersonFilms_item__colon__2c9sT",item__title:"PersonFilms_item__title__3HBdV"}},,function(e,t,n){e.exports={container:"PeopleNavigation_container__3ilms",link:"PeopleNavigation_link__1k3bm",button:"PeopleNavigation_button__2Cnef"}},function(e,t,n){e.exports={list__container:"SearchPageInfo_list__container__3u--S",list__item:"SearchPageInfo_list__item__273_k",person__photo:"SearchPageInfo_person__photo__3rcWu",person__name:"SearchPageInfo_person__name__1_a_5",person__comment:"SearchPageInfo_person__comment__1_F-H"}},,function(e,t,n){e.exports={wrapper:"PersonInfo_wrapper__2ZeQ0",list__container:"PersonInfo_list__container__RAMuk",list__item:"PersonInfo_list__item__3Qm2N",item__title:"PersonInfo_item__title__200Bk"}},,,,function(e,t,n){e.exports={container:"Favorite_container__22stZ",icon:"Favorite_icon__pWz0M",counter:"Favorite_counter__2qaH0"}},function(e,t,n){e.exports={container:"Header_container__1nRkE",logo:"Header_logo__2zFVg",list__container:"Header_list__container__2ESBm"}},function(e,t,n){e.exports={list__container:"PeopleList_list__container__Rpj8X",list__item:"PeopleList_list__item__2F1wi",person__photo:"PeopleList_person__photo__1iRde"}},function(e,t,n){e.exports={container:"PersonPhoto_container__1XdDW",photo:"PersonPhoto_photo__38Fjl",favorite:"PersonPhoto_favorite__kaFTV"}},function(e,t,n){e.exports={wrapper:"PersonPage_wrapper__1nSDF",person__name:"PersonPage_person__name__19r7_",container:"PersonPage_container__2MCYw"}},function(e,t,n){e.exports={input__wrapper:"SearchPage_input__wrapper__3OEx_",input__search:"SearchPage_input__search__2luQo",clear:"SearchPage_clear__21UaP"}},,,,,function(e,t,n){e.exports={link:"PersonLinkBack_link__1f6wx",link__img:"PersonLinkBack_link__img__phZjO"}},function(e,t,n){e.exports={img:"NotFoundPage_img__RdhxE",text:"NotFoundPage_text__29hBn"}},,,,function(e,t,n){e.exports={text:"ErrorMessage_text__h1a7G"}},,function(e,t,n){e.exports={loader:"Spinner_loader__NC6Nd",load4:"Spinner_load4__2HURS"}},function(e,t,n){e.exports={comment:"FavoritesPage_comment__1Uy8B"}},function(e,t,n){e.exports={wrapper:"App_wrapper__31O2b"}},,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(21),s=n.n(r),i=n(5),o=n(13),l=n(8),_=n(3),u=n(37),j=n(0),p="light",m="dark",d="neutral",b=c.a.createContext(),h=function(e){var t=e.children,n=Object(u.a)(e,["children"]),c=Object(a.useState)(null),r=Object(_.a)(c,2),s=r[0],i=r[1];return Object(j.jsx)(b.Provider,Object(l.a)(Object(l.a)({value:{theme:s,change:function(e){i(e),function(e){var t=document.querySelector("#root");["header","bgimage"].forEach((function(n){t.style.setProperty("--theme-default-".concat(n),"var(--theme-".concat(e,"-").concat(n,")"))}))}(e)}}},n),{},{children:t}))},O=function(){return Object(a.useContext)(b)},f=n(23),x=n(38),g="ADD_PERSON_TO_FAVORITE",v="REMOVE_PERSON_FROM_FAVORITE",N=function(e){var t=localStorage.getItem(e);return null!==t?JSON.parse(t):{}}("store"),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(l.a)(Object(l.a)({},e),t.payload);case v:var n=function(t){var n=JSON.parse(JSON.stringify(e));return delete n[t],n};return n(t.payload);default:return e}},S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.b,k=Object(f.c)(P,S(Object(f.a)(x.a)));k.subscribe((function(){var e,t;e="store",t=k.getState(),localStorage.setItem(e,JSON.stringify(t))}));var w=k,F=n(4),E=n.p+"static/media/icon-bookmark.b8ea379a.svg",y=n(24),C=n.n(y),I=function(){var e=Object(a.useState)(),t=Object(_.a)(e,2),n=t[0],c=t[1],r=Object(o.c)((function(e){return e}));return Object(a.useEffect)((function(){var e=Object.keys(r).length;e.toString().length>2?c("..."):c(e)}),[r]),Object(j.jsx)("div",{className:C.a.container,children:Object(j.jsxs)(i.b,{to:"/favorites",children:[Object(j.jsx)("span",{className:C.a.counter,children:n}),Object(j.jsx)("img",{className:C.a.icon,src:E,alt:"Favorites"})]})})},R=n.p+"static/media/icon-droid.f4dde376.svg",H=n.p+"static/media/icon-lightsaber.f080a71d.svg",A=n.p+"static/media/icon-space-station.d3b7bdae.svg",B=n(25),D=n.n(B),L=function(){var e=Object(a.useState)(R),t=Object(_.a)(e,2),n=t[0],c=t[1],r=O();return Object(a.useEffect)((function(){switch(r.theme){case p:c(H);break;case m:c(A);break;case d:c(R);break;default:c(R)}}),[r]),Object(j.jsxs)("div",{className:D.a.container,children:[Object(j.jsx)("img",{className:D.a.logo,src:n,alt:"Star Wars"}),Object(j.jsxs)("ul",{className:D.a.list__container,children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{to:"/",exact:!0,children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{to:"/people/?page=1",children:"People"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{to:"/search",children:"Search"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{to:"/not-found",exact:!0,children:"Not Found"})})]}),Object(j.jsx)(I,{})]})},M=n(6),T=n.n(M),V=n(12),G="http://",J="https://",U="swapi.dev/api/",W="people",X="/?page=",Z=function(){var e=Object(V.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((n=e.sent).ok){e.next=7;break}return console.error("Could not fetch.",n.status),e.abrupt("return",!1);case 7:return e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(0),console.error("Could not fetch.",e.t0.message),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),q=function(e){return e?e.replace(G,J):e},Q=function(){var e=Object(V.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return fetch(e).then((function(e){return e.json()}))})));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e){return function(e,t){return e.replace(G+U+t,"").replace(/\//g,"")}(e,W)},Y=function(e){return"".concat("https://starwars-visualguide.com/assets/img/characters","/").concat(e+".jpg")},K=function(e){var t=e.lastIndexOf(X),n=e.slice(t+X.length,e.length);return Number(n)},$=n(39),ee=n.n($),te=function(){return Object(j.jsxs)("p",{className:ee.a.text,children:["The dark side of the force has won.",Object(j.jsx)("br",{}),"We cannot display data.",Object(j.jsx)("br",{}),"Come back when we fix everything"]})},ne=function(e){return function(t){var n=Object(a.useState)(!1),c=Object(_.a)(n,2),r=c[0],s=c[1];return Object(j.jsx)(j.Fragment,{children:r?Object(j.jsx)(te,{}):Object(j.jsx)(e,Object(l.a)({setErrorApi:s},t))})}},ae=n(26),ce=n.n(ae),re=function(e){var t=e.people;return Object(j.jsx)("ul",{className:ce.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,a=e.img;return Object(j.jsx)("li",{className:ce.a.list__item,children:Object(j.jsxs)(i.b,{to:"/people/".concat(t),children:[Object(j.jsx)("img",{className:ce.a.person__photo,src:a,alt:n}),Object(j.jsx)("p",{children:n})]})},t)}))})},se=n(17),ie=n.n(se),oe=function(e){var t=e.getResource,n=e.currentPage,a=e.prevPage,c=e.nextPage;return Object(j.jsxs)("div",{className:ie.a.container,children:[Object(j.jsx)(i.b,{to:"/people/?page=".concat(n-1),className:ie.a.link,children:Object(j.jsx)("button",{onClick:function(){return t(a)},disabled:!a,className:ie.a.button,children:"Prev"})}),Object(j.jsx)(i.b,{to:"/people/?page=".concat(n+1),className:ie.a.link,children:Object(j.jsx)("button",{onClick:function(){return t(c)},disabled:!c,className:ie.a.button,children:"Next"})})]})},le=ne((function(e){var t=e.setErrorApi,n=Object(a.useState)(null),c=Object(_.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(1),o=Object(_.a)(i,2),l=o[0],u=o[1],p=Object(a.useState)(null),m=Object(_.a)(p,2),d=m[0],b=m[1],h=Object(a.useState)(null),O=Object(_.a)(h,2),f=O[0],x=O[1],g=new URLSearchParams(Object(F.g)().search).get("page"),v=function(){var e=Object(V.a)(T.a.mark((function e(n){var a,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(n);case 2:(a=e.sent)?(c=a.results.map((function(e){var t=e.name,n=e.url,a=z(n);return{id:a,name:t,img:Y(a)}})),s(c),u(K(n)),b(q(a.previous)),x(q(a.next)),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v("https://swapi.dev/api/people/?page="+g)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(oe,{getResource:v,currentPage:l,prevPage:d,nextPage:f}),r&&Object(j.jsx)(re,{people:r})]})})),_e=n.p+"static/media/light-side.eebc5217.jpg",ue=n.p+"static/media/dark-side.e0f8cab7.jpg",je=n.p+"static/media/falcon.c1d0a8d1.jpg",pe=n(40),me=n.n(pe),de=n(14),be=n.n(de),he=function(e){var t=e.classes,n=e.theme,a=e.text,c=e.img,r=O();return Object(j.jsxs)("div",{className:me()(be.a.item,t),onClick:function(){return r.change(n)},children:[Object(j.jsx)("div",{className:be.a.item__header,children:a}),Object(j.jsx)("img",{className:be.a.item__img,src:c,alt:a})]})},Oe=function(){var e=[{theme:p,text:"Light Side",img:_e,classes:be.a.item__light},{theme:m,text:"Dark Side",img:ue,classes:be.a.item__dark},{theme:d,text:"I'm Han Solo",img:je,classes:be.a.item__neutral}];return Object(j.jsx)("div",{className:be.a.container,children:e.map((function(e,t){var n=e.theme,a=e.text,c=e.img,r=e.classes;return Object(j.jsx)(he,{theme:n,text:a,img:c,classes:r},t)}))})},fe=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"header__text",children:"HomePage"}),Object(j.jsx)(Oe,{})]})},xe=n(22),ge=n.p+"static/media/icon-favorite.b44185b1.svg",ve=n.p+"static/media/icon-favorite-fill.22d132c5.svg",Ne=n(27),Pe=n.n(Ne),Se=function(e){var t=e.personId,n=e.personPhoto,a=e.personName,c=e.personFavorite,r=e.setPersonFavorite,s=Object(o.b)();return Object(j.jsxs)("div",{className:Pe.a.container,children:[Object(j.jsx)("img",{className:Pe.a.photo,src:n,alt:a}),Object(j.jsx)("img",{onClick:function(){var e;c?(s(function(e){return{type:v,payload:e}}(t)),r(!1)):(s((e=Object(xe.a)({},t,{name:a,img:n}),{type:g,payload:e})),r(!0))},className:Pe.a.favorite,src:c?ve:ge,alt:"Add to favorite"})]})},ke=n(20),we=n.n(ke),Fe=function(e){var t=e.personInfo;return Object(j.jsx)("div",{className:we.a.wrapper,children:Object(j.jsx)("ul",{className:we.a.list__container,children:t.map((function(e){var t=e.title,n=e.data;return n&&Object(j.jsxs)("li",{className:we.a.list__item,children:[Object(j.jsx)("span",{className:we.a.item__title,children:t}),": ",n]},t)}))})})},Ee=n(15),ye=n.n(Ee),Ce=function(e){var t=e.personFilms,n=Object(a.useState)([]),c=Object(_.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){Object(V.a)(T.a.mark((function e(){var n,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return q(e)})),e.next=3,Q(n);case 3:a=e.sent,s(a);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(j.jsx)("div",{className:ye.a.wrapper,children:Object(j.jsx)("ul",{className:ye.a.list__container,children:r.sort((function(e,t){return e.episode_id-t.episode_id})).map((function(e){var t=e.title,n=e.episode_id;return Object(j.jsxs)("li",{className:ye.a.list__item,children:[Object(j.jsxs)("span",{className:ye.a.item__episode,children:["Episode ",n]}),Object(j.jsx)("span",{className:ye.a.item__colon,children:":"}),Object(j.jsx)("span",{className:ye.a.item__title,children:t})]},n)}))})})},Ie=n(34),Re=n.n(Ie),He=n.p+"static/media/icon-back.c355dc83.svg",Ae=function(){var e=Object(F.f)();return Object(j.jsxs)("a",{href:"/",onClick:function(t){t.preventDefault(),e.goBack()},className:Re.a.link,children:[Object(j.jsx)("img",{className:Re.a.link__img,src:He,alt:"Go back"}),Object(j.jsx)("span",{children:"Go back"})]})},Be=n(41),De=n.n(Be),Le=function(){return Object(j.jsx)("div",{className:De.a.loader})},Me=n(28),Te=n.n(Me),Ve=ne((function(e){var t=e.match,n=e.setErrorApi,c=Object(a.useState)(null),r=Object(_.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(null),u=Object(_.a)(l,2),p=u[0],m=u[1],d=Object(a.useState)(null),b=Object(_.a)(d,2),h=b[0],O=b[1],f=Object(a.useState)(null),x=Object(_.a)(f,2),g=x[0],v=x[1],N=Object(a.useState)(null),P=Object(_.a)(N,2),S=P[0],k=P[1],w=Object(a.useState)(!1),F=Object(_.a)(w,2),E=F[0],y=F[1],C=Object(o.c)((function(e){return e}));return Object(a.useEffect)((function(){Object(V.a)(T.a.mark((function e(){var a,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.params.id,e.next=3,Z("".concat("https://swapi.dev/api/people","/").concat(a,"/"));case 3:c=e.sent,C[a]?y(!0):y(!1),i(a),c?(m([{title:"Height",data:c.height},{title:"Mass",data:c.mass},{title:"Hair Color",data:c.hair_color},{title:"Skin Color",data:c.skin_color},{title:"Eye Color",data:c.eye_color},{title:"Birth Year",data:c.birth_year},{title:"Gender",data:c.gender}]),O(c.name),v(Y(a)),c.films.length&&k(c.films),n(!1)):n(!0);case 7:case"end":return e.stop()}}),e)})))()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Ae,{}),Object(j.jsxs)("div",{className:Te.a.wrapper,children:[Object(j.jsx)("span",{className:Te.a.person__name,children:h}),Object(j.jsxs)("div",{className:Te.a.container,children:[Object(j.jsx)(Se,{personId:s,personPhoto:g,personName:h,personFavorite:E,setPersonFavorite:y}),p&&Object(j.jsx)(Fe,{personInfo:p}),S&&Object(j.jsx)(a.Suspense,{fallback:Object(j.jsx)(Le,{}),children:Object(j.jsx)(Ce,{personFilms:S})})]})]})]})})),Ge=n(18),Je=n.n(Ge),Ue=function(e){var t=e.people;return Object(j.jsx)(j.Fragment,{children:t.length?Object(j.jsx)("ul",{className:Je.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,a=e.img;return Object(j.jsx)("li",{className:Je.a.list__item,children:Object(j.jsxs)(i.b,{to:"/people/".concat(t),children:[Object(j.jsx)("img",{className:Je.a.person__photo,src:a,alt:n}),Object(j.jsx)("p",{className:Je.a.person__name,children:n})]})},t)}))}):Object(j.jsx)("h2",{className:Je.a.person__comment,children:"No results"})})},We=n.p+"static/media/icon-close.5ae511e9.svg",Xe=n(29),Ze=n.n(Xe),qe=ne((function(e){var t=e.setErrorApi,n=Object(a.useState)(""),c=Object(_.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)([]),o=Object(_.a)(i,2),l=o[0],u=o[1],p=function(){var e=Object(V.a)(T.a.mark((function e(n){var a,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z("https://swapi.dev/api/people/?search="+n);case 2:(a=e.sent)?(c=a.results.map((function(e){var t=e.name,n=e.url,a=z(n);return{id:a,name:t,img:Y(a)}})),u(c),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"header__text",children:"Search"}),Object(j.jsxs)("div",{className:Ze.a.input__wrapper,children:[Object(j.jsx)("input",{type:"text",value:r,onChange:function(e){s(e.target.value),p(e.target.value)},placeholder:"Input characters's name",className:Ze.a.input__search}),Object(j.jsx)("img",{src:We,className:Ze.a.clear,onClick:function(){r&&(s(""),u([]))},alt:"Clear"})]}),Object(j.jsx)(Ue,{people:l})]})})),Qe=n(35),ze=n.n(Qe),Ye=n.p+"static/media/not-found.1062f5e4.jpg",Ke=function(){var e=Object(F.g)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{src:Ye,className:ze.a.img,alt:"Page not found"}),Object(j.jsxs)("p",{className:ze.a.text,children:["No match for ",Object(j.jsx)("u",{children:e.pathname})]})]})},$e=n(42),et=n.n($e),tt=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1],r=Object(o.c)((function(e){return e}));return Object(a.useEffect)((function(){var e=Object.entries(r);if(e.length){var t=e.map((function(e){return Object(l.a)({id:e[0]},e[1])}));c(t)}}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"header__text",children:"Favorites Page"}),n.length?Object(j.jsx)(re,{people:n}):Object(j.jsx)("h2",{className:et.a.comment,children:"No data"})]})},nt=n(43),at=n.n(nt);var ct=function(){return Object(j.jsxs)("div",{className:at.a.wrapper,children:[Object(j.jsx)(L,{}),Object(j.jsxs)(F.c,{children:[Object(j.jsx)(F.a,{path:"/",exact:!0,component:fe}),Object(j.jsx)(F.a,{path:"/people",exact:!0,component:le}),Object(j.jsx)(F.a,{path:"/people/:id",exact:!0,component:Ve}),Object(j.jsx)(F.a,{path:"/search",exact:!0,component:qe}),Object(j.jsx)(F.a,{path:"/not-found",exact:!0,component:Ke}),Object(j.jsx)(F.a,{path:"/favorites",exact:!0,component:tt}),Object(j.jsx)(F.a,{path:"*",component:Ke})]})]})};n(59);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(o.a,{store:w,children:Object(j.jsx)(h,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(ct,{})})})})}),document.getElementById("root"))}],[[60,1,2]]]);
//# sourceMappingURL=main.2146dac1.chunk.js.map