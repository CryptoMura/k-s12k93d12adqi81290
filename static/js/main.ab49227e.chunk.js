(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{242:function(n,t){},265:function(n,t){},267:function(n,t){},344:function(n,t){},346:function(n,t){},379:function(n,t){},384:function(n,t){},386:function(n,t){},393:function(n,t){},406:function(n,t){},429:function(n,t){},438:function(n,t){},440:function(n,t){},516:function(n,t,e){},518:function(n,t,e){},519:function(n,t,e){"use strict";e.r(t);var c,a,r,i,o,s,l,d,u,p,b,g,j,f,h,x,O,m,C,v,w=e(1),y=e(84),N=e.n(y),A=e(16),S=e.n(A),E=e(42),T=e(58),_=e(13),k=e(57),I=e(68),M=e.n(I),F=e(216),D=e.n(F),L=e(69),z=e(217),R=e(18),K={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(R.a)(Object(R.a)({},K),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(R.a)(Object(R.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(R.a)(Object(R.a)({},K),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(R.a)(Object(R.a)({},n),{},{account:t.payload.account});default:return n}},U={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(R.a)(Object(R.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(R.a)(Object(R.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(R.a)(Object(R.a)({},U),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},Y=Object(L.b)({blockchain:P,data:W}),B=[z.a],H=Object(L.c)(L.a.apply(void 0,B)),G=Object(L.d)(Y,H),q=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},Q=function(){return function(){var n=Object(E.a)(S.a.mark((function n(t){var e;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,G.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(q("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},J=function(n){return{type:"CONNECTION_FAILED",payload:n}},X=function(n){return function(){var t=Object(E.a)(S.a.mark((function t(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(Q());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},$=e(14),V=($.a.div(c||(c=Object(_.a)(["\n  background-color: #481B2FFF;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),$.a.div(a||(a=Object(_.a)(["\n  height: 8px;\n  width: 8px;\n"]))),$.a.div(r||(r=Object(_.a)(["\n  height: 16px;\n  width: 16px;\n"])))),Z=($.a.div(i||(i=Object(_.a)(["\n  height: 24px;\n  width: 24px;\n"]))),$.a.div(o||(o=Object(_.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$.a.div(s||(s=Object(_.a)(["\n  display: flex;\n  flex: $ ;\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"}))),nn=$.a.p(l||(l=Object(_.a)(["\n  color: var(--primary-text);\n  font-size: 8px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),tn=$.a.p(d||(d=Object(_.a)(["\n  color:  #F5784CFF;\n  font-size: 1.3rem;\n  text-shadow: -4px -4px 4px rgba(71,31,19,0.82);\n  margin-bottom:5px;\n"]))),en=($.a.p(u||(u=Object(_.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),$.a.p(p||(p=Object(_.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),cn=($.a.div(b||(b=Object(_.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(516),e.p+"static/media/discord.ac1316fb.png"),an=e.p+"static/media/opensea.e491fe3f.png",rn=e.p+"static/media/ins.32ea0ddd.png",on=e.p+"static/media/twitter.8b0dc03f.png",sn=e.p+"static/media/Mint.b5dc6b1d.png",ln=e.p+"static/media/2.b42064b4.png",dn=e.p+"static/media/3.add60fb2.png",un=e.p+"static/media/4.006272eb.png",pn=e.p+"static/media/5.5c556b6c.png",bn=e.p+"static/media/6.fa315a8b.png",gn=e(4),jn=$.a.button(g||(g=Object(_.a)(["\n  padding: 2%;\n  border-radius: 50px;\n  border: none;\n  font-size: 1.5rem;\n\n  background: rgba(41, 0, 8, 0.3);\n  font-weight: bold;\n  color: #E25856FF;\n  width: 60%;\n  cursor: pointer;\n\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),fn=$.a.button(j||(j=Object(_.a)(["\n  border: none;\n  border-radius:40% ;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #F5784CFF;\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(41, 0, 8, 0);\n\n\n"]))),hn=($.a.div(f||(f=Object(_.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),$.a.img(h||(h=Object(_.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),$.a.img(x||(x=Object(_.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),$.a.a(O||(O=Object(_.a)(["\n  color:  #F5784CFF;\n  text-decoration: none;\n"]))));$.a.div(m||(m=Object(_.a)(["\n  grid-area: 1 / "," / 2 / ",";\n  text-align:center\n  margin:10px;\n  color: var(--secondary);\n  text-decoration: none;\n"])),(function(n){var t=n.index;return t||0}),(function(n){var t=n.index;return t?t+1:0})),$.a.div(C||(C=Object(_.a)(["\n  display: grid;\n  grid-template-columns: 15fr 20fr 30fr 20fr 15fr;\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n"]))),$.a.div(v||(v=Object(_.a)(["\n  \n"])));function xn(n){return console.log(n.info),Object(gn.jsxs)("div",{className:"card",style:{zIndex:n.info.zIndex},children:[Object(gn.jsx)("img",{className:"img-card",src:n.info.cardImg}),Object(gn.jsx)("div",{className:"content",children:Object(gn.jsx)("a",{className:"logo-link",href:n.info.link,children:Object(gn.jsx)("img",{className:"img-logo",src:n.info.logo})})})]})}function On(n){return console.log(n.info),Object(gn.jsxs)("div",{className:"card",style:{zIndex:n.info.zIndex},children:[Object(gn.jsx)("img",{className:"img-card",src:n.info.cardImg}),Object(gn.jsx)("div",{className:"content",children:Object(gn.jsx)("a",{className:"logo-link-ins",marginLeft:"20%",width:"60%",href:n.info.link,children:Object(gn.jsx)("img",{className:"img-logo",src:n.info.logo})})})]})}var mn=function(){var n=Object(k.b)(),t=Object(k.c)((function(n){return n.blockchain})),e=Object(k.c)((function(n){return n.data})),c=Object(w.useState)(!1),a=Object(T.a)(c,2),r=a[0],i=a[1],o=Object(w.useState)(""),s=Object(T.a)(o,2),l=s[0],d=s[1],u=Object(w.useState)(1),p=Object(T.a)(u,2),b=p[0],g=p[1],j=Object(w.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),f=Object(T.a)(j,2),h=f[0],x=f[1],O=Object(w.useState)(!0),m=Object(T.a)(O,2),C=m[0],v=m[1],y=function(){var e=h.WEI_COST,c=h.GAS_LIMIT,a=String(e*b),r=String(c*b);console.log("Cost: ",a),console.log("Gas limit: ",r),d("Minting your ".concat(h.NFT_NAME,"...")),i(!0),t.smartContract.methods.mint(t.account,b).send({gasLimit:String(r),to:h.CONTRACT_ADDRESS,from:t.account,value:a}).once("error",(function(n){console.log(n),d("something wrong, please try again"),i(!1)})).then((function(e){console.log(e),d("WOW, the ".concat(h.NFT_NAME," is yours! go visit Opensea.io to view it.")),i(!1),n(Q(t.account))}))},N=function(){""!==t.account&&null!==t.smartContract&&n(Q(t.account))},A=function(){var n=Object(E.a)(S.a.mark((function n(){var t,e;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,x(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(w.useEffect)((function(){A()}),[]),Object(w.useEffect)((function(){N()}),[t.account]);var _,I,F={dis:{cardImg:ln,link:"https://discord.gg/qdj4rKaYJv",logo:cn,zIndex:1},opensea:{cardImg:dn,link:"https://opensea.io/collection/mansion-club",logo:an,zIndex:2},Mint:{cardImg:un,link:"https://opensea.io/",logo:an,zIndex:3},twitter:{cardImg:pn,link:"https://twitter.com/mansionclub3",logo:on,alignItems:"right",zIndex:2},ins:{cardImg:bn,link:"https://www.instagram.com/mansionclub.xyz/",logo:rn,zIndex:1}};return Object(gn.jsx)(gn.Fragment,{children:Object(gn.jsxs)("div",{className:"background",children:[Object(gn.jsx)("img",{className:"about",onClick:function(){v(!C)}}),Object(gn.jsx)("img",{className:"flyBird"}),Object(gn.jsxs)("div",{className:"btn-group",children:[Object(gn.jsx)(xn,{info:F.dis}),Object(gn.jsx)(xn,{info:F.opensea}),Object(gn.jsxs)("div",{className:"card",style:{zIndex:F.Mint.zIndex},children:[Object(gn.jsx)("img",{className:"img-card",src:F.Mint.cardImg}),Object(gn.jsxs)("div",{className:"content",style:{marginLeft:"10%"},children:[Object(gn.jsxs)(tn,{style:{marginTop:"40%",textAlign:"center",fontWeight:"bold"},children:[e.totalSupply," / ",h.MAX_SUPPLY]}),Number(e.totalSupply)>=h.MAX_SUPPLY?Object(gn.jsxs)(gn.Fragment,{children:[Object(gn.jsx)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(gn.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",h.NFT_NAME," on"]}),Object(gn.jsx)(V,{}),Object(gn.jsx)(hn,{target:"_blank",href:h.MARKETPLACE_LINK,children:h.MARKETPLACE})]}):Object(gn.jsx)(gn.Fragment,{children:""===t.account||null===t.smartContract?Object(gn.jsxs)(Z,{ai:"center",jc:"center",children:[Object(gn.jsx)(jn,{onClick:function(t){t.preventDefault(),n(function(){var n=Object(E.a)(S.a.mark((function n(t){var e,c,a,r,i,o,s,l,d;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=n.sent,n.next=12,a.json();case 12:if(r=n.sent,i=window,!(o=i.ethereum)||!o.isMetaMask){n.next=33;break}return M.a.setProvider(o),s=new D.a(o),n.prev=18,n.next=21,o.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,o.request({method:"net_version"});case 24:n.sent==r.NETWORK.ID?(d=new M.a(c,r.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),o.on("accountsChanged",(function(n){t(X(n[0]))})),o.on("chainChanged",(function(){window.location.reload()}))):t(J("Change network to ".concat(r.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(J("Something went wrong."));case 31:n.next=34;break;case 33:t(J("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),N()},children:"Connect MetaMask"}),""!==t.errorMsg?Object(gn.jsxs)(gn.Fragment,{children:[Object(gn.jsx)(V,{}),Object(gn.jsx)(tn,{style:{textAlign:"center"},children:t.errorMsg})]}):null]}):Object(gn.jsxs)(gn.Fragment,{children:[Object(gn.jsxs)(Z,{ai:"center",jc:"center",fd:"row",children:[Object(gn.jsx)(fn,{style:{lineHeight:.4},disabled:r?1:0,onClick:function(n){n.preventDefault(),function(){var n=b-1;n<1&&(n=1),g(n)}()},children:"-"}),Object(gn.jsx)("div",{style:{textAlign:"center",color:"#F5784CFF",width:"30%",margin:"0px",fontSize:"1.5rem",background:" rgba(41, 0, 8, 0.4)"},children:b}),Object(gn.jsx)(fn,{disabled:r?1:0,onClick:function(n){n.preventDefault(),function(){var n=b+1;n>10&&(n=10),g(n)}()},children:"+"})]}),Object(gn.jsx)(Z,{ai:"center",jc:"center",fd:"row",children:r?Object(gn.jsx)(jn,{disabled:r?1:0,onClick:function(n){n.preventDefault(),y(),N()},children:"Waiting"}):Object(gn.jsx)("img",{width:"40%",disabled:r?1:0,cursor:"pointer",style:{cursor:"pointer"},onClick:function(n){n.preventDefault(),y(),N()},src:sn})}),Object(gn.jsx)(tn,{style:{textAlign:"center"},children:l}),Object(gn.jsxs)(tn,{style:{textAlign:"center"},children:["1 NFT = ",h.DISPLAY_COST,"                        ",h.NETWORK.SYMBOL]})]})}),Object(gn.jsxs)(tn,{style:{textAlign:"center"},children:["Contract: ",Object(gn.jsx)(hn,{target:"_blank",href:h.SCAN_LINK,children:(_=h.CONTRACT_ADDRESS,I=12,_.length>I?"".concat(_.substring(0,I),"..."):_)})]})]})]}),Object(gn.jsx)(xn,{info:F.twitter}),Object(gn.jsx)(On,{info:F.ins})]}),Object(gn.jsx)("div",{className:"foreGround"}),Object(gn.jsx)("img",{className:"teamMember",hidden:C,onClick:function(){v(!0)}})]})})},Cn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,523)).then((function(t){var e=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;e(n),c(n),a(n),r(n),i(n)}))};e(518);N.a.render(Object(gn.jsx)(k.a,{store:G,children:Object(gn.jsx)(mn,{})}),document.getElementById("root")),Cn()}},[[519,1,2]]]);
//# sourceMappingURL=main.ab49227e.chunk.js.map