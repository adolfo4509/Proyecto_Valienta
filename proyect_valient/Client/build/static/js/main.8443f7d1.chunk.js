(this.webpackJsonpproyect_valient=this.webpackJsonpproyect_valient||[]).push([[0],{14:function(e,t,c){},5:function(e,t,c){"use strict";c.r(t),c.d(t,"GET_CHARACTERS",(function(){return o})),c.d(t,"GET_CHARACTERS_DETAILS",(function(){return l})),c.d(t,"GET_CLEAN_CHARACTERS_DETAILS",(function(){return d})),c.d(t,"GET_EPISODES",(function(){return j})),c.d(t,"GET_EPISODE",(function(){return p})),c.d(t,"GET_LOCATIONS",(function(){return u})),c.d(t,"GET_LOCATION",(function(){return b})),c.d(t,"getCharacters",(function(){return O})),c.d(t,"getCharactersDetails",(function(){return h})),c.d(t,"getCleanCharactersDetails",(function(){return m})),c.d(t,"filterCharacters",(function(){return x})),c.d(t,"getEpisodes",(function(){return f})),c.d(t,"getEpisode",(function(){return v})),c.d(t,"getLocations",(function(){return g})),c.d(t,"getLocation",(function(){return N}));var a=c(10),n=c.n(a),i=c(12),s=c(13),r=c.n(s),o="GET_CHARACTERS",l="GET_CHARACTERS_DETAILS",d="GET_CLEAN_CHARACTERS_DETAILS",j="GET_EPISODES",p="GET_EPISODE",u="GET_LOCATIONS",b="GET_LOCATION",O=function(){return function(){var e=Object(i.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.get("http://localhost:3001/api/character/character");case 3:return c=e.sent,e.abrupt("return",t({type:o,payload:c.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(n.a.mark((function t(c){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.get("http://localhost:3001/api/character/character/"+e);case 3:return a=t.sent,t.abrupt("return",c({type:l,payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return{type:d,payload:e}},x=function(){return{}},f=function(){return function(){var e=Object(i.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.get("http://localhost:3001/api/episode/episode/");case 3:return c=e.sent,e.abrupt("return",t({type:j,payload:c.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(n.a.mark((function t(c){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.get("https://rickandmortyapi.com/api/episode/".concat(e));case 3:return a=t.sent,t.abrupt("return",c({type:p,payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},g=function(){return function(){var e=Object(i.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.get("http://localhost:3001/api/location/location/");case 3:return c=e.sent,e.abrupt("return",t({type:u,payload:c.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(i.a)(n.a.mark((function t(c){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.get("https://rickandmortyapi.com/api/location/".concat(e));case 3:return a=t.sent,t.abrupt("return",c({type:b,payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(17),s=c.n(i),r=c(3),o=c(8),l=c(2),d=c(11),j=c(5),p=(c(14),c(0)),u=function(e){var t=Object(r.c)((function(e){return e.charactersLoad})),c=Object(r.b)(),n=Object(r.c)((function(e){return e.episode})),i=null===n||void 0===n?void 0:n.characters,s=Object(l.e)(),o=e.match.params.id;Object(a.useEffect)((function(){c(Object(j.getCharacters)()),c(Object(j.getEpisode)(o))}),[c,o]);var u=null===i||void 0===i?void 0:i.map((function(e){return 45===e.length?e.slice(-3):44===e.length?e.slice(-2):43===e.length?e.slice(-1):e})),b=[];if(void 0!==u)for(var O=0;O<t.length;O++)for(var h=0;h<u.length;h++){var m;parseInt(u[O])===(null===(m=t[O])||void 0===m?void 0:m.id)&&b.push(t[h])}var x=(b=b.filter((function(e,t){return b.indexOf(e)===t}))).map((function(e){return Object(p.jsx)("div",{className:"card_body1",children:Object(p.jsxs)("div",{className:"card_body1",children:[Object(p.jsx)("span",{className:"card_nombre",children:e.name}),Object(p.jsx)("img",{src:e.image,alt:e.name,onClick:function(){return s.push("/")}})]},e.id)})})),f=Math.ceil(x.length/10),v=Object(a.useState)(0),g=Object(d.a)(v,2),N=g[0],_=g[1],C=Object(a.useState)(1),E=Object(d.a)(C,2),T=E[0],y=E[1],k=function(){f!==T&&(y(T+1),_(N+10))},S=function(){T>1&&(y(T-1),_(N-10))};return Object(p.jsxs)("div",{className:"",children:[1===T?Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("p",{className:"pagination-item active",children:T}),Object(p.jsx)("p",{children:"TO"}),Object(p.jsx)("p",{className:"pagination-item ",children:f}),Object(p.jsx)("p",{className:"pagination-item ",onClick:k,children:"next"})]}):T>=f?Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("p",{className:"pagination-item ",onClick:S,children:"prev"}),Object(p.jsx)("p",{className:"pagination-item active",children:T}),Object(p.jsx)("p",{className:"to",children:"TO"}),Object(p.jsx)("p",{className:"pagination-item ",children:f})]}):Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("p",{className:"pagination-item ",onClick:S,children:"prev"}),Object(p.jsx)("p",{className:"pagination-item active",children:T}),Object(p.jsx)("p",{className:"to",children:"TO"}),Object(p.jsx)("p",{className:"pagination-item ",children:f}),Object(p.jsx)("p",{className:"pagination-item ",onClick:k,children:"next"})]}),Object(p.jsxs)("div",{className:"centar_episodes",children:[Object(p.jsx)("div",{children:Object(p.jsx)("span",{className:"card_nombre",children:" episode ".concat(null===n||void 0===n?void 0:n.id,"  ").concat(null===n||void 0===n?void 0:n.name)})}),Object(p.jsx)("span",{className:"card_nombre",children:"Click en la imagen para regresar"})]}),Object(p.jsx)("div",{className:"card_body",children:x})]})},b=function(e){var t=Object(r.c)((function(e){return e.characterDetail})),c=Object(r.b)(),n=Object(l.e)();Object(a.useEffect)((function(){c(Object(j.getCharactersDetails)(e.match.params.id))}),[c,e.match.params.id]);return Object(p.jsx)("div",{className:"cards_details",children:t.length>0?Object(p.jsxs)("div",{className:"cards_details_",children:[Object(p.jsxs)("h2",{children:[" ",Object(p.jsx)("span",{children:"Name:"})," ",t[0].name]}),Object(p.jsxs)("div",{className:"lista",children:[Object(p.jsxs)("li",{className:"description",children:[Object(p.jsx)("span",{children:"status:"})," ",t[0].status]}),Object(p.jsxs)("li",{className:"description",children:[Object(p.jsx)("span",{children:"species: "}),t[0].species]}),Object(p.jsxs)("li",{className:"description",children:[Object(p.jsx)("span",{children:"type:"})," ",t[0].type]}),Object(p.jsxs)("li",{className:"description1",children:[Object(p.jsx)("span",{children:"location:"})," ",t[0].location]}),Object(p.jsx)("li",{className:"description1",children:Object(p.jsxs)("span",{children:[" Episodes: ",t[0].episode," "]})}),Object(p.jsxs)("li",{className:"description1",children:[Object(p.jsx)("span",{children:"Gender:"})," ",t[0].gender]}),Object(p.jsx)("span",{className:"regresar",children:"Para regresar click en la imagen"})]}),Object(p.jsx)("img",{className:"image_detail",onClick:function(e){n.push("/")},src:t[0].image,alt:"img not found"})]}):Object(p.jsx)("p",{children:"landing..."})})},O=function(){var e=Object(r.c)((function(e){return e.episodes})),t=Object(l.e)(),c=Object(r.b)();Object(a.useEffect)((function(){c(Object(j.getEpisodes)())}),[c]);return Object(p.jsxs)("div",{className:"episodios",children:[Object(p.jsx)("button",{onClick:function(e){t.push("/")},children:"Regresar"}),Object(p.jsx)("h3",{className:"Link_episodes_titulo",children:"Hacer click en el episodio"}),Object(p.jsx)("div",{className:"Episodios",children:e.map((function(e){return Object(p.jsx)(o.b,{className:"Link_episodes",to:"/episode/".concat(e.id),children:Object(p.jsx)("li",{className:"li_episodes",children:"episodio ".concat(e.id," -  ").concat(e.name)},e.id)})}))})]})},h=function(e){var t=e.name,c=e.image,a=e.location,n=e.species,i=e.status,s=e.type,r=e.id,l=e.gender;return Object(p.jsxs)("div",{className:"fondoCard",children:[Object(p.jsxs)("div",{className:"lista",children:[Object(p.jsxs)("li",{children:["Name: ",t]}),Object(p.jsxs)("li",{children:["species: ",n]}),Object(p.jsxs)("li",{children:["location: ",a]}),Object(p.jsxs)("li",{children:["status: ",i]}),Object(p.jsxs)("li",{children:["type: ",s]}),Object(p.jsxs)("li",{children:["gender: ",l]})]}),Object(p.jsx)(o.b,{to:"/home/".concat(r),className:"link_cards",children:Object(p.jsx)("img",{src:c,alt:"imag no fount"})})]})},m=(c(69),c(70),c(71),c.p+"static/media/Lupa.70a30ce1.svg"),x=function(){var e=Object(r.c)((function(e){return e.charactersLoad})),t=Object(r.b)(),c=Math.ceil(e.length/10),n=Object(a.useState)(0),i=Object(d.a)(n,2),s=i[0],l=i[1],u=Object(a.useState)(1),b=Object(d.a)(u,2),O=b[0],x=b[1],f=Object(a.useState)(""),v=Object(d.a)(f,2),g=v[0],N=v[1],_=Object(a.useState)(""),C=Object(d.a)(_,2),E=C[0],T=C[1],y=Object(a.useState)(""),k=Object(d.a)(y,2),S=k[0],L=k[1],A=function(){c!==O&&(x(O+1),l(s+10))},w=function(){O>1&&(x(O-1),l(s-10))},I=function(){return 1===O?Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("p",{className:"pagination-item active",children:O}),Object(p.jsx)("p",{children:"TO"}),Object(p.jsx)("p",{className:"pagination-item ",children:c}),Object(p.jsx)("p",{className:"pagination-item ",onClick:A,children:"next"})]}):O>=c?Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("p",{className:"pagination-item ",onClick:w,children:"prev"}),Object(p.jsx)("p",{className:"pagination-item active",children:O}),Object(p.jsx)("p",{className:"to",children:"TO"}),Object(p.jsx)("p",{className:"pagination-item ",children:c})]}):Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("p",{className:"pagination-item ",onClick:w,children:"prev"}),Object(p.jsx)("p",{className:"pagination-item active",children:O}),Object(p.jsx)("p",{className:"to",children:"TO"}),Object(p.jsx)("p",{className:"pagination-item ",children:c}),Object(p.jsx)("p",{className:"pagination-item ",onClick:A,children:"next"})]})};Object(a.useEffect)((function(){t(Object(j.getCharacters)())}),[t]);var D=function(){return""!==g?e.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())})):e},G=function(e){L(""),T(e.target.name)},R=function(e){T(""),L(e.target.name)},H=function(){return""!==E?D().filter((function(e){return e.gender.includes(E)})):""!==S?D().filter((function(e){return e.status.includes(S)})):D()};return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)("div",{className:"titulo",children:Object(p.jsx)("h1",{children:"Rick and Morty"})}),Object(p.jsxs)("div",{className:"filtrar",children:[Object(p.jsxs)("div",{className:"select",children:[Object(p.jsx)("img",{className:"lupa",src:m,alt:"imagen not fount"}),Object(p.jsx)("input",{placeholder:"Buscar",name:"name",type:"search",onChange:function(e){N(e.target.value)}})]}),Object(p.jsxs)("div",{className:"select",tabIndex:"1",children:["Filtrar por Genero ",E,Object(p.jsxs)("div",{className:"list",children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{className:"search",type:"radio",name:"Male",onChange:G}),"Male"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",id:"select-radio2",name:"Female",onChange:G}),"Female"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",id:"select-radio3",name:"unknown",onChange:G}),"unknown"]})]})]}),Object(p.jsxs)("div",{className:"select",tabIndex:"2",children:["Filtrar por Estado ",S,Object(p.jsxs)("div",{className:"list",children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",id:"select-radio4",name:"Alive",onChange:R}),"Alive"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",id:"select-radio5",name:"Dead",onChange:R}),"Dead"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",id:"select-radio6",name:"unknown",onChange:R}),"unknown"]})]})]})]}),Object(p.jsxs)("div",{className:"episodes_location",children:[Object(p.jsx)(o.b,{className:"episodes_location_click",to:"/episode",children:Object(p.jsx)("button",{className:"episodes_location_button",children:"Episodios"})}),Object(p.jsx)(o.b,{className:"episodes_location_click",to:"/location",children:Object(p.jsx)("button",{className:"episodes_location_button",children:"Localizaci\xf3n"})})]}),I(),Object(p.jsx)("div",{className:"cards",children:H()&&H().map((function(e){return Object(p.jsx)(h,{id:e.id,name:e.name,image:e.image,location:e.location,species:e.species,status:e.status,type:e.type,gender:e.gender,episode:e.episodes},e.id)})).slice(s,s+10)}),I()]})},f=function(e){var t=Object(r.c)((function(e){return e.charactersLoad})),c=Object(r.b)(),n=Object(r.c)((function(e){return e.location})),i=null===n||void 0===n?void 0:n.residents,s=Object(l.e)(),o=e.match.params.id;Object(a.useEffect)((function(){c(Object(j.getCharacters)()),c(Object(j.getLocation)(o))}),[c,o]);var u=null===i||void 0===i?void 0:i.map((function(e){return 46===e.length?e.slice(-4):45===e.length?e.slice(-3):44===e.length?e.slice(-2):e.slice(-1)})),b=[];if(void 0!==u)for(var O=0;O<t.length;O++)for(var h=0;h<u.length;h++){var m;parseInt(u[h])===(null===(m=t[O])||void 0===m?void 0:m.id)&&b.push(t[h])}var x=(b=b.filter((function(e,t){return b.indexOf(e)===t}))).map((function(e){return Object(p.jsx)("div",{className:"card_body1",children:Object(p.jsxs)("div",{className:"card_body1",children:[Object(p.jsx)("span",{className:"card_nombre",children:e.name}),Object(p.jsx)("img",{src:e.image,alt:e.name,onClick:function(){return s.push("/")}})]},o)})})),f=Math.ceil(x.length/10),v=Object(a.useState)(0),g=Object(d.a)(v,2),N=g[0],_=g[1],C=Object(a.useState)(1),E=Object(d.a)(C,2),T=E[0],y=E[1],k=function(){f!==T&&(y(T+1),_(N+10))},S=function(){T>1&&(y(T-1),_(N-10))};return Object(p.jsxs)("div",{className:"",children:[1===T?Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("p",{className:"pagination-item active",children:T}),Object(p.jsx)("p",{children:"TO"}),Object(p.jsx)("p",{className:"pagination-item ",children:f}),Object(p.jsx)("p",{className:"pagination-item ",onClick:k,children:"next"})]}):T>=f?Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("p",{className:"pagination-item ",onClick:S,children:"prev"}),Object(p.jsx)("p",{className:"pagination-item active",children:T}),Object(p.jsx)("p",{className:"to",children:"TO"}),Object(p.jsx)("p",{className:"pagination-item ",children:f})]}):Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("p",{className:"pagination-item ",onClick:S,children:"prev"}),Object(p.jsx)("p",{className:"pagination-item active",children:T}),Object(p.jsx)("p",{className:"to",children:"TO"}),Object(p.jsx)("p",{className:"pagination-item ",children:f}),Object(p.jsx)("p",{className:"pagination-item ",onClick:k,children:"next"})]}),Object(p.jsxs)("div",{className:"centar_episodes",children:[Object(p.jsx)("button",{className:"episodes_location_click",onClick:function(){return s.push("/location")},children:"Regresar a la lista de Localizaci\xf3n"}),Object(p.jsx)("div",{children:Object(p.jsx)("span",{className:"card_nombre",children:" Localizaci\xf3n:  ".concat(null===n||void 0===n?void 0:n.name)})}),Object(p.jsx)("span",{className:"card_nombre",children:"Click en la imagen para regresar"})]}),Object(p.jsx)("div",{className:"card_body",children:x})]})},v=function(){var e=Object(r.c)((function(e){return e.locations})),t=Object(l.e)(),c=Object(r.b)();Object(a.useEffect)((function(){c(Object(j.getLocations)())}),[c]);return Object(p.jsxs)("div",{className:"episodios",children:[Object(p.jsx)("button",{className:"episodes_location_click_regresar",onClick:function(e){t.push("/")},children:"Regresar"}),Object(p.jsx)("h3",{className:"h3_localizacion",children:"Hacer click en la Localizaci\xf3n"}),Object(p.jsx)("div",{className:"Episodios",children:e.map((function(e){return Object(p.jsx)(o.b,{className:"Link_episodes",to:"/location/".concat(e.id),children:Object(p.jsx)("li",{className:"li_episodes",children:"Location ".concat(e.id," -  ").concat(e.name)})})}))})]})};var g=function(){return Object(p.jsxs)(o.a,{children:[Object(p.jsx)(l.a,{path:"/",exact:!0,component:x}),Object(p.jsx)(l.a,{path:"/home/:id",exact:!0,component:b}),Object(p.jsx)(l.a,{path:"/episode",exact:!0,component:O}),Object(p.jsx)(l.a,{path:"/location",exact:!0,component:v}),Object(p.jsx)(l.a,{path:"/episode/:id",exact:!0,component:u}),Object(p.jsx)(l.a,{path:"/location/:id",exact:!0,component:f})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))},_=c(18),C=c(4),E=c(5),T=E.GET_CHARACTERS,y=E.GET_CHARACTERS_DETAILS,k=E.GET_CLEAN_CHARACTERS_DETAILS,S=E.GET_EPISODES,L=E.GET_EPISODE,A=E.GET_LOCATIONS,w=E.GET_LOCATION,I={charactersLoad:[],copiaCharactersLoad:[],characterDetail:[],episodes:[],locations:[],episode:{},location:{}};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(C.a)(Object(C.a)({},e),{},{charactersLoad:t.payload});case k:return Object(C.a)(Object(C.a)({},e),{},{copiaCharactersLoad:t.payload});case y:return Object(C.a)(Object(C.a)({},e),{},{characterDetail:t.payload});case S:return Object(C.a)(Object(C.a)({},e),{},{episodes:t.payload});case L:return Object(C.a)(Object(C.a)({},e),{},{episode:t.payload});case A:return Object(C.a)(Object(C.a)({},e),{},{locations:t.payload});case w:return Object(C.a)(Object(C.a)({},e),{},{location:t.payload});default:return e}},G=c(34),R="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.b,H=Object(_.c)(D,R(Object(_.a)(G.a)));s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(r.a,{store:H,children:Object(p.jsx)(o.a,{children:Object(p.jsx)(g,{})})})}),document.getElementById("root")),N()}},[[72,1,2]]]);
//# sourceMappingURL=main.8443f7d1.chunk.js.map