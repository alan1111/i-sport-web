(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{131:function(e,t,s){},137:function(e,t,s){},138:function(e,t,s){},139:function(e,t,s){},207:function(e,t,s){},225:function(e,t,s){},226:function(e,t,s){"use strict";s.r(t);var r=s(46),n=s.n(r);n.a.defaults.timeout=5e3,n.a.defaults.baseURL="http://localhost:3001",n.a.interceptors.request.use((function(e){return e.data=JSON.stringify(e.data),e.headers={"Content-Type":"application/json"},e}),(function(e){return Promise.reject(e)})),n.a.interceptors.response.use((function(e){return 2===e.data.errCode&&console.log("\u8fc7\u671f"),e}),(function(e){console.log("\u8bf7\u6c42\u51fa\u9519\uff1a",e)}))},227:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(16),c=s.n(n),a=s(120),o=(s(131),s(66)),i=s(7),l=function(e){var t=e.route;return Object(i.jsxs)("div",{className:"discern",children:["test discern",Object(o.a)(t.routes,{someProp:"these extra props are optional"})]})},j=(s(137),l),d=function(e){return Object(i.jsx)("div",{className:"discern",children:"test home ttt"})},p=(s(138),d),u=s(123),m=function(e){var t=e.someProp;console.log("111",e);var s=Object(r.useState)(0),n=Object(u.a)(s,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){a(1)}),[]),Object(i.jsxs)("div",{className:"App",children:[t,Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("div",{children:c}),Object(i.jsx)("button",{onClick:function(){a(c+1)},children:"add"}),Object(i.jsxs)("p",{children:["Edit ",Object(i.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(i.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})]})},h=(s(139),m),b=s(232),x=s(230),f=s(231),O=s(42),g=s(234),v=s(233),w="login",N=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,y=function(e){var t=N;return Object(i.jsxs)("div",{className:w,children:[Object(i.jsxs)("div",{className:"".concat(w,"-wx"),children:[Object(i.jsx)("h3",{className:"".concat(w,"-wx-desc"),children:"\u626b\u63cf\u4e8c\u7ef4\u7801\u6dfb\u52a0\u7ba1\u7406\u5458\u5fae\u4fe1\uff0c\u53ef\u514d\u8d39\u9886\u53d6\u4f53\u9a8c\u673a\u4f1a\u5466!"}),Object(i.jsx)("img",{className:"".concat(w,"-wx-img"),src:"/myWx.png",alt:""})]}),Object(i.jsxs)(x.a,{name:"normal_login",className:"login-form",onFinish:function(t){console.log("Received values of form: ",t),e.history.push("/")},children:[Object(i.jsx)(x.a.Item,{name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"},function(){return{validator:function(e,s){return!s||t.test(s)?Promise.resolve():Promise.reject(new Error("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7"))}}}],children:Object(i.jsx)(f.a,{prefix:Object(i.jsx)(g.a,{className:"site-form-item-icon"}),placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"})}),Object(i.jsx)(x.a.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],children:Object(i.jsx)(f.a,{prefix:Object(i.jsx)(v.a,{className:"site-form-item-icon"}),type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})}),Object(i.jsx)(x.a.Item,{children:Object(i.jsx)(O.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"\u767b\u5f55"})}),Object(i.jsxs)(x.a.Item,{children:[Object(i.jsx)("a",{href:"/register",children:"\u53bb\u6ce8\u518c"}),Object(i.jsx)("span",{className:"login-form-forgot",onClick:function(){b.a.info({content:"\u8bf7\u626b\u63cf\u4e8c\u7ef4\u7801\u6dfb\u52a0\u7ba1\u7406\u5458\u5fae\u4fe1\u83b7\u53d6"})},children:"\u5fd8\u8bb0\u5bc6\u7801?"})]})]})]})},k=(s(207),y),I=s(59),P=s(54),q=s.n(P),C=s(76),E="register",F={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},A={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},R=s(46),T=s.n(R),J=function(){var e=Object(C.a)(q.a.mark((function e(t){var s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.post("/user/add",t);case 3:s=e.sent,console.log(s),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),L=function(e){var t=function(){var e=Object(C.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Received values of form: ",t),e.next=3,J(t);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:E,children:[Object(i.jsxs)("div",{className:"".concat(E,"-wx"),children:[Object(i.jsx)("h3",{className:"".concat(E,"-wx-desc"),children:"\u626b\u63cf\u4e8c\u7ef4\u7801\u6dfb\u52a0\u7ba1\u7406\u5458\u5fae\u4fe1\uff0c\u53ef\u514d\u8d39\u9886\u53d6\u4f53\u9a8c\u673a\u4f1a\u5466!"}),Object(i.jsx)("img",{className:"".concat(E,"-wx-img"),src:"/myWx.png",alt:""})]}),Object(i.jsxs)(x.a,Object(I.a)(Object(I.a)({},F),{},{name:"register",onFinish:t,scrollToFirstError:!0,children:[Object(i.jsx)(x.a.Item,{name:"company",label:"\u516c\u53f8\u540d\u79f0",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u5728\u7684\u516c\u53f8\u540d\u79f0",whitespace:!0}],children:Object(i.jsx)(f.a,{placeholder:"\u8bf7\u8f93\u5165\u60a8\u5728\u7684\u516c\u53f8\u540d\u79f0"})}),Object(i.jsx)(x.a.Item,{name:"name",label:"\u59d3\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d",whitespace:!0}],children:Object(i.jsx)(f.a,{placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d"})}),Object(i.jsx)(x.a.Item,{name:"phone",label:"\u624b\u673a\u53f7",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7"}],children:Object(i.jsx)(f.a,{placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7"})}),Object(i.jsx)(x.a.Item,{name:"password",label:"\u5bc6\u7801",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801"}],hasFeedback:!0,children:Object(i.jsx)(f.a.Password,{placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801"})}),Object(i.jsx)(x.a.Item,{name:"confirm",label:"\u786e\u8ba4\u5bc6\u7801",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"\u8bf7\u786e\u8ba4\u60a8\u7684\u5bc6\u7801"},function(e){var t=e.getFieldValue;return{validator:function(e,s){return s&&t("password")!==s?Promise.reject(new Error("\u60a8\u8f93\u5165\u7684\u4e24\u4e2a\u5bc6\u7801\u4e0d\u5339\u914d")):Promise.resolve()}}}],children:Object(i.jsx)(f.a.Password,{placeholder:"\u8bf7\u786e\u8ba4\u60a8\u7684\u5bc6\u7801"})}),Object(i.jsx)(x.a.Item,Object(I.a)(Object(I.a)({},A),{},{children:Object(i.jsx)(O.a,{type:"primary",htmlType:"submit",children:"\u6ce8\u518c"})}))]}))]})},S=(s(225),[{path:"/",component:p,exact:!0},{path:"/login",component:k},{path:"/register",component:L},{path:"/discern",component:j,routes:[{path:"/discern/app",component:h}]}]);s(226),c.a.render(Object(i.jsx)(a.a,{children:Object(o.a)(S)}),document.getElementById("root"))}},[[227,1,2]]]);
//# sourceMappingURL=main.359b0e7f.chunk.js.map