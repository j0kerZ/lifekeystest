(this.webpackJsonplifekeystest=this.webpackJsonplifekeystest||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(21),r=a.n(c),o=a(6),s=(a(29),a(11)),u=a(12),m=a(14),i=a(13),d=a(8),E=(a(30),a(31),a(15)),p=a(10),h=(a(34),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={codes:[],products:[]},n.getcodes=n.getcodes.bind(Object(E.a)(n)),n.getproducts=n.getproducts.bind(Object(E.a)(n)),n}return Object(u.a)(a,[{key:"getcodes",value:function(){var e=this;fetch("https://satiated-toe.000webhostapp.com/code.php",{method:"POST",body:JSON.stringify({action:"getall"})}).then((function(e){return e.json()})).then((function(t){e.setState({codes:t.codes})})).catch((function(e){console.log(e)}))}},{key:"getproducts",value:function(){var e=this;fetch("https://satiated-toe.000webhostapp.com/product.php",{method:"POST",body:JSON.stringify({action:"getall"})}).then((function(e){return e.json()})).then((function(t){e.setState({products:t.products})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getcodes(),this.getproducts()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"page-header"},l.a.createElement(o.b,{to:"/"},l.a.createElement("input",{type:"button",class:"homebutton",value:"Home"})),l.a.createElement("div",{class:"space"}),l.a.createElement("div",{class:"space"}),l.a.createElement("div",{class:"space"}),l.a.createElement("img",{src:"/lifekeystest/0.png",className:"logo"})),l.a.createElement(p.d,null,l.a.createElement(p.b,null,l.a.createElement(p.a,null,"Products"),l.a.createElement(p.a,null,"Codes")),l.a.createElement(p.c,null,l.a.createElement("div",{className:"panel"},l.a.createElement("table",{className:"table"},l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Detail"),l.a.createElement("th",null,"Config")),this.state.products.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.ID),l.a.createElement("td",null,e.Name),l.a.createElement("td",null,e.Price),l.a.createElement("td",null,e.Detail),l.a.createElement("td",null,l.a.createElement("button",null,"Edit"),l.a.createElement("button",null,"Delete")))}))))),l.a.createElement(p.c,null,l.a.createElement("div",{className:"panel"},l.a.createElement("table",{className:"table"},l.a.createElement("tr",null,l.a.createElement("th",null,"Code"),l.a.createElement("th",null,"Value"),l.a.createElement("th",null,"Expired Date"),l.a.createElement("th",null,"Config")),this.state.codes.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.Code),l.a.createElement("td",null,e.Value),l.a.createElement("td",null,e.Date),l.a.createElement("td",null,l.a.createElement("button",null,"Edit"),l.a.createElement("button",null,"Delete")))})))))))}}]),a}(n.Component)),b=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"page-header"},l.a.createElement(o.b,{to:"/"},l.a.createElement("input",{type:"button",class:"homebutton",value:"Home"})),l.a.createElement("div",{class:"space"}),l.a.createElement("div",{class:"space"}),l.a.createElement("div",{class:"space"}),l.a.createElement("img",{src:"/lifekeystest/0.png",className:"logo"})))}}]),a}(n.Component);function f(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:"/lifekeystest/0.png",className:"App-logo"}),l.a.createElement("p",null,"Who you are?"),l.a.createElement("div",null,l.a.createElement(o.b,{to:"/Admin"},l.a.createElement("input",{type:"button",className:"button",value:"Admin"})),l.a.createElement("div",{className:"space"}),l.a.createElement(o.b,{to:"/User"},l.a.createElement("input",{type:"button",className:"button",value:"User"})))))}var v=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/Admin"},l.a.createElement(h,null)),l.a.createElement(d.a,{exact:!0,path:"/User"},l.a.createElement(b,null)),l.a.createElement(d.a,{path:"/"},l.a.createElement(f,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,null,l.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.57e38fd3.chunk.js.map