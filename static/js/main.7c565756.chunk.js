(this.webpackJsonpcodetracker2020=this.webpackJsonpcodetracker2020||[]).push([[0],{144:function(e,t,a){},184:function(e,t,a){e.exports=a(374)},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){},371:function(e,t,a){},374:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(55),l=a.n(i),r=(a(189),a(56)),s=a(57),c=a(22),m=a(62),u=a(61),p=a(37),d=a(7),h=(a(190),a(98),a(191),a(58)),v=a(89),E=(a(192),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={data:{koodityyppi:"css",pvm:"2020 01 01",kooditunnit:2,tehot:0}},n.handleInputChange=n.handleInputChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),console.log("// I.F. constructor propsii:",n.props.itemformpropsii[0].name,n.props.hfm),n}return Object(s.a)(a,[{key:"handleInputChange",value:function(e){console.log("//Itemform - handleInputChange, event.target.value:",e.target.value,"event.target.name:",e.target.name);var t="checkbox"===e.target.type?e.target.checked:e.target.value,a=e.target.name;this.setState({data:Object(v.a)(Object(v.a)({},this.state.data),{},Object(h.a)({},a,t))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("itemform - handleSubmit, state:, event:",this.state.data,e,"// ItemForm:  propsit:",this.state),console.log("// pvmdata:",this.state.data.pvm),this.props.hfm(this.state.data)}},{key:"render",value:function(){return o.a.createElement("div",{className:"inputwrap"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"labelbox"},o.a.createElement("label",{name:"koodityyppi"},"Koodityyppi")),o.a.createElement("select",{name:"koodityyppi",value:this.state.data.koodityyppi,onChange:this.handleInputChange},o.a.createElement("option",{value:"html"},"html"),o.a.createElement("option",{value:"css"},"css"),o.a.createElement("option",{value:"js"},"js"),o.a.createElement("option",{value:"react"},"react"),o.a.createElement("option",{value:"git"},"git")),o.a.createElement("br",null),o.a.createElement("div",{className:"labelbox"},o.a.createElement("label",{name:"pvm"},"P\xe4iv\xe4m\xe4\xe4r\xe4")),o.a.createElement("input",{type:"date",name:"pvm",value:this.state.data.pvm,onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("div",{className:"labelbox"},o.a.createElement("label",{name:"kooditunnit"},"Kooditunnit")),o.a.createElement("select",{name:"kooditunnit",value:this.state.data.kooditunnit,onChange:this.handleInputChange},o.a.createElement("option",{value:"1"},"1h"),o.a.createElement("option",{value:"2"},"2h"),o.a.createElement("option",{value:"3"},"3h"),o.a.createElement("option",{value:"4"},"4h"),o.a.createElement("option",{value:"5"},"5h"),o.a.createElement("option",{value:"6"},"6h"),o.a.createElement("option",{value:"7"},"7h"),o.a.createElement("option",{value:"8"},"8h")),o.a.createElement("br",null),o.a.createElement("div",{className:"labelbox"},o.a.createElement("label",{name:"tehot"},"tehot")),o.a.createElement("select",{name:"tehot",value:this.state.data.tehot,onChange:this.handleInputChange},o.a.createElement("option",{value:"0"},"0%"),o.a.createElement("option",{value:.1*this.state.data.kooditunnit},"10%"),o.a.createElement("option",{value:.2*this.state.data.kooditunnit},"20%"),o.a.createElement("option",{value:.3*this.state.data.kooditunnit},"30%"),o.a.createElement("option",{value:.4*this.state.data.kooditunnit},"40%"),o.a.createElement("option",{value:.5*this.state.data.kooditunnit},"50%"),o.a.createElement("option",{value:.6*this.state.data.kooditunnit},"60%"),o.a.createElement("option",{value:.7*this.state.data.kooditunnit},"70%"),o.a.createElement("option",{value:.8*this.state.data.kooditunnit},"80%"),o.a.createElement("option",{value:.9*this.state.data.kooditunnit},"90%"),o.a.createElement("option",{value:1*this.state.data.kooditunnit},"100%")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"buttonbox"},o.a.createElement("button",{type:"submit"},"Lis\xe4\xe4"),o.a.createElement("button",null,"Peruuta"))))}}]),a}(o.a.Component));var b=a(155),y=(a(193),a(24));var k=function(e){for(var t=Object(b.a)(e.koodipropsii),a=0,n=0,i=0,l=0,r=0,s=0,c=0,m=0,u=0,p=0,d=[],h=0;h<=t.length-1;h++)"html"==t[h].koodityyppi&&(a+=Number.parseInt(t[h].kooditunnit),s+=Number.parseFloat(t[h].tehot),console.log("// html",a,s)),"css"==t[h].koodityyppi&&(n+=Number.parseInt(t[h].kooditunnit),c+=Number.parseFloat(t[h].tehot),console.log("// css",n,c)),"react"==t[h].koodityyppi&&(i+=Number.parseInt(t[h].kooditunnit),m+=Number.parseFloat(t[h].tehot),console.log("// html",i,m)),"js"==t[h].koodityyppi&&(l+=Number.parseInt(t[h].kooditunnit),u+=Number.parseFloat(t[h].tehot),console.log("// js",l,u)),"git"==t[h].koodityyppi&&(r+=Number.parseInt(t[h].kooditunnit),p+=Number.parseFloat(t[h].tehot),console.log("// git",r,p));return d.push({koodiyht:"html",tunnityht:a,tehotyht:s}),d.push({koodiyht:"css",tunnityht:n,tehotyht:c}),d.push({koodiyht:"js",tunnityht:l,tehotyht:u}),d.push({koodiyht:"react",tunnityht:i,tehotyht:m}),d.push({koodiyht:"git",tunnityht:r,tehotyht:p}),console.log(t),o.a.createElement("div",{className:"baarit"},o.a.createElement(y.b,{width:400,height:300,data:d},o.a.createElement(y.c,{strokeDasharray:"8 8"}),o.a.createElement(y.d,{dataKey:"koodiyht"}),o.a.createElement(y.e,{dataKey:"tunnityht"}),o.a.createElement(y.a,{dataKey:"tunnityht",stackId:"a",fill:"blue"}),o.a.createElement(y.a,{dataKey:"tehotyht",stackId:"b",fill:"#8884d8",dataPointWidth:"5"})))};a(144);var f=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Orbitron",rel:"stylesheet"}),o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,o.a.createElement("span",{id:"spanni"})," C0DE TRACK",o.a.createElement("span",{id:"spanni"},"{"),"R")))};var g=function(e,t){console.log("// Koodilaskuri   propsii",e.koodipropsii,t),e.data;var a=e.koodipropsii.reverse().map((function(e){return o.a.createElement("div",{className:"rivitbox"},o.a.createElement("div",{className:"tyyppi"},e.koodityyppi),o.a.createElement("div",{className:"tyyppi_info"}," ",e.pvm),o.a.createElement("div",{className:"tyyppi_info"}," ",e.kooditunnit,"h "),o.a.createElement("div",{className:"tyyppi_info"},e.tehot/e.kooditunnit*100,"%"),o.a.createElement("br",null))}));return o.a.createElement("div",{className:"koodilaskuri"},a)},N=a(34);a(371);var j=function(e){return o.a.createElement("div",{className:"menu"},o.a.createElement(p.b,{to:"/Koodilaskuri"}," ",o.a.createElement("div",{className:"nappi"}," ",o.a.createElement(N.c,null)," ")," "),o.a.createElement(p.b,{to:"./ItemForm"}," ",o.a.createElement("div",{className:"nappi"}," ",o.a.createElement(N.a,null))),o.a.createElement(p.b,{to:"/Graafi"}," ",o.a.createElement("div",{className:"nappi"}," ",o.a.createElement(N.b,null)," ")))},I=[{koodityyppi:"html",kooditunnit:1,pvm:"01/06/2019",tehot:.4},{koodityyppi:"html",kooditunnit:4,pvm:"01/06/2019",tehot:1.4},{koodityyppi:"css",kooditunnit:4,pvm:"01/06/2019",tehot:2},{koodityyppi:"js",kooditunnit:1,pvm:"01/06/2019",tehot:.7},{koodityyppi:"React",kooditunnit:8,pvm:"01/06/2014",tehot:2},{koodityyppi:"Git",kooditunnit:8,pvm:"01/06/2019",tehot:4}],O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={data:I},n.handleFormSubmit=n.handleFormSubmit.bind(Object(c.a)(n)),console.log("// App - constructor. props:",e,n.props),n}return Object(s.a)(a,[{key:"handleFormSubmit",value:function(e){var t=this.state.data.slice();t.push(e),this.setState({data:t}),console.log("// App - handleForm Submit",t)}},{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement(f,null),o.a.createElement("div",{className:"wrap"},o.a.createElement("div",{className:"box"},o.a.createElement(d.a,{path:"/ItemForm",render:function(t){return o.a.createElement(E,Object.assign({},t,{itemformpropsii:e.state.data,itemformpropsii2:"hei",hfm:e.handleFormSubmit}))}}),o.a.createElement(d.a,{path:"/Koodilaskuri",render:function(t){return o.a.createElement(g,Object.assign({},t,{koodipropsii:e.state.data,koodipropsii2:"hei",hfm:e.handleFormSubmit}))}}),o.a.createElement(d.a,{path:"/Graafi",render:function(t){return o.a.createElement(k,Object.assign({},t,{koodipropsii:e.state.data}))}})),o.a.createElement(j,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t,a){}},[[184,1,2]]]);
//# sourceMappingURL=main.7c565756.chunk.js.map