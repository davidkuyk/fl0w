(this.webpackJsonpfl0h=this.webpackJsonpfl0h||[]).push([[0],{169:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(19),s=a.n(c),o=(a(41),a(14)),r=a(7),i=a(12),l=a(15),d=a.n(l),j=a(2),b=a(92),h=function(){var e=Object(n.useState)({tasks:[]}),t=Object(i.a)(e,2),a=t[0],c=t[1];console.log(a);var s=function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.task.description}),Object(j.jsx)("td",{children:e.distance}),Object(j.jsx)("td",{children:e.task.date.substring(0,10)}),Object(j.jsx)("td",{children:e.task.category}),Object(j.jsxs)("td",{children:[Object(j.jsx)(o.b,{to:"/edit/"+e.task._id,children:"edit"})," ",Object(j.jsx)("button",{onClick:function(){e.deleteTask(e.task._id)},children:"delete"})]})]})},r=function(e){d.a.delete("/tasks/"+e).then((function(e){return console.log(e.data)})),c({tasks:a.tasks.filter((function(t){return t._id!==e}))})};return Object(n.useEffect)((function(){d.a.get("/tasks/").then((function(e){var t=b.orderBy(e.data,["date"],"asc");c({tasks:t})})).catch((function(e){console.log(e)}))}),[]),Object(j.jsx)("div",{className:"tableWrapper",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{className:"thead-dark",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Description"}),Object(j.jsx)("th",{children:"Distance"}),Object(j.jsx)("th",{children:"Date"}),Object(j.jsx)("th",{children:"Category"}),Object(j.jsx)("th",{children:"Actions"})]})}),Object(j.jsx)("tbody",{children:a.tasks.map((function(e){var t=new Date(e.date),a=new Date(t.toDateString());console.log("d2F ",a);var n=new Date;console.log("dt1 ",n);var c=new Date(n.toDateString());console.log("d1F ",c);var o=Math.floor(a-c)/864e5;return console.log("Math.floor(d2F-d1F) ",Math.floor(a-c)),console.log("distance ",o),o=1==o?"1 day until":o>1?Math.ceil(o)+" days until":-1==o?"1 day ago":o<-1?Math.ceil(Math.abs(o))+" days ago":"today",Object(j.jsx)(s,{task:e,deleteTask:r,distance:o},e._id)}))})]})})},u=function(){return Object(j.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(j.jsx)(o.b,{to:"/",className:"navbar-brand",children:"fl0h"}),Object(j.jsx)("div",{className:"collapse navbar-collapse",children:Object(j.jsx)("ul",{className:"navbar-nav mr-auto"})})]})},O=a(25),x=a.n(O),g=(a(51),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(new Date),o=Object(i.a)(s,2),l=o[0],b=o[1],h=Object(n.useState)("None"),u=Object(i.a)(h,2),O=u[0],g=u[1],f=Object(n.useState)("today"),v=Object(i.a)(f,2),p=v[0],m=v[1],y=Object(r.e)().id;Object(n.useEffect)((function(){d.a.get("/tasks/"+y).then((function(e){c(e.data.description),b(new Date(e.data.date)),g(e.data.category)})).catch((function(e){console.log(e)}))}),[]);return Object(j.jsx)("div",{children:Object(j.jsx)("form",{class:"newTask",onSubmit:function(e){e.preventDefault();var t={description:a,date:l,category:O};d.a.post("/tasks/update/"+y,t).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e.response.request._response)})),window.location="/"},children:Object(j.jsx)("table",{children:Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:a,onChange:function(e){c(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"form-control",children:p||"today"})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{children:Object(j.jsx)(x.a,{selected:l,onChange:function(e){var t=new Date(e),a=new Date(t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()),n=new Date,c=new Date(n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()),s=Math.floor(a-c)/864e5;s=1==s?"1 day until":s>1?Math.ceil(s)+" days until":-1==s?"1 day ago":s<-1?Math.ceil(Math.abs(s))+" days ago":"today",b(a),m(s)}})})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:O,onChange:function(e){g(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"submit",value:"Edit Task",className:"btn btn-primary"})})]})})})})})}),f=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(new Date),o=Object(i.a)(s,2),r=o[0],l=o[1],b=Object(n.useState)("None"),h=Object(i.a)(b,2),u=h[0],O=h[1],g=Object(n.useState)("today"),f=Object(i.a)(g,2),v=f[0],p=f[1];return Object(j.jsx)("div",{children:Object(j.jsx)("form",{class:"newTask",onSubmit:function(e){e.preventDefault();var t={description:a,date:r,category:u};console.log("task date on submit: "+t.date),d.a.post("/tasks/add",t).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e.response.request._response)})),window.location="/"},children:Object(j.jsx)("table",{children:Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:a,onChange:function(e){c(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"form-control",children:v||"today"})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{children:Object(j.jsx)(x.a,{selected:r,onChange:function(e){return function(e){var t=new Date(e),a=new Date(t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()),n=new Date,c=new Date(n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()),s=Math.floor(a-c)/864e5;s=1==s?"1 day until":s>1?Math.ceil(s)+" days until":-1==s?"1 day ago":s<-1?Math.ceil(Math.abs(s))+" days ago":"today",l(a),p(s)}(e)}})})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:u,onChange:function(e){O(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"submit",value:"add",className:"btn btn-primary"})})]})})})})})};var v=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(u,{}),Object(j.jsx)(f,{}),Object(j.jsx)(r.a,{path:"/",exact:!0,component:h}),Object(j.jsx)(r.a,{path:"/edit/:id",component:g})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(v,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},41:function(e,t,a){}},[[169,1,2]]]);
//# sourceMappingURL=main.caac8867.chunk.js.map