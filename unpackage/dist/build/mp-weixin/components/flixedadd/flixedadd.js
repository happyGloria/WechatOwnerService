(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/flixedadd/flixedadd"],{1165:function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{xiaosikaifa_camouflage_flag:!1,animationadd:"",animationaddlist:"",xiaosikaifa_add_list_flag:!1,defaultbackgroundcolor:null,defaultcolor:null,tapflag:!0,showColor:this.color,showBackgroundColor:this.backgroundColor}},props:{backgroundColor:{type:String,default:"#228B22"},selectbackgroundColor:{type:String,default:"#FFFFFF"},color:{type:String,default:"#FFFFFF"},selectcolor:{type:String,default:"#228B22"},addlistdata:{type:Array,default:function(){return[]}}},methods:{addlisttap:function(a){this.tapflag&&(this.animationadd=t.createAnimation({duration:250}),this.animationadd.rotateX(0).rotate(0).step(),this.showBackgroundColor=this.defaultbackgroundcolor,this.showColor=this.defaultcolor,this.animationaddlist=t.createAnimation({duration:100}),this.animationaddlist.translateY(65).step(),setTimeout(function(){this.xiaosikaifa_add_list_flag=!1,this.xiaosikaifa_camouflage_flag=!1,this.$emit("addlisttap",a),this.tapflag=!0}.bind(this),100)),this.tapflag=!1},addtap:function(){this.tapflag&&(this.animationadd=t.createAnimation({duration:250}),this.xiaosikaifa_camouflage_flag?(this.animationadd.rotateX(0).rotate(0).step(),this.showBackgroundColor=this.defaultbackgroundcolor,this.showColor=this.defaultcolor,this.animationaddlist=t.createAnimation({duration:100}),this.animationaddlist.translateY(65).step(),setTimeout(function(){this.xiaosikaifa_add_list_flag=!1,this.xiaosikaifa_camouflage_flag=!1,this.tapflag=!0}.bind(this),100)):(this.animationadd.rotateX(180).rotate(45).step(),this.defaultbackgroundcolor=this.showBackgroundColor,this.showBackgroundColor=this.selectbackgroundColor,this.defaultcolor=this.showColor,this.showColor=this.selectcolor,this.xiaosikaifa_camouflage_flag=!0,this.xiaosikaifa_add_list_flag=!0,this.animationaddlist=t.createAnimation({duration:0}),this.animationaddlist.translateY(65).step(),setTimeout(function(){this.animationaddlist=t.createAnimation({duration:100}),this.animationaddlist.translateY(0).step(),this.tapflag=!0}.bind(this),10))),this.tapflag=!1}}};a.default=i}).call(this,i("543d")["default"])},"1b7d":function(t,a,i){"use strict";i.r(a);var o=i("401e"),n=i("3e78");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("adaf");var l,e=i("f0c5"),d=Object(e["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],l);a["default"]=d.exports},"3e78":function(t,a,i){"use strict";i.r(a);var o=i("1165"),n=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(a,t,(function(){return o[t]}))}(s);a["default"]=n.a},"401e":function(t,a,i){"use strict";var o,n=function(){var t=this,a=t.$createElement;t._self._c},s=[];i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return o}))},a8ba:function(t,a,i){},adaf:function(t,a,i){"use strict";var o=i("a8ba"),n=i.n(o);n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/flixedadd/flixedadd-create-component',
    {
        'components/flixedadd/flixedadd-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1b7d"))
        })
    },
    [['components/flixedadd/flixedadd-create-component']]
]);
