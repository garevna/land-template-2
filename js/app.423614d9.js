(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dgtek-land-2/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("8a23"),r=n.n(a);r.a},"0f8a":function(t,e,n){"use strict";n.r(e);n("96cf");var a=n("1da1"),r={speedTestData:null,downloadProgress:null,downloadSpeed:null,uploadProgress:null,uploadSpeed:null,testServer:null,speedTestButtonEnabled:!0,ws:{}},s={speedTestEndpoint:function(t,e,n){return"".concat(n.socket,"/speedtest")}},o={SPEED_TEST_RESULTS:function(t,e){t.speedTestData=e?JSON.parse(JSON.stringify(e)):e},DOWNLOAD_PROGRESS:function(t,e){t.downloadProgress=e},DOWNLOAD_SPEED:function(t,e){t.downloadSpeed=e},UPLOAD_PROGRESS:function(t,e){t.uploadProgress=e},UPLOAD_SPEED:function(t,e){t.uploadSpeed=e},SPEED_TEST_SERVER:function(t,e){t.testServer=JSON.parse(JSON.stringify(e))},SPEED_TEST_BUTTON:function(t,e){t.speedTestButtonEnabled=e},WEBSOCKET_CONNECTION:function(t,e){t.ws=Object.assign(new WebSocket(e.connect),{onopen:e.onopen,onclose:e.onclose,onmessage:e.onmessage,onerror:e.onerror})}},i={INIT_WEBSOCKET:function(t,e){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=function(t){t.target.send("test")},t.dispatch("START_SPEED_TEST"),a=function(t){return function(e){var n=JSON.parse(e.data);n.downloadProgress&&t("DOWNLOAD_PROGRESS",n.downloadProgress),n.downloadSpeed&&t("DOWNLOAD_SPEED",n.downloadSpeed),n.uploadProgress&&t("UPLOAD_PROGRESS",n.uploadProgress),n.uploadSpeed&&t("UPLOAD_SPEED",n.uploadSpeed),n.testServer&&t("SPEED_TEST_SERVER",n.testServer),n.speedTestResult&&(t("SPEED_TEST_RESULTS",n.speedTestResult),t("SPEED_TEST_BUTTON",!0))}}(t.commit),t.commit("WEBSOCKET_CONNECTION",{connect:t.getters.speedTestEndpoint,onopen:n,onclose:null,onmessage:a});case 4:case"end":return e.stop()}}),e)})))()},START_SPEED_TEST:function(t){var e=t.commit;e("SPEED_TEST_RESULTS",null),e("DOWNLOAD_PROGRESS",null),e("UPLOAD_PROGRESS",null),e("DOWNLOAD_SPEED",null),e("UPLOAD_SPEED",null),e("SPEED_TEST_BUTTON",!1)}};e["default"]={namespaced:!0,state:r,getters:s,actions:i,mutations:o}},"1bd0":function(t,e,n){},"263e":function(t,e,n){t.exports=n.p+"img/lady_on_sofa.3b41e400.svg"},"2b67":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("96cf");var a=n("1da1");e["default"]={namespaced:!0,state:{testimonials:null},getters:{testimonials:function(t){return t.testimonials}},mutations:{SET_TESTIMONIALS:function(t,e){return t.testimonials=e}},actions:{GET_TESTIMONIALS:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,a=t.rootState,r=t.commit,e.next=3,fetch("".concat(a.host,"/api/frontend/testimonials"));case 3:return e.next=5,e.sent.json();case 5:s=e.sent,r("SET_TESTIMONIALS",s.data),console.log(n.testimonials);case 8:case"end":return e.stop()}}),e)})))()}}}},"35d1":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("96cf");var a=n("1da1"),r={content:null},s={endpoint:function(t,e,n){return n.faqEndpoint}},o={FAQ_CONTENT:function(t,e){t.content=e.data.sort((function(t,e){return t.priority-e.priority}))}},i={GET_FAQ_GONTENT:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state,n=t.getters,a=t.commit,e.t0=a,e.next=4,fetch("".concat(n.endpoint));case 4:return e.next=6,e.sent.json();case 6:e.t1=e.sent,(0,e.t0)("FAQ_CONTENT",e.t1);case 8:case"end":return e.stop()}}),e)})))()}};e["default"]={namespaced:!0,state:r,getters:s,actions:i,mutations:o}},"3e1b":function(t,e,n){"use strict";n.r(e);n("d81d"),n("d3b7"),n("96cf");var a=n("1da1"),r={cards:null},s={endpoint:function(t,e,n){return"".concat(n.host,"/api/frontend/resellers")}},o={RESELLERS:function(t,e){t.cards=JSON.parse(JSON.stringify(e))}},i={GET_RESELLERS:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state,n=t.getters,a=t.commit,e.next=3,fetch("".concat(n.endpoint));case 3:return e.next=5,e.sent.json();case 5:r=e.sent,s=r.data.map((function(t){return{phone:t.phone_number,website:t.site,imgLink:t.logo,id:t.id}})),a("RESELLERS",s.sort((function(t,e){return t.id-e.id})));case 8:case"end":return e.stop()}}),e)})))()}};e["default"]={namespaced:!0,state:r,getters:s,actions:i,mutations:o}},"4f73":function(t,e,n){t.exports=n.p+"img/pointed-shape.5147c68b.svg"},5034:function(t,e,n){t.exports=n.p+"img/security.365f2efd.svg"},"56d5":function(t,e,n){"use strict";var a=n("fa0f"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{light:""}},[a("AppHeader",{attrs:{page:t.page}}),a("v-container",{staticClass:"pa-0 my-0 mx-auto",staticStyle:{"max-width":"1000px"},attrs:{fluid:""}},[a("Top"),a("v-row",{staticClass:"mx-0 px-0 my-12",attrs:{align:"center",justify:"space-between"}},[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"transparent",attrs:{flat:"",width:"100%","max-width":"450"}},[a("v-img",{attrs:{src:n("f33c"),"max-width":"420",contain:"",position:"left"}})],1)],1),a("v-col",{staticClass:"mx-0 px-0",attrs:{cols:"12",md:"6"}},[a("section",{staticClass:"mx-auto",attrs:{id:"contact"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#contact"}}),a("UserContact")],1)])])],1),a("section",{staticClass:"mx-auto",attrs:{id:"benefits"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#benefits"}}),a("Benefits")],1)]),a("section",{staticClass:"mx-auto",attrs:{id:"faq"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#faq"}}),a("FAQ")],1)]),a("section",{staticClass:"mx-auto",attrs:{id:"articles"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#articles"}}),a("Articles")],1)]),a("section",{staticClass:"mx-auto",attrs:{id:"footer"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#footer"}}),a("Footer")],1)])],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-expansion-panels",{staticClass:"app-bar d-lg-none",staticStyle:{position:"fixed","z-index":"10"},attrs:{tile:"",flat:"",width:"100%"},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[a("v-expansion-panel",{staticStyle:{background:"#FAFAFA"}},[a("v-expansion-panel-header",{attrs:{"expand-icon":"none","hide-actions":"",height:"70"}},[a("span",{staticClass:"ml-2 ml-sm-4 ml-md-6",attrs:{height:"35",width:"110"}},[a("v-img",{attrs:{src:n("cf05"),contain:"",width:"110",height:"35"}})],1),a("v-btn",{staticClass:"burger-menu",attrs:{text:"",height:"48",width:"48"}},[a("span",{class:t.burgerMenuClassFirst}),a("span",{class:t.burgerMenuClassSecond})])],1),a("v-expansion-panel-content",{attrs:{color:"#FAFAFA"}},[a("v-list",{staticClass:"main-menu-content text-center",attrs:{flat:""}},t._l(t.pages,(function(e,n){return a("v-list-item",{key:n,on:{click:function(e){t.$emit("update:page",t.selectors[n]),t.panel=[]}}},[a("v-list-item-title",{staticClass:"main-menu-items"},[t._v(t._s(e))])],1)})),1)],1)],1)],1),a("v-app-bar",{staticClass:"homefone app-bar d-none d-lg-block",attrs:{app:"",fixed:"",height:"80",flat:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("span",{staticClass:"ml-10",attrs:{height:"45",width:"150"}},[a("v-img",{attrs:{src:n("cf05"),contain:"",width:"150",height:"45"}})],1),a("v-spacer"),t._l(t.pages,(function(e,n){return a("a",{key:n,ref:"`menu-item-${index}`",refInFor:!0,class:t.getClassName(e),attrs:{value:n,name:"main-nav-menu-anchor"},on:{click:function(e){return t.action(e.target)}}},[t._v(" "+t._s(e)+" ")])}))],2)],1)],1)},i=[],c=(n("4160"),n("a9e3"),n("159b"),n("5530")),l=n("2f62"),u={name:"AppHeader",props:["page"],data:function(){return{anchors:null,panel:void 0}},computed:Object(c["a"])({},Object(l["c"])(["pages","selectors"]),{burgerMenuClassFirst:function(){return 0===this.panel?"burger-menu-active--first":"burger-menu--first"},burgerMenuClassSecond:function(){return 0===this.panel?"burger-menu-active--second":"burger-menu--second"}}),methods:{getClassName:function(t){var e="Call back"===t?" app-bar-menu-bordered py-2 px-12":"";return"app-bar-menu".concat(e)},action:function(t){this.anchors.forEach((function(t,e){t.className=""})),t.className="active",this.$emit("update:page",Number(t.value)),this.panel=[]}},mounted:function(){this.anchors=document.getElementsByName("main-nav-menu-anchor"),this.anchors.forEach((function(t,e){t.className=""}))}},d=u,f=(n("665a"),n("2877")),p=n("6544"),m=n.n(p),v=n("40dc"),h=n("8336"),g=n("a523"),x=n("cd55"),b=n("49e2"),w=n("c865"),A=n("0393"),E=n("adda"),C=n("8860"),_=n("da13"),S=n("5d23"),T=n("0fd9"),O=n("2fa4"),k=Object(f["a"])(d,o,i,!1,null,"af585c9e",null),y=k.exports;m()(k,{VAppBar:v["a"],VBtn:h["a"],VContainer:g["a"],VExpansionPanel:x["a"],VExpansionPanelContent:b["a"],VExpansionPanelHeader:w["a"],VExpansionPanels:A["a"],VImg:E["a"],VList:C["a"],VListItem:_["a"],VListItemTitle:S["a"],VRow:T["a"],VSpacer:O["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"overflow-x":"hidden","margin-top":"100px","margin-bottom":"100px"},attrs:{fluid:""}},[a("v-card",{staticClass:"mx-auto homefone",attrs:{flat:"",width:"100%","max-width":"1440"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center mx-auto",attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"transparent mx-auto",attrs:{flat:"",width:"100%","max-width":"500"}},[a("v-card-text",{staticClass:"text-center text-md-left"},[a("h1",{staticClass:"text-center text-md-left"},[t._v(t._s(t.top.header))])]),a("v-card-text",{staticClass:"mx-auto mx-lg-0"},[a("p",{staticClass:"text-center text-md-left"},[t._v(" "+t._s(t.top.text)+" ")])]),a("v-card-text",{staticClass:"text-center text-md-left"},[a("v-btn",{staticClass:"submit-button px-auto mx-auto",attrs:{color:"buttons",dark:"",height:"48","min-width":"180"},on:{click:function(e){return t.$emit("update:page","contact")}}},[t._v(" "+t._s(t.top.button)+" ")])],1)],1)],1),a("v-col",{attrs:{sm:"12",md:"6"}},[a("v-card",{staticClass:"transparent",attrs:{flat:"",width:"100%","max-width":"600"}},[a("v-img",{staticClass:"mx-auto",attrs:{src:n("263e"),"max-width":"750"}})],1)],1)],1)],1)],1)},V=[],j={name:"Top",props:["page"],computed:Object(c["a"])({},Object(l["c"])("content",["top"]),{},Object(l["b"])(["familyPicture"]))},P=j,B=(n("56d5"),n("b0af")),N=n("99d9"),F=n("62ad"),D=Object(f["a"])(P,R,V,!1,null,"0429997e",null),L=D.exports;m()(D,{VBtn:h["a"],VCard:B["a"],VCardText:N["b"],VCol:F["a"],VContainer:g["a"],VImg:E["a"],VRow:T["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"transparent mx-auto",staticStyle:{position:"relative"},attrs:{flat:"","max-width":"450"}},[t.viewportWidth>960?a("v-img",{staticStyle:{position:"absolute",top:"-40px",left:"-40px"},attrs:{src:n("4f73"),contain:""}}):t._e(),a("v-card",{staticClass:"user-info mx-auto py-4 px-6",attrs:{"max-width":"450"}},[a("v-card-title",[a("h4",[t._v(t._s(t.userForm.title))])]),a("v-card-text",{staticClass:"mx-0 px-0",attrs:{width:"100%"}},[t._l(t.items,(function(e,n){return a("v-text-field",{key:n,staticClass:"user-inputs",attrs:{placeholder:e.placeholder,outlined:"",color:e.color,error:e.error,"append-icon":e.validationIcon},on:{input:function(n){return t.validate(e)}},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"item.value"}})})),a("v-textarea",{staticClass:"user-inputs",attrs:{placeholder:t.userForm.messagePlaceholder,outlined:"",color:"#656565","auto-grow":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],2),a("v-card-actions",{staticClass:"text-center"},[a("v-btn",{staticClass:"submit-button",attrs:{dark:"",width:"100%",height:"65",color:"buttons"},on:{click:t.sendUserRequest}},[t._v(t._s(t.userForm.button))])],1),a("Popup",{attrs:{opened:t.popupOpened},on:{"update:opened":function(e){t.popupOpened=e}}})],1)],1)},G=[],U=(n("99af"),n("b0c0"),n("d3b7"),n("96cf"),n("1da1")),W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.opened,callback:function(e){t.opened=e},expression:"opened"}},[n("v-card",{staticClass:"pa-6"},[n("v-card-title",[n("h2",{attrs:{"text-color":"primary"}},[t._v("Thanks!")])]),n("v-card-text",[n("p",[t._v("We'll get back to you shortly")])]),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"primary",attrs:{text:""},on:{click:function(e){return t.$emit("update:opened",!1)}}},[t._v("CLOSE")])],1)],1)],1)],1)},M=[],q={name:"Popup",props:["opened"]},Q=q,H=n("169a"),Y=Object(f["a"])(Q,W,M,!1,null,"9b945564",null),$=Y.exports;m()(Y,{VBtn:h["a"],VCard:B["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VDialog:H["a"],VRow:T["a"],VSpacer:O["a"]});var J=n("1ffa"),K={name:"UserContact",components:{Popup:$},data:function(){return{message:"",normalColor:"#656565",errorColor:"#FF0E00",popupOpened:!1,items:{name:{value:"",placeholder:"Name*",error:!1,color:"",validationIcon:"",validator:function(){this.error=this.value.length<2}},email:{value:"",placeholder:"Email*",error:!1,color:"",validationIcon:"",validator:function(){this.error=!J.validate(this.value),this.validationIcon=this.error?"$invalid":"$valid",this.color=this.error?"#FF0E00":"#656565"}},address:{value:"",placeholder:"Address*",error:!1,color:"",validationIcon:"",validator:function(){this.error=this.value.length<5}},postcode:{value:"",placeholder:"Postcode*",error:!1,color:"",validationIcon:"",validator:function(){this.error=!Number(this.value)||Number(this.value)<3e3||Number(this.value)>9999}},state:{value:"",placeholder:"State*",error:!1,color:"",validationIcon:"",validator:function(){this.error=this.value.length<5}}}}},computed:Object(c["a"])({},Object(l["c"])(["viewportWidth"]),{},Object(l["c"])("content",["userForm","subject","textForUserMail"])),methods:{initFields:function(){for(var t in this.items)this.items[t].validationIcon="",this.items[t].error=!1,this.items[t].color=this.normalColor,this.items[t].value="";this.message=""},validate:function(t){t.validator(),t.validationIcon=t.error?"$invalid":"$valid",t.color=t.error?this.errorColor:this.normalColor},findErrors:function(){var t=0;for(var e in this.items)this.validate(this.items[e]),t+=this.items[e].error;return t>0},sendUserRequest:function(){var t=this;return Object(U["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.findErrors()){e.next=2;break}return e.abrupt("return");case 2:return t.popupOpened=!0,e.next=5,fetch("https://dka.dgtek.net/api/frontend/mail",{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"},body:JSON.stringify({name:t.items.name.value,email:t.items.email.value,phone:t.items.phone.value,subject:t.subject,message:"Your address: ".concat(t.items.address.value,", ").concat(t.items.postcode.value,", ").concat(t.items.state.value,"\nYour message:\n").concat(t.message)})});case 5:return e.next=7,e.sent.json();case 7:t.initFields();case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.initFields()}},X=K,z=(n("905c"),n("8654")),Z=n("a844"),tt=Object(f["a"])(X,I,G,!1,null,"786e3858",null),et=tt.exports;m()(tt,{VBtn:h["a"],VCard:B["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VImg:E["a"],VTextField:z["a"],VTextarea:Z["a"]});var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"homefone",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-card",{staticClass:"transparent mx-auto",attrs:{flat:"",width:"100%"}},[n("v-card-text",{staticClass:"text-center text-md-left"},[n("h2",[t._v(t._s(t.benefits.header))])]),n("v-card-text",[n("p",[t._v(t._s(t.benefits.text))])]),n("v-card-text",{staticClass:"text-center text-md-left"},[n("v-btn",{staticClass:"submit-button px-auto mx-auto",attrs:{color:"buttons",dark:"",height:"48","min-width":"180"},on:{click:function(e){return t.$emit("update:page","contact")}}},[t._v(" "+t._s(t.benefits.button)+" ")])],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"7"}},[n("v-card",{staticClass:"d-flex flex-wrap transparent",attrs:{flat:""}},[n("v-row",{staticClass:"mx-auto",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"3"}},[n("v-img",{staticClass:"benefit-image mx-auto",attrs:{src:t.benefits.items[0].icon,contain:""}})],1),n("v-col",{attrs:{cols:"9"}},[n("v-card",{staticClass:"card--offer transparent text-center mx-auto",attrs:{flat:"",width:"100%"}},[n("v-card-title",[n("h3",[t._v(t._s(t.benefits.items[0].title))])]),n("v-card-text",[n("p",[t._v(t._s(t.benefits.items[0].text))])])],1)],1)],1),n("v-row",{staticClass:"mx-auto",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"3"}},[n("v-img",{staticClass:"benefit-image mx-auto",attrs:{src:t.benefits.items[1].icon,contain:""}})],1),n("v-col",{attrs:{cols:"9"}},[n("v-card",{staticClass:"card--offer transparent text-center mx-0",attrs:{flat:"",width:"100%"}},[n("v-card-text",{staticClass:"text-left"},[n("h3",[t._v(t._s(t.benefits.items[1].title))])]),n("v-card-text",{staticClass:"text-left"},[n("p",[t._v(t._s(t.benefits.items[1].text))])])],1)],1)],1),n("v-row",{staticClass:"mx-auto",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"3"}},[n("v-img",{staticClass:"benefit-image mx-auto",attrs:{src:t.benefits.items[2].icon,contain:""}})],1),n("v-col",{attrs:{cols:"9"}},[n("v-card",{staticClass:"card--offer transparent text-center mx-auto",attrs:{flat:"",width:"100%"}},[n("v-card-title",[n("h3",[t._v(t._s(t.benefits.items[2].title))])]),n("v-card-text",[n("p",[t._v(t._s(t.benefits.items[2].text))])])],1)],1)],1)],1)],1)],1)],1)},at=[],rt={name:"Benefits",props:["page"],data:function(){return{contact:!1}},computed:Object(c["a"])({},Object(l["c"])("content",["benefits"])),watch:{contact:function(t){t&&(this.$emit("update:page","contact"),this.contact=!1)}}},st=rt,ot=(n("5bd2"),Object(f["a"])(st,nt,at,!1,null,"0f52e66d",null)),it=ot.exports;m()(ot,{VBtn:h["a"],VCard:B["a"],VCardText:N["b"],VCardTitle:N["c"],VCol:F["a"],VContainer:g["a"],VImg:E["a"],VRow:T["a"]});var ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"homefone mx-auto my-12 px-0 py-12"},[n("v-card",{staticClass:"transparent mx-auto",attrs:{flat:"","max-width":"980"}},[n("v-card-title",[n("h2",[t._v(t._s(t.faq.header))])]),n("v-card-text",[n("v-expansion-panels",{attrs:{accordion:"",focusable:"",flat:"",hover:"",tile:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(t.faq.items,(function(e,a){return n("v-expansion-panel",{key:a},[n("v-expansion-panel-header",{attrs:{height:"64"},scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"#444"}},[t._v("$expand")])]},proxy:!0}],null,!0)},[n("h5",{staticClass:"my-0"},[t._v(t._s(e.question))])]),n("v-expansion-panel-content",{staticClass:"answer",domProps:{innerHTML:t._s(e.answer)}})],1)})),1)],1),n("v-card-text",{staticClass:"text-center"},[n("v-btn",{staticClass:"submit-button px-auto mx-auto mt-12",attrs:{color:"buttons",dark:"",height:"48"},on:{click:function(e){return t.$emit("update:page","contact")}}},[t._v(" "+t._s(t.faq.button)+" ")])],1)],1)],1)},lt=[],ut={name:"FAQ",data:function(){return{panel:null}},computed:Object(c["a"])({},Object(l["c"])("content",["faq"])),mounted:function(){console.log(this.faq)}},dt=ut,ft=(n("8492"),n("132d")),pt=Object(f["a"])(dt,ct,lt,!1,null,"0a02cd4e",null),mt=pt.exports;m()(pt,{VBtn:h["a"],VCard:B["a"],VCardText:N["b"],VCardTitle:N["c"],VContainer:g["a"],VExpansionPanel:x["a"],VExpansionPanelContent:b["a"],VExpansionPanelHeader:w["a"],VExpansionPanels:A["a"],VIcon:ft["a"]});var vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"mx-auto",attrs:{akign:"center",justify:"space-around"}},[t.articles?n("v-card",{staticClass:"transparent mx-auto",attrs:{flat:"",width:"100%"}},[n("v-card-text",{staticClass:"text-center my-8"},[n("h2",[t._v(" "+t._s(t.blog.header)+" ")])])],1):t._e(),t._l(t.articles,(function(e){return n("v-card",{key:e.id,staticClass:"pa-8 ma-2",attrs:{width:"300",height:"320",hover:""}},[n("v-img",{attrs:{src:e.logo,width:"50%",height:"70",contain:"",position:"left"},on:{click:function(n){return t.$openExternalLink(e.ref)}}}),n("v-card-text",[n("h5",{on:{click:function(n){return t.$openExternalLink(e.ref)}}},[t._v(" "+t._s(e.title)+" ")])]),n("v-card-text",[n("p",{on:{click:function(n){return t.$openExternalLink(e.ref)}}},[n("small",[t._v(" "+t._s(e.published_at)+" ")])])])],1)}))],2)],1)},ht=[],gt=(n("4de4"),n("c975"),{name:"Articles",data:function(){return{}},computed:Object(c["a"])({},Object(l["c"])("content",["blog"]),{},Object(l["c"])("blog",["news"]),{articles:function(){var t=this;if(!this.news)return null;var e=this.news.filter((function(e){return-1!==t.blog.articles.indexOf(e.id)}));return e}})}),xt=gt,bt=(n("d110"),Object(f["a"])(xt,vt,ht,!1,null,"2ba833c8",null)),wt=bt.exports;m()(bt,{VCard:B["a"],VCardText:N["b"],VContainer:g["a"],VImg:E["a"],VRow:T["a"]});var At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mx-auto"},[a("v-col",{staticClass:"mx-auto",attrs:{cols:"12",xl:"10"}},[a("v-row",[a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-card",{staticClass:"transparent mx-auto",attrs:{flat:""}},[a("v-card-actions",[a("v-img",{staticStyle:{"margin-left":"8px"},attrs:{src:n("cf05"),width:"80",height:"52",contain:"",position:"left center"}})],1),a("v-card-title",[a("h6",[t._v("About us")])]),a("v-card-text",[a("p",[t._v(" DGtek is a registered Australia Telecommunications Infrastructure Carrier that designs, builds, operates and maintains high-speed Optical Fibre Networks. ")])])],1)],1),a("v-col",{attrs:{cols:"12",lg:"2"}},[a("v-card",{staticClass:"transparent mx-auto",attrs:{flat:""}},[a("v-card-title",[a("h6",[t._v("Company")])]),a("v-card-text",[a("p",[a("a",{attrs:{href:"https://dgtek.net/products",target:"_blank"}},[t._v("Products")])]),a("p",[a("a",{attrs:{href:"https://dgtek.net",target:"_blank"}},[t._v("About Us")])]),a("p",[a("a",{attrs:{href:"https://dgtek.net/blog/dgtek-in-media",target:"_blank"}},[t._v("Dgtek in Media")])]),a("p",[a("a",{attrs:{href:"https://dgtek.net/blog",target:"_blank"}},[t._v("Blog")])]),a("p",[a("a",{attrs:{href:"https://dgtek.net",target:"_blank"}},[t._v("FAQ")])])])],1)],1),a("v-col",{attrs:{cols:"12",lg:"2"}},[a("v-card",{staticClass:"transparent mx-auto",attrs:{flat:""}},[a("v-card-title",[a("h6",[t._v("Products")])]),a("v-card-text",[a("p",[a("a",{attrs:{href:"https://dgtek.net/products/residential-internet",target:"_blank"}},[t._v("Residential Internet")])]),a("p",[a("a",{attrs:{href:"https://dgtek.net/products/commercial-internet",target:"_blank"}},[t._v("Commercial Internet")])]),a("p",[a("a",{attrs:{href:"https://dgtek.net/products/dedicated-services",target:"_blank"}},[t._v("Lit/dark fibre")])]),a("p",[a("a",{attrs:{href:"https://dgtek.net/products/developers",target:"_blank"}},[t._v("Developers/greenfield")])]),a("p",[a("a",{attrs:{href:"https://dgtek.net/products/owners-corporations",target:"_blank"}},[t._v("OCs&body corporates")])]),a("p",[a("a",{attrs:{href:"https://dgtek.net/products/social-responsibility",target:"_blank"}},[t._v("Free internet for not-for-profit")])])])],1)],1),a("v-col",{attrs:{cols:"12",lg:"2"}},[a("v-card",{staticClass:"transparent mx-auto",attrs:{flat:""}},[a("v-card-title",[a("h6",[t._v("Client")])]),a("v-card-text",[a("p",[t._v("Website Disclaimer")]),a("p",[t._v("Terms & Conditions")]),a("p",[t._v("DGTek Privacy Policy")])])],1)],1),a("v-col",{attrs:{cols:"12",lg:"2"}},[a("v-card",{staticClass:"transparent mx-auto",attrs:{flat:""}},[a("v-card-title",[a("h6",[t._v("Contacts")])]),a("v-card-text",[a("p",[t._v("Phone: "),a("a",{attrs:{href:"tel:1800 359 602"}},[t._v("1800 359 602")])]),a("p",[t._v("Email: "),a("a",{attrs:{href:"mailto:info@dgtek.net"}},[t._v("info@dgtek.net")])]),a("p",[a("a",{attrs:{href:"https://www.facebook.com/ISPDGtek/",target:"_blank"}},[a("v-img",{attrs:{src:n("b403"),width:"10",height:"10",contain:""}})],1),a("a",{attrs:{href:"https://www.picuki.com/tag/DGTEK",target:"_blank"}},[a("v-img",{attrs:{src:n("7c69"),width:"10",height:"10",contain:""}})],1),a("a",{attrs:{href:"https://www.linkedin.com/company/dgtek/",target:"_blank"}},[a("v-img",{attrs:{src:n("f6ce"),width:"10",height:"10",contain:""}})],1)])])],1)],1)],1)],1)],1),a("hr"),a("v-row",{staticClass:"mx-auto"},[a("p",{staticStyle:{width:"100%","text-align":"center"}},[t._v("2019 © DGtek Pty. Ltd. ABN 61 600 896 115")])])],1)},Et=[],Ct={name:"Footer",data:function(){return{viewport:{width:window.innerWidth,height:window.innerHeight}}},methods:{onResize:function(){this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight}},mounted:function(){window.addEventListener("resize",this.onResize,{passive:!0})},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})}},_t=Ct,St=(n("efe6"),Object(f["a"])(_t,At,Et,!1,null,"693beef7",null)),Tt=St.exports;m()(St,{VCard:B["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VCol:F["a"],VContainer:g["a"],VImg:E["a"],VRow:T["a"]});var Ot={name:"App",created:function(){document.title="DGtek"},components:{AppHeader:y,Top:L,UserContact:et,Benefits:it,FAQ:mt,Articles:wt,Footer:Tt},data:function(){return{page:0,cards:null,viewport:{width:window.innerWidth,height:window.innerHeight}}},watch:{page:function(t){console.log(t)}},methods:{onResize:function(){this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight}},mounted:function(){this.$store.dispatch("blog/GET_BLOG_NEWS"),window.addEventListener("resize",this.onResize,{passive:!0})},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})}},kt=Ot,yt=(n("034f"),n("7496")),Rt=Object(f["a"])(kt,r,s,!1,null,null,null),Vt=Rt.exports;m()(Rt,{VApp:yt["a"],VCard:B["a"],VCol:F["a"],VContainer:g["a"],VImg:E["a"],VRow:T["a"]});n("5363");var jt=n("f309");a["a"].use(jt["a"]);var Pt=new jt["a"]({icons:{iconfont:"mdi",values:{expand:"mdi-chevron-down",valid:"mdi-check-bold",invalid:"mdi-alert-outline"}},theme:{themes:{light:{primary:"#83332C",secondary:"#E15240",buttons:"#E15240",homefone:"#FBFBFB",inputs:"#EFEFEF",activefield:"#D9D9D9",warning:"#FAFF00"},dark:{primary:"#FF0E00",secondary:"#E82F37",buttons:"#F54436",homefone:"#FEFEFE",fields:"#EFEFEF",activefield:"#D9D9D9",warning:"#FAFF00"}}}}),Bt=(n("ac1f"),n("5319"),n("ddb0"),{}),Nt=n("7067");Nt.keys().forEach((function(t){var e=t.replace(/(\.\/|\.store\.js)/g,"");Bt[e]=Nt(t).default||Nt(t)}));var Ft=Bt;a["a"].use(l["a"]);var Dt=new l["a"].Store({state:{host:"https://dka.dgtek.net",frontend:"https://dka.dgtek.net/api/frontend",resellers:"https://dka.dgtek.net/api/frontend/resellers",faqEndpoint:"https://dka.dgtek.net/api/frontend/faqs",mail:"https://dka.dgtek.net/api/frontend/mail",officeAddress:"15/105 Cochranes Road Moorabbin VIC",officePhone:"1800 359 602",officeEmail:"info@dgtek.net",client:null,viewportWidth:window.innerWidth,viewportHeight:window.innerHeight,pages:["Home","Benefits","Reviews","FAQ","Call back"],selectors:["home","benefits","rewiews","faq","contact"]},modules:Ft,getters:{clientInfoURL:function(t){return"".concat(t.hostForClientInfo,"?api-key=").concat(t.keyForClientInfo)}},mutations:{SET_SHOW_SPEEDTEST:function(t,e){t.showSpeedtest=e},SET_LARGE_BUTTON:function(t,e){t.buttonLarge=e},SET_VIEWPORT:function(t){t.viewport=window.innerWidth}},actions:{CONTACT_MESSAGE:function(t,e){return Object(U["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.state,n.next=3,fetch(a.mail,{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"},body:JSON.stringify({name:e.name||e.username,email:e.email,phone:e.phone,message:e.message})});case 3:return n.next=5,n.sent.json();case 5:return r=n.sent,n.abrupt("return",r.status);case 7:case"end":return n.stop()}}),n)})))()}}}),Lt=(n("7d5d"),n("9483"));Object(Lt["a"])("".concat("/dgtek-land-2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].use(Pt),a["a"].prototype.$openExternalLink=function(t){window.open(t,"_blank")},a["a"].config.productionTip=!1;new a["a"]({store:Dt,vuetify:Pt,render:function(t){return t(Vt)}}).$mount("#app")},"5bd2":function(t,e,n){"use strict";var a=n("b1dc"),r=n.n(a);r.a},"665a":function(t,e,n){"use strict";var a=n("8f0f"),r=n.n(a);r.a},6935:function(t,e,n){},7067:function(t,e,n){var a={"./blog.store.js":"be8d","./content.store.js":"bdad","./faq.store.js":"35d1","./map.store.js":"7593","./resellers.store.js":"3e1b","./speedtest.store.js":"0f8a","./testimonials.store.js":"2b67"};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id="7067"},7593:function(t,e,n){"use strict";n.r(e);n("4de4"),n("d81d"),n("d3b7");var a=n("3835"),r=n("b85c"),s=(n("96cf"),n("1da1")),o={points:null,polygons:null,ServiceAvailable:null,BuildCommenced:null},i={pointsEndpoint:function(t,e,n,a){return"".concat(n.host,"/api/frontend/markers")},polygonsEndpoint:function(t,e,n,a){return"".concat(n.host,"/api/frontend/polygons")}},c={SET_POLYGONS:function(t,e){t[e.type]=e.content}},l={GET_POLYGONS:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,s,o,i,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.getters,s=t.commit,e.next=3,fetch(n.polygonsEndpoint);case 3:return e.next=5,e.sent.json();case 5:for(o=e.sent,i=function(){var t,e=l[c],n="ServiceAvailable"===e?"#A00E0D":"#000000",i=[],u=o.features.filter((function(t){return t.properties.typeOf===e})).map((function(t){return t.geometry.coordinates})),d=Object(r["a"])(u);try{for(d.s();!(t=d.n()).done;){var f=t.value,p=Object(a["a"])(f,1),m=p[0],v=m.map((function(t){return{lat:t[1],lng:t[0]}})),h=new window.google.maps.Polygon({paths:v,fillColor:n,strokeColor:n,strokeWeight:.5,clickable:!1});i.push(h)}}catch(g){d.e(g)}finally{d.f()}s("SET_POLYGONS",{type:e,content:i})},c=0,l=["ServiceAvailable","BuildCommenced"];c<l.length;c++)i();case 8:case"end":return e.stop()}}),e)})))()}};e["default"]={namespaced:!0,state:o,getters:i,actions:l,mutations:c}},"7c69":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEbSURBVHgBrZPNbcJAEIVnxy6AEtJBSAVxOiAd2BVkL5av3C1L7iChgiQdmA4owSVw9x/vAZYQrDEYnrSyNT/fjGZ2TZIkL23bfotIINNUqGqkD0KogAydAkFiiM9b13WrHqZyp5BcZFm2StN043nesrdfA22RtMRZyKFri1MaY+acKwOapln0wSaO484B2VRV9ZHn+fbUaK2d+b6fY7jvKEDf/FpHJSCf5xCKtrquLSByCnGCEPSHhFIGRBhifs7tro4KGRFA61tAk+QCBTKWpPo6CsJ6w369LtGHGDsKgma4ub8uGNdPH2Z04Ru6R+ys5C1G4v++oirX/cVCrnhfBnSsGgIQyg166tYKeVAcgeI5RPyRiWIunk20A/otkS2G6M2WAAAAAElFTkSuQmCC"},"7d5d":function(t,e,n){},8492:function(t,e,n){"use strict";var a=n("e01f"),r=n.n(a);r.a},"8a23":function(t,e,n){},"8f0f":function(t,e,n){},"905c":function(t,e,n){"use strict";var a=n("eae0"),r=n.n(a);r.a},b1dc:function(t,e,n){},b403:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgB1VPLDYMwDDVRB2CEdIOOwAiMADMA4tqeQSIbQDdhg3YERuAOIn2pCIpaChE59UmRn634+QPx8jzn0zTVRBTQMbSMsZg5iigESoM5iixizPJiM1fm+sB/mhdOewpSymtZlrfPeJZlvenvdjSO450ssNuREKLTPE3TyvM8X3FYjm7thUwgOYThipsiW0I9LoqVuED83RH+nQicL0WwNLmS0BVFcaYNIO8Bc9G+7edfw8V0fo3mo2KkCDprdDBJkhAj+Xo8KyGceuaNDkKkguFY+leCy2h/INSSI7D8lg3DECtCB6Fy8R7jF2l+YTQq3PiyAAAAAElFTkSuQmCC"},bdad:function(t,e,n){"use strict";n.r(e);n("96cf");var a=n("1da1"),r={subject:"Melbourne’s Fastest Internet",textForUserMail:"Thank you for your interest in DGtek. A member of our team will be in touch shortly.",top:{header:"[Top Header]",text:"[Some text... Some text... Some text... Some text... Some text... Some text... Some text... Some text... Some text... Some text... Some text... Some text... Some text...]",button:"[Header Button]",image:"@/assets/pictures/lady-on-sofa.svg"},aside:{header:"[Offer Header]",text:"[Offer text... Offer text... Offer text... Offer text... Offer text... Offer text... Offer text... Offer text... Offer text... Offer text... Offer text... Offer text...]",offer:[{blackText:"[ Relevant ]",redText:"[ Information ]"},{blackText:"[Relevant]",redText:"[Information]"}],smallText:["* text 1","** text 2"]},userForm:{title:"[Form title]",messagePlaceholder:"Enquiry*",button:"Form button"},benefits:{header:"[Benefits Title]",text:"[Benefits text... Benefits text... Benefits text... Benefits text... Benefits text... Benefits text... Benefits text... Benefits text... Benefits text... Benefits text...]",button:"Benefits button",items:[{title:"[Title]",icon:n("d8fc"),text:"[Text... Text... Text... Text... Text... Text... Text... Text... Text... Text...]"},{title:"[Title]",icon:n("5034"),text:"[Text... Text... Text... Text... Text... Text... Text... Text... Text... Text...]"},{title:"[Title]",icon:n("cde9"),text:"[Text... Text... Text... Text... Text... Text... Text... Text... Text... Text...]"}]},testimonials:{header:"[Title for reviews]",button:"Reviews button"},faq:{header:"[FAQs Title]",button:"[FAQs Button]",items:[{question:"[Question 1]",answer:"[Answer 1]"},{question:"[Question 2]",answer:"[Answer 2]"},{question:"[Question 3]",answer:"[Answer 3]"},{question:"[Question 4]",answer:"[Answer 4]"},{question:"[Question 5]",answer:"[Answer 5]"}]},blog:{header:"Title around articles",articles:[1,4,3,7]},footer:{topHead:"READY TO GET STARTED?",topText:"Leave your inquiry and we'll get back to you within 24 hours on business days"}},s={editorEndpoint:function(t,e,n){return"".concat(n.host,"/content")}},o={},i={GET_DATA:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.getters,t.commit,e.abrupt("return",!0);case 2:case"end":return e.stop()}}),e)})))()}};e["default"]={namespaced:!0,state:r,getters:s,actions:i,mutations:o}},be8d:function(t,e,n){"use strict";n.r(e);n("d81d"),n("d3b7"),n("96cf");var a=n("1da1"),r={news:null,content:null,contentEndpoint:"https://dka.dgtek.net/api/frontend/posts",newsEndpoint:"https://dka.dgtek.net/api/frontend/news",defaultPicture:"/img/default-article-picture.jpg",defaultAvatar:"/img/default-avatar.png"},s={BLOG_NEWS:function(t,e){t.news=e},BLOG_CONTENT:function(t,e){t.content=JSON.parse(JSON.stringify(e))}},o={GET_BLOG_NEWS:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,a=t.commit,e.next=3,fetch(n.newsEndpoint);case 3:return e.next=5,e.sent.json();case 5:return r=e.sent.data,a("BLOG_NEWS",r),e.abrupt("return",n.news);case 8:case"end":return e.stop()}}),e)})))()},GET_BLOG_CONTENT:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var a,r,s,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.state,r=t.getters,s=t.commit,t.dispatch,n.next=3,fetch(r.contentEndpoint);case 3:return n.next=5,n.sent.json();case 5:return o=n.sent,i=o.data.map((function(t){return{date:t.published_at,previewTitle:t.title,imageSrc:t.logo||r.defaultPicture,avatar:t.logo_user||e.defaultAvatar,text:t.text,id:t.id}})),s("BLOG_CONTENT",i.reverse()),n.abrupt("return",a.content);case 9:case"end":return n.stop()}}),n)})))()}};e["default"]={namespaced:!0,state:r,actions:o,mutations:s}},cde9:function(t,e,n){t.exports=n.p+"img/speed.c9a0c7cf.svg"},cf05:function(t,e,n){t.exports=n.p+"img/logo.ada5061d.png"},d110:function(t,e,n){"use strict";var a=n("6935"),r=n.n(a);r.a},d8fc:function(t,e,n){t.exports=n.p+"img/globe.cba76bc5.svg"},e01f:function(t,e,n){},eae0:function(t,e,n){},efe6:function(t,e,n){"use strict";var a=n("1bd0"),r=n.n(a);r.a},f33c:function(t,e,n){t.exports=n.p+"img/man_with_building.462a4c08.svg"},f6ce:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD/SURBVHgBzVPRDYIwEL02DoAb1Al0BN3AEWSDGkL4xW/4YANWcARGwA1wA/4h4LtYiYGaFPjxJZf3crSvvTsqoihSXdflRHSkZSiklL5cacI4sodcaTKYbSzJsu/7WgihoBU5QlpyOk3TE7igGZjcCPUqrfUT0qMZmBhhAjGCjFFt4tvUeoCttEuSJDvwHbfTrJum2YG3HOjf1dVogizL6o9G/zKYxeM1G3JAEARnlJvD4GaMHpjq/Bth0x7kGWbU4zVORi74PyMRhmE/ypX07sEBUbHm54IGK3AF5pxnvg+wTe0w1thMhhX9eH9cWkErgQMKib/WZ0ELwXvbtvVfLO1t7op/4VcAAAAASUVORK5CYII="},fa0f:function(t,e,n){}});