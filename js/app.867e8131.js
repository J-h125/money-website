(function(t){function e(e){for(var n,s,o=e[0],i=e[1],u=e[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},c=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/money-website/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"00a1":function(t,e,a){"use strict";var n=a("afba"),r=a.n(n);r.a},"0f34":function(t,e,a){"use strict";a.r(e),a.d(e,"TagHelper",(function(){return f}));var n=a("d4ec"),r=a("bee2"),c=a("262e"),s=a("2caf"),o=a("9ab4"),i=a("2b0e"),u=a("2fe1"),l={"tag name duplicated":"标签名重复了"},f=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return Object(r["a"])(a,[{key:"createTag",value:function(){var t=window.prompt("请输入标签名");if(!t)return window.alert("标签名不能为空");this.$store.commit("createTag",t),this.$store.state.createTagError&&window.alert(l[this.$store.state.createTagError.message]||"未知错误")}}]),a}(i["a"]);f=Object(o["a"])([u["b"]],f),e["default"]=f},"22f2":function(t,e,a){"use strict";var n=a("cb9c"),r=a.n(n);r.a},"299a":function(t,e,a){"use strict";var n=a("4d9f"),r=a.n(n);r.a},"2b80":function(t,e,a){"use strict";a.r(e);var n=a("e017"),r=a.n(n),c=a("21a1"),s=a.n(c),o=new r.a({id:"left",use:"left-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="left"><defs><style></style></defs><path d="M259.226 512.474l447.451 447.452 58.614-58.586-388.875-388.866 1.106-1.125-1.106-1.106 388.856-388.847L706.677 62.8l-447.45 447.442 1.106 1.106z" /></symbol>'});s.a.add(o);e["default"]=o},"2da7":function(t,e,a){},"316b":function(t,e,a){"use strict";var n=a("e976"),r=a.n(n);r.a},"376a":function(t,e,a){"use strict";var n=a("2da7"),r=a.n(n);r.a},"37af":function(t,e,a){"use strict";a.r(e);var n=a("e017"),r=a.n(n),c=a("21a1"),s=a.n(c),o=new r.a({id:"right",use:"right-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="right"><defs><style></style></defs><path d="M764.774 511.526L317.323 64.074l-58.614 58.586 388.875 388.866-1.106 1.125 1.106 1.106-388.856 388.847 58.595 58.595 447.45-447.442-1.106-1.106z" /></symbol>'});s.a.add(o);e["default"]=o},3874:function(t,e,a){},4909:function(t,e,a){},"4d9f":function(t,e,a){},"4fbf":function(t,e,a){},"508c":function(t,e,a){"use strict";a.r(e);var n=a("e017"),r=a.n(n),c=a("21a1"),s=a.n(c),o=new r.a({id:"statistic",use:"statistic-usage",viewBox:"0 0 1080 1024",content:'<symbol class="icon" viewBox="0 0 1080 1024" xmlns="http://www.w3.org/2000/svg" id="statistic"><defs><style></style></defs><path d="M568.765 0h-14.47v458.574h466.366v-7.791C1020.66 202.573 818.087 0 568.765 0z" /><path d="M467.478 548.73V57.878C208.14 65.67 0 279.374 0 540.94 0 808.07 215.93 1024 483.06 1024c126.888 0 242.644-48.974 329.462-130.226L467.478 548.73z" /><path d="M1080.765 540.94H606.61l328.348 328.347c87.93-82.365 143.582-198.122 145.808-328.348z" /></symbol>'});s.a.add(o);e["default"]=o},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"765c":function(t,e,a){"use strict";a.r(e);var n=a("e017"),r=a.n(n),c=a("21a1"),s=a.n(c),o=new r.a({id:"label",use:"label-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="label"><defs><style></style></defs><path d="M817.404 589.25c0-18.864-6.288-35.032-19.762-49.404l-385.347-384.45c-13.474-13.473-32.337-25.15-54.793-35.031-23.355-9.88-44.014-14.372-62.877-14.372H70.063c-18.863 0-35.031 7.186-48.505 20.66C8.084 140.126.898 156.295.898 175.158V398.82c0 18.863 4.491 40.421 14.372 62.877 9.88 23.355 20.66 41.32 35.032 54.793L435.649 901.84c13.474 13.473 29.642 19.761 48.505 19.761 18.864 0 35.032-6.288 49.404-19.761l264.084-264.085c12.576-13.473 19.762-29.642 19.762-48.505zM221.867 327.86c-13.474 13.473-29.642 19.761-48.506 19.761-18.863 0-35.031-6.288-48.505-19.761-13.474-13.474-19.761-29.642-19.761-48.506 0-18.863 6.287-35.031 19.761-48.505 13.474-13.474 29.642-19.761 48.505-19.761 18.864 0 35.032 6.287 48.506 19.761 13.473 13.474 19.761 29.642 19.761 48.505.898 18.864-6.288 35.032-19.761 48.506zm782.372 211.986L618.89 155.396c-13.473-13.473-32.337-25.15-54.793-35.031-23.354-9.88-44.014-14.372-62.877-14.372H379.958c18.863 0 40.42 4.491 62.877 14.372 23.354 9.88 41.32 20.66 54.793 35.031l385.347 384.45c13.474 14.372 19.762 30.54 19.762 49.403s-6.288 35.032-19.762 48.505L630.568 891.06c10.78 10.779 20.66 18.863 28.744 24.252 8.084 5.39 18.863 7.186 31.439 7.186 18.863 0 35.031-6.287 49.403-19.761l264.085-264.983c13.473-13.473 19.761-29.642 19.761-48.505 0-18.863-6.288-35.031-19.761-49.403zm0 0" /></symbol>'});s.a.add(o);e["default"]=o},"7a72":function(t,e,a){"use strict";var n=a("4909"),r=a.n(n);r.a},"9c0c":function(t,e,a){},"9cd8":function(t,e,a){},"9db9":function(t,e,a){},a4c0:function(t,e,a){},ab18:function(t,e,a){"use strict";var n=a("9cd8"),r=a.n(n);r.a},afba:function(t,e,a){},b421:function(t,e,a){},b422:function(t,e,a){var n={"./label.svg":"765c","./left.svg":"2b80","./money.svg":"cf44","./plus.svg":"eb38","./right.svg":"37af","./statistic.svg":"508c"};function r(t){var e=c(t);return a(e)}function c(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=c,t.exports=r,r.id="b422"},b673:function(t,e,a){"use strict";var n=a("9db9"),r=a.n(n);r.a},cb9c:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],s={},o=s,i=(a("5c0b"),a("2877")),u=Object(i["a"])(o,r,c,!1,null,null,null),l=u.exports,f=a("9483");Object(f["a"])("".concat("/money-website/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var d=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{"class-prefix":"layout"}},[a("Number-pad",{attrs:{value:t.record.amount},on:{"update:value":function(e){return t.$set(t.record,"amount",e)},submit:t.saveRecord}}),a("Tabs",{attrs:{"data-source":t.recordTypeList,value:t.record.type},on:{"update:value":function(e){return t.$set(t.record,"type",e)}}}),a("div",{staticClass:"notes"},[a("FormItem",{attrs:{"field-name":"备注",placeholder:"在这里输入备注",value:t.record.notes},on:{"update:value":function(e){return t.$set(t.record,"notes",e)}}})],1),a("Tags",{on:{"update:value":function(e){t.record.tags=e}}})],1)},p=[],b=a("d4ec"),m=a("bee2"),g=a("262e"),h=a("2caf"),y=a("9ab4"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"numberPad"},[a("div",{staticClass:"output"},[t._v(t._s(t.output))]),a("div",{staticClass:"buttons"},[a("button",{on:{click:t.inputContent}},[t._v("1")]),a("button",{on:{click:t.inputContent}},[t._v("2")]),a("button",{on:{click:t.inputContent}},[t._v("3")]),a("button",{on:{click:t.remove}},[t._v("删除")]),a("button",{on:{click:t.inputContent}},[t._v("4")]),a("button",{on:{click:t.inputContent}},[t._v("5")]),a("button",{on:{click:t.inputContent}},[t._v("6")]),a("button",{on:{click:t.clear}},[t._v("清空")]),a("button",{on:{click:t.inputContent}},[t._v("7")]),a("button",{on:{click:t.inputContent}},[t._v("8")]),a("button",{on:{click:t.inputContent}},[t._v("9")]),a("button",{staticClass:"ok",on:{click:t.ok}},[t._v("完成")]),a("button",{staticClass:"zero",on:{click:t.inputContent}},[t._v("0")]),a("button",{on:{click:t.inputContent}},[t._v(".")])])])},w=[],j=(a("c975"),a("fb6a"),a("d3b7"),a("25f0"),a("60a3")),_=function(t){Object(g["a"])(a,t);var e=Object(h["a"])(a);function a(){var t;return Object(b["a"])(this,a),t=e.apply(this,arguments),t.output=t.value.toString(),t}return Object(m["a"])(a,[{key:"inputContent",value:function(t){var e=t.target,a=e.textContent;16!==this.output.length&&("0"!==this.output?this.output.indexOf(".")>=0&&"."===a||(this.output+=a):"0123456789".indexOf(a)>=0?this.output=a:this.output+=a)}},{key:"remove",value:function(){1===this.output.length?this.output="0":this.output=this.output.slice(0,-1)}},{key:"clear",value:function(){this.output="0"}},{key:"ok",value:function(){var t=parseFloat(this.output);this.$emit("update:value",t),this.$emit("submit",t),this.output="0"}}]),a}(n["a"]);Object(y["a"])([Object(j["b"])()],_.prototype,"value",void 0),_=Object(y["a"])([j["a"]],_);var k=_,T=k,x=(a("f38b"),Object(i["a"])(T,O,w,!1,null,"97251066",null)),C=x.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},[a("div",{staticClass:"new"},[a("button",{on:{click:t.createTag}},[a("Icon",{attrs:{name:"plus"}}),t._v("新增标签")],1)]),a("ul",{staticClass:"current"},t._l(t.tagList,(function(e){return a("li",{key:e.id,class:{selected:t.selectedTags.indexOf(e)>=0},on:{click:function(a){return t.toggle(e)}}},[t._v(t._s(e.name)+" ")])})),0)])},$=[],S=(a("a434"),a("0f34")),M=a("2fe1"),E=function(t){Object(g["a"])(a,t);var e=Object(h["a"])(a);function a(){var t;return Object(b["a"])(this,a),t=e.apply(this,arguments),t.selectedTags=[],t}return Object(m["a"])(a,[{key:"created",value:function(){this.$store.commit("fetchTags")}},{key:"toggle",value:function(t){var e=this.selectedTags.indexOf(t);e>=0?this.selectedTags.splice(e,1):this.selectedTags.push(t),this.$emit("update:value",this.selectedTags)}},{key:"tagList",get:function(){return this.$store.state.tagList}}]),a}(Object(M["c"])(S["default"]));E=Object(y["a"])([j["a"]],E);var I=E,B=I,N=(a("d087"),Object(i["a"])(B,L,$,!1,null,"37619dbd",null)),P=N.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"formItem"},[a("span",{staticClass:"name"},[t._v(t._s(this.fieldName))]),a("input",{attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.onValueChanged(e.target.value)}}})])])},R=[],Y=function(t){Object(g["a"])(a,t);var e=Object(h["a"])(a);function a(){return Object(b["a"])(this,a),e.apply(this,arguments)}return Object(m["a"])(a,[{key:"onValueChanged",value:function(t){this.$emit("update:value",t)}}]),a}(n["a"]);Object(y["a"])([Object(j["b"])({default:""})],Y.prototype,"value",void 0),Object(y["a"])([Object(j["b"])({required:!0})],Y.prototype,"fieldName",void 0),Object(y["a"])([Object(j["b"])()],Y.prototype,"placeholder",void 0),Y=Object(y["a"])([j["a"]],Y);var D=Y,A=D,F=(a("22f2"),Object(i["a"])(A,z,R,!1,null,"2a0c3e10",null)),J=F.exports,H=(a("4de4"),a("d81d"),a("b0c0"),a("2f62"));function V(t){return JSON.parse(JSON.stringify(t))}var q=V,U=parseInt(window.localStorage.getItem("_idMax")||"0")||0;function G(){return U++,window.localStorage.setItem("_idMax",U.toString()),U}var K=G;n["a"].use(H["a"]);var Q=new H["a"].Store({state:{recordList:[],createRecordError:null,createTagError:null,tagList:[],currentTag:void 0},mutations:{setCurrentTag:function(t,e){t.currentTag=t.tagList.filter((function(t){return t.id===e}))[0]},updateTag:function(t,e){var a=e.id,n=e.name,r=t.tagList.map((function(t){return t.id}));if(r.indexOf(a)>=0){var c=t.tagList.map((function(t){return t.name}));if(c.indexOf(n)>=0)window.alert("标签名重复了");else{var s=t.tagList.filter((function(t){return t.id===a}))[0];s.name=n,Q.commit("saveTags")}}},removeTag:function(t,e){var a=-1;console.log("state.tagList"+t.tagList);for(var n=0;n<t.tagList.length;n++)if(t.tagList[n].id===e){a=n;break}a>=0?(t.tagList.splice(a,1),Q.commit("saveTags"),Kt.back()):window.alert("删除失败")},fetchRecords:function(t){t.recordList=JSON.parse(window.localStorage.getItem("recordList")||"[]")},createRecord:function(t,e){var a=q(e);a.createdAt=(new Date).toISOString(),t.recordList.push(a),Q.commit("saveRecords")},saveRecords:function(t){window.localStorage.setItem("recordList",JSON.stringify(t.recordList))},fetchTags:function(t){t.tagList=JSON.parse(window.localStorage.getItem("tagList")||"[]"),t.tagList&&0!==t.tagList.length||(Q.commit("createTag","服饰"),Q.commit("createTag","餐饮"),Q.commit("createTag","娱乐"),Q.commit("createTag","交通"),Q.commit("createTag","旅游"),Q.commit("createTag","住房"),Q.commit("createTag","日用"),Q.commit("createTag","水电"))},createTag:function(t,e){t.createTagError=null;var a=t.tagList.map((function(t){return t.name}));if(a.indexOf(e)>=0)t.createTagError=new Error("tag name duplicated");else{var n=K().toString();t.tagList.push({id:n,name:e}),Q.commit("saveTags")}},saveTags:function(t){window.localStorage.setItem("tagList",JSON.stringify(t.tagList))}}}),W=Q,X=(a("dca8"),Object.freeze([{text:"支出",value:"-"},{text:"收入",value:"+"}])),Z=function(){var t,e=this,a=e.$createElement,n=e._self._c||a;return n("ul",{staticClass:"tabs",class:(t={},t[e.classPrefix+"-tab"]=e.classPrefix,t)},e._l(e.dataSource,(function(t){return n("li",{key:t.value,staticClass:"tabs-item",class:e.liClass(t),on:{click:function(a){return e.select(t)}}},[e._v(e._s(t.text)+" ")])})),0)},tt=[],et=a("ade3"),at=function(t){Object(g["a"])(a,t);var e=Object(h["a"])(a);function a(){return Object(b["a"])(this,a),e.apply(this,arguments)}return Object(m["a"])(a,[{key:"liClass",value:function(t){var e;return e={},Object(et["a"])(e,this.classPrefix+"-tabs-item",this.classPrefix),Object(et["a"])(e,"selected",t.value===this.value),e}},{key:"select",value:function(t){this.$emit("update:value",t.value)}}]),a}(n["a"]);Object(y["a"])([Object(j["b"])({required:!0,type:Array})],at.prototype,"dataSource",void 0),Object(y["a"])([Object(j["b"])(String)],at.prototype,"value",void 0),Object(y["a"])([Object(j["b"])(String)],at.prototype,"classPrefix",void 0),at=Object(y["a"])([j["a"]],at);var nt=at,rt=nt,ct=(a("00a1"),Object(i["a"])(rt,Z,tt,!1,null,"012eda20",null)),st=ct.exports,ot=function(t){Object(g["a"])(a,t);var e=Object(h["a"])(a);function a(){var t;return Object(b["a"])(this,a),t=e.apply(this,arguments),t.recordTypeList=X,t.record={tags:[],notes:"",type:"-",amount:0},t}return Object(m["a"])(a,[{key:"created",value:function(){this.$store.commit("fetchRecords")}},{key:"onUpdateNotes",value:function(t){this.record.notes=t}},{key:"saveRecord",value:function(){if(!this.record.tags||0===this.record.tags.length)return window.alert("请至少选择一个标签");this.$store.commit("createRecord",this.record),null===this.$store.state.createRecordError&&(window.alert("已保存"),this.record.notes="")}},{key:"recordList",get:function(){return W.state.recordList}}]),a}(n["a"]);ot=Object(y["a"])([Object(j["a"])({components:{Tabs:st,FormItem:J,Tags:P,NumberPad:C}})],ot);var it=ot,ut=it,lt=(a("f1c1"),Object(i["a"])(ut,v,p,!1,null,"461207ec",null)),ft=lt.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"tags"},t._l(t.tags,(function(e){return a("router-link",{key:e.id,staticClass:"tag",attrs:{to:"/labels/edit/"+e.id}},[a("span",[t._v(t._s(e.name))]),a("Icon",{attrs:{name:"right"}})],1)})),1),a("div",{staticClass:"createTag-wrapper"},[a("Button",{staticClass:"createTag",on:{click:t.createTag}},[t._v("新建标签")])],1)])},vt=[],pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"button",on:{click:function(e){return t.$emit("click",e)}}},[t._t("default")],2)},bt=[],mt={name:"Button"},gt=mt,ht=(a("7a72"),Object(i["a"])(gt,pt,bt,!1,null,"70998701",null)),yt=ht.exports,Ot=(a("0f34"),function(t){Object(g["a"])(a,t);var e=Object(h["a"])(a);function a(){return Object(b["a"])(this,a),e.apply(this,arguments)}return Object(m["a"])(a,[{key:"beforeCreate",value:function(){this.$store.commit("fetchTags")}},{key:"createTag",value:function(){var t=window.prompt("请输入标签名");if(!t)return window.alert("标签名不能为空");this.$store.commit("createTag",t)}},{key:"tags",get:function(){return this.$store.state.tagList}}]),a}(Object(M["c"])(S["default"])));Ot=Object(y["a"])([Object(j["a"])({components:{Button:yt}})],Ot);var wt=Ot,jt=wt,_t=(a("299a"),Object(i["a"])(jt,dt,vt,!1,null,"10bbb71e",null)),kt=_t.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("Tabs",{attrs:{"class-prefix":"type","data-source":t.recordTypeList,value:t.type},on:{"update:value":function(e){t.type=e}}}),t.groupedList.length>0?a("ol",t._l(t.groupedList,(function(e,n){return a("li",{key:n},[a("h3",{staticClass:"title"},[t._v(t._s(t.beautify(e.title))+" "),a("span",[t._v("￥"+t._s(e.total))])]),a("ol",t._l(e.items,(function(e){return a("li",{key:e.id,staticClass:"record"},[a("span",[t._v(t._s(t.tagString(e.tags)))]),a("span",{staticClass:"notes"},[t._v(t._s(e.notes))]),a("span",[t._v("￥"+t._s(e.amount)+" ")])])})),0)])})),0):a("div",{staticClass:"noResult"},[t._v(" 目前没有相关记录 ")])],1)},xt=[],Ct=(a("a15b"),a("13d5"),a("5a0c")),Lt=a.n(Ct),$t=function(t){Object(g["a"])(a,t);var e=Object(h["a"])(a);function a(){var t;return Object(b["a"])(this,a),t=e.apply(this,arguments),t.type="-",t.recordTypeList=X,t}return Object(m["a"])(a,[{key:"tagString",value:function(t){return 0===t.length?"无":t.map((function(t){return t.name})).join("，")}},{key:"beautify",value:function(t){var e=Lt()(t),a=Lt()();return e.isSame(a,"day")?"今天":e.isSame(a.subtract(1,"day"),"day")?"昨天":e.isSame(a.subtract(2,"day"),"day")?"前天":e.isSame(a,"year")?e.format("MM月DD日"):e.format("YYYY年MM月DD日")}},{key:"beforeCreate",value:function(){this.$store.commit("fetchRecords")}},{key:"recordList",get:function(){return this.$store.state.recordList}},{key:"groupedList",get:function(){var t=this,e=this.recordList,a=q(e).filter((function(e){return e.type===t.type})).sort((function(t,e){return Lt()(e.createdAt).valueOf()-Lt()(t.createdAt).valueOf()}));if(0===a.length)return[];for(var n=[{title:Lt()(a[0].createdAt).format("YYYY-MM-DD"),items:[a[0]]}],r=1;r<a.length;r++){var c=a[r],s=n[n.length-1];Lt()(s.title).isSame(Lt()(c.createdAt),"day")?s.items.push(c):n.push({title:Lt()(c.createdAt).format("YYYY-MM-DD"),items:[c]})}return n.map((function(t){t.total=t.items.reduce((function(t,e){return t+e.amount}),0)})),n}}]),a}(n["a"]);$t=Object(y["a"])([Object(j["a"])({components:{Tabs:st}})],$t);var St=$t,Mt=St,Et=(a("316b"),a("376a"),Object(i["a"])(Mt,Tt,xt,!1,null,"0d47d2c1",null)),It=Et.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[t._v("当前页面不存在")]),a("div",[a("router-link",{attrs:{to:"/"}},[t._v("返回首页")])],1)])},Nt=[],Pt={name:"NotFound"},zt=Pt,Rt=Object(i["a"])(zt,Bt,Nt,!1,null,null,null),Yt=Rt.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"navBar"},[a("Icon",{staticClass:"leftIcon",attrs:{name:"left"},on:{click:t.goBack}}),a("span",{staticClass:"title"},[t._v("编辑标签")]),a("span",{staticClass:"rightIcon"})],1),a("div",{staticClass:"form-wrapper"},[a("FormItem",{attrs:{value:t.currentTag.name,"field-name":"标签名",placeholder:"请输入标签名"},on:{"update:value":t.update}})],1),a("div",{staticClass:"button-wrapper"},[a("Button",{on:{click:t.remove}},[t._v("删除标签")])],1)])},At=[],Ft=(a("ac1f"),a("5319"),function(t){Object(g["a"])(a,t);var e=Object(h["a"])(a);function a(){return Object(b["a"])(this,a),e.apply(this,arguments)}return Object(m["a"])(a,[{key:"created",value:function(){var t=this.$route.params.id;this.$store.commit("fetchTags"),this.$store.commit("setCurrentTag",t),this.currentTag||this.$router.replace("/404")}},{key:"update",value:function(t){this.currentTag&&this.$store.commit("updateTag",{id:this.currentTag.id,name:t})}},{key:"remove",value:function(){console.log("bbb"),this.currentTag&&this.$store.commit("removeTag",this.currentTag.id)}},{key:"goBack",value:function(){this.$router.back()}},{key:"currentTag",get:function(){return this.$store.state.currentTag}}]),a}(n["a"]));Ft=Object(y["a"])([Object(j["a"])({components:{Button:yt,FormItem:J}})],Ft);var Jt=Ft,Ht=Jt,Vt=(a("b673"),Object(i["a"])(Ht,Dt,At,!1,null,"52757f8e",null)),qt=Vt.exports;n["a"].use(d["a"]);var Ut=[{path:"/",redirect:"/money"},{path:"/money",component:ft},{path:"/labels",component:kt},{path:"/statistics",component:It},{path:"/labels/edit/:id",component:qt},{path:"*",component:Yt}],Gt=new d["a"]({routes:Ut}),Kt=Gt,Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("router-link",{staticClass:"item",attrs:{"active-class":"selected",to:"/money"}},[a("Icon",{attrs:{name:"money"}}),t._v(" 记账")],1),a("router-link",{staticClass:"item",attrs:{"active-class":"selected",to:"/labels"}},[a("Icon",{attrs:{name:"label"}}),t._v(" 标签")],1),a("router-link",{staticClass:"item",attrs:{"active-class":"selected",to:"/statistics"}},[a("Icon",{attrs:{name:"statistic"}}),t._v(" 统计")],1)],1)},Wt=[],Xt={name:"Nav"},Zt=Xt,te=(a("ab18"),Object(i["a"])(Zt,Qt,Wt,!1,null,"25054cf4",null)),ee=te.exports,ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-wrapper",class:t.classPrefix&&t.classPrefix+"-wrapper"},[a("div",{staticClass:"content",class:t.classPrefix&&t.classPrefix+"-content"},[t._t("default")],2),a("Nav")],1)},ne=[],re={props:["classPrefix"],name:"Layout"},ce=re,se=(a("d13b"),Object(i["a"])(ce,ae,ne,!1,null,"5d35708a",null)),oe=se.exports,ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"icon",on:{click:function(e){return t.$emit("click",e)}}},[a("use",{attrs:{"xlink:href":"#"+t.name}})])},ue=[],le=(a("4160"),a("159b"),a("ddb0"),function(t){return t.keys().forEach(t)});try{le(a("b422"))}catch(be){console.log(be)}var fe={props:["name"],name:"Icon"},de=fe,ve=(a("e790"),Object(i["a"])(de,ie,ue,!1,null,"420a5b36",null)),pe=ve.exports;n["a"].config.productionTip=!1,n["a"].component("Nav",ee),n["a"].component("Layout",oe),n["a"].component("Icon",pe),new n["a"]({router:Kt,store:W,render:function(t){return t(l)}}).$mount("#app")},cf44:function(t,e,a){"use strict";a.r(e);var n=a("e017"),r=a.n(n),c=a("21a1"),s=a.n(c),o=new r.a({id:"money",use:"money-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="money"><defs><style></style></defs><path d="M512 955.733c-98.68 0-183.996-35.26-253.56-104.84S153.6 696.013 153.6 597.333s35.277-183.995 104.84-253.56c43.47-43.468 92.997-73.574 148.003-90.06l-80.367-160.75a17.067 17.067 0 0115.257-24.696h341.334a17.033 17.033 0 0115.274 24.695L617.61 253.628c54.886 16.47 104.396 46.609 147.968 90.146C835.14 413.338 870.4 498.654 870.4 597.334s-35.26 183.978-104.84 253.559S610.68 955.733 512 955.733zm.427-686.421a16.964 16.964 0 01-10.24 3.738c-84.941 2.133-158.823 34.065-219.614 94.856-62.925 62.942-94.84 140.135-94.84 229.427s31.915 166.486 94.84 229.428C345.515 889.702 422.707 921.6 512 921.6s166.485-31.898 229.427-94.84c62.942-62.941 94.84-140.134 94.84-229.427s-31.898-166.485-94.84-229.427c-60.808-60.791-134.417-92.706-218.76-94.84a16.93 16.93 0 01-10.24-3.754zM368.947 102.4l71.492 143.002a370.961 370.961 0 0160.877-6.452 15.36 15.36 0 0111.11 3.738 16.043 16.043 0 0111.094-3.738c20.617.512 40.653 2.646 60.075 6.366L655.053 102.4H368.947z" /><path d="M512.853 838.827a34.133 34.133 0 01-34.133-34.134v-7.219c-19.115-5.495-36.335-15.855-51.439-30.942-22.272-22.272-33.946-49.63-34.748-81.322a34.15 34.15 0 0133.28-34.97c18.688-1.092 34.51 14.438 34.97 33.263.341 13.978 5.035 25.02 14.763 34.748 10.65 10.666 22.51 15.616 37.307 15.616 13.415 0 24.32-4.83 34.356-15.207 11.161-10.82 15.991-22.016 15.991-35.993 0-14.217-4.95-25.805-15.599-36.455-10.07-10.07-20.838-14.745-33.894-14.745h-2.56c-24.764 0-47.19-6.98-66.663-20.788a155.921 155.921 0 01-17.186-14.78c-23.074-23.073-34.765-50.994-34.765-83.046 0-33.228 11.554-61.593 34.356-85.162 15.394-14.917 32.392-25.003 50.978-30.43v-7.288a34.133 34.133 0 0168.266 0v7.288c18.518 5.41 35.175 15.445 49.75 30.02 22.8 22.784 34.782 50.142 35.567 81.289a34.15 34.15 0 01-33.246 35.003l-.888.017a34.116 34.116 0 01-34.099-33.263c-.358-13.414-5.308-24.456-15.599-34.747-10.086-10.104-21.384-14.78-35.618-14.78-14.455 0-26.163 4.813-36.847 15.155-9.54 9.882-14.353 21.59-14.353 36.045 0 14.507 4.676 25.532 14.746 35.584a85.356 85.356 0 009.147 7.936c7.168 5.069 15.821 7.68 26.454 7.68h2.56c31.488 0 59.119 11.708 82.176 34.765 23.603 23.603 35.584 52.104 35.584 84.702 0 32.358-12.442 61.508-35.994 84.275a114.04 114.04 0 01-48.486 30.123v7.645a34.133 34.133 0 01-34.134 34.117zm169.814-548.694H341.333a34.133 34.133 0 010-68.266h341.334a34.133 34.133 0 010 68.266z" /></symbol>'});s.a.add(o);e["default"]=o},d04a:function(t,e,a){},d087:function(t,e,a){"use strict";var n=a("4fbf"),r=a.n(n);r.a},d13b:function(t,e,a){"use strict";var n=a("a4c0"),r=a.n(n);r.a},e790:function(t,e,a){"use strict";var n=a("3874"),r=a.n(n);r.a},e976:function(t,e,a){},eb38:function(t,e,a){"use strict";a.r(e);var n=a("e017"),r=a.n(n),c=a("21a1"),s=a.n(c),o=new r.a({id:"plus",use:"plus-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="plus"><defs><style></style></defs><path d="M512 938.667c-235.264 0-426.667-191.424-426.667-426.645C85.333 276.758 276.736 85.334 512 85.334c235.243 0 426.667 191.424 426.667 426.688 0 235.221-191.424 426.645-426.667 426.645zM512 128c-211.733 0-384 172.267-384 384.021C128 723.754 300.267 896 512 896s384-172.245 384-383.979C896 300.266 723.733 128 512 128zm-21.333 149.333h42.667v469.333h-42.667V277.333zM277.333 490.667h469.333v42.667H277.333v-42.667z" /></symbol>'});s.a.add(o);e["default"]=o},f1c1:function(t,e,a){"use strict";var n=a("d04a"),r=a.n(n);r.a},f38b:function(t,e,a){"use strict";var n=a("b421"),r=a.n(n);r.a}});
//# sourceMappingURL=app.867e8131.js.map