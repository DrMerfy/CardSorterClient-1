(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t,n){e.exports=n.p+"static/media/thanks-icon.84d1d4ad.svg"},212:function(e,t,n){e.exports=n.p+"static/media/not-found.8c3d2a79.svg"},215:function(e,t,n){e.exports=n(554)},224:function(e,t,n){},553:function(e,t,n){},554:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(136),i=n.n(o),c=n(20),s=(n(224),n(35)),l=n(206),u=n(207),d=n.n(u),p="PRODUCTION",g=n(139),m=n(208),y=n.n(m),h="IS_FETCHING",f="IS_SENDING",v="SUCCESS",E="CREATE_CATEGORY",D="REMOVE_CATEGORY",C="RENAME_CATEGORY",O="NORMALIZE_CATEGORIES";var T="PRODUCTION"===p?"http://83.212.97.237:8090":"http://127.0.0.1:5000",b="SHOW_DESCRIPTION",I="HIDE_ALL_DESCRIPTIONS",k="SHOW_TITLE_BOX",S="HIDE_ALL_BOXES",w="SAVE_STUDY_ID",j="SENDING_SORT",N="SAVE_THANKS_MESSAGE",R="RENDER_THANKS_MESSAGE",_="TOOGLE_ON_BOARDING",A="START_SORT",x="END_SORT";function F(e){return{type:_,payload:{showOnBoarding:e},error:!1}}function P(){return{type:S,error:!1}}function G(e,t,n){return{type:j,payload:{status:e},error:n}}function M(e,t,n,r,a){return function(o){var i=a-r;o({type:O,payload:{},error:!1}),o(G(f)),fetch(T+"/sort_endpoint",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({studyID:e,categories:n,container:t,time:i})}).then(function(e){return e.json().then(function(e){var t;o(G(v)),o((t=e.message,{type:N,payload:{message:t},error:!1})),o({type:R,payload:{},error:!1})})})}}var B="ADD_CARD_CATEGORY",L="REMOVE_CARD_CATEGORY",H="ADD_CARD_CONTAINER",U="REMOVE_CARD_CONTAINER",V="REQUEST_CARDS";function W(e,t,n){return{type:V,payload:{status:e,response:t,error:n}}}function Y(e){return function(t){t(function(e){return{type:w,payload:{studyID:e},error:!1}}(e)),t(W(h)),y()(T+"/sort_endpoint?cards=true&study_id="+e).then(function(e){return e.json().then(function(n){if(404!==e.status){t(W(v,n));var r,a=!0,o=!1,i=void 0;try{for(var c,s=n.cards[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var l=c.value;t((r=l.id,{type:H,payload:{cardID:r},error:!1}))}}catch(u){o=!0,i=u}finally{try{a||null==s.return||s.return()}finally{if(o)throw i}}t(F(!0))}else t(W(v,void 0,n.error))})},function(e){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log(t)}(e)})}}var z=n(36),J=n(60),K=function(){function e(t,n){Object(z.a)(this,e),this.id=t,this.title=n,this.cards=[]}return Object(J.a)(e,[{key:"addCard",value:function(e){this.cards.push(e)}},{key:"removeCard",value:function(e){this.cards=this.cards.filter(function(t){return t!==e})}}]),e}(),X={clickToRename:"click here to rename",studyNotFound:"study not found",dropToAdd:"drop to add",dropToCreateCategory:"drop to create a category",youCanCloseThisTab:"you can close this tab"},q=new(function(){function e(){Object(z.a)(this,e)}return Object(J.a)(e,[{key:"initialize",value:function(e){this.text=X}}]),e}());var Q=function e(t,n,r){Object(z.a)(this,e),this.id=t,this.title=n,this.description=r},Z={};var $=Object(s.combineReducers)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:var n=t.payload.response;if(n){var r=!0,a=!1,o=void 0;try{for(var i,c=n.cards[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var s=i.value;Z[s.id]=new Q(s.id,s.name,s.description)}}catch(l){a=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}}return Object.assign({},e,{status:t.payload.status,notFound:!!t.payload.error});default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var n=t.payload.categoryID||Date.now(),r=new K(n,t.payload.title);r.addCard(t.payload.cardID);var a=Object.assign({},e);return a[n]=r,a;case D:var o=t.payload.categoryID,i=Object.assign({},e);return delete i[o],i;case C:var c=t.payload.categoryID,s=Object.assign({},e);return s[c].title=t.payload.title,s;case B:var l=t.payload.cardID,u=t.payload.categoryID,d=Object.assign({},e);return d[u].addCard(l),d;case L:var p=t.payload.cardID,g=t.payload.categoryID,m=Object.assign({},e);return m[g].removeCard(p),m;case O:var y=Object.assign({},e);for(var h in y)if({}.hasOwnProperty.call(y,h)){var f=y[h];f.title===q.text.clickToRename&&(f.title="not set")}return y;default:return e}},container:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return[].concat(Object(g.a)(e),[t.payload.cardID]);case U:return Object(g.a)(e).filter(function(e){return e!==t.payload.cardID});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object.assign({},e,{showOnBoarding:t.payload.showOnBoarding});case b:return Object.assign({},e,{showingDescription:t.payload.cardID});case I:return Object.assign({},e,{showingDescription:void 0});case k:return Object.assign({},e,{changeTitle:t.payload.categoryID});case S:return Object.assign({},e,{changeTitle:void 0});case w:return Object.assign({},e,{studyID:t.payload.studyID});case j:return Object.assign({},e,{sendingSort:t.payload.status});case N:return Object.assign({},e,{thanksMessage:t.payload.message});case R:return Object.assign({},e,{renderThanks:!0});case A:return Object.assign({},e,{timeStarted:Date.now()});case x:return Object.assign({},e,{timeEnded:Date.now()});default:return e}}}),ee={cards:{notFound:void 0,status:void 0},container:[],categories:{},ui:{showOnBoarding:void 0,changeTitle:void 0,showingDescription:void 0,studyID:void 0,sendingSort:void 0,renderThanks:void 0,thanksMessage:void 0,cardsSorted:void 0,categoriesCreated:void 0,timeStarted:void 0,timeEnded:void 0}};var te=n(213),ne=n(209),re=n(214),ae=(n(225),n(37)),oe=n(210),ie=n.n(oe),ce="card-drag";var se=Object(ae.DragSource)(ce,{beginDrag:function(e){return{id:e.id,position:e.position}}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(function(e){e.id;var t=e.title,n=e.description,r=e.minimized,o=(e.position,e.onClick),i=e.showDescription,c=e.connectDragSource,s=(e.isDragging,!r||i?"card":"card minimized");return c(a.a.createElement("li",{className:s},a.a.createElement("h4",null,t),(!r||i)&&a.a.createElement("p",null,n),r&&n&&!i&&a.a.createElement("div",{className:"desc-container"},a.a.createElement("button",{onClick:o,className:"desc-btn"},a.a.createElement("p",null,"?")))))}),le=function(e){var t=e.cards;return a.a.createElement("ul",{id:"list"},t.map(function(e){return a.a.createElement(se,{key:e.id,id:e.id,title:e.title,description:e.description,position:-1})}))};function ue(e){var t=[],n=!0,r=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value;t.push(Z[c])}}catch(s){r=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}return{cards:t}}var de=Object(c.b)(function(e){return ue(e.container)},function(e){return{}})(le),pe=n(96),ge=n.n(pe);var me=Object(ae.DropTarget)(ce,{drop:function(e,t){var n=t.getItem();e.onCardDrop(n.id,n.position,e.id)}},function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})(function(e){var t=e.id,n=e.title,r=e.cards,o=e.onClick,i=e.showTitleBox,c=(e.onCardDrop,e.onTitleClick),s=e.onTitleChange,l=e.onTitleFinish,u=e.descriptionID,d=e.connectDropTarget,p=e.isOver;return r=ue(r).cards,d(a.a.createElement("li",{className:p?"category max-height":"category"},i&&a.a.createElement("div",{className:"title-input"},a.a.createElement("input",{type:"text",defaultValue:n,onChange:function(e){return s(e,t)},onKeyPress:function(e){return l(e)},onClick:function(e){return e.stopPropagation()}}),a.a.createElement("button",{type:"button",onClick:function(){return l()}})),!i&&a.a.createElement("h3",{onClick:function(e){return c(e,t)}},n),p&&a.a.createElement("div",{className:"drop-to-add"},a.a.createElement("img",{src:ge.a}),a.a.createElement("p",null,q.text.dropToAdd)),a.a.createElement("ul",null,r.map(function(e){return a.a.createElement(se,{key:e.id,id:e.id,title:e.title,description:e.description,minimized:!0,position:t,onClick:function(t){return o(t,e.id,e.description)},showDescription:e.id===u})}))))});var ye=Object(ae.DropTarget)(ce,{drop:function(e,t){if(!t.didDrop()){var n=t.getItem();e.onDrop(n.id,n.position)}e.removeEmptyCategories(e.categories)}},function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver({shallow:!0})}})(function(e){var t=e.categories,n=e.onClick,r=e.onCardClick,o=e.onCategTitleClick,i=e.changeTitleID,c=e.onCardDrop,s=(e.onDrop,e.descriptionID),l=e.onCategTitleChange,u=e.onCategTitleFinish,d=(e.removeEmptyCategories,e.connectDropTarget),p=e.isOver;return t=t.map(function(e){return a.a.createElement(me,{key:"k"+e.id,id:e.id,title:e.title,cards:e.cards,onClick:r,onTitleChange:l,onTitleClick:o,onCardDrop:c,onTitleFinish:u,showTitleBox:e.id===i,descriptionID:s})}),d(a.a.createElement("ul",{id:"board",onClick:n},t,p&&a.a.createElement("div",{className:"category drop-to-create"},a.a.createElement("img",{src:ge.a}),a.a.createElement("p",null,q.text.dropToCreateCategory))))});function he(e,t,n){-1===t?e(function(e){return{type:U,payload:{cardID:e},error:!1}}(n)):t>-1&&e(function(e,t){return{type:L,payload:{cardID:e,categoryID:t},error:!1}}(n,t))}var fe=Object(c.b)(function(e){return{categories:Object.values(e.categories),descriptionID:e.ui.showingDescription,changeTitleID:e.ui.changeTitle}},function(e){return{onClick:function(){e({type:I,error:!1}),e(P())},onDrop:function(t,n){he(e,n,t),e(function(e,t,n){return{type:E,payload:{categoryID:e,title:t,cardID:n},error:!1}}(void 0,q.text.clickToRename,t))},removeEmptyCategories:function(t){!function(e,t){for(var n in t)if(t[n].cards.length<1){e((r=t[n].id,{type:D,payload:{categoryID:r}}));break}var r}(e,t)},onCategTitleClick:function(t,n){t.stopPropagation(),e(function(e){return{type:k,payload:{categoryID:e},error:!1}}(n))},onCategTitleChange:function(t,n){var r=t.target.value;r=(r=r.replace(/\s\s+/g," ").trim()).length>0?r:q.text.clickToRename,e(function(e,t){return{type:C,payload:{categoryID:e,title:t},error:!1}}(n,r))},onCategTitleFinish:function(t){t?(t.stopPropagation(),13===t.charCode&&e(P())):e(P())},onCardClick:function(t,n,r){t.stopPropagation(),r&&r.length>0&&e(function(e){return{type:b,payload:{cardID:e},error:!1}}(n))},onCardDrop:function(t,n,r){he(e,n,t),e(function(e,t){return{type:B,payload:{cardID:e,categoryID:t},error:!1}}(t,r))}}})(ye),ve=function(e){var t=e.studyID,n=e.container,r=e.categories,o=e.timeStarted,i=e.onFinishClick;return a.a.createElement("header",null,a.a.createElement("h1",{id:"logo"},"Card Sorter"),a.a.createElement("button",{className:"btn--main",onClick:function(){return i(t,n,r,o)}},a.a.createElement("p",null,"Finish")))},Ee=Object(c.b)(function(e){return{studyID:e.ui.studyID,timeStarted:e.ui.timeStarted,container:e.container,categories:e.categories}},function(e){return{onFinishClick:function(t,n,r,a){e({type:x,payload:{},error:!1}),e(M(t,n,r,a,Date.now()))}}})(ve),De=function(e){var t=e.message,n=e.image,r=e.submessage;return a.a.createElement("div",{className:"message-screen"},a.a.createElement("h1",{id:"logo"},a.a.createElement("a",{href:"/"},"Card Sorter")),a.a.createElement("img",{src:n,alt:"Sending love!"}),a.a.createElement("h2",null,t),a.a.createElement("h3",null,r))},Ce=function(e){var t=e.show,n=e.onClick;return t?a.a.createElement("div",{className:"on-boarding-screen",onClick:function(e){return n(e)}},a.a.createElement("div",{className:"list-explainer"},a.a.createElement("span",null,a.a.createElement("h3",null,"Step 1"),a.a.createElement("p",null,"Take a quick look at the list of items to the left."),a.a.createElement("p",null,"We'd like you to sort them into groups that make sense to you."),a.a.createElement("p",null,"There is no right or wrong answer. Just do what comes naturally."),a.a.createElement("h3",null,"Step 2"),a.a.createElement("p",null,"Drag an item from the left into this area to create your first group."))),a.a.createElement("div",{className:"finish-explainer"},a.a.createElement("span",null,a.a.createElement("h3",null,"Step 3"),a.a.createElement("p",null,"When you feel like you are done, press the finish button.")))):a.a.createElement("span",null)},Oe=Object(c.b)(function(e){return{show:e.ui.showOnBoarding}},function(e){return{onClick:function(t){t.stopPropagation(),e(F(!1)),e({type:A,payload:{},error:!1})}}})(Ce),Te=n(211),be=n.n(Te),Ie=n(212),ke=n.n(Ie),Se=(n(553),function(e){function t(){return Object(z.a)(this,t),Object(te.a)(this,Object(ne.a)(t).apply(this,arguments))}return Object(re.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.studyNotFound,r=t.renderThanks,o=t.thanksMessage;return e=r?a.a.createElement("main",null,a.a.createElement(De,{message:o,image:be.a,submessage:"("+q.text.youCanCloseThisTab+")"})):n?a.a.createElement("main",null,a.a.createElement(De,{message:q.text.studyNotFound,image:ke.a})):a.a.createElement(ae.DragDropContextProvider,{backend:ie.a},a.a.createElement(Oe,null),a.a.createElement("div",{className:"App"},a.a.createElement(Ee,null),a.a.createElement("div",{id:"main-panel"},a.a.createElement(de,null),a.a.createElement(fe,null)))),e}}]),t}(r.Component)),we=Object(c.b)(function(e){return{studyNotFound:e.cards.notFound,renderThanks:e.ui.renderThanks,thanksMessage:e.ui.thanksMessage}})(Se);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=function(){var e=[l.a];"PRODUCTION"!==p&&e.push(d.a);var t=Object(s.createStore)($,ee,s.applyMiddleware.apply(void 0,e)),n=t.subscribe(function(){});q.initialize("en-us");var r=new URL(window.location.href).searchParams.get("id");return t.dispatch(Y(r)),n(),t}();i.a.render(a.a.createElement(c.a,{store:je},a.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,n){e.exports=n.p+"static/media/plus.ed718a5f.svg"}},[[215,1,2]]]);
//# sourceMappingURL=main.c7d1ef92.chunk.js.map