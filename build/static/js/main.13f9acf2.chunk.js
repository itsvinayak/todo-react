(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{24:function(e,t,n){e.exports=n(32)},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n.n(o),s=n(10),c=n(15),l=n(16),u=n(20),d=n(17),f=n(23),h=n(18),m=n(5),p=n(7),v=n(22),g=n(11),w=n(21),b=n(9),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={userInput:"",list:[]},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"updateInput",value:function(e){this.setState({userInput:e})}},{key:"addItem",value:function(){if(""!==this.state.userInput){var e={id:Math.random(),value:this.state.userInput},t=Object(s.a)(this.state.list);t.push(e),this.setState({list:t,userInput:""})}}},{key:"deleteItem",value:function(e){var t=Object(s.a)(this.state.list).filter((function(t){return t.id!==e}));this.setState({list:t})}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement(m.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"3rem",fontWeight:"bolder"}},"TODO LIST"),r.a.createElement("hr",null),r.a.createElement(m.a,null,r.a.createElement(p.a,{md:{span:5,offset:4}},r.a.createElement(g.a,{className:"mb-3"},r.a.createElement(w.a,{placeholder:"add item . . . ",size:"lg",value:this.state.userInput,onChange:function(t){return e.updateInput(t.target.value)},"aria-label":"add something","aria-describedby":"basic-addon2"}),r.a.createElement(g.a.Append,null,r.a.createElement(v.a,{variant:"dark",size:"lg",onClick:function(){return e.addItem()}},"ADD"))))),r.a.createElement(m.a,null,r.a.createElement(p.a,{md:{span:5,offset:4}},r.a.createElement(b.a,null,this.state.list.map((function(t){return r.a.createElement(b.a.Item,{variant:"dark",action:!0,onClick:function(){return e.deleteItem(t.id)}},t.value)}))))))}}]),t}(a.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(31);i.a.render(r.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.13f9acf2.chunk.js.map