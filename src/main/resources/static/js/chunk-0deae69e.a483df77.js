(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0deae69e"],{2463:function(e,t,n){"use strict";n("dff5")},"2b06":function(e,t,n){},"396b":function(e,t,n){"use strict";n("c54f")},"589d":function(e,t,n){"use strict";n("2b06")},a55b:function(e,t,n){"use strict";var o=n("7a23"),c=function(e){return Object(o["pushScopeId"])("data-v-7945e7a6"),e=e(),Object(o["popScopeId"])(),e},a={class:"settings-index-page"},r=c((function(){return Object(o["createElementVNode"])("h1",null,"本地仓库",-1)}));function i(e,t,n,c,i,l){var u=Object(o["resolveComponent"])("MyToolbar"),d=Object(o["resolveComponent"])("MySearch"),s=Object(o["resolveComponent"])("MyPager"),b=Object(o["resolveComponent"])("MyTable"),m=Object(o["resolveComponent"])("MyEdit");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[r,Object(o["createVNode"])(u),Object(o["createVNode"])(d,{class:"search-box"}),Object(o["createVNode"])(s,{class:"pager-box"}),Object(o["createVNode"])(b,{onAction:l.handleAction},null,8,["onAction"]),Object(o["createVNode"])(m,{modelValue:i.displayEditDialog,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.displayEditDialog=e}),item:i.theEditItem},null,8,["modelValue","item"])])}n("b0c0");var l={class:"operation-buttons"},u=Object(o["createTextVNode"])("详情"),d=Object(o["createTextVNode"])("编辑"),s=Object(o["createTextVNode"])("移除");function b(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("el-table-column"),b=Object(o["resolveComponent"])("el-button"),m=Object(o["resolveComponent"])("el-table");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(m,{data:r.items},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{label:"名称",prop:"name",sortable:""}),Object(o["createVNode"])(i,{label:"路径",prop:"path",sortable:""}),Object(o["createVNode"])(i,{label:"状态",prop:"state",sortable:""}),Object(o["createVNode"])(i,{label:"操作"},{default:Object(o["withCtx"])((function(e){return[Object(o["createElementVNode"])("div",l,[Object(o["createVNode"])(b,{type:"primary",link:"",onClick:function(t){return r.handleClickItemDetail(e.row)}},{default:Object(o["withCtx"])((function(){return[u]})),_:2},1032,["onClick"]),Object(o["createVNode"])(b,{type:"primary",link:"",onClick:function(t){return r.handleClickEditItem(e.row)}},{default:Object(o["withCtx"])((function(){return[d]})),_:2},1032,["onClick"]),Object(o["createVNode"])(b,{type:"danger",link:"",onClick:function(t){return r.handleClickRemoveItem(e.row)}},{default:Object(o["withCtx"])((function(){return[s]})),_:2},1032,["onClick"])])]})),_:1})]})),_:1},8,["data"])])}var m=n("6b59"),p={name:"settings-local-repositories-table",computed:{items:function(){return this.$store.getters["local_repository/currentPageItems"]}},methods:{handleClickEditItem:function(e){var t="edit",n={name:t,item:e};this.$emit("action",n)},handleClickItemDetail:function(e){var t="detail",n={name:t,item:e};this.$emit("action",n)},handleClickRemoveItem:function(e){var t=this,n="移除仓库",o="确定要移除 ["+e.name+"] 这个仓库吗？",c="该操作不会把磁盘上的仓库数据删除，仅将对它的引用从WPM数据库中移除。";m["a"].confirm(o+c,n,{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.removeItem(e)})).catch((function(){}))},removeItem:function(e){this.$store.dispatch("local_repository/remove",e)}}},f=(n("c0ed"),n("6b0d")),O=n.n(f);const j=O()(p,[["render",b],["__scopeId","data-v-1bcad7aa"]]);var h=j;function C(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("el-pagination");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(i,{"current-page":a.currentPage,"onUpdate:current-page":t[0]||(t[0]=function(e){return a.currentPage=e}),"page-size":a.pageSize,"onUpdate:page-size":t[1]||(t[1]=function(e){return a.pageSize=e}),"page-sizes":[5,10,20,50,100,200,500],background:a.background,layout:"total, sizes, prev, pager, next",total:r.theCountItemsTotal,onSizeChange:r.handleSizeChange,onCurrentChange:r.handleCurrentChange},null,8,["current-page","page-size","background","total","onSizeChange","onCurrentChange"])])}var V={name:"settings-local-repositories-table",computed:{items:function(){return[]},theCountItemsTotal:function(){return this.$store.getters["local_repository/total"]}},data:function(){return{currentPage:1,pageSize:10,background:!1}},methods:{handleSizeChange:function(e){var t=e;this.$store.commit("local_repository/update",{size:t})},handleCurrentChange:function(e){var t=e-1;this.$store.commit("local_repository/update",{index:t})}},mounted:function(){this.handleCurrentChange(this.currentPage),this.handleSizeChange(this.pageSize)}};const g=O()(V,[["render",C]]);var v=g,N=n("f6f2"),k={name:"settings-local-repositories-table",computed:{},data:function(){return{text:""}},watch:{text:function(e){this.$store.commit("local_repository/update",{filter:e})}}},x=Object.assign(k,{setup:function(e){return function(e,t){var n=Object(o["resolveComponent"])("el-icon"),c=Object(o["resolveComponent"])("el-button"),a=Object(o["resolveComponent"])("el-input");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(a,{modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=function(e){return Object(o["isRef"])(text)?text.value=e:null}),clearable:"",placeholder:"请输入要查找的内容"},{append:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(c,{title:"查找"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(Object(o["unref"])(N["i"]))]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])])}}});const y=x;var _=y,w=function(e){return Object(o["pushScopeId"])("data-v-af56694a"),e=e(),Object(o["popScopeId"])(),e},I={class:"mode-list"},E=w((function(){return Object(o["createElementVNode"])("div",{class:"mode-item-icon"},[Object(o["createElementVNode"])("img",{class:"mode-item-icon-img",src:"/image/icon_repo.png"})],-1)})),M={class:"mode-item-label"},S=w((function(){return Object(o["createElementVNode"])("span",{class:"mode-item-label-text"}," 导入单个仓库 ",-1)})),B=w((function(){return Object(o["createElementVNode"])("div",{class:"mode-item-icon"},[Object(o["createElementVNode"])("img",{class:"mode-item-icon-img",src:"/image/icon_repos.png"})],-1)})),D={class:"mode-item-label"},z=w((function(){return Object(o["createElementVNode"])("span",{class:"mode-item-label-text"}," 批量导入仓库 ",-1)})),T={name:"settings-insert-local-repo-mode-dialog",data:function(){return{}},methods:{importMulti:function(){this.$router.push("/import-local-repositories")},importOne:function(){this.$router.push("/import-local-repository")},close:function(){this.updateModelValue(!1)}},props:{}},$=Object.assign(T,{setup:function(e){return function(e,t){var n=Object(o["resolveComponent"])("el-icon"),c=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createBlock"])(c,{title:"请选择"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",I,[Object(o["createElementVNode"])("div",{class:"mode-item",onClick:t[0]||(t[0]=function(){return e.importOne&&e.importOne.apply(e,arguments)})},[E,Object(o["createElementVNode"])("div",M,[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(Object(o["unref"])(N["g"]))]})),_:1}),S])]),Object(o["createElementVNode"])("div",{class:"mode-item",onClick:t[1]||(t[1]=function(){return e.importMulti&&e.importMulti.apply(e,arguments)})},[B,Object(o["createElementVNode"])("div",D,[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(Object(o["unref"])(N["g"]))]})),_:1}),Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(Object(o["unref"])(N["g"]))]})),_:1}),z])])])]})),_:1})}}});n("396b");const U=O()($,[["__scopeId","data-v-af56694a"]]);var P=U,A={class:"toolbar"},R={name:"settings-local-repositories-toolbar",components:{MyInsertModeDialog:P},data:function(){return{displayInsertModeDialog:!1}},methods:{fetch:function(){this.$store.dispatch("local_repository/fetch",{})},handleClickAdd:function(){this.displayInsertModeDialog=!0},handleClickRefresh:function(){this.fetch()}},mounted:function(){this.fetch()}},J=Object.assign(R,{setup:function(e){return function(e,t){var n=Object(o["resolveComponent"])("el-icon"),c=Object(o["resolveComponent"])("el-button");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",A,[Object(o["createVNode"])(c,{onClick:e.handleClickRefresh,title:"刷新"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(Object(o["unref"])(N["h"]))]})),_:1})]})),_:1},8,["onClick"]),Object(o["createVNode"])(c,{onClick:e.handleClickAdd,title:"添加本地仓库"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(Object(o["unref"])(N["g"]))]})),_:1})]})),_:1},8,["onClick"]),Object(o["createVNode"])(P,{modelValue:e.displayInsertModeDialog,"onUpdate:modelValue":t[0]||(t[0]=function(e){return Object(o["isRef"])(displayInsertModeDialog)?displayInsertModeDialog.value=e:null})},null,8,["modelValue"])])}}});n("589d");const W=O()(J,[["__scopeId","data-v-87cbbbea"]]);var q=W,F=(n("a4d3"),n("e01a"),Object(o["createTextVNode"])("保存")),G=Object(o["createTextVNode"])("取消");function H(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("el-input"),l=Object(o["resolveComponent"])("el-form-item"),u=Object(o["resolveComponent"])("el-form"),d=Object(o["resolveComponent"])("el-button"),s=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createBlock"])(s,{title:"修改仓库",modelValue:n.modelValue,"onUpdate:modelValue":r.updateModelValue},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,{"label-width":"120px"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(l,{label:"名称"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{modelValue:a.item1.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.item1.name=e})},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(l,{label:"路径"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{modelValue:a.item1.path,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.item1.path=e})},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(l,{label:"路径（工作区）"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(a.item1.workspace_path),1)]})),_:1}),Object(o["createVNode"])(l,{label:"路径（库）"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(a.item1.repository_path),1)]})),_:1}),Object(o["createVNode"])(l,{label:"描述"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{type:"textarea",modelValue:a.item1.description,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.item1.description=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(d,{type:"success",onClick:r.handleClickSave},{default:Object(o["withCtx"])((function(){return[F]})),_:1},8,["onClick"]),Object(o["createVNode"])(d,{type:"default",onClick:r.handleClickCancel},{default:Object(o["withCtx"])((function(){return[G]})),_:1},8,["onClick"])])]})),_:1},8,["modelValue","onUpdate:modelValue"])}n("e9c4");var K={name:"local-repo-item-edit",data:function(){return{item1:{}}},methods:{updateModelValue:function(e){this.$emit("update:modelValue",e)},handleClickSave:function(){var e=this,t=this.item1;this.$store.dispatch("local_repository/update",t).then((function(){e.close()}))},handleClickCancel:function(){this.close()},close:function(){this.updateModelValue(!1)}},props:{modelValue:Boolean,item:Object},watch:{item:function(e){var t=JSON.stringify(e);this.item1=JSON.parse(t)}}};const L=O()(K,[["render",H]]);var Q=L,X={name:"settings-local-repositories",components:{MyTable:h,MyPager:v,MySearch:_,MyToolbar:q,MyEdit:Q},data:function(){return{displayEditDialog:!1,theEditItem:{}}},methods:{handleAction:function(e){var t=e.name;"edit"==t?this.editItem(e.item):"detail"==t?this.openItemDetail(e.item):console.warn("unsupported action:"+t)},editItem:function(e){this.theEditItem=e,this.displayEditDialog=!0},openItemDetail:function(e){this.nop(e)},nop:function(){}}};n("2463");const Y=O()(X,[["render",i],["__scopeId","data-v-7945e7a6"]]);t["a"]=Y},c0ed:function(e,t,n){"use strict";n("f5c8")},c54f:function(e,t,n){},dff5:function(e,t,n){},f5c8:function(e,t,n){}}]);
//# sourceMappingURL=chunk-0deae69e.a483df77.js.map