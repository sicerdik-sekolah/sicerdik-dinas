(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1158:function(t,o,r){"use strict";r(834)},1159:function(t,o,r){var e=r(4)((function(i){return i[1]}));e.push([t.i,".author-top-divider[data-v-2e45555d]{margin-top:24px;margin-bottom:32px;border:none;border-top:1px solid var(--c-transparent-black_200)}",""]),e.locals={},t.exports=e},1473:function(t,o,r){"use strict";r.r(o);var e=r(739),n=r(969),l=r(638),c=r(29),d=r(618),m={name:"AuthorPlatformPage",components:{AuthorBreadcrubms:e.a,AuthorPlatform:n.a},scrollToTop:!0,layout:"app",async asyncData(t){let{params:o,error:r,store:e,app:n}=t;e.dispatch("setFilterColor",Object(d.d)(o.platform).code||Object(d.d)(o.platform).value),e.dispatch("setSearchColor",Object(d.d)(o.platform));const[m]=o.platform.split("--");try{const[t,r]=await Promise.all([Object(l.a)(o.authorId),Object(l.b)(m)]);return e.dispatch("updateSEO",{title:n.i18n.t("WEB_APP.SEO.EXTERNAL_AUTHORS.PAGES.PLATFORM.TITLE",{author:t.name,style:r.name}),description:n.i18n.t("WEB_APP.SEO.EXTERNAL_AUTHORS.PAGES.PLATFORM.DESCRIPTION",{author:t.name,count:Object(c.a)(r.totalIcons)})}),{platformInfo:r,authorName:t.name,logoUrl:t.logoUrl}}catch(t){return r({statusCode:404,message:"Page not found"})}},data:()=>({logoUrl:"",name:"",platformInfo:{},authorName:""}),computed:{breadcrumbs(){const{authorId:t,alias:o}=this.$route.params;return[{label:"Icons8",link:"/icons"},{label:"icons8"!==o?this.authorName:"Experimental Icons8",link:`/icons/authors/${t}/${o}`}]}},mounted(){var t;const o=null===(t=document.getElementsByClassName("app-page"))||void 0===t?void 0:t[0];o&&this.$scrollTo(o)}},f=(r(1158),r(3)),component=Object(f.a)(m,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"author-icons-platform-page app-page-section custom-padding"},[o("hr",{staticClass:"author-top-divider"}),t._v(" "),o("AuthorBreadcrubms",{attrs:{crumbs:t.breadcrumbs}}),t._v(" "),o("AuthorPlatform",{attrs:{"api-code":t.platformInfo.apiCode,"style-name":t.platformInfo.name,packs:t.platformInfo.packPreviews,"total-icons":t.platformInfo.totalIcons}})],1)}),[],!1,null,"2e45555d",null);o.default=component.exports},671:function(t,o,r){var content=r(714);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("20615e06",content,!0,{sourceMap:!1})},713:function(t,o,r){"use strict";r(671)},714:function(t,o,r){var e=r(4)((function(i){return i[1]}));e.push([t.i,".author-breadcrumbs[data-v-123dd2bc]{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;margin-bottom:8px}.author-breadcrumbs .i8-icon[data-v-123dd2bc]{transform:rotate(180deg);margin:0 8px}",""]),e.locals={},t.exports=e},739:function(t,o,r){"use strict";var e=r(13),n={name:"AuthorBreadcrubms",components:{I8Link:e.i,I8Icon:e.h},props:{crumbs:{type:Array,default:()=>[{label:"Icons8",link:"/icons"}]}}},l=(r(713),r(3)),component=Object(l.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"author-breadcrumbs"},[t._l(t.crumbs,(function(r,e){return[o("I8Link",{key:e,attrs:{link:r.link}},[t._v("\n      "+t._s(r.label)+"\n    ")]),t._v(" "),e!==t.crumbs.length-1?o("I8Icon",{key:"arrow-"+e,attrs:{icon:"arrow",family:"simpleSmall"}}):t._e()]}))],2)}),[],!1,null,"123dd2bc",null);o.a=component.exports},834:function(t,o,r){var content=r(1159);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("b0634852",content,!0,{sourceMap:!1})}}]);
//# sourceMappingURL=index.1035b9402bfe247e4e51.js.map