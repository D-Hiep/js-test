(function(t){function e(e){for(var r,s,c=e[0],p=e[1],a=e[2],u=0,l=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&l.push(o[s][0]),o[s]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(t[r]=p[r]);d&&d(e);while(l.length)l.shift()();return n.push.apply(n,a||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],r=!0,c=1;c<i.length;c++){var p=i[c];0!==o[p]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=i[0]))}return t}var r={},o={app:0},n=[];function s(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=r,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/js-test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var d=p;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"3aff":function(t,e,i){},"4ee2":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"management"},[i("div",{staticClass:"sidebar",class:{"open-sidebar":t.toggleSidebar}},[i("h2",[t._v("Milk Tea Store")]),i("ul",{staticClass:"stores"},t._l(t.stores,(function(e,r){return i("li",{key:r,class:{active:t.currentStore.id==e.id},on:{click:function(i){return t.changedStore(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0),i("button",{staticClass:"btn btn-toggle",on:{click:function(e){t.toggleSidebar=!1}}},[t._v("X")])]),i("div",{staticClass:"main"},[i("h2",[t._v(t._s(t.currentStore.name)+" Menu")]),i("button",{staticClass:"btn btn-toggle open",on:{click:function(e){t.toggleSidebar=!0}}},[i("b-icon",{attrs:{icon:"menu-button-fill","aria-hidden":"true"}})],1),i("div",{staticClass:"filter"},[i("button",{staticClass:"btn btn-primary",on:{click:t.filterProducts}},[t._v("Filter")]),i("div",{staticClass:"filter-Sort"},[i("p",[t._v("Sort By")]),i("div",[i("p",{on:{click:function(e){t.filter.openSelectFilter=!t.filter.openSelectFilter}}},[i("span",[t._v(t._s(t.filter.sortBy))]),i("span",{staticClass:"icon-open",class:{"icon-rotate":t.filter.openSelectFilter}},[i("b-icon",{attrs:{icon:"triangle-fill"}})],1)]),i("ul",{class:{open:t.filter.openSelectFilter}},[i("li",{on:{click:function(e){t.selectedSortBy("Name(Asc)")}}},[t._v("Name (asc)")]),i("li",{on:{click:function(e){t.selectedSortBy("Name(Desc)")}}},[t._v("Name (desc)")]),i("li",{on:{click:function(e){t.selectedSortBy("Price(Asc)")}}},[t._v("Price (asc)")]),i("li",{on:{click:function(e){t.selectedSortBy("Price(Desc)")}}},[t._v("Price (desc)")])])])])]),i("div",{staticClass:"filter-topping"},[i("h4",[t._v("Toppings: ")]),i("div",{staticClass:"select-topping"},t._l(t.listTopping,(function(e){return i("div",{key:e.id},[i("label",{staticClass:"checkbox-topping",attrs:{for:"topping"+e.id}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.filterToppings,expression:"filter.filterToppings"}],attrs:{type:"checkbox",id:"topping"+e.id},domProps:{value:e.id,checked:Array.isArray(t.filter.filterToppings)?t._i(t.filter.filterToppings,e.id)>-1:t.filter.filterToppings},on:{change:function(i){var r=t.filter.filterToppings,o=i.target,n=!!o.checked;if(Array.isArray(r)){var s=e.id,c=t._i(r,s);o.checked?c<0&&t.$set(t.filter,"filterToppings",r.concat([s])):c>-1&&t.$set(t.filter,"filterToppings",r.slice(0,c).concat(r.slice(c+1)))}else t.$set(t.filter,"filterToppings",n)}}}),i("span",{staticClass:"checkbox-custom"}),i("span",[t._v(t._s(e.name))])])])})),0)]),i("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.productsFilter,expression:"productsFilter != 0"}],staticClass:"products row"},t._l(t.productsFilter,(function(t){return i("div",{key:t.id,staticClass:"col-6 col-sm-4 col-lg-3 card-product"},[i("card",{attrs:{product:t}})],1)})),0),i("p",{directives:[{name:"show",rawName:"v-show",value:0==t.productsFilter,expression:"productsFilter == 0"}],staticClass:"no-item"},[t._v("Hiện chưa có sản phẩm!")])])])])},n=[],s=(i("b0c0"),i("d3b7"),i("159b"),i("4de4"),i("caad"),i("2532"),i("4e82"),i("89a8")),c=i("e3e4"),p=i("6a8c"),a=i("b88e"),d=i("64b6"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("h3",{staticClass:"product-code"},[t._v(t._s(t._f("addPrefixId")(t.product.id,"MT")))]),i("h2",{staticClass:"product-name"},[t._v(t._s(t.product.name))]),i("div",{staticClass:"split"}),i("p",[i("span",[t._v("Toppings:")]),t._l(t.productToppings,(function(e){return i("span",{key:e,staticClass:"toppings"},[t._v(t._s(e))])}))],2),i("div",{staticClass:"product-info"},[i("p",{staticClass:"trending-tag"},[t._v("Trending")]),i("p",{staticClass:"product-price"},[t._v(t._s(t._f("addUnit")(t.product.price,"$")))])])])},l=[],f=(i("99af"),{props:["product"],data:function(){return{productToppings:[]}},mounted:function(){this.getToppings()},methods:{getToppings:function(){var t=this,e=d.toppings;this.product.toppingsId.forEach((function(i){e.forEach((function(e){e.id==i&&t.productToppings.push(e.name)}))}))}},filters:{addUnit:function(t,e){return"".concat(e," ").concat(t)},addPrefixId:function(t,e){return"".concat(e,"-").concat(t)}}}),h=f,g=(i("6d24"),i("2877")),m=Object(g["a"])(h,u,l,!1,null,"d3d939c6",null),v=m.exports,b={name:"App",data:function(){return{products:[],stores:[],storeProducts:[],productTopping:[],listTopping:[],currentStore:{id:null,name:"",products:[]},productsFilter:[],filter:{openSelectFilter:!1,sortBy:"Name(Asc)",filterToppings:[]},toggleSidebar:!1,temp:{status:!1,products:[]}}},components:{Card:v},mounted:function(){this.loadDataJson()},methods:{loadDataJson:function(){this.stores=p.stores,this.products=s.products,this.storeProducts=c.shopProducts,this.productTopping=a.productToppings,this.listTopping=d.toppings;var t=this.stores[0];this.currentStore.id=t.id,this.currentStore.name=t.name,this.getIdProductsOfCurrentShop(this.currentStore.id)},getIdProductsOfCurrentShop:function(t){var e=this;this.currentStore.products=[],this.storeProducts.forEach((function(i){i.shop==t&&e.currentStore.products.push(i.product)})),this.productsOfCurrentShop()},productsOfCurrentShop:function(){var t=this;this.productsFilter=this.products.filter((function(e){return t.currentStore.products.includes(e.id)})),this.productsFilter.forEach((function(e){e.toppingsId=[],t.productTopping.forEach((function(t){t.product==e.id&&e.toppingsId.push(t.topping)}))}))},changedStore:function(t){this.currentStore.id=t.id,this.currentStore.name=t.name,this.getIdProductsOfCurrentShop(t.id),this.toggleSidebar=!1,this.filter.filterToppings=[]},selectedSortBy:function(t){this.filter.sortBy=t,this.filter.openSelectFilter=!1},filterProducts:function(){var t=this,e=-1,i=1;"Name(Desc)"!=this.filter.sortBy&&"Price(Desc)"!=this.filter.sortBy||(e=1,i=-1),"Name(Asc)"==this.filter.sortBy||"Name(Desc)"==this.filter.sortBy?this.productsFilter.sort((function(t,r){return t.name<r.name?e:t.name>r.name?i:0})):this.productsFilter.sort((function(t,r){return t.price<r.price?e:t.price>r.price?i:0})),0!==this.filter.filterToppings.length?(this.temp.status?this.productsFilter=this.temp.products:(this.temp.status=!0,this.temp.products=this.productsFilter),this.productsFilter=this.productsFilter.filter((function(e){for(var i,r=0;r<e.toppingsId.length;r++){if(t.filter.filterToppings.includes(e.toppingsId[r]))return!0;i=!1}return i}))):this.temp.status&&(this.productsFilter=this.temp.products)}}},S=b,_=(i("9d8d"),Object(g["a"])(S,o,n,!1,null,"26243171",null)),y=_.exports,T=i("5f5b"),k=i("b1e0");i("f9e3"),i("2dd8"),i("4ee2"),i("3aff");r["default"].config.productionTip=!1,r["default"].use(T["a"]),r["default"].use(k["a"]),document.title="Bài test",new r["default"]({render:function(t){return t(y)}}).$mount("#app")},"64b6":function(t){t.exports=JSON.parse('{"toppings":[{"id":1,"name":"Milk foam"},{"id":2,"name":"White pearl"},{"id":3,"name":"Pearl"},{"id":4,"name":"Aloe"}]}')},"6a8c":function(t){t.exports=JSON.parse('{"stores":[{"id":1,"name":"Ding Tea"},{"id":2,"name":"Tocotoco"},{"id":3,"name":"Gongcha"},{"id":4,"name":"LeeTee"}]}')},"6d24":function(t,e,i){"use strict";i("d6a8")},"89a8":function(t){t.exports=JSON.parse('{"products":[{"id":1,"name":"Royal Milk Tea","price":4.8,"toppings":"Milk foam,white pearl"},{"id":2,"name":"Green Milk Tea","price":4.6,"toppings":"pearl"},{"id":3,"name":"Oolong Milk Tea","price":5.1,"toppings":"Pearl, milk foam"},{"id":4,"name":"Blueberry Milk Tea","price":5.1,"toppings":"Pearl, milk foam"},{"id":5,"name":"Mango Milk Tea","price":5.1,"toppings":"Aloe, Pearl"}]}')},"9d8d":function(t,e,i){"use strict";i("c8c8")},b88e:function(t){t.exports=JSON.parse('{"productToppings":[{"id":1,"topping":1,"product":1},{"id":2,"topping":1,"product":2},{"id":3,"topping":2,"product":2},{"id":4,"topping":1,"product":3},{"id":5,"topping":3,"product":3},{"id":6,"topping":2,"product":1},{"id":7,"topping":3,"product":1},{"id":8,"topping":3,"product":5},{"id":9,"topping":1,"product":4},{"id":10,"topping":2,"product":5}]}')},c8c8:function(t,e,i){},d6a8:function(t,e,i){},e3e4:function(t){t.exports=JSON.parse('{"shopProducts":[{"id":1,"shop":1,"product":1},{"id":2,"shop":1,"product":2},{"id":3,"shop":2,"product":2},{"id":4,"shop":1,"product":3},{"id":5,"shop":3,"product":3},{"id":6,"shop":1,"product":1},{"id":7,"shop":3,"product":1},{"id":8,"shop":3,"product":5},{"id":9,"shop":1,"product":4},{"id":10,"shop":2,"product":5}]}')}});
//# sourceMappingURL=app.bddcb38c.js.map