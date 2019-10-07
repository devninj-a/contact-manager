(window.webpackJsonpcontactmanager=window.webpackJsonpcontactmanager||[]).push([[0],{37:function(e,t,a){e.exports=a(67)},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),l=a(11),s=a(15),i=function(e){var t=e.brand;return r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light mb-4"},r.a.createElement("div",{className:"container",style:{maxWidth:"600px"}},r.a.createElement(l.c,{to:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.c,{exact:!0,to:"/",className:"nav-link",activeStyle:{fontWeight:"bold"}},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.c,{exact:!0,to:"/contact/create",className:"nav-link",activeStyle:{fontWeight:"bold"}},"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.c,{exact:!0,to:"/about",className:"nav-link",activeStyle:{fontWeight:"bold"}},"About"))))))};i.defaultProps={brand:"My App"};var m=i,u=a(6),p=a(7),d=a(9),h=a(8),b=a(10),f=a(2),v=a.n(f),E=a(13),y=a(36),O=a(17),g=a(14),j=a.n(g);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=r.a.createContext(),k=function(e,t){switch(t.type){case"DELETE_CONTACT":return C({},e,{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return C({},e,{contacts:[t.payload].concat(Object(y.a)(e.contacts))});case"UPDATE_CONTACT":return C({},e,{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState((function(t){return k(t,e)}))}},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(x.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={showDetails:!1},a.handleDeleteContact=function(){var e=Object(E.a)(v.a.mark((function e(t,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact;return r.a.createElement(x.Consumer,null,(function(a){return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("img",{src:"https://ui-avatars.com/api/?length=1&name=".concat(t.name,"&background=2196f3&color=fff&rounded=true&font-size=0.33"),alt:"avatar",className:"mt-4 ml-3"})),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title mb-3"},t.name,r.a.createElement("span",{className:"text-muted ml-2",style:{fontSize:"0.8em"}},t.email)),r.a.createElement("h6",{className:"card-subtitle text-muted mb-3",style:{fontSize:"0.8em"}},t.phone),r.a.createElement(l.b,{to:"contact/edit/".concat(t.id),className:"card-link"},"Edit"),r.a.createElement(l.b,{className:"card-link",onClick:e.handleDeleteContact.bind(e,t.id,a.dispatch)},"Delete")))))}))}}]),t}(n.Component),A=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(x.Consumer,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"text-dark mb-4"},"Contact List"),e.contacts.map((function(e){return r.a.createElement(S,{key:e.id,contact:e})})))}))}}]),t}(n.Component),D=a(35),P=a.n(D),T=function(e){var t=e.label,a=e.name,n=e.value,c=e.type,o=e.onChange,l=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:c,className:P()("form-control",{"is-invalid":l}),name:a,value:n,onChange:o}),l&&r.a.createElement("div",{className:"invalid-feedback"},l))};T.defaultProp={type:"text"};var W=T,q=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.handleChange=function(e){return a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(E.a)(v.a.mark((function e(t,n){var r,c,o,l,s,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name field is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email field is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone field is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,j.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(x.Consumer,null,(function(t){return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.handleSubmit.bind(e,t.dispatch)},r.a.createElement(W,{label:"Name",value:e.state.name,name:"name",type:"text",onChange:e.handleChange,error:e.state.errors.name}),r.a.createElement(W,{label:"Email",value:e.state.email,type:"email",name:"email",onChange:e.handleChange,error:e.state.errors.email}),r.a.createElement(W,{label:"Phone",value:e.state.phone,name:"phone",type:"text",onChange:e.handleChange,error:e.state.errors.phone}),r.a.createElement("input",{type:"submit",value:"Add",className:"btn btn-primary btn-block",disabled:!e.state.name||!e.state.email||!e.state.phone}))))}))}}]),t}(n.Component),_=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-dark"},"About"),r.a.createElement("p",null,"A simple contact manager app using React's context api"))},M=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"Page not found"))},z=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.handleChange=function(e){return a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(E.a)(v.a.mark((function e(t,n){var r,c,o,l,s,i,m;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name field is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email field is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone field is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,j.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(v.a.mark((function e(){var t,a,n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://jsonplaceholder.typicode.com/users/".concat(this.props.match.params.id));case 2:t=e.sent,a=t.data,n=a.name,r=a.email,c=a.phone,this.setState({name:n,email:r,phone:c});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(x.Consumer,null,(function(t){return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.handleSubmit.bind(e,t.dispatch)},r.a.createElement(W,{label:"Name",value:e.state.name,name:"name",type:"text",onChange:e.handleChange,error:e.state.errors.name}),r.a.createElement(W,{label:"Email",value:e.state.email,type:"email",name:"email",onChange:e.handleChange,error:e.state.errors.email}),r.a.createElement(W,{label:"Phone",value:e.state.phone,name:"phone",type:"text",onChange:e.handleChange,error:e.state.errors.phone}),r.a.createElement("input",{type:"submit",value:"Save",className:"btn btn-primary btn-block",disabled:!e.state.name||!e.state.email||!e.state.phone}))))}))}}]),t}(n.Component);a(65),a(66);var L=function(){return r.a.createElement(w,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m,{brand:"Contact Manager"}),r.a.createElement("div",{className:"container",style:{maxWidth:"600px"}},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:A}),r.a.createElement(s.a,{exact:!0,path:"/contact/create",component:q}),r.a.createElement(s.a,{exact:!0,path:"/contact/edit/:id",component:z}),r.a.createElement(s.a,{exact:!0,path:"/about",component:_}),r.a.createElement(s.a,{component:M}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.e5351e1c.chunk.js.map