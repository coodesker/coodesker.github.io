(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Downloads"],{1036:function(t,e,n){"use strict";var r=n("d27b"),a=n.n(r);a.a},6343:function(t,e,n){"use strict";var r=n("ec06"),a=n.n(r);a.a},"746f":function(t,e,n){var r=n("428f"),a=n("5135"),o=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});a(e,t)||i(e,t,{value:o.f(t)})}},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(j){l=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,o=Object.create(a.prototype),i=new S(r||[]);return o._invoke=L(t,n,i),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(j){return{type:"throw",arg:j}}}t.wrap=c;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",g={};function v(){}function b(){}function w(){}var y={};y[o]=function(){return this};var m=Object.getPrototypeOf,_=m&&m(m(O([])));_&&_!==n&&r.call(_,o)&&(y=_);var x=w.prototype=v.prototype=Object.create(y);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function $(t,e){function n(a,o,i,s){var l=u(t[a],t,o);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(d).then((function(t){c.value=t,i(c)}),(function(t){return n("throw",t,i,s)}))}s(l.arg)}var a;function o(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function L(t,e,n){var r=d;return function(a,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw o;return P()}n.method=a,n.arg=o;while(1){var i=n.delegate;if(i){var s=C(i,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var l=u(t,e,n);if("normal"===l.type){if(r=n.done?p:h,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=p,n.method="throw",n.arg=l.arg)}}}function C(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=u(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function O(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){while(++a<t.length)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return b.prototype=x.constructor=w,w.constructor=b,b.displayName=l(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k($.prototype),$.prototype[i]=function(){return this},t.AsyncIterator=$,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new $(c(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(x),l(x,s,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return s.type="throw",s.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},"9d26":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"downloads"},[n("vue-headful",{attrs:{title:t.$t("downloads.meta-title"),description:t.$t("downloads.meta-description")}}),n("section",{staticClass:"hero is-download"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"title is-size-3 has-text-centered is-unselectable"},[t._v(t._s(t.$t("downloads.latest")))]),n("p",{staticClass:"subtitle has-text-centered is-unselectable"},[t.isLoadingLatest?t._e():n("span",[t._v(" "+t._s(t.isEmpty(t.$store.release)?"...":t.$t("home.version").replace("{0}",t.$store.release.version))+" ")]),t.isLoadingLatest?n("b-skeleton",{attrs:{height:"20px",width:"180px",animated:""}}):t._e()],1),n("div",{staticClass:"columns is-centered is-vcentered is-multiline is-mobile"},[n("div",{staticClass:"column is-narrow has-text-centered"},[n("b-button",{ref:"installerButton",style:{"min-width":t.getMinWidthPortable()},attrs:{type:"is-primary",size:"is-large",loading:t.isLoadingLatest,tag:"a",target:t.downloads.length>0?"_self":"_blank",href:t.$store.release.download_link_instx64,inverted:!t.isLoadingLatest,outlined:!t.isLoadingLatest},on:{click:function(e){return t.$gtag.event("Download",{event_category:"Clicks",event_label:"Installerx64"})}}},[t._v(" "+t._s(t.$t("home.installerX64"))+" ")]),t.isLoadingLatest?n("b-skeleton",{attrs:{height:"20px",width:"180px",animated:""}}):t._e()],1),n("div",{staticClass:"column is-narrow has-text-centered"},[n("b-tooltip",{attrs:{label:t.$t("home.installerX86-info"),type:"is-light",position:"is-top",animated:"",multilined:""}},[n("b-button",{ref:"installerButton",style:{"min-width":t.getMinWidthPortable()},attrs:{type:"is-primary",size:"is-large",loading:t.isLoadingLatest,tag:"a",target:t.downloads.length>0?"_self":"_blank",href:t.$store.release.download_link_instx86,inverted:!t.isLoadingLatest,outlined:!t.isLoadingLatest},on:{click:function(e){return t.$gtag.event("Download",{event_category:"Clicks",event_label:"Installerx86"})}}},[t._v(" "+t._s(t.$t("home.installerX86"))+" ")])],1),t.isLoadingLatest?n("b-skeleton",{attrs:{height:"20px",width:"180px",animated:""}}):t._e()],1),n("div",{staticClass:"column is-narrow has-text-centered"},[n("b-button",{ref:"portableButton",style:{"min-width":t.getMinWidthInstaller()},attrs:{type:"is-primary",size:"is-large",loading:t.isLoadingLatest,tag:"a",target:t.downloads.length>0?"_self":"_blank",href:t.$store.release.download_link_portx64,inverted:!t.isLoadingLatest,outlined:!t.isLoadingLatest},on:{click:function(e){return t.$gtag.event("Download",{event_category:"Clicks",event_label:"PortableX64"})}}},[t._v(" "+t._s(t.$t("home.portablex64"))+" ")]),t.isLoadingLatest?n("b-skeleton",{attrs:{height:"20px",width:"180px",animated:""}}):t._e()],1),n("div",{staticClass:"column is-narrow has-text-centered"},[n("b-tooltip",{attrs:{label:t.$t("home.portablex86-info"),type:"is-light",position:"is-top",animated:"",multilined:""}},[n("b-button",{ref:"portableButton",style:{"min-width":t.getMinWidthInstaller()},attrs:{type:"is-primary",size:"is-large",loading:t.isLoadingLatest,tag:"a",target:t.downloads.length>0?"_self":"_blank",href:t.$store.release.download_link_portx86,inverted:!t.isLoadingLatest,outlined:!t.isLoadingLatest},on:{click:function(e){return t.$gtag.event("Download",{event_category:"Clicks",event_label:"PortableX86"})}}},[t._v(" "+t._s(t.$t("home.portablex86"))+" ")])],1),t.isLoadingLatest?n("b-skeleton",{attrs:{height:"20px",width:"180px",animated:""}}):t._e()],1)]),t.isLoadingLatest||t.isEmpty(t.$store.release)||t.isEmpty(t.$store.release.description)?t._e():n("b-collapse",{staticClass:"has-text-light has-text-centered",attrs:{open:t.isExpanderOpen,position:"is-top",animation:"slide","aria-id":"expander"},on:{"update:open":function(e){t.isExpanderOpen=e},open:function(e){return t.$gtag.event("Latest release details",{event_category:"Clicks",event_label:"Open"})},close:function(e){return t.$gtag.event("Latest release details",{event_category:"Clicks",event_label:"Close"})}},scopedSlots:t._u([{key:"trigger",fn:function(e){return n("a",{staticClass:"has-text-light is-unselectable",attrs:{"aria-controls":"expander"}},[n("b-icon",{attrs:{pack:"unicon",icon:e.open?"uil-angle-up":"uil-angle-down"}}),t._v(" "+t._s(e.open?t.$t("downloads.hide-release-notes"):t.$t("downloads.show-release-notes"))+" ")],1)}}],null,!1,2622418902)},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-10-tablet is-9-desktop is-8-widescreen is-7-fullhd"},[n("p",{staticClass:"content has-text-light has-text-justified is-unselectable"},[n("VueShowdown",{attrs:{markdown:t.isEmpty(t.$store.release)?"":t.$store.release.description,tag:"span"}})],1)])])]),n("p",{staticClass:"has-text-centered"},[t.isLoadingLatest?n("b-skeleton",{attrs:{height:"20px",width:"180px",animated:""}}):t._e()],1)],1)])]),n("section",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"title is-size-3 has-text-centered is-unselectable"},[t._v(t._s(t.$t("downloads.releases.title")))]),n("b-table",{ref:"table",attrs:{data:t.$store.releaseList,loading:t.isLoading,hoverable:"",detailed:"","detail-key":"version",selectable:"",paginated:"","per-page":t.perPage,"current-page":t.currentPage,scrollable:!1,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder]},on:{select:t.toggle,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"details-open":function(e,n){return t.detailsOpen(e)},"details-close":function(e,n){return t.detailsClose(e)}},scopedSlots:t._u([{key:"detail",fn:function(e){return[n("article",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("nav",{staticClass:"level is-marginless"},[n("div",{staticClass:"level-left"},[n("a",{staticClass:"level-item",attrs:{href:e.row.url,target:"_blank",rel:"noopener"},on:{click:function(n){return t.$gtag.event("Release links",{event_category:"Clicks",event_label:"Release "+e.row.version})}}},[n("span",{staticClass:"is-size-4 has-text-weight-semibold is-marginless"},[t._v("Coodesker "+t._s(e.row.version))])]),n("p",{staticClass:"level-item is-vcentered"},[n("small",{domProps:{innerHTML:t._s(t.$t("navigation.download.by").replace("{0}","<a href={0} target=_blank rel=noopener>@{1}</a>").replace("{0}",e.row.author_url).replace("{1}",e.row.author_login))},on:{click:function(n){return t.$gtag.event("Release links",{event_category:"Clicks",event_label:"Author "+e.row.version})}}})])]),n("div",{staticClass:"level-right"},[n("p",{staticClass:"level-item"},[n("small",[t._v(t._s(t.since(e.row.release_date_obj,new Date)))])])])]),n("div",{staticClass:"content has-side-padding"},[n("VueShowdown",{attrs:{markdown:e.row.description,tag:"span"}})],1),n("hr"),n("nav",{staticClass:"level is-marginless is-paddingless"},[n("div",{staticClass:"level-left"}),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("b-button",{attrs:{type:"is-info",size:"is-medium",tag:"a",href:e.row.download_link_instx64,rel:"noopener"},on:{click:function(n){return t.$gtag.event("Download-Row",{event_category:"Clicks",event_label:"Installer "+e.row.version})}}},[t._v(" "+t._s(t.$t("downloads.installerx64"))+" ")])],1)]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("b-button",{attrs:{type:"is-info",size:"is-medium",tag:"a",href:e.row.download_link_instx86,rel:"noopener"},on:{click:function(n){return t.$gtag.event("Download-Row",{event_category:"Clicks",event_label:"Installer "+e.row.version})}}},[t._v(" "+t._s(t.$t("downloads.installerx86"))+" ")])],1)]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("b-button",{attrs:{type:"is-info",size:"is-medium",tag:"a",href:e.row.download_link_portx64,rel:"noopener"},on:{click:function(n){return t.$gtag.event("Download-Row",{event_category:"Clicks",event_label:"Portablex64 "+e.row.version})}}},[t._v(" "+t._s(t.$t("downloads.downloadx64"))+" ")])],1)]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("b-button",{attrs:{type:"is-info",size:"is-medium",tag:"a",href:e.row.download_link_portx86,rel:"noopener"},on:{click:function(n){return t.$gtag.event("Download-Row",{event_category:"Clicks",event_label:"Portablex86 "+e.row.version})}}},[t._v(" "+t._s(t.$t("downloads.downloadx86"))+" ")])],1)])])])])])]}}])},[n("b-table-column",{staticClass:"is-unselectable",attrs:{"cell-class":"has-pointer-cursor",field:"version",label:t.$t("downloads.releases.table.version"),"custom-sort":t.sortVersion,sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"tag",class:t.versionType(e.row.is_prerelease)},[t._v(" "+t._s(e.row.version)+" ")])]}}])}),n("b-table-column",{staticClass:"is-unselectable",attrs:{"cell-class":"has-pointer-cursor",field:"release_date",label:t.$t("downloads.releases.table.date"),sortable:"",centered:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.release_date?new Date(e.row.release_date).toLocaleDateString(t.$i18n.locale):"unknown")+" ")]}}])}),n("b-table-column",{staticClass:"is-unselectable",attrs:{"cell-class":"has-pointer-cursor",field:"active_days",label:t.$t("downloads.releases.table.days"),sortable:"",numeric:""},scopedSlots:t._u([{key:"header",fn:function(e){var r=e.column;return[n("b-tooltip",{attrs:{label:t.$t("downloads.releases.table.days-info"),type:"is-info",size:"is-small",animated:"",dashed:"",multilined:""}},[t._v(" "+t._s(r.label)+" ")])]}},{key:"default",fn:function(e){return[t._v(" "+t._s(t.toLocaleFixed(e.row.active_days,1,t.$i18n.locale))+" ")]}}])}),n("template",{slot:"empty"},[t.isLoading?t._e():n("section",{staticClass:"section"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[n("b-icon",{attrs:{icon:"frown",size:"is-size-3"}}),n("p",[t._v(t._s(t.$t("downloads.releases.table.not-possible")))])],1)])])],2)],1)])])],1)},a=[];n("a4d3"),n("e01a"),n("4160"),n("a9e3"),n("ac1f"),n("5319"),n("1276"),n("159b"),n("96cf"),n("d3b7");function o(t,e,n,r,a,o,i){try{var s=t[o](i),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){o(i,r,a,s,l,"next",t)}function l(t){o(i,r,a,s,l,"throw",t)}s(void 0)}))}}var s=n("8884"),l=n("b132"),c={components:{ResponsiveImage:s["a"]},mixins:[l["a"]],data:function(){return{downloads:[],aux:{},isLoading:!0,isLoadingLatest:!0,isExpanderOpen:!1,totalDays:0,sortField:"version",sortOrder:"desc",defaultSortOrder:"desc",currentPage:1,perPage:10}},mounted:function(){this.load()},methods:{getMinWidthInstaller:function(){var t=this,e=void 0!==this.$refs.portableButton?this.$refs.portableButton.$el.clientWidth+2+"px":0;return this.$nextTick().then((function(){t.$refs.installerButton.$el.style.minWidth="0px",t.$nextTick().then((function(){t.$refs.installerButton.$el.style.minWidth=t.$refs.portableButton.$el.clientWidth+2+"px"}))})),e},getMinWidthPortable:function(){var t=this,e=void 0!==this.$refs.installerButton?this.$refs.installerButton.$el.clientWidth+2+"px":0;return this.$nextTick().then((function(){t.$refs.portableButton.$el.style.minWidth="0px",t.$nextTick().then((function(){t.$refs.portableButton.$el.style.minWidth=t.$refs.installerButton.$el.clientWidth+2+"px"}))})),e},sortVersion:function(t,e,n){return this.compareVersion(t.version,e.version)*(n?1:-1)},compareVersion:function(t,e){var n=t.substr(1).split(/\./g),r=e.substr(1).split(/\./g);while(n.length||r.length){var a=Number(n.shift()),o=Number(r.shift());if(a!=o)return a>o||isNaN(o)?1:-1}return-1},load:function(){this.$store.release.length>0&&this.$store.previousLatestDate&&(new Date).getTime()-this.$store.previousLatestDate>300?this.isLoadingLatest=!1:this.fallbackLoadLatest(),this.$store.releaseList.length>0&&this.$store.previousDate&&(new Date).getTime()-this.$store.previousDate>300?this.isLoading=!1:this.fallbackLoad()},fallbackLoad:function(){var t=this;this.$http.get("https://api.github.com/repos/coodesker/coodesker-desktop/releases?per_page=70").then(function(){var e=i(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,n.json();case 3:e.t1=e.sent,e.t0.treatDataFallback.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log("Exception in getting releases, in fallback.",e),t.setDefaultReleaseList(),t.$gtag.exception({description:e,fatal:!0})})).catch((function(e){console.log("Exception in getting releases, in fallback.",e),t.setDefaultReleaseList(),t.$gtag.exception({description:e,fatal:!0})}))},treatDataFallback:function(t){var e=this;this.totalDownloads=0,this.totalDays=0;var n=new Date;this.downloads=[],t.forEach((function(t,r){if(0!==t.assets.length){var a=t.assets[0],o=t.assets[1],i=t.assets[2],s=t.assets[3],l=new Date(t.published_at);e.aux={},e.aux.version=t.tag_name,e.aux.release_date=l,e.aux.release_date_obj=l,e.aux.is_prerelease=t.prerelease,e.aux.active_days=e.dateDiff(n,l),e.aux.author_login=t.author.login,e.aux.author_picture=t.author.avatar_url,e.aux.is_picture_loaded=!1,e.aux.author_url=t.author.html_url,e.aux.url=t.html_url,e.aux.description=t.body,e.aux.download_link_portx64=void 0!=a?a.browser_download_url:void 0,e.aux.download_link_portx86=void 0!=o?o.browser_download_url:void 0,e.aux.download_link_instx64=void 0!=i?i.browser_download_url:void 0,e.aux.download_link_instx86=void 0!=s?s.browser_download_url:void 0,e.downloads.push(e.aux),e.totalDays+=e.aux.active_days,n=l}})),this.$store.releaseList=this.downloads,this.$store.previousDate=(new Date).getTime()/1e3,this.$store.totalDays=this.totalDays,this.isLoading=!1},setDefaultReleaseList:function(){this.downloads=[],this.totalDownloads=0,this.totalDays=0,this.isLoading=!1},fallbackLoadLatest:function(){var t=this;this.$http.get("https://coodesker.github.io/coodesker-desktop/release.json").then(function(){var e=i(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,n.json();case 3:e.t1=e.sent,e.t0.treatDataLatestFallback.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log("Exception in getting releases, in fallback.",e),t.setDefaultReleaseLatest(),t.$gtag.exception({description:e,fatal:!0})})).catch((function(e){console.log("Exception in getting releases, in fallback.",e),t.setDefaultReleaseLatest(),t.$gtag.exception({description:e,fatal:!0})}))},treatDataLatestFallback:function(t){this.$store.release.download_link_portx64=t.Portablex64.download,this.$store.release.download_link_portx86=t.Portablex86.download,this.$store.release.download_link_instx64=t.x64.download,this.$store.release.download_link_instx86=t.x86.download,this.$store.release.version=t.version,this.$store.release.description=t.description,this.$store.previousLatestDate=(new Date).getTime()/1e3,this.isLoadingLatest=!1},setDefaultReleaseLatest:function(){var t="https://github.com/coodesker/coodesker-desktop/releases";this.$store.release.download_link_portx64=t,this.$store.release.download_link_portx86=t,this.$store.release.download_link_instx64=t,this.$store.release.download_link_instx86=t,this.$store.release.version="",this.$store.release.description="",this.isLoadingLatest=!1},toggle:function(t){this.$refs.table.toggleDetails(t)},detailsOpen:function(t){this.$gtag.event("Version details",{event_category:"Clicks",event_label:"Expand row "+t.version})},detailsClose:function(t){this.$gtag.event("Version details",{event_category:"Clicks",event_label:"Collapse row "+t.version})},versionType:function(t){return t?"is-warning":"is-info"},showError:function(){this.$buefy.toast.open({duration:5e3,message:"It was not possible to load the releases.",position:"is-bottom",type:"is-danger"})},daysInMonth:function(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()}},computed:{projectAge:function(){var t=new Date((new Date).setHours(0,0,0,0)),e=new Date(2013,9,12),n=t.getFullYear()-e.getFullYear(),r=t.getMonth()-e.getMonth(),a=t.getDate()-e.getDate();r+=12*n,a<0&&(r-=1),e.setMonth(e.getMonth()+r);var o=t-e;a=Math.round(o/86400/1e3);n=parseInt(r/12),r-=12*n;var i="";return n&&(i=this.$t("downloads.releases.dates.year"+(1==n?"":"s")).replace("{0}",n)),r&&(i.length&&(i+=", "),i+=this.$t("downloads.releases.dates.month"+(1==r?"":"s")).replace("{0}",r)),a&&(i.length&&(i+=", "),i+=this.$t("downloads.releases.dates.day"+(1==a?"":"s")).replace("{0}",a)),i},averagePerMonth:function(){var t=new Date((new Date).setHours(0,0,0,0)),e=new Date(2013,9,12),n=t.getFullYear()-e.getFullYear(),r=t.getMonth()-e.getMonth(),a=t.getDate()-e.getDate();return r+=12*n,r+=a/this.daysInMonth(t),(this.downloads.length>0?this.downloads.length:this.$store.releaseList.length)/r}}},u=c,d=(n("6343"),n("1036"),n("2877")),h=Object(d["a"])(u,r,a,!1,null,"cc5086c8",null);e["default"]=h.exports},a4d3:function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("d066"),i=n("c430"),s=n("83ab"),l=n("4930"),c=n("fdbf"),u=n("d039"),d=n("5135"),h=n("e8b5"),f=n("861d"),p=n("825a"),g=n("7b0b"),v=n("fc6a"),b=n("c04e"),w=n("5c6c"),y=n("7c73"),m=n("df75"),_=n("241c"),x=n("057f"),k=n("7418"),$=n("06cf"),L=n("9bf2"),C=n("d1e7"),D=n("9112"),E=n("6eeb"),S=n("5692"),O=n("f772"),P=n("d012"),j=n("90e3"),F=n("b622"),R=n("e538"),M=n("746f"),T=n("d44e"),I=n("69f3"),N=n("b727").forEach,z=O("hidden"),B="Symbol",W="prototype",G=F("toPrimitive"),V=I.set,Y=I.getterFor(B),X=Object[W],A=a.Symbol,J=o("JSON","stringify"),H=$.f,Q=L.f,q=x.f,K=C.f,U=S("symbols"),Z=S("op-symbols"),tt=S("string-to-symbol-registry"),et=S("symbol-to-string-registry"),nt=S("wks"),rt=a.QObject,at=!rt||!rt[W]||!rt[W].findChild,ot=s&&u((function(){return 7!=y(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=H(X,e);r&&delete X[e],Q(t,e,n),r&&t!==X&&Q(X,e,r)}:Q,it=function(t,e){var n=U[t]=y(A[W]);return V(n,{type:B,tag:t,description:e}),s||(n.description=e),n},st=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof A},lt=function(t,e,n){t===X&&lt(Z,e,n),p(t);var r=b(e,!0);return p(n),d(U,r)?(n.enumerable?(d(t,z)&&t[z][r]&&(t[z][r]=!1),n=y(n,{enumerable:w(0,!1)})):(d(t,z)||Q(t,z,w(1,{})),t[z][r]=!0),ot(t,r,n)):Q(t,r,n)},ct=function(t,e){p(t);var n=v(e),r=m(n).concat(pt(n));return N(r,(function(e){s&&!dt.call(n,e)||lt(t,e,n[e])})),t},ut=function(t,e){return void 0===e?y(t):ct(y(t),e)},dt=function(t){var e=b(t,!0),n=K.call(this,e);return!(this===X&&d(U,e)&&!d(Z,e))&&(!(n||!d(this,e)||!d(U,e)||d(this,z)&&this[z][e])||n)},ht=function(t,e){var n=v(t),r=b(e,!0);if(n!==X||!d(U,r)||d(Z,r)){var a=H(n,r);return!a||!d(U,r)||d(n,z)&&n[z][r]||(a.enumerable=!0),a}},ft=function(t){var e=q(v(t)),n=[];return N(e,(function(t){d(U,t)||d(P,t)||n.push(t)})),n},pt=function(t){var e=t===X,n=q(e?Z:v(t)),r=[];return N(n,(function(t){!d(U,t)||e&&!d(X,t)||r.push(U[t])})),r};if(l||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=j(t),n=function(t){this===X&&n.call(Z,t),d(this,z)&&d(this[z],e)&&(this[z][e]=!1),ot(this,e,w(1,t))};return s&&at&&ot(X,e,{configurable:!0,set:n}),it(e,t)},E(A[W],"toString",(function(){return Y(this).tag})),E(A,"withoutSetter",(function(t){return it(j(t),t)})),C.f=dt,L.f=lt,$.f=ht,_.f=x.f=ft,k.f=pt,R.f=function(t){return it(F(t),t)},s&&(Q(A[W],"description",{configurable:!0,get:function(){return Y(this).description}}),i||E(X,"propertyIsEnumerable",dt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:A}),N(m(nt),(function(t){M(t)})),r({target:B,stat:!0,forced:!l},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=A(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!s},{create:ut,defineProperty:lt,defineProperties:ct,getOwnPropertyDescriptor:ht}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:ft,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(g(t))}}),J){var gt=!l||u((function(){var t=A();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}));r({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var r,a=[t],o=1;while(arguments.length>o)a.push(arguments[o++]);if(r=e,(f(e)||void 0!==t)&&!st(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),a[1]=e,J.apply(null,a)}})}A[W][G]||D(A[W],G,A[W].valueOf),T(A,B),P[z]=!0},d27b:function(t,e,n){},e01a:function(t,e,n){"use strict";var r=n("23e7"),a=n("83ab"),o=n("da84"),i=n("5135"),s=n("861d"),l=n("9bf2").f,c=n("e893"),u=o.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};c(h,u);var f=h.prototype=u.prototype;f.constructor=h;var p=f.toString,g="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;l(f,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(i(d,t))return"";var n=g?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:h})}},e538:function(t,e,n){var r=n("b622");e.f=r},ec06:function(t,e,n){}}]);
//# sourceMappingURL=Downloads.e8e65398.js.map