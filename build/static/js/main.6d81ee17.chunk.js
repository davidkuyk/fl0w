(this.webpackJsonpfl0h=this.webpackJsonpfl0h||[]).push([[0],{169:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(20),s=a.n(c),r=(a(41),a(21)),o=a(7),i=a(9),d=a(15),l=a.n(d),j=a(1),b=function(e){var t=Object(n.useState)(e.task.description),a=Object(i.a)(t,2),c=(a[0],a[1],Object(n.useState)(new Date)),s=Object(i.a)(c,2),r=(s[0],s[1],Object(n.useState)("None")),o=Object(i.a)(r,2),d=(o[0],o[1],Object(n.useState)("today")),l=Object(i.a)(d,2);l[0],l[1];return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.task.description}),Object(j.jsx)("td",{children:e.distance}),Object(j.jsx)("td",{children:e.task.date.substring(0,10)}),Object(j.jsx)("td",{children:e.task.category}),Object(j.jsx)("td",{children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{onClick:function(){var t,a;t=!0,a=e.task._id,e.editModeChange(t,a)},children:"edit"}),Object(j.jsx)("button",{onClick:function(){e.deleteTask(e.task._id)},children:"delete"})]})})]})},u=a(25),h=a.n(u),O=(a(51),a(50),function(e){var t=Object(n.useState)(e.task.description),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(new Date(new Date(e.task.date).toDateString())),o=Object(i.a)(r,2),d=o[0],b=o[1],u=Object(n.useState)(e.task.category),O=Object(i.a)(u,2),x=O[0],g=O[1],f=Object(n.useState)("today"),v=Object(i.a)(f,2),p=(v[0],v[1]);return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:c,onChange:function(e){s(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"form-control",children:e.distance?e.distance:"today"})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{children:Object(j.jsx)(h.a,{selected:d,onChange:function(e){return function(e){console.log(e);var t=new Date(e),a=new Date(t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()),n=new Date,c=new Date(n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()),s=Math.floor(a-c)/864e5;s=1==s?"1 day until":s>1?Math.ceil(s)+" days until":-1==s?"1 day ago":s<-1?Math.ceil(Math.abs(s))+" days ago":"today",b(a),p(s)}(e)}})})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:x,onChange:function(e){g(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"btn-success",onClick:function(t){return function(t){t.preventDefault();var a={description:c,date:d,category:x};l.a.post("/tasks/update/"+e.task._id,a).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e.response.request._response)})),window.location="/"}(t)},children:"save"}),Object(j.jsx)("button",{className:"btn-secondary",style:{marginLeft:8},onClick:function(){e.editModeChange(!1,null)},children:"cancel"})]})})]})}),x=a(50),g=function(){var e=Object(n.useState)({tasks:[]}),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({status:!0,rowKey:null}),r=Object(i.a)(s,2),o=r[0],d=r[1],u=function(e,t){d({status:e,rowKey:t})},h=function(e){l.a.delete("/tasks/"+e).then((function(e){return console.log(e.data)})),c({tasks:a.tasks.filter((function(t){return t._id!==e}))})};return Object(n.useEffect)((function(){l.a.get("/tasks/").then((function(e){var t=x.orderBy(e.data,["date"],"asc");c({tasks:t})})).catch((function(e){console.log(e)}))}),[]),Object(j.jsx)("div",{className:"tableWrapper",children:Object(j.jsx)("form",{class:"newTask",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{className:"thead-dark",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Description"}),Object(j.jsx)("th",{children:"Distance"}),Object(j.jsx)("th",{children:"Date"}),Object(j.jsx)("th",{children:"Category"}),Object(j.jsx)("th",{children:"Actions"})]})}),Object(j.jsx)("tbody",{children:a.tasks.map((function(e){var t=new Date(e.date),a=new Date(t.toDateString()),n=new Date,c=new Date(n.toDateString()),s=Math.floor(a-c)/864e5;return s=1==s?"1 day until":s>1?Math.ceil(s)+" days until":-1==s?"1 day ago":s<-1?Math.ceil(Math.abs(s))+" days ago":"today",o.status&&o.rowKey===e._id?Object(j.jsx)(O,{task:e,deleteTask:h,distance:s,editModeChange:u},e._id):Object(j.jsx)(b,{task:e,deleteTask:h,distance:s,editModeChange:u},e._id)}))})]})})})},f=function(){return Object(j.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(j.jsx)(r.b,{to:"/",className:"navbar-brand",children:"fl0h"}),Object(j.jsx)("div",{className:"collapse navbar-collapse",children:Object(j.jsx)("ul",{className:"navbar-nav mr-auto"})})]})},v=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(new Date),r=Object(i.a)(s,2),o=r[0],d=r[1],b=Object(n.useState)("None"),u=Object(i.a)(b,2),O=u[0],x=u[1],g=Object(n.useState)("today"),f=Object(i.a)(g,2),v=f[0],p=f[1];return Object(j.jsx)("div",{children:Object(j.jsx)("form",{class:"newTask",onSubmit:function(e){e.preventDefault();var t={description:a,date:o,category:O};console.log("task date on submit: "+t.date),l.a.post("/tasks/add",t).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e.response.request._response)})),window.location="/"},children:Object(j.jsx)("table",{children:Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:a,onChange:function(e){c(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"form-control",children:v||"today"})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{children:Object(j.jsx)(h.a,{selected:o,onChange:function(e){return function(e){var t=new Date(e),a=new Date(t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()),n=new Date,c=new Date(n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()),s=Math.floor(a-c)/864e5;s=1==s?"1 day until":s>1?Math.ceil(s)+" days until":-1==s?"1 day ago":s<-1?Math.ceil(Math.abs(s))+" days ago":"today",d(a),p(s)}(e)}})})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:O,onChange:function(e){x(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"submit",value:"add",className:"btn btn-primary"})})]})})})})})};var p=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(f,{}),Object(j.jsx)(v,{}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(j.jsx)(o.a,{path:"/edit/:id",component:O})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(p,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},41:function(e,t,a){}},[[169,1,2]]]);
//# sourceMappingURL=main.6d81ee17.chunk.js.map