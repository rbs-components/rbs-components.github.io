(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-189ff3ce"],{"5ad2":function(t,e,n){"use strict";n("60f4")},"60f4":function(t,e,n){},"6df2":function(t,e,n){"use strict";n("9dd2")},7585:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto overflow-hidden",attrs:{height:"auto"}},[n("v-app-bar",{attrs:{xabsolute:"",color:"#363636",dark:"","xshrink-on-scroll":"",xdense:"",xprominent:"","xscroll-target":"#scrolling-techniques-4"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{sm:"1"}},[n("div",{staticClass:"nav-logo mt-4 ml-1"},[n("a",{attrs:{href:"/"}},[n("img",{attrs:{height:"45",width:"45",src:t.fromAssetsFolder("roundabout_logo.png")}})])])]),n("v-col",{staticClass:"d-flex justify-start pt-6",attrs:{sm:"10"}},t._l(t.navigation.tabs,(function(e){return n("router-link",{key:e.text,staticClass:"router-link-nav",attrs:{to:e.url},nativeOn:{click:function(n){return t.setActiveUrl(e)}}},[n("div",{staticClass:"d-flex flex-column pl-6 pt-1"},[n("v-icon",[t._v(t._s(e.icon))]),n("p",[t._v(t._s(e.text))])],1)])})),1),n("v-col",{staticClass:"pt-6",attrs:{sm:"1"}},[n("v-menu",{attrs:{right:"",dark:"","close-on-content-click":!1,"open-on-hover":"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",flat:""}},"v-btn",i,!1),o),[n("v-icon",{attrs:{"x-large":""}},[t._v("mdi-account-cog")])],1)]}}])},[n("v-list",t._l(t.navigation.settings,(function(e){return n("v-list-group",{key:e.text,class:e.submenu?"hassubmenu":"nosubmenu",attrs:{"prepend-icon":e.action,"no-action":"",to:!0,value:!0},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1)],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"settingItem.active"}},t._l(e.submenu,(function(e){return n("v-list-item",{key:e.text,on:{click:function(t){}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1),n("v-list-item-action",[n("v-icon",[t._v(t._s(e.action))])],1)],1)})),1)})),1)],1)],1)],1)],1)],1),n("h1",[t._v("Dev questions")]),n("ul",[n("li",[t._v("Hoe kan Settings > Account settings default opengeklapt worden?")]),n("li",[t._v("Submenu items hebben geen :hover state")]),n("li",[n("a",{attrs:{href:"https://codepen.io/RoundaboutSocial/pen/vYxbYEN"}},[t._v("deze CodePen")]),t._v(" heeft een v-toolbar drop-down menu; maar als ik de code overneem (onder) is de opmaak anders ")])]),n("h3",[t._v("v-toolbar")]),n("v-toolbar",[n("v-toolbar-title",[t._v("Title")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:""}},[t._v("Link One")]),n("v-btn",{attrs:{flat:""}},[t._v("Link Two")]),n("v-btn",{attrs:{flat:""}},[t._v("Link Three")]),n("v-menu",{attrs:{"close-on-content-click":!1,"open-on-hover":"",boattom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{color:"primary",dark:""}},o),[t._v(" Dropdown ")])]}}])},[n("v-list",t._l(t.navigation.settings,(function(e){return n("v-list-group",{key:e.text,attrs:{"prepend-icon":e.icon,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.text))])],1)],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"settingItem.active"}},t._l(e.submenu,(function(e){return n("v-list-tile",{key:e.text,on:{click:function(t){}}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.text))])],1),n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1)],1)})),1)})),1)],1)],1)],1),n("h3",[t._v(" Design: "),n("img",{staticStyle:{"max-height":"300px"},attrs:{src:"https://i.imgur.com/GE0u649.png"}})])],1)},i=[],a=n("5530"),s=n("2f62"),c=(n("ed08"),{name:"Navigation",components:{},data:function(){return{navigation:{tabs:[{icon:"mdi-account-group-outline",text:"Community",url:"/navhor",active:!1},{icon:"mdi-trending-up",text:"Your Campaigns",url:"/navhor",active:!1},{icon:"mdi-radar",text:"Your Audience trends",url:"/navhor",active:!1}],settings:[{icon:"mdi-movie-outline",text:"Video Library",url:"/videolibrary",active:!1},{icon:"mdi-help-circle",text:"FAQ",url:"/faq",active:!1},{icon:"mdi-chevron-up","icon-alt":"mdi-chevron-down",text:"Account settings",active:!1,model:!1,submenu:[{text:"Settings",url:"/account",icon:"mdi-tune",active:!1},{text:"Notification",url:"/notification/devices",icon:"mdi-bell-outline",active:!1},{text:"Social Media",url:"/account/settings/socialmedia",icon:"mdi-share-variant-outline",active:!1}]}]}}},computed:Object(a["a"])(Object(a["a"])({},Object(s["b"])({totalUnseenChatMessages:"totalUnseenChatMessages"})),{},{user:function(){return this.$store.state.user}}),methods:{fromAssetsFolder:function(t){return console.log(t),"./static/"+t},setActiveUrl:function(t){window.alert("Naar ► "+t.text)}},mounted:function(){}}),r=c,l=(n("6df2"),n("5ad2"),n("2877")),u=n("6544"),v=n.n(u),d=n("40dc"),m=n("8336"),f=n("b0af"),p=n("62ad"),b=n("a523"),h=n("132d"),g=n("8860"),_=n("56b0"),x=n("da13"),k=n("1800"),w=n("5d23"),y=n("e449"),V=n("0fd9"),C=n("2fa4"),A=n("71d9"),S=n("2a7f"),I=Object(l["a"])(r,o,i,!1,null,"0dc7cafd",null);e["default"]=I.exports;v()(I,{VAppBar:d["a"],VBtn:m["a"],VCard:f["a"],VCol:p["a"],VContainer:b["a"],VIcon:h["a"],VList:g["a"],VListGroup:_["a"],VListItem:x["a"],VListItemAction:k["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VMenu:y["a"],VRow:V["a"],VSpacer:C["a"],VToolbar:A["a"],VToolbarItems:S["a"],VToolbarTitle:S["b"]})},"9dd2":function(t,e,n){},ed08:function(t,e,n){"use strict";n("2ca0");var o=function(t){var e=location.host.startsWith("192")||location.host.startsWith("local")||location.host.startsWith("rbs-components");return e?"./static/"+t:(console.warn("Fix svgIconPath() on Production IMG:",t),"../../../"+t)};e["a"]={fromAssetsFolder:o}}}]);
//# sourceMappingURL=chunk-189ff3ce.06c0b4cc.js.map