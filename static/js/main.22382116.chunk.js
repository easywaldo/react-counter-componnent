(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(57)},38:function(e,t,n){},40:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),i=(n(38),n(27)),l=n(9),u=n(10),s=n(12),m=n(11),p=n(13),d=(n(40),n(80)),h=n(81),b=n(79),f=n(78),v=n(77),j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).increamentCount=function(){n.setState({count:n.state.count+n.state.increasementSize})},n.decreamentCount=function(){n.state.count<=n.state.increasementSize||n.setState({count:n.state.count-n.state.increasementSize})},n.addCartItem=function(){n.props.callbackFromParent(n.state)},n.state={id:n.props.product.id,productName:n.props.product.name,increasementSize:n.props.product.size,count:n.props.product.count,error:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"getSnapshotBeforeUpdate",value:function(e,t){if(t.count!==this.state.count)return console.log("snapshot changed"),{count:t.count}}},{key:"componentDidUpdate",value:function(e,t,n){n&&console.log("value \uac12\uc774 \ubc14\ub00c\uc5c8\ub2e4!",n.count)}},{key:"componentDidCatch",value:function(e,t){console.log(e),console.log(t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?r.a.createElement("div",null,"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4."):r.a.createElement("div",null,this.props.missing,r.a.createElement(v.a,{maxWidth:"sm"},"\uce74\uc6b4\ud130",r.a.createElement(h.a,{position:"static",color:"default"},r.a.createElement(f.a,{variant:"h6",color:"inherit"},r.a.createElement(b.a,null,"\uc0c1\ud488 : [",this.state.id,"]",this.state.productName,r.a.createElement("br",null),"\uc218\ub7c9 : ",this.state.count,r.a.createElement(d.a,{variant:"contained",color:"primary",onClick:this.increamentCount},"+"),r.a.createElement(d.a,{variant:"contained",color:"primary",onClick:this.decreamentCount},"-"),r.a.createElement("br",null),r.a.createElement(d.a,{variant:"contained",color:"primary",onClick:this.addCartItem},"\uce74\ud2b8\ucd94\uac00"))))))}}]),t}(a.Component),O=n(24),E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",phone:""},n.handleChange=function(e){n.setState(Object(O.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.onCreate(n.state),n.setState({name:"",phone:""})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{placeholder:"please enter your name",name:"name",onChange:this.handleChange,value:this.state.name}),r.a.createElement("input",{placeholder:"plese enter your phone number",name:"phone",onChange:this.handleChange,value:this.state.phone}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"\ub4f1\ub85d"))))}}]),t}(a.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.info,t=e.name,n=e.phone;e.id;return r.a.createElement("div",{style:{border:"1px solid black",padding:"8px",margin:"8px"}},r.a.createElement("div",null,r.a.createElement("b",null,t)),r.a.createElement("div",null,n))}}]),t}(a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.data.map(function(e){return r.a.createElement(C,{info:e,key:e.id})});return r.a.createElement("div",null,e)}}]),t}(a.Component);y.defaultProps={data:[]};var g=y,k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.id,n=e.productName,a=e.count;return r.a.createElement("div",null,r.a.createElement("p",null,"\uc0c1\ud488\uc544\uc774\ub514 : ",t," \uc0c1\ud488\uba85 : ",n," \uc8fc\ubb38\uc218\ub7c9 : ",a))}}]),t}(a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.data.map(function(e){return r.a.createElement(k,{item:e,key:e.id})});return r.a.createElement("div",null,e)}}]),t}(a.Component);S.defaultProps={data:[]};var w=S,z={id:"999",name:"\uac8c\uc0b4\ubcf6\uc74c\ubc25",count:20,size:10},x=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={information:[],cartList:[]},n.handleCreate=function(e){console.log(e);var t=n.state.information;n.setState({information:t.concat(Object(i.a)({},e,{id:n.id++}))})},n.itemCounterCallBack=function(e){var t=n.state.cartList;console.log("recevied item data"),console.log(e),n.setState({cartList:t.concat(Object(i.a)({},e))})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{onCreate:this.handleCreate}),r.a.createElement(g,{data:this.state.information}),r.a.createElement(j,{callbackFromParent:this.itemCounterCallBack,product:z}),r.a.createElement("br",null),r.a.createElement("div",null,"Cart Item List",r.a.createElement(w,{data:this.state.cartList})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.22382116.chunk.js.map