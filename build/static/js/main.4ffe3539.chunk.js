(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{100:function(e,t,n){e.exports=n(179)},105:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),l=n(14),i=n(15),s=n(17),u=n(16),m=function(e){return c.a.createElement("ul",null,e.data.map((function(e){return c.a.createElement("li",{key:e.id},e.title)})))},p=function(e){return c.a.createElement("div",null,[1,2,3,4,5].map((function(t){return c.a.createElement("button",{key:t,onClick:function(){return e.getData(t)}},t)})))},d=(a.Component,n(13)),h=n(12),b=(n(105),n(10)),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(b.f,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},c.a.createElement(b.f.Item,{title:"\u9996\u9875",key:"home",icon:c.a.createElement("i",{className:"iconfont icon-shouye"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-shouye"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),c.a.createElement(b.f.Item,{icon:c.a.createElement("i",{className:"iconfont icon-shoucang"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-shoucang"}),title:"\u6536\u85cf",key:"Friend",selected:"/Enter"===t,onPress:function(){e.props.history.push("/Enter")}}),c.a.createElement(b.f.Item,{icon:c.a.createElement("i",{className:"iconfont icon-dingdanliebiao"}),selectedIcon:c.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"}}),title:"\u8ba2\u5355\u5217\u8868",key:"Friend",selected:"/dingdan"===this.state.selectedTab,onPress:function(){e.props.history.push("./dingdan")}}),c.a.createElement(b.f.Item,{icon:c.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"},title:"\u6211\u7684\u6dd8\u5b9d",key:"my",selected:"./taobao"===this.state.selectedTab,onPress:function(){e.props.history.push("./taobao")}})))}}]),n}(c.a.Component),E=Object(h.g)(f),g=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(b.f,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},c.a.createElement(b.f.Item,{title:"\u5e97\u94fa",key:"home",icon:c.a.createElement("i",{className:"iconfont icon-dianpu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-dianpu"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),c.a.createElement(b.f.Item,{icon:c.a.createElement("i",{className:"iconfont icon-kefu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-kefu"}),title:"\u5ba2\u670d",key:"cart",selected:"/cart"===t,onPress:function(){e.props.history.push("/cart")},"data-seed":"logId1"}),c.a.createElement(b.f.Item,{icon:c.a.createElement("i",{className:"iconfont icon-shoucang"}),selectedIcon:c.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"}}),title:"\u6536\u85cf",key:"Friend",selected:"yellowTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"yellowTab"})}}," "),c.a.createElement(b.f.Item,{icon:c.a.createElement("button",{style:{height:"35px",width:"100px",borderTopLeftRadius:"20px",borderTopRightRadius:"0px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"0px",backgroundColor:"orange",color:"white"}},"\u52a0\u5165\u8d2d\u7269\u8f66"),key:"madd to cart",onPress:function(){window.location="http://www.alipay.com"}}),c.a.createElement(b.f.Item,{icon:c.a.createElement("button",{style:{height:"35px",width:"100px",borderTopLeftRadius:"0px",borderTopRightRadius:"20px",borderBottomLeftRadius:"0px",borderBottomRightRadius:"20px",backgroundColor:"red",color:"white"}},"\u7acb\u5373\u8d2d\u4e70"),key:"take it now",onPress:function(){window.location="http://www.alipay.com"}})))}}]),n}(c.a.Component),y=Object(h.g)(g),v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onChange=function(t){e.setState({value:t})},e.clear=function(){e.setState({value:""})},e}return Object(i.a)(n,[{key:"render",value:function(e){return c.a.createElement("div",null,c.a.createElement(b.g,null),c.a.createElement(b.h,null,c.a.createElement("div",{className:"sub-title"})),c.a.createElement(b.e,{placeholder:"\u641c\u7d22\u5b9d\u8d1d",maxLength:200}))}}]),n}(c.a.Component),w=Object(h.g)(v),j=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={data:["1","2","3"],imgHeight:176},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["https://gw.alicdn.com/imgextra/i2/69/O1CN012kgqDf1CNdxWjfTPO_!!69-0-lubanu.jpg","https://gw.alicdn.com/imgextra/i3/105/O1CN01L6ja0a1Ce8DZ8aam2_!!105-0-lubanu.jpg","https://gw.alicdn.com/imgextra/i3/128/O1CN01Xg1Jrp1CofKQy0kOn_!!128-0-lubanu.jpg"]})}),100)}},{key:"render",value:function(){var e=this;return c.a.createElement(b.h,null,c.a.createElement(b.b,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t,n){return c.a.createElement("a",{key:n,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},c.a.createElement("img",{src:"".concat(t),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))}))))}}]),n}(c.a.Component),k=n(44),O=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this)).componentDidMount=function(){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist").then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.data;a.props.dispatch({type:"add",value:t}),a.setState({imgObj:t}),a.props.dispatch({type:"ad",value:t})}))},a}return Object(i.a)(n,[{key:"getnumber",value:function(e){for(var t=this,n=this.state.imgObj,a=e;a<n.length;a++)return c.a.createElement(b.c,null,c.a.createElement(b.c.Item,null,c.a.createElement("img",{style:{width:"200px",height:"200px"},onClick:function(){t.props.dispatch({type:"ad",index:a}),t.props.history.push("/S2")},src:n[a].img}),c.a.createElement("p",null,n[a].title),c.a.createElement("p",null,n[a].price)),c.a.createElement(b.c.Item,null,c.a.createElement("img",{style:{width:"200px",height:"200px"},onClick:function(){t.props.dispatch({type:"ad",index:a+1}),t.props.history.push("/S2")},src:n[a+1].img}),c.a.createElement("p",null,n[a+1].price)))}},{key:"render",value:function(){return console.log("liujiaxi:",this.props.userinfo),c.a.createElement("div",null,c.a.createElement("div",{className:"container0"},c.a.createElement("div",{className:"title0"},this.getnumber(0),this.getnumber(2),this.getnumber(4),this.getnumber(6),this.getnumber(8))))}}]),n}(c.a.Component),x=Object(k.b)((function(e){return{mydata:e.todo,change:e.change,userinfo:e.login}}))(Object(h.g)(O)),C=function(){return c.a.createElement("div",null,c.a.createElement(d.b,{to:"/s1"},c.a.createElement(w,null)),c.a.createElement(j,null),c.a.createElement(d.b,{to:"./s2"},c.a.createElement(x,null)),c.a.createElement(E,null))},I=function(e){return c.a.createElement("div",null,"\u6536\u85cf\u7684\u5546\u54c1",c.a.createElement("button",{onClick:function(){return e.history.push("/Enter")}},"\u5220\u9664"),c.a.createElement(E,null))},X=function(e){return c.a.createElement("div",null,"\u8ba2\u5355\u5217\u8868",c.a.createElement(E,null))},T=function(e){return c.a.createElement("div",null,"\u6211\u7684\u6dd8\u5b9d",c.a.createElement(E,null))},N=Object(h.g)((function(e){return c.a.createElement("div",null,c.a.createElement(b.e,{placeholder:"\u641c\u7d22\u5b9d\u8d1d",onCancel:function(){e.history.goBack()},showCancelButton:!0}),c.a.createElement("div",null,c.a.createElement("p",null,"\u60a8\u597d\uff0c\u9875\u9762\u5df2\u8df3\u8f6c")))})),R=void 0,P=Object(h.g)((function(e){return console.log(e),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{onClick:function(){R.props.history.push("/")}},"<="),c.a.createElement("div",{className:"container0"},c.a.createElement("div",{className:"title0"}),c.a.createElement(b.c,null)),c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i1/TB19I8UHVXXXXcXXFXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",style:{width:"100%"}})),c.a.createElement("div",null,c.a.createElement(y,null)))})),B=n(54),L=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).register=a.register.bind(Object(B.a)(a)),a}return Object(i.a)(n,[{key:"register",value:function(){console.log(this.props),this.props.history.push("/register")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h",null,"\u767b\u5f55\u9875"),c.a.createElement(b.h,null,c.a.createElement(b.d,null,"\u8d26\u53f7:",c.a.createElement("input",{type:"text",id:"user",style:{height:"35px",border:"none"}}),c.a.createElement("br",null),"\u5bc6\u7801:",c.a.createElement("input",{type:"password",id:"pwd",style:{height:"35px",border:"none"}}),c.a.createElement("br",null)),c.a.createElement(b.g,null),c.a.createElement(b.a,{type:"primary",id:"liu",onClick:function(){var t=document.getElementById("user").value,n=document.getElementById("pwd").value;t.length>0&&n.length>0?e.props.history.push("./Cart"):alert("\u8d26\u53f7\u6216\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a!")}},"\u767b\u5f55"),c.a.createElement(b.g,null),c.a.createElement(b.a,{onClick:this.register,type:"primary"},"\u6ce8\u518c")))}}]),n}(c.a.Component),S=n(48),_={datalist:[],shoucang:[],userinfo:""},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ActionCreators":return Object.assign({},e,{userinfo:t.uname});default:return e}};n(81);var A=Object(S.b)({homereducer:z}),F=Object(S.c)(A),D=function(){return c.a.createElement(k.a,{store:F},c.a.createElement(d.a,null,c.a.createElement(h.d,null,c.a.createElement(h.b,{exact:!0,path:"/",component:C}),c.a.createElement(h.b,{path:"/cart",component:I}),c.a.createElement(h.b,{path:"/Enter",component:L}),c.a.createElement(h.b,{path:"/dingdan",component:X}),c.a.createElement(h.b,{path:"/taobao",component:T}),c.a.createElement(h.b,{path:"/home/detail",component:I}),c.a.createElement(h.b,{path:"/search",component:w}),c.a.createElement(h.b,{path:"/s1",component:N}),c.a.createElement(h.b,{path:"/s2",component:P}),c.a.createElement(h.b,{path:"./picture",component:x}),c.a.createElement(h.b,{component:C}),c.a.createElement(h.b,{component:C}),c.a.createElement(h.b,{render:function(){return c.a.createElement(h.a,{to:"/"})}}))))};n(178);o.a.render(c.a.createElement(D,null),document.getElementById("root"));fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){}))}},[[100,1,2]]]);
//# sourceMappingURL=main.4ffe3539.chunk.js.map