(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{260:function(e,t,a){e.exports=a(628)},402:function(e,t){},404:function(e,t){},414:function(e,t){},416:function(e,t){},441:function(e,t){},443:function(e,t){},444:function(e,t){},450:function(e,t){},452:function(e,t){},470:function(e,t){},472:function(e,t){},484:function(e,t){},487:function(e,t){},492:function(e,t){},494:function(e,t){},517:function(e,t){},624:function(e,t){},625:function(e,t){},627:function(e,t,a){},628:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(141),l=a.n(c),s=a(11),u=a(16),o=a(10),i=a(18),m=a.n(i),p=a(29),d=a(142),f=a(55);a(269),a(271),a(629),a(274);f.initializeApp({apiKey:"AIzaSyD_63J7rhbrWWK_BnRBRtrlgxrTzCB3Mog",authDomain:"classforum-bbcdb.firebaseapp.com",databaseURL:"classforum-bbcdb-default-rtdb.firebaseio.com",projectId:"classforum-bbcdb",storageBucket:"classforum-bbcdb.appspot.com",messagingSenderId:"106102165436",appId:"1:106102165436:web:caf2e4132003fedfe025b9"});var b=f,E=f.auth(),h=f.firestore(),g=f.storage(),v=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),o=u[0],i=u[1],d=Object(n.useState)(""),f=Object(s.a)(d,2),b=f[0],h=f[1],g=Object(n.useState)(!1),v=Object(s.a)(g,2),y=v[0],O=v[1],j=Object(n.useState)(""),N=Object(s.a)(j,2),x=N[0],w=N[1],k=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a?i(n):"repassword"===a&&h(n)},_=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!y){e.next=12;break}if(o===b){e.next=6;break}return alert("\ube44\ubc00\ubc88\ud638\uc640 \uc7ac\uc785\ub825\ud55c \ube44\ubc00\ubc88\ud638\uac00 \ub2e4\ub985\ub2c8\ub2e4."),e.abrupt("return");case 6:return e.next=8,E.createUserWithEmailAndPassword(a,o);case 8:n=e.sent,alert("\ud68c\uc6d0\uac00\uc785 \uc694\uccad\uc744 \uc815\uc0c1\uc801\uc73c\ub85c \ucc98\ub9ac\ud558\uc600\uc2b5\ub2c8\ub2e4."),e.next=16;break;case 12:return e.next=14,E.signInWithEmailAndPassword(a,o);case 14:n=e.sent,alert("\ub85c\uadf8\uc778 \uc694\uccad\uc744 \uc815\uc0c1\uc801\uc73c\ub85c \ucc98\ub9ac\ud558\uc600\uc2b5\ub2c8\ub2e4.");case 16:console.log(n),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),w(e.t0.message);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:_,className:"container"},r.a.createElement("input",{name:"email",type:"email",placeholder:"\uc774\uba54\uc77c",required:!0,value:a,onChange:k,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",required:!0,value:o,className:"authInput",onChange:k}),y&&r.a.createElement("input",{name:"repassword",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638 \uc7ac\uc785\ub825",required:!0,value:b,className:"authInput",onChange:k}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:y?"\ud68c\uc6d0\uac00\uc785":"\ub85c\uadf8\uc778"}),x&&r.a.createElement("span",{className:"authError"},x),r.a.createElement("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch"},y?"\ub85c\uadf8\uc778":"\ud68c\uc6d0\uac00\uc785")))},y=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new b.auth.GoogleAuthProvider,e.next=3,E.signInWithPopup(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement("div",{className:"authTitle"},"2-10 \ud3ec\ub7fc"),r.a.createElement("div",{className:"authBtns"},r.a.createElement(v,null)),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Google\ub85c \ub85c\uadf8\uc778\ud558\uae30")))},O=a(259),j=function(e){var t=e.nweetObj;e.editPriority;return r.a.createElement("tr",{className:"nweet"},r.a.createElement("th",null,r.a.createElement(u.c,{to:"/detail/".concat(t.id)},r.a.createElement("h4",null,t.title))))},N=function(e){var t=e.userObj,a=e.category,c=Object(n.useState)([]),l=Object(s.a)(c,2),o=l[0],i=l[1];return console.log(a),Object(n.useEffect)((function(){h.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));i(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"center"},r.a.createElement(u.c,{to:"/new",className:"factoryInput__link"},"\uae00 \uc4f0\uae30")),r.a.createElement("table",{border:"10",bordercolor:"red",style:{marginTop:30}},r.a.createElement("tbody",null,o.map((function(e){return e.category===a&&r.a.createElement(j,{key:e.id,nweetObj:e,editPriority:e.creatorId===t.uid||1===t.priority})})))))},x=function(e){var t=e.refreshUser,a=e.userObj,c=Object(o.f)(),l=Object(n.useState)(a.displayName),u=Object(s.a)(l,2),i=u[0],d=u[1],f=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===i){e.next=6;break}return e.next=4,a.updateProfile({displayName:i});case 4:t(),alert("\uc774\ub984\uc774 ".concat(i,"(\uc73c)\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:f,className:"profileForm"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;d(t)},type:"text",autoFocus:!0,placeholder:"Name",value:i,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"\uc774\ub984 \ubcc0\uacbd",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){E.signOut(),alert("\ub85c\uadf8\uc544\uc6c3 \uc694\uccad\uc744 \uc815\uc0c1\uc801\uc73c\ub85c \ucc98\ub9ac\ud558\uc600\uc2b5\ub2c8\ub2e4."),c.push("/")}},"\ub85c\uadf8\uc544\uc6c3"),r.a.createElement("div",{className:"center",style:{marginTop:50}},a.priority?r.a.createElement("div",{className:"post__creator"},"You are an admin."):r.a.createElement(r.a.Fragment,null)))},w=function(){return r.a.createElement("nav",{className:"gnb"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.c,{className:"navLink",to:"/"},"\ud648")),r.a.createElement("li",null,r.a.createElement(u.c,{className:"navLink",to:"/test"},r.a.createElement("span",null,"\uc218\ud589\ud3c9\uac00 \uac8c\uc2dc\ud310"))),r.a.createElement("li",null,r.a.createElement(u.c,{className:"navLink",to:"/schedule"},r.a.createElement("span",null,"\ud559\uc0ac\uc77c\uc815 \uac8c\uc2dc\ud310"))),r.a.createElement("li",null,r.a.createElement(u.c,{className:"navLink",to:"/free"},r.a.createElement("span",null,"\uc790\uc720 \uac8c\uc2dc\ud310"))),r.a.createElement("li",null,r.a.createElement(u.c,{className:"navLink",to:"/profile"},r.a.createElement("span",null,"\ud504\ub85c\ud544")))))},k=a(256),_=function(e){var t=e.userObj,a=Object(o.g)().postId,c=h.collection("nweets").doc(a),l=Object(n.useState)(""),u=Object(s.a)(l,2),i=u[0],f=u[1],b=Object(n.useState)(""),E=Object(s.a)(b,2),g=E[0],v=E[1],y=Object(n.useState)(""),O=Object(s.a)(y,2),j=O[0],N=O[1],x=Object(n.useState)(""),w=Object(s.a)(x,2),_=w[0],S=w[1],C=Object(n.useState)(""),I=Object(s.a)(C,2),B=I[0],F=I[1],L=Object(o.f)();c.get().then((function(e){e.exists?(v(e.data().desc),f(e.data().title),N(e.data().creatorId),S(e.data().creatorName),F(e.data().createdAt)):alert("\uc0ad\uc81c\ub418\uc5c8\uac70\ub098 \uc5c6\ub294 \uac8c\uc2dc\ubb3c\uc785\ub2c8\ub2e4.")})).catch((function(e){console.log(e)}));var T=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=5;break}return e.next=4,h.doc("nweets/".concat(a)).delete();case 4:L.push("/");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"post__title"},i,j===t.uid||t.priority?r.a.createElement("span",{onClick:T},r.a.createElement(d.a,{icon:k.a,size:"xs",className:"trashIcon"})):r.a.createElement(r.a.Fragment,null)),r.a.createElement("hr",{className:"post__hr"}),r.a.createElement("div",{className:"post__desc",dangerouslySetInnerHTML:{__html:g}}),r.a.createElement("div",{className:"post__creator"},"Written By ",_," at ",B))},S=a(257),C=a.n(S),I=(a(385),{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],[{align:[]},{color:[]},{background:[]}],["clean"]]}),B=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","align","color","background"],F=function(e){var t=e.value,a=e.onChange;return r.a.createElement("div",{className:"postfactory",style:{height:"650px"}},r.a.createElement(C.a,{style:{height:"600px"},theme:"snow",modules:I,formats:B,value:t||"",onChange:a}))},L=a(632),T=function(e){var t=e.title,a=e.onChange,n=e.category,c=e.onCategoryChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"factoryInput__title",value:t||"",onChange:a,type:"text",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.",maxLength:120}),r.a.createElement("form",null,r.a.createElement("select",{className:"titleFactory__select",value:n,onChange:c},r.a.createElement("option",{disabled:!0,hidden:!0},"\uac8c\uc2dc\ud310\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),r.a.createElement("option",null,"\uc218\ud589\ud3c9\uac00 \uac8c\uc2dc\ud310"),r.a.createElement("option",null,"\ud559\uc0ac\uc77c\uc815 \uac8c\uc2dc\ud310"),r.a.createElement("option",null,"\uc790\uc720 \uac8c\uc2dc\ud310"))))},P=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],u=c[1],i=Object(n.useState)(""),d=Object(s.a)(i,2),f=d[0],b=d[1],E=Object(n.useState)("\uac8c\uc2dc\ud310\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),v=Object(s.a)(E,2),y=v[0],O=v[1],j=Object(o.f)(),N=-1,x="",w=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,s,o,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(y),x=f,""!==l){e.next=8;break}return alert("\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694."),document.getElementsByClassName("factoryInput__title")[0].focus(),e.abrupt("return");case 8:if("\uac8c\uc2dc\ud310\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."!==y){e.next=14;break}return alert("\uce74\ud14c\uace0\ub9ac\ub97c \uc120\ud0dd\ud558\uc138\uc694."),document.getElementsByClassName("titleFactory__select")[0].focus(),e.abrupt("return");case 14:if(""!==f){e.next=18;break}return alert("\ubcf8\ubb38\uc744 \uc785\ub825\ud558\uc138\uc694."),document.getElementsByClassName("ql-editor")[0].focus(),e.abrupt("return");case 18:document.getElementsByClassName("factoryInput__arrow")[0].value="\uac8c\uc2dc\uc911...";case 19:if(n=x.indexOf('<img src="',N),N=x.indexOf('">',n+1),-1!==n){e.next=24;break}return e.abrupt("break",36);case 24:return r=g.ref().child("".concat(t.uid,"/").concat(Object(L.a)())),e.next=27,r.putString(x.substring(n+10,N),"data_url");case 27:return c=e.sent,e.next=30,c.ref.getDownloadURL();case 30:s=e.sent,x=x.substring(0,n+10)+s+x.substring(N,x.length),N=x.indexOf('">',n+1),console.log(x),e.next=19;break;case 36:return a.preventDefault(),o=(new Date).toLocaleString(),console.log(y),i={title:l,desc:x,category:y,createdAt:o,creatorId:t.uid,creatorName:t.displayName},e.next=42,h.collection("nweets").add(i);case 42:u(""),b(""),j.push("/");case 45:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:w,className:"factoryForm"},r.a.createElement("div",null,r.a.createElement(T,{title:l,onChange:function(e){var t=e.target.value;u(t)},category:y,onCategoryChange:function(e){var t=e.target.value;O(t)},className:"titlefactory"}),r.a.createElement(F,{value:f,onChange:b}),r.a.createElement("div",{className:"center"},r.a.createElement("input",{type:"submit",value:"\uac8c\uc2dc",className:"factoryInput__arrow"}))))},U=a(258),A=new(a.n(U).a),D=function(){A.init(),console.log("init finish"),A.setSchool("\ub355\uc774\uc911\ud559\uad50"),console.log("setschool finish");var e=A.getTimetable();return console.log("get timetable finish"),console.log(e),r.a.createElement("div",null,"TimeTable")},W=function(){return r.a.createElement("div",{className:"home__title"},r.a.createElement("section",{class:"scontainer"},r.a.createElement("h1",{class:"title"},r.a.createElement("span",null,"\uc548\ub155\ud558\uc138\uc694"),r.a.createElement("span",null,"2-10 \ud3ec\ub7fc\uc5d0 \uc624\uc2e0 \uac83\uc744"),r.a.createElement("span",null,"\ud658\uc601\ud569\ub2c8\ub2e4.")),r.a.createElement("h2",{class:"title"},r.a.createElement("span",null,"\uc774 \uc0ac\uc774\ud2b8\ub294 \uc815\ubcf4\ub97c"),r.a.createElement("span",null,"\uc27d\uace0 \ube60\ub974\uac8c \uacf5\uc720\ud558\uae30 \uc704\ud55c"),r.a.createElement("span",null,"\uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4."))),r.a.createElement(u.c,{to:"/test"},r.a.createElement("span",{className:"home__link"},"\uc218\ud589\ud3c9\uac00 \uac8c\uc2dc\ud310")))},q=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(u.b,null,a&&r.a.createElement(w,null),r.a.createElement(o.c,null,r.a.createElement(r.a.Fragment,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:50,display:"flex",flexWrap:"wrap",justifyContent:"center"}},r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(W,null)),r.a.createElement(o.a,{exact:!0,path:"/test"},r.a.createElement(N,{userObj:n,category:"\uc218\ud589\ud3c9\uac00 \uac8c\uc2dc\ud310"})),r.a.createElement(o.a,{exact:!0,path:"/schedule"},r.a.createElement(N,{userObj:n,category:"\ud559\uc0ac\uc77c\uc815 \uac8c\uc2dc\ud310"})),r.a.createElement(o.a,{exact:!0,path:"/free"},r.a.createElement(N,{userObj:n,category:"\uc790\uc720 \uac8c\uc2dc\ud310"})),r.a.createElement(o.a,{exact:!0,path:"/profile"},r.a.createElement(x,{userObj:n,refreshUser:t})),r.a.createElement(o.a,{exact:!0,path:"/detail/:postId"},r.a.createElement(_,{userObj:n})),r.a.createElement(o.a,{exact:!0,path:"/new"},r.a.createElement(P,{userObj:n})),r.a.createElement(o.a,{exact:!0,path:"/time"},r.a.createElement(D,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(y,null))))))};var R=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(s.a)(l,2),i=o[0],m=o[1];return Object(n.useEffect)((function(){var e=["hRpeUOmi27bBm2MDVbsrd58FTX93"];E.onAuthStateChanged((function(t){if(t){var a=e.includes(t.uid)?1:0;m({displayName:t.displayName,uid:t.uid,priority:a,updateProfile:function(e){return t.updateProfile(e)}})}else m(null);c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(u.a,null,r.a.createElement(q,{refreshUser:function(){var e=E.currentUser,t=["hRpeUOmi27bBm2MDVbsrd58FTX93"].includes(e.uid)?1:0;m({displayName:e.displayName,uid:e.uid,priority:t,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(i),userObj:i})):"Initializing...")};a(627);l.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.939bdce2.chunk.js.map