(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{133:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return O}));var r=n(1),c=n.n(r),a=n(4),i=n(32),o=n(64),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),b=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,b,f=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>3&&void 0!==f[3]?f[3]:"recent",o=f.length>4&&void 0!==f[4]&&f[4],s=!1,u={slot:0,confirmations:0,err:null},b=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(f,d){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{b=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),f(u))}),i)}catch(l){s=!0,console.error("WS error in setup",t,l)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,f(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[b]&&r.removeSignatureListener(b),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,b,f,d,l,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),b={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return f=e.sent,d=f.data.itemsAvailable.toNumber(),l=f.itemsRedeemed.toNumber(),p=d-l,m=f.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m}),e.abrupt("return",{candyMachine:b,itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer(),e.from("edition")],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,f,l,g,O,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,f=t.connection,l=t.program,e.next=7,m(s.publicKey);case 7:return g=e.sent,e.next=10,p(s.publicKey);case 10:return O=e.sent,e.next=13,f.getMinimumBalanceForRentExemption(o.a.span);case 13:return x=e.sent,e.next=16,l.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:g,masterEdition:O,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:b,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:x,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),d(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},x=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t){},359:function(e,t){},375:function(e,t){},376:function(e,t){},407:function(e,t){},463:function(e,t){},465:function(e,t){},479:function(e,t){},483:function(e,t){},485:function(e,t){},495:function(e,t){},497:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},541:function(e,t){},553:function(e,t){},556:function(e,t){},568:function(e,t){},569:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(2),s=n.n(o),u=n(29),b=n.n(u),f=(n(353),n(354),n(13)),d=n(1),l=n.n(d),p=n(4),m=n(12),j=n(132),g=n(134),O=n(313),x=n(596),h=n(601),y=n(605),v=n(604),S=n(15),w=n(52),k=n(175),P=n(133),R=n(28),T=Object(g.a)(k.a)(r||(r=Object(j.a)([""]))),K=g.a.span(c||(c=Object(j.a)([""]))),M=g.a.div(a||(a=Object(j.a)([""]))),B=Object(g.a)(x.a)(i||(i=Object(j.a)([""]))),L=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(R.jsxs)(K,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},A=function(e){var t=Object(o.useState)("https://rolana.herokuapp.com/whitelisted"),n=Object(m.a)(t,2),r=n[0],c=(n[1],Object(o.useState)()),a=Object(m.a)(c,2),i=a[0],s=a[1],u=Object(o.useState)(!1),b=Object(m.a)(u,2),d=b[0],j=b[1],g=Object(o.useState)(!1),x=Object(m.a)(g,2),k=x[0],K=x[1],A=Object(o.useState)(!1),E=Object(m.a)(A,2),C=E[0],I=E[1],W=Object(o.useState)(!1),D=Object(m.a)(W,2),U=D[0],N=D[1],Y=Object(o.useState)(0),_=Object(m.a)(Y,2),F=_[0],J=_[1],V=Object(o.useState)(0),q=Object(m.a)(V,2),G=q[0],z=q[1],H=Object(o.useState)(0),Q=Object(m.a)(H,2),X=Q[0],Z=Q[1],$=Object(o.useState)({open:!1,message:"",severity:void 0}),ee=Object(m.a)($,2),te=ee[0],ne=ee[1],re=Object(o.useState)(new Date(e.startDate)),ce=Object(m.a)(re,2),ae=ce[0],ie=ce[1],oe=Object(w.c)(),se=Object(o.useState)(),ue=Object(m.a)(se,2),be=ue[0],fe=ue[1],de=function(){Object(p.a)(l.a.mark((function t(){var n,r,c,a,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(oe){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(P.b)(oe,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,J(a),Z(i),z(o),K(0===i),ie(c),fe(r);case 16:case"end":return t.stop()}}),t)})))()},le=function(){var t=Object(p.a)(l.a.mark((function t(){var n,c,a,i,o,u,b,f;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(r,"/whitelisted/member/").concat(oe.publicKey.toString()),{method:"GET"});case 3:return n=t.sent,t.next=6,n.json();case 6:return c=t.sent,t.next=9,JSON.parse(JSON.stringify(c)).reserve;case 9:if(a=t.sent,U){t.next=12;break}throw new Error("You are not whitelisted");case 12:if(!(a-1<0)){t.next=15;break}throw console.log("confirmed"),new Error("Not enough reserves");case 15:if(I(!0),!oe||!(null===be||void 0===be?void 0:be.program)){t.next=34;break}return t.next=19,Object(P.c)(be,e.config,oe.publicKey,e.treasury);case 19:return i=t.sent,t.next=22,Object(P.a)(i,e.txTimeout,e.connection,"singleGossip",!1);case 22:if(null===(o=t.sent)||void 0===o?void 0:o.err){t.next=33;break}return ne({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}),t.next=27,JSON.stringify({reserve:a-1});case 27:return u=t.sent,t.next=30,fetch("".concat(r,"/whitelisted/update/").concat(oe.publicKey.toString(),"/").concat("294771303d5a4c969056a218f07bde5b"),{method:"PUT",headers:{"Content-Type":"application/json"},body:u});case 30:console.log("Updated Reserves for user"),t.next=34;break;case 33:ne({open:!0,message:"Mint failed! Please try again!",severity:"error"});case 34:t.next=41;break;case 36:t.prev=36,t.t0=t.catch(0),b=t.t0.message||"Minting failed! Please try again!",t.t0.message?311===t.t0.code?(b="SOLD OUT!",K(!0)):312===t.t0.code?b="Minting period hasn't started yet.":("You are not whitelisted"===t.t0.message||"Not enough reserves"===t.t0.message)&&(b=t.t0.message):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?b="SOLD OUT!":t.t0.message.indexOf("0x135")&&(b="Insufficient funds to mint. Please fund your wallet.")),ne({open:!0,message:b,severity:"error"});case 41:if(t.prev=41,!oe){t.next=47;break}return t.next=45,e.connection.getBalance(oe.publicKey);case 45:f=t.sent,s(f/S.LAMPORTS_PER_SOL);case 47:return I(!1),de(),t.finish(41);case 50:case"end":return t.stop()}}),t,null,[[0,36,41,50]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!oe){t.next=9;break}return t.next=3,e.connection.getBalance(oe.publicKey);case 3:return n=t.sent,s(n/S.LAMPORTS_PER_SOL),t.next=7,fetch("".concat(r,"/whitelisted/member/").concat(oe.publicKey.toString()));case 7:"404"!==t.sent.status.toString()?N(!0):console.log("not found");case 9:case"end":return t.stop()}}),t)})))()}),[oe,e.connection]),Object(o.useEffect)(de,[oe,e.candyMachineId,e.connection]),Object(R.jsxs)("main",{children:[oe&&Object(R.jsxs)("p",{children:["Wallet ",Object(P.d)(oe.publicKey.toBase58()||"")]}),oe&&Object(R.jsxs)("p",{children:["Balance: ",(i||0).toLocaleString()," SOL"]}),oe&&Object(R.jsxs)("p",{children:["Total Available: ",F]}),oe&&Object(R.jsxs)("p",{children:["Redeemed: ",G]}),oe&&Object(R.jsxs)("p",{children:["Remaining: ",X]}),Object(R.jsx)(M,{children:oe?Object(R.jsx)(B,{disabled:!U||k||C||!d,onClick:le,variant:"contained",children:k?"SOLD OUT":d?C?Object(R.jsx)(h.a,{}):"MINT":Object(R.jsx)(O.a,{date:ae,onMount:function(e){return e.completed&&j(!0)},onComplete:function(){return j(!0)},renderer:L})}):Object(R.jsx)(T,{children:"Connect Wallet"})}),Object(R.jsx)(y.a,{open:te.open,autoHideDuration:6e3,onClose:function(){return ne(Object(f.a)(Object(f.a)({},te),{},{open:!1}))},children:Object(R.jsx)(v.a,{onClose:function(){return ne(Object(f.a)(Object(f.a)({},te),{},{open:!1}))},severity:te.severity,children:te.message})})]})},E=n(32),C=n(116),I=n(340),W=n(602),D=new E.d.PublicKey("BrUvx1uVWJW6JUDQu9eCQrFv7ELtv9CPL9AFPq2CmMgp"),U=new E.d.PublicKey("FpVdyfnW2dY8fB3REPhKTXpnCXTarbW7kddU7URYUgUx"),N=new E.d.PublicKey("3pGBbrzR5ThVG76Fsr9ZJqLEj9TMs5m92DmJj8k2zaf5"),Y="mainnet-beta",_=new E.d.Connection("https://explorer-api.mainnet-beta.solana.com"),F=parseInt("1634619600",10),J=Object(I.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),V=function(){var e=Object(o.useMemo)((function(){return Object(S.clusterApiUrl)(Y)}),[]),t=Object(o.useMemo)((function(){return[Object(C.a)(),Object(C.b)(),Object(C.c)(),Object(C.e)({network:Y}),Object(C.d)({network:Y})]}),[]);return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(W.a,{theme:J,children:Object(R.jsx)(w.a,{endpoint:e,children:Object(R.jsx)(w.b,{wallets:t,autoConnect:!0,children:Object(R.jsx)(k.b,{children:Object(R.jsx)(A,{candyMachineId:N,config:U,connection:_,startDate:F,treasury:D,txTimeout:3e4})})})})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,606)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};b.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(V,{})}),document.getElementById("root")),q()}},[[569,1,2]]]);
//# sourceMappingURL=main.1e3336be.chunk.js.map