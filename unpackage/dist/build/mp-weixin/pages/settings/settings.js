(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/settings/settings"],{4313:function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o}))},"802a":function(e,t,n){"use strict";(function(e){n("b6b4"),n("921b");o(n("66fd"));var t=o(n("e878"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},cab6:function(e,t,n){"use strict";n.r(t);var o=n("cd0a"),a=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=a.a},cd0a:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("675c"),a=o.constant,u=o.factory,r={data:function(){return{headerImg:null,imageList:[],logoutUser:!1,login:!0}},onLoad:function(t){var n=e.getStorageSync(a.mapping.OWNER_INFO);null!=n&&""!=n?this.loadOwnerHeaderImg():this.login=!1},methods:{settingHeadImg:function(){var e=this;wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传",icon:"loading",mask:!0,duration:1e3});var n=t.tempFilePaths;console.log("头像地址",n),u.base64.urlTobase64(n[0]).then((function(t){e.headerImg=t,e._uploadOwnerHeaderImg(),wx.hideLoading()}))}})},loadOwnerHeaderImg:function(){var e=this;o.getOwner((function(t){var n=a.url.getOwnerPhotoPath+"?objId="+t.memberId+"&communityId="+t.communityId+"&fileTypeCd=10000";e.headerImg=n}))},_uploadOwnerHeaderImg:function(){var e=this;o.getOwner((function(t){var n=t.memberId,u=t.communityId,r={memberId:n,communityId:u,photo:e.headerImg};o.request({url:a.url.uploadOwnerPhoto,header:o.getHeaders(),method:"POST",data:r,success:function(e){console.log(e),200==e.statusCode||wx.showToast({title:"头像上传失败",icon:"none",duration:2e3})},fail:function(e){wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})}))},_logout:function(){this.logoutUser=!0},_cancleLogout:function(){this.logoutUser=!1},_toPage:function(t){e.navigateTo({url:t})},_doLogoutUser:function(){var t={token:wx.getStorageSync("token")};o.request({url:a.url.userLogout,header:o.getHeaders(),method:"POST",data:t,success:function(t){200==t.statusCode?(e.clearStorageSync(),e.navigateTo({url:"/pages/login/login"})):e.showToast({icon:"none",title:t.data})},fail:function(t){e.showToast({title:"调用接口失败"}),console.log(t)}})}}};t.default=r}).call(this,n("543d")["default"])},e878:function(e,t,n){"use strict";n.r(t);var o=n("4313"),a=n("cab6");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);var r,i=n("f0c5"),c=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=c.exports}},[["802a","common/runtime","common/vendor"]]]);