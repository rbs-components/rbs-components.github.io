(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25ef6d2d"],{"0789":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return f}));n("99af");var r=n("d9f7");function a(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return(e=Array()).concat.apply(e,[t].concat(r))}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:t}},render:function(t,n){var i="transition".concat(n.props.group?"-group":""),s={props:{name:e,mode:n.props.mode},on:{beforeEnter:function(e){e.style.transformOrigin=n.props.origin,e.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(s.on.leave=a(s.on.leave,(function(e){return e.style.position="absolute"}))),n.props.hideOnLeave&&(s.on.leave=a(s.on.leave,(function(e){return e.style.display="none"}))),t(i,Object(r["a"])(n.data,s),n.children)}}}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:e,functional:!0,props:{mode:{type:String,default:n}},render:function(n,a){return n("transition",Object(r["a"])(a.data,{props:{name:e},on:t}),a.children)}}}var o=n("ade3"),l=n("80d2"),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?"width":"height",r="offset".concat(Object(l["q"])(n));return{beforeEnter:function(e){e._parent=e.parentNode,e._initialStyle=Object(o["a"])({transition:e.style.transition,overflow:e.style.overflow},n,e.style[n])},enter:function(t){var a=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";var i="".concat(t[r],"px");t.style[n]="0",t.offsetHeight,t.style.transition=a.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((function(){t.style[n]=i}))},afterEnter:i,enterCancelled:i,leave:function(e){e._initialStyle=Object(o["a"])({transition:"",overflow:e.style.overflow},n,e.style[n]),e.style.overflow="hidden",e.style[n]="".concat(e[r],"px"),e.offsetHeight,requestAnimationFrame((function(){return e.style[n]="0"}))},afterLeave:a,leaveCancelled:a};function a(t){e&&t._parent&&t._parent.classList.remove(e),i(t)}function i(e){var t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}},u=(i("carousel-transition"),i("carousel-reverse-transition"),i("tab-transition"),i("tab-reverse-transition"),i("menu-transition"),i("fab-transition","center center","out-in"),i("dialog-transition"),i("dialog-bottom-transition"),i("dialog-top-transition"),i("fade-transition")),d=(i("scale-transition"),i("scroll-x-transition"),i("scroll-x-reverse-transition"),i("scroll-y-transition"),i("scroll-y-reverse-transition"),i("slide-x-transition")),f=(i("slide-x-reverse-transition"),i("slide-y-transition"),i("slide-y-reverse-transition"),s("expand-transition",c()));s("expand-x-transition",c("",!0))},"10d2":function(e,t,n){"use strict";var r=n("8dd9");t["a"]=r["a"]},"5a52":function(e,t,n){"use strict";n("e777")},"615b":function(e,t,n){},"62ad":function(e,t,n){"use strict";var r=n("ade3"),a=n("5530"),i=(n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),l=["sm","md","lg","xl"],c=function(){return l.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),u=function(){return l.reduce((function(e,t){return e["offset"+Object(o["q"])(t)]={type:[String,Number],default:null},e}),{})}(),d=function(){return l.reduce((function(e,t){return e["order"+Object(o["q"])(t)]={type:[String,Number],default:null},e}),{})}(),f={col:Object.keys(c),offset:Object.keys(u),order:Object.keys(d)};function v(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var a=t.replace(e,"");r+="-".concat(a)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var h=new Map;t["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},c),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,a=t.data,i=t.children,o=(t.parent,"");for(var l in n)o+=String(n[l]);var c=h.get(o);return c||function(){var e,t;for(t in c=[],f)f[t].forEach((function(e){var r=n[e],a=v(t,e,r);a&&c.push(a)}));var a=c.some((function(e){return e.startsWith("col-")}));c.push((e={col:!a||!n.cols},Object(r["a"])(e,"col-".concat(n.cols),n.cols),Object(r["a"])(e,"offset-".concat(n.offset),n.offset),Object(r["a"])(e,"order-".concat(n.order),n.order),Object(r["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),h.set(o,c)}(),e(n.tag,Object(s["a"])(a,{class:c}),i)}})},"6ece":function(e,t,n){},"99d9":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("b0af"),a=n("80d2"),i=Object(a["e"])("v-card__actions"),s=Object(a["e"])("v-card__subtitle"),o=Object(a["e"])("v-card__text"),l=Object(a["e"])("v-card__title");r["a"]},a452:function(e,t,n){"use strict";var r=n("ade3"),a=n("2b0e");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return a["a"].extend({name:"proxyable",model:{prop:e,event:t},props:Object(r["a"])({},e,{required:!1}),data:function(){return{internalLazyValue:this[e]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:Object(r["a"])({},e,(function(e){this.internalLazyValue=e}))})}var s=i();t["a"]=s},b0af:function(e,t,n){"use strict";var r=n("5530"),a=(n("a9e3"),n("0481"),n("615b"),n("10d2")),i=n("2b0e"),s=n("ade3"),o=(n("c7cd"),n("6ece"),n("0789")),l=n("90a2"),c=n("a9ad"),u=n("fe6c"),d=n("a452"),f=n("7560"),v=n("80d2"),h=n("58df"),p=Object(h["a"])(c["a"],Object(u["b"])(["absolute","fixed","top","bottom"]),d["a"],f["a"]),g=p.extend({name:"v-progress-linear",directives:{intersect:l["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(v["d"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(v["d"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(s["a"])(e,this.isReversed?"right":"left",Object(v["d"])(this.normalizedValue,"%")),Object(s["a"])(e,"width",Object(v["d"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o["b"]:o["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(v["d"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(v["j"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),n=t.width;this.internalValue=e.offsetX/n*100}},onObserve:function(e,t,n){this.isVisible=n},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(v["d"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),m=g,b=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(m,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),y=n("1c87");t["a"]=Object(h["a"])(b,y["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-card":!0},y["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var e=Object(r["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=b.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),n=t.tag,r=t.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(n,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},d356:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"4"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:"https://i.imgur.com/LLKRUug.png"}})]),n("v-col",{attrs:{cols:"8"}},[n("v-card",[n("v-toolbar",{attrs:{flat:"",dark:"",height:"fit-content"}},[n("v-row",{staticClass:"text-center text-uppercase py-4"},[n("v-col",{attrs:{cols:"6"}},[n("v-card",{attrs:{shaped:"",color:"purple"}},[n("h4",[e._v("Spent $ "+e._s(e.campaign_spendings.spent))])])],1),n("v-col",{staticClass:"text-uppercase",attrs:{cols:"6"}},[n("h4",[e._v(e._s(e.campaign_spendings.name))])])],1)],1),n("v-card-text",[n("v-row",e._l(e.campaign_spendings.KPI,(function(t,r){return n("v-col",{key:"feature"+r,attrs:{cols:"4"}},[n("v-card",{staticClass:"campaign_spendings"},[n("v-row",[n("v-col",{attrs:{cols:"7"}},[n("div",{staticClass:"text-sm-center"},[e._v(" 7 days "+e._s(e.campaign_spendings.spent)+" ")])]),n("v-col",{attrs:{cols:"5",color:"green"}},[e._v("+%")])],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"kpi_name"},[e._v(e._s(t.name))])])],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"kpi_value"},[e._v(e._s(t.value))])])],1),n("div",{staticClass:"card__footer_gradient"})],1)],1)})),1)],1),n("div",{staticClass:"card__footer_gradient"})],1)],1)],1)],1)},a=[],i={name:"Playground1",data:function(){return{campaign_spendings:{name:"Campaign Name 1",spent:"8.20",KPI:[{name:"CPA",previous:"8",value:"$ 8.37"},{name:"Conversion10",previous:"0.40",value:"0.50"},{name:"ROAS10",previous:"1",value:"1.2"},{name:"CPM6",previous:"5.50",value:"€ 5.00"},{name:"CPC7",previous:"0.60",value:"0.50"},{name:"CTR10",previous:"0.60",value:"0.50"}]}}}},s=i,o=(n("5a52"),n("2877")),l=n("6544"),c=n.n(l),u=n("b0af"),d=n("99d9"),f=n("62ad"),v=n("a523"),h=n("0fd9"),p=n("71d9"),g=Object(o["a"])(s,r,a,!1,null,"4e9398c3",null);t["default"]=g.exports;c()(g,{VCard:u["a"],VCardText:d["a"],VCol:f["a"],VContainer:v["a"],VRow:h["a"],VToolbar:p["a"]})},e777:function(e,t,n){}}]);
//# sourceMappingURL=chunk-25ef6d2d.fe9a87a6.js.map