(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21ab7f0b"],{"0139":function(e,t,n){"use strict";n("8267")},"446b":function(e,t,n){},5666:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function o(e,t,n,o,a,i){var r=Object(c["resolveComponent"])("MyClient"),l=Object(c["resolveComponent"])("AdminFrame");return Object(c["openBlock"])(),Object(c["createBlock"])(l,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(r)]})),_:1})}var a=function(e){return Object(c["pushScopeId"])("data-v-c915bc5e"),e=e(),Object(c["popScopeId"])(),e},i={class:"settings-index-page"},r=a((function(){return Object(c["createElementVNode"])("h1",null,"应用程序",-1)}));function l(e,t,n,o,a,l){var d=Object(c["resolveComponent"])("MyToolbar"),u=Object(c["resolveComponent"])("MySearch"),s=Object(c["resolveComponent"])("MyPager"),b=Object(c["resolveComponent"])("MyTable"),h=Object(c["resolveComponent"])("MyEdit");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",i,[r,Object(c["createVNode"])(d,{onAction:l.handleAction},null,8,["onAction"]),Object(c["createVNode"])(u,{class:"search-box"}),Object(c["createVNode"])(s,{class:"pager-box"}),Object(c["createVNode"])(b,{onAction:l.handleAction},null,8,["onAction"]),Object(c["createVNode"])(h,{method:"POST",enabled:a.theAddEnabled,"onUpdate:enabled":t[0]||(t[0]=function(e){return a.theAddEnabled=e}),item:a.theAddItem,"onUpdate:item":t[1]||(t[1]=function(e){return a.theAddItem=e})},null,8,["enabled","item"]),Object(c["createVNode"])(h,{method:"PUT",enabled:a.theEditEnabled,"onUpdate:enabled":t[2]||(t[2]=function(e){return a.theEditEnabled=e}),item:a.theEditItem,"onUpdate:item":t[3]||(t[3]=function(e){return a.theEditItem=e})},null,8,["enabled","item"])])}n("b0c0");var d=["src"],u={class:"operation-buttons"},s=Object(c["createTextVNode"])("详情"),b=Object(c["createTextVNode"])("编辑"),h=Object(c["createTextVNode"])("移除");function m(e,t,n,o,a,i){var r=Object(c["resolveComponent"])("el-table-column"),l=Object(c["resolveComponent"])("el-button"),m=Object(c["resolveComponent"])("el-table");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(m,{data:i.items},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(r,{label:"",width:"48px"},{default:Object(c["withCtx"])((function(e){return[Object(c["createElementVNode"])("img",{class:"item-icon-img",src:e.row.icon},null,8,d)]})),_:1}),Object(c["createVNode"])(r,{label:"名称",prop:"name"}),Object(c["createVNode"])(r,{label:"标题",prop:"title"}),Object(c["createVNode"])(r,{label:"状态",prop:"state"}),Object(c["createVNode"])(r,{label:"操作"},{default:Object(c["withCtx"])((function(e){return[Object(c["createElementVNode"])("div",u,[Object(c["createVNode"])(l,{type:"primary",link:"",onClick:function(t){return i.handleClickItemDetail(e.row)}},{default:Object(c["withCtx"])((function(){return[s]})),_:2},1032,["onClick"]),Object(c["createVNode"])(l,{type:"primary",link:"",onClick:function(t){return i.handleClickEditItem(e.row)}},{default:Object(c["withCtx"])((function(){return[b]})),_:2},1032,["onClick"]),Object(c["createVNode"])(l,{type:"danger",link:"",onClick:function(t){return i.handleClickRemoveItem(e.row)}},{default:Object(c["withCtx"])((function(){return[h]})),_:2},1032,["onClick"])])]})),_:1})]})),_:1},8,["data"])])}var p=n("6b59"),f={name:"settings-executables-table",computed:{items:function(){return this.$store.getters["executable/currentPageItems"]}},methods:{handleClickRemoveItem:function(e){var t=this,n="移除应用程序",c="确定要移除 ["+e.name+"] 这个应用程序吗？",o="该操作不会把磁盘上安装的程序卸载或删除，仅将对它的引用从WPM数据库中移除。";p["a"].confirm(c+o,n,{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.removeItem(e)})).catch((function(){}))},handleClickEditItem:function(e){var t="edit",n={name:t,item:e};this.$emit("action",n)},handleClickItemDetail:function(e){var t="detail",n={name:t,item:e};this.$emit("action",n)},removeItem:function(e){var t=e.id;this.$store.dispatch("executable/remove",t)}}},O=(n("7a4e"),n("6b0d")),j=n.n(O);const C=j()(f,[["render",m],["__scopeId","data-v-58bab15c"]]);var v=C;function V(e,t,n,o,a,i){var r=Object(c["resolveComponent"])("el-pagination");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(r,{"current-page":a.currentPage,"onUpdate:current-page":t[0]||(t[0]=function(e){return a.currentPage=e}),"page-size":a.pageSize,"onUpdate:page-size":t[1]||(t[1]=function(e){return a.pageSize=e}),"page-sizes":[5,10,20,50,100,200,500],background:a.background,layout:"total, sizes, prev, pager, next",total:i.theCountItemsTotal,onSizeChange:i.handleSizeChange,onCurrentChange:i.handleCurrentChange},null,8,["current-page","page-size","background","total","onSizeChange","onCurrentChange"])])}var g={name:"settings-executables-pager",computed:{items:function(){return[]},theCountItemsTotal:function(){return this.$store.getters["executable/total"]}},data:function(){return{currentPage:1,pageSize:10,background:!1}},methods:{handleSizeChange:function(e){var t=e;this.$store.commit("executable/update",{size:t})},handleCurrentChange:function(e){var t=e-1;this.$store.commit("executable/update",{index:t})},init:function(){var e={index:this.currentPage-1,size:this.pageSize,filter:""};this.$store.commit("executable/update",e)}},mounted:function(){this.init()}};const x=j()(g,[["render",V]]);var k=x,N=n("f6f2"),w={name:"settings-executables-table",computed:{},data:function(){return{text:""}},watch:{text:function(e){this.$store.commit("executable/update",{filter:e})}}},y=Object.assign(w,{setup:function(e){return function(e,t){var n=Object(c["resolveComponent"])("el-icon"),o=Object(c["resolveComponent"])("el-button"),a=Object(c["resolveComponent"])("el-input");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(a,{modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=function(e){return Object(c["isRef"])(text)?text.value=e:null}),clearable:"",placeholder:"请输入要查找的内容"},{append:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(o,{title:"查找"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(n,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(N["i"]))]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])])}}});const E=y;var _=E,I={class:"toolbar"},T={name:"settings-local-repositories-toolbar",data:function(){return{}},methods:{fetch:function(){this.$store.dispatch("executable/fetch",{})},handleClickAdd:function(){var e={name:"add"};this.$emit("action",e)},handleClickRefresh:function(){this.fetch()}},mounted:function(){this.fetch()}},A=Object.assign(T,{setup:function(e){return function(e,t){var n=Object(c["resolveComponent"])("el-icon"),o=Object(c["resolveComponent"])("el-button");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",I,[Object(c["createVNode"])(o,{onClick:e.handleClickRefresh,title:"刷新"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(n,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(N["h"]))]})),_:1})]})),_:1},8,["onClick"]),Object(c["createVNode"])(o,{onClick:e.handleClickAdd,title:"添加本地仓库"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(n,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(N["g"]))]})),_:1})]})),_:1},8,["onClick"])])}}});n("d713");const B=j()(A,[["__scopeId","data-v-1d69e6dd"]]);var M=B,z=(n("a4d3"),n("e01a"),Object(c["createTextVNode"])("查找")),P={class:"tip-bad-path"},S=Object(c["createTextVNode"])("保存"),U=Object(c["createTextVNode"])("取消");function $(e,t,n,o,a,i){var r=Object(c["resolveComponent"])("el-button"),l=Object(c["resolveComponent"])("el-input"),d=Object(c["resolveComponent"])("el-form-item"),u=Object(c["resolveComponent"])("el-form"),s=Object(c["resolveComponent"])("el-dialog");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(s,{modelValue:a.displayDialog,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.displayDialog=e}),title:i.theDialogTitle},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d,{label:"路径"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{modelValue:a.item1.path,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.item1.path=e})},{append:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(r,{onClick:i.handleClickFind},{default:Object(c["withCtx"])((function(){return[z]})),_:1},8,["onClick"])]})),_:1},8,["modelValue"]),Object(c["withDirectives"])(Object(c["createElementVNode"])("div",P," 错误的路径！ ",512),[[c["vShow"],a.displayTipForBadPath]])]})),_:1}),Object(c["createVNode"])(d,{label:"名称"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{modelValue:a.item1.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.item1.name=e})},null,8,["modelValue"])]})),_:1}),Object(c["createVNode"])(d,{label:"标题"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{modelValue:a.item1.title,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.item1.title=e})},null,8,["modelValue"])]})),_:1}),Object(c["createVNode"])(d,{label:"说明"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{type:"textarea",modelValue:a.item1.description,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.item1.description=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(r,{type:"success",onClick:i.handleClickOK},{default:Object(c["withCtx"])((function(){return[S]})),_:1},8,["onClick"]),Object(c["createVNode"])(r,{type:"default",onClick:i.handleClickCancel},{default:Object(c["withCtx"])((function(){return[U]})),_:1},8,["onClick"])])]})),_:1},8,["modelValue","title"])])}var D={name:"settings-executables-item-add",computed:{isModeAdd:function(){var e=(this.method+"").toUpperCase();return"POST"==e},isModeEdit:function(){var e=(this.method+"").toUpperCase();return"PUT"==e},theDialogTitle:function(){return this.isModeAdd?"添加应用":"修改应用"}},data:function(){return{displayDialog:!1,displayTipForBadPath:!1,item1:{id:0,name:"",title:"",path:"",description:""}}},methods:{handleClickCancel:function(){this.displayDialog=!1},handleClickOK:function(){var e=this,t=this.item1,n="executable/";this.isModeAdd?n+="insert":this.isModeEdit&&(n+="update"),this.$store.dispatch(n,t).then((function(){e.displayDialog=!1}))},handleClickFind:function(){var e=this,t=this.item1;this.$store.dispatch("executable/prepareInsert",t).then((function(t){e.handleFindResult(t.data)}))},handleFindResult:function(e){var t=e.executables,n=t[0];if(n.ready&&n.size>0&&""!=n.sha256sum)return this.item1.name=n.name,this.item1.title=n.title,this.item1.path=n.path,void(this.displayTipForBadPath=!1);this.displayTipForBadPath=!0}},mounted:function(){},props:{enabled:Boolean,item:Object,method:String},watch:{displayDialog:function(e){this.$emit("update:enabled",e)},enabled:function(e){this.displayDialog=e},item:function(e){this.item1=e}}};n("0139");const F=j()(D,[["render",$],["__scopeId","data-v-1f577bc0"]]);var R=F,J={name:"settings-executables",components:{MyTable:v,MyPager:k,MySearch:_,MyToolbar:M,MyEdit:R},data:function(){return{theAddItem:{},theAddEnabled:!1,theEditItem:{},theEditEnabled:!1}},methods:{handleAction:function(e){var t=e.name;"edit"==t?this.edit(e.item):"add"==t&&this.add()},add:function(){this.theAddItem={},this.theAddEnabled=!0},edit:function(e){this.theEditItem=e,this.theEditEnabled=!0}}};n("cc85");const K=j()(J,[["render",l],["__scopeId","data-v-c915bc5e"]]);var W=K,q={name:"settings-executables",components:{MyClient:W}};const G=j()(q,[["render",o]]);t["default"]=G},"7a4e":function(e,t,n){"use strict";n("8aa2")},"7d2b":function(e,t,n){},8267:function(e,t,n){},"8aa2":function(e,t,n){},cc85:function(e,t,n){"use strict";n("7d2b")},d713:function(e,t,n){"use strict";n("446b")}}]);
//# sourceMappingURL=chunk-21ab7f0b.72ff2c2f.js.map