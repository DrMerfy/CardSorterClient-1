(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,r,n){},31:function(e,r,n){e.exports=n(46)},40:function(e,r,n){},46:function(e,r,n){"use strict";n.r(r);var a=n(0),t=n.n(a),o=n(15),s=n.n(o),i=n(29),u=n(8),c=n(11),l=(n(40),n(9)),m=n(10),p=n(18),d=n(17),E=n(19),g=(n(24),n(26)),h=n.n(g),f="IS_SENDING",y="SUCCESS",w="PRODUCTION",v="PRODUCTION"===w?"http://83.212.97.237:8090":"http://127.0.0.1:5000",N="CHANGE_USERNAME",O="CHANGE_PASSWORD",C="CLEAR_CREDENTIALS",S="CLEAR_USERNAME_ERROR",b="CLEAR_PASSWORD_ERROR",A="SEND_CREDENTIALS";function R(){return{type:S,payload:{},error:!1}}function j(){return{type:b,payload:{},error:!1}}function k(e,r,n){return{type:A,payload:{status:e,location:r},error:n}}function T(e,r){return function(n){n(k(f)),h()(v+"/user_endpoint",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:r})}).then(function(e){return e.json().then(function(e){document.cookie="auth_token= ;expires = Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="auth_token="+e.auth_token+"; path=/",n(k(y,e.location,e.error))})})}}var _={email:"email",forgotYourPassword:"forgot your password?",hiAgain:"hi again!",hiThere:"hi there!",login:"log in",password:"password",register:"register",signUp:"sign up",username:"username"},P=new(function(){function e(){Object(l.a)(this,e)}return Object(m.a)(e,[{key:"initialize",value:function(e){this.text=_}}]),e}()),U=function(e){var r=e.onUsernameChange,n=e.onPasswordChange,a=e.onForgot,o=e.onLogin,s=e.onRegister,i=e.username,u=e.password,c=e.usernameError,l=e.passwordError,m=e.onErrorShow,p=e.onFormKeyPress;return c&&m.usernameErrorShowing(),l&&m.passwordErrorShowing(),t.a.createElement("div",{className:"container"},t.a.createElement("p",null,P.text.hiAgain),t.a.createElement("form",{onKeyPress:function(e){return p(e,i,u)}},t.a.createElement("div",{className:"error-holder"},t.a.createElement("input",{type:"text",className:"username",onChange:r,placeholder:P.text.username}),c&&t.a.createElement("div",{className:"error-message"},t.a.createElement("p",null,c))),t.a.createElement("div",{className:"error-holder"},t.a.createElement("input",{type:"password",className:"password last",onChange:n,placeholder:P.text.password}),l&&t.a.createElement("div",{className:"error-message"},t.a.createElement("p",null,l))),t.a.createElement("button",{type:"button",className:"reset",onClick:a},P.text.forgotYourPassword),t.a.createElement("button",{type:"button",className:"action login",onClick:function(){return o(i,u)}},t.a.createElement("p",null,P.text.login))),t.a.createElement("button",{className:"register",onClick:s},P.text.register))},D=Object(c.b)(function(e){return{username:e.login.username,password:e.login.password,usernameError:e.login.usernameError,passwordError:e.login.passwordError}},function(e,r){return{onUsernameChange:function(r){var n=r.target.value;e(function(e){return{type:N,payload:{username:e},error:!1}}(n))},onPasswordChange:function(r){var n=r.target.value;e(function(e){return{type:O,payload:{password:e},error:!1}}(n))},onForgot:function(){},onLogin:function(r,n){e(R()),e(j()),e(T(r,n))},onRegister:function(){e({type:C,payload:{},error:!1}),r.history.push("./register")},onErrorShow:{usernameErrorShowing:function(){setTimeout(function(){return e(R())},5e3)},passwordErrorShowing:function(){setTimeout(function(){return e(j())},5e3)}},onFormKeyPress:function(r,n,a){"Enter"===r.key&&(e(R()),e(j()),e(T(n,a)))}}})(U),I=function(e){function r(){return Object(l.a)(this,r),Object(p.a)(this,Object(d.a)(r).apply(this,arguments))}return Object(E.a)(r,e),Object(m.a)(r,[{key:"render",value:function(){return t.a.createElement("main",{className:"App"},t.a.createElement("div",{id:"logo"},t.a.createElement("p",null,"CardSorter")),t.a.createElement(D,{history:this.props.history}))}}]),r}(a.Component),L="CHANGE_USERNAME",x="CHANGE_PASSWORD",M="CHANGE_EMAIL",G="CLEAR_CREDENTIALS",F="CLEAR_USERNAME_ERROR",J="CLEAR_EMAIL_ERROR",K="SENDING_CREDENTIALS";function W(){return{type:F,payload:{},error:!1}}function H(){return{type:J,payload:{},error:!1}}function B(e,r,n){return{type:K,payload:{status:e,location:r},error:n}}function z(e,r,n){return function(a){a(B(f)),fetch(v+"/user_endpoint?register=true",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:r,email:n})}).then(function(e){return e.json().then(function(e){document.cookie="auth_token= ;expires = Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="auth_token="+e.auth_token+"; path=/",a(B(y,e.location,e.error))})})}}var V=function(e){var r=e.onUsernameChange,n=e.onPasswordChange,a=e.onEmailChange,o=e.onSignUp,s=e.onBack,i=e.username,u=e.password,c=e.email,l=e.usernameError,m=e.emailError,p=e.onErrorShow,d=e.onFormKeyPress;return l&&p.usernameErrorShowing(),m&&p.emailErrorShowing(),t.a.createElement("div",{className:"container"},t.a.createElement("p",null,P.text.hiThere),t.a.createElement("button",{className:"back",onClick:s}),t.a.createElement("form",{onKeyPress:function(e){return d(e,i,u,c)}},t.a.createElement("div",{className:"error-holder"},t.a.createElement("input",{type:"text",className:"username",onChange:r,placeholder:P.text.username}),l&&t.a.createElement("div",{className:"error-message"},t.a.createElement("p",null,l))),t.a.createElement("input",{type:"password",className:"password",onChange:n,placeholder:P.text.password}),t.a.createElement("div",{className:"error-holder"},t.a.createElement("input",{type:"email",className:"email last",onChange:a,placeholder:P.text.email}),m&&t.a.createElement("div",{className:"error-message"},t.a.createElement("p",null,m))),t.a.createElement("button",{type:"button",className:"action signup",onClick:function(){return o(i,u,c)}},t.a.createElement("p",null,P.text.signUp))))},Y=Object(c.b)(function(e){return{username:e.register.username,password:e.register.password,email:e.register.email,usernameError:e.register.usernameError,emailError:e.register.emailError}},function(e,r){return{onUsernameChange:function(r){var n=r.target.value;e(function(e){return{type:L,payload:{username:e},error:!1}}(n))},onPasswordChange:function(r){var n=r.target.value;e(function(e){return{type:x,payload:{password:e},error:!1}}(n))},onEmailChange:function(r){var n=r.target.value;e(function(e){return{type:M,payload:{email:e},error:!1}}(n))},onSignUp:function(r,n,a){e(W()),e(H()),e(z(r,n,a))},onBack:function(){e({type:G,payload:{},error:!1}),r.history.push("/")},onErrorShow:{usernameErrorShowing:function(){setTimeout(function(){return e(W())},5e3)},emailErrorShowing:function(){setTimeout(function(){return e(H())},5e3)}},onFormKeyPress:function(r,n,a,t){"Enter"===r.key&&(e(W()),e(H()),e(z(n,a,t)))}}})(V),$=function(e){function r(){return Object(l.a)(this,r),Object(p.a)(this,Object(d.a)(r).apply(this,arguments))}return Object(E.a)(r,e),Object(m.a)(r,[{key:"render",value:function(){return t.a.createElement("main",{className:"App"},t.a.createElement("span",{id:"logo"},t.a.createElement("p",null,"CardSorter")),t.a.createElement(Y,{history:this.props.history}))}}]),r}(a.Component),q=n(7),Q=n(27),X=n(28),Z=n.n(X);var ee=Object(q.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case N:return Object.assign({},e,{username:r.payload.username});case O:return Object.assign({},e,{password:r.payload.password});case C:return Object.assign({},e,{username:void 0,password:void 0});case S:return Object.assign({},e,{usernameError:void 0});case b:return Object.assign({},e,{passwordError:void 0});case A:var n=Object.assign({},e,{isSending:r.payload.status!==y});if(r.payload.status===y){if(r.payload.location)return window.location.replace(r.payload.location),n;"USERNAME NOT FOUND"===r.error.message?n.usernameError="NOT FOUND":"INVALID PASSWORD"===r.error.message&&(n.passwordError="INVALID")}return n;default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case L:return Object.assign({},e,{username:r.payload.username});case x:return Object.assign({},e,{password:r.payload.password});case M:return Object.assign({},e,{email:r.payload.email});case G:return Object.assign({},e,{username:void 0,password:void 0,email:void 0});case F:return Object.assign({},e,{usernameError:void 0});case J:return Object.assign({},e,{emailError:void 0});case K:var n=Object.assign({},e,{isSending:r.payload.status!==y});if(r.payload.status===y){if(r.payload.location)return window.location.replace(r.payload.location),n;"DUPLICATE USERNAME"===r.error.message?n.usernameError="DUPLICATE":"DUPLICATE EMAIL"===r.error.message&&(n.emailError="DUPLICATE")}return n;default:return e}}}),re={login:{username:void 0,password:void 0,isSending:void 0,usernameError:void 0,passwordError:void 0},register:{username:void 0,password:void 0,email:void 0,isSending:void 0,usernameError:void 0,emailError:void 0}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=function(){var e=[Q.a];"PRODUCTION"!==w&&e.push(Z.a);var r=Object(q.d)(ee,re,q.a.apply(void 0,e));return P.initialize("en-us"),r.subscribe(function(){})(),r}();s.a.render(t.a.createElement(c.a,{store:ne},t.a.createElement(i.a,{basename:"/auth"},t.a.createElement(u.a,{exact:!0,path:"/",component:I}),t.a.createElement(u.a,{path:"/register",component:$}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.e615dde8.chunk.js.map