(this.webpackJsonpsignup=this.webpackJsonpsignup||[]).push([[0],{77:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){"use strict";s.r(t);var n=s(3),r=s(0),a=s.n(r),i=s(27),c=s.n(i),o=s(21),l=s(22),u=s(24),b=s(23),d=s(30),j=s(6),h=s(55),p=s(29),m="CreateUser",f=function(e,t,s){return{type:m,user:{firstName:e,email:t}}};var O=Object(p.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===m?t.user:e}}),v=s(115),x=s(114),g=(s(77),function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"form",children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("div",{children:this.props.headline1}),Object(n.jsx)("div",{className:"bold",children:this.props.headline2})]}),Object(n.jsx)("div",{className:"text",children:this.props.text}),Object(n.jsx)("div",{className:"body",children:this.props.children}),Object(n.jsx)(x.a,{text:this.props.buttonLabel,disabled:this.props.disabled,onClick:this.props.onClick})]})}}]),s}(r.Component)),y=(s(78),function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e))._createUser=function(){n.props.createUser(n.state.firstName,n.state.email,n.state.password,(function(){n.props.history.push(k.confirmation)}))},n.state={firstName:"",email:"",password:""},n}return Object(l.a)(s,[{key:"_isFormComplete",value:function(){return!!(this.state.firstName&&this.state.email&&this.state.password)}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"SignUpPage",children:Object(n.jsxs)(g,{headline1:"Let's",headline2:"Sign Up",text:"Use the form below to sign up for this super  awesome service. You're only a few steps away!",buttonLabel:"Sign Up",disabled:!this._isFormComplete(),onClick:this._createUser,children:[Object(n.jsx)(v.a,{borderless:!0,label:"First Name",value:this.state.firstName,onChange:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.setState({firstName:s})}}),Object(n.jsx)(v.a,{borderless:!0,label:"Email Address",value:this.state.email,onChange:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.setState({email:s})}}),Object(n.jsx)(v.a,{borderless:!0,type:"password",label:"Password",value:this.state.password,onChange:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.setState({password:s})}})]})})}}]),s}(r.Component));var N=Object(d.b)(null,(function(e,t){return{createUser:function(t,s,n,r){e(f(t,s,n)),r&&r()}}}))(y),w=(s(79),function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this.props.user;return e?Object(n.jsx)("div",{className:"ConfirmationPage",children:Object(n.jsx)(g,{headline1:"Welcome,",headline2:"".concat(e.firstName,"!"),text:"You have been registered for this awesome service. Please check your email listed below for instructions.",buttonLabel:"Sign In",children:Object(n.jsx)("div",{className:"email",children:e.email})})}):Object(n.jsx)(j.a,{to:k.signup})}}]),s}(r.Component));var C=Object(d.b)((function(e,t){return{user:e.user}}))(w),k=(s(81),{signup:"/signup",confirmation:"/confirmation"}),U=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(h.a,{children:Object(n.jsx)(d.a,{store:Object(p.c)(O),children:Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{path:k.signup,component:N}),Object(n.jsx)(j.b,{path:k.confirmation,component:C}),Object(n.jsx)(j.a,{to:k.signup})]})})})})}}]),s}(r.Component);c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.0df9a175.chunk.js.map