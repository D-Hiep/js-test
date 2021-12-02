<template>
  <div id="app">
    <div class="management">
      <div class="sidebar" :class="{'open-sidebar' : toggleSidebar}">
        <h2>Milk Tea Store</h2>
        <ul class="stores">
          <li v-for="(store, index) in stores" 
              :key="index" 
              :class="{active: currentStore.id == store.id}"
              @click="changedStore(store)"
          >
            {{store.name}}
          </li>
        </ul>
        <button class="btn btn-toggle" @click="toggleSidebar = false">X</button>
      </div>
      <div class="main">
         <h2>{{currentStore.name}} Menu</h2>
         <button class="btn btn-toggle open" @click="toggleSidebar = true">
            <b-icon icon="menu-button-fill" aria-hidden="true"></b-icon>
         </button>
         <div class="filter">
            <button class="btn btn-primary" @click="filterProducts">Filter</button>
            <div class="filter-Sort">
               <p>Sort By</p>
               <div>
                  <p @click="filter.openSelectFilter = !filter.openSelectFilter"> 
                    <span>{{filter.sortBy}}</span> 
                    <span class="icon-open" :class="{'icon-rotate': filter.openSelectFilter}"> <b-icon icon="triangle-fill"></b-icon> </span>
                  </p>
                  <ul :class="{open: filter.openSelectFilter}">
                     <li @click="selectedSortBy('Name(Asc)')">Name (asc)</li>
                     <li @click="selectedSortBy('Name(Desc)')">Name (desc)</li>
                     <li @click="selectedSortBy('Price(Asc)')">Price (asc)</li>
                     <li @click="selectedSortBy('Price(Desc)')">Price (desc)</li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="filter-topping">
            <h4>Toppings: </h4>
            <div class="select-topping">
              <div v-for="topping in listTopping" :key="topping.id">
                
                <label :for="'topping'+topping.id" class="checkbox-topping">
                  <input type="checkbox" :id="'topping'+topping.id" :value="topping.id" v-model="filter.filterToppings">
                  <span class="checkbox-custom"></span>
                  <span>{{topping.name}}</span>
                </label>
              </div>
            </div>
         </div>
         <div class="products row" v-show="productsFilter != 0">
            <div v-for="product in productsFilter" :key="product.id" class="col-6 col-sm-4 col-lg-3 card-product">
              <card :product="product" />
            </div>  
         </div>
         <p v-show="productsFilter == 0" class="no-item">Hiện chưa có sản phẩm!</p>
      </div>
    </div>
  </div>
</template>

<script>
import dataProducts from  './data/products.json'
import dataStoreProducts from './data/storeProducts.json'
import dataStores from './data/stores.json'
import dataProductTopping from './data/productToppings.json'
import dataToppings from './data/toppings.json'

import Card from '@/components/Ui/Card'

export default {
  name: 'App',
  data(){
    return{
      products: [],
      stores: [],
      storeProducts: [],
      productTopping: [],
      listTopping: [],

      currentStore:{
        id: null,
        name: '',
        products: []
      },
      productsFilter: [],

      filter:{
        openSelectFilter: false,
        sortBy: 'Name(Asc)',
        filterToppings: [],
      },
      toggleSidebar: false,

      temp: {
        status: false,
        products: []
      },
    }
  },
  components:{
    Card
  },
  mounted(){
    this.loadDataJson();
  },
  methods:{
    loadDataJson(){
      // load data from json files
      this.stores = dataStores.stores;
      this.products = dataProducts.products;
      this.storeProducts = dataStoreProducts.shopProducts;
      this.productTopping = dataProductTopping.productToppings;
      this.listTopping= dataToppings.toppings;

      // set current store
      ({id: this.currentStore.id, name: this.currentStore.name} = this.stores[0]);
      this.getIdProductsOfCurrentShop(this.currentStore.id);   
    },
    getIdProductsOfCurrentShop(shopID){
      // add list id product of current shop into array "currentStore.products"
      this.currentStore.products = [];
      this.storeProducts.forEach(item => {
        if(item.shop == shopID) {
          this.currentStore.products.push(item.product);
        }
      })
      this.productsOfCurrentShop();
    },
    productsOfCurrentShop(){
      // filter products from data json to list product of current shop
      this.productsFilter = this.products.filter(item => {
        return this.currentStore.products.includes(item.id);
      });
      
      // assign array toppings id into product of current shop
      this.productsFilter.forEach(product => {
        product.toppingsId = [];
        
        this.productTopping.forEach(item => {
          if(item.product == product.id){
            product.toppingsId.push(item.topping);
          }
        })
      });
    },
    changedStore(store){
      ({id: this.currentStore.id, name: this.currentStore.name} = store);
      this.getIdProductsOfCurrentShop(store.id);
      this.toggleSidebar = false;
      this.filter.filterToppings = [];
    },
    selectedSortBy(value){
      this.filter.sortBy = value;
      this.filter.openSelectFilter = false;
    },
    filterProducts(){
      // if negative = -1, positive = 1 sort by Asc
      // if negative = 1, positive = -1 sort by Desc
      let negative = -1;
      let positive  = 1;
      if(this.filter.sortBy == 'Name(Desc)' || this.filter.sortBy == 'Price(Desc)'){
        negative = 1;
        positive = -1
      }
      
      // first argument is less than second return negative
      // first argument is greater than second return positive
      if(this.filter.sortBy == 'Name(Asc)' || this.filter.sortBy == 'Name(Desc)'){
        this.productsFilter.sort(function(product, productNext){
          if(product.name < productNext.name) return negative
          if(product.name > productNext.name) return positive
          return 0;
        });
      }else{
        this.productsFilter.sort(function(product, productNext){
          if(product.price < productNext.price) return negative
          if(product.price > productNext.price) return positive
          return 0;
        });
      }

      //filter by topping
      if(this.filter.filterToppings.length !== 0){
        // rollback products after selected other topping
        if(this.temp.status){
          this.productsFilter = this.temp.products;
        }else{
          this.temp.status = true;
          this.temp.products = this.productsFilter;
        }
        // filter product by topping
        this.productsFilter = this.productsFilter.filter(product => {
          let tg;
          for(let i = 0; i < product.toppingsId.length; i++){
            if(this.filter.filterToppings.includes(product.toppingsId[i])) return tg = true;
            tg = false;
          }
          return tg;
        })
      } else if(this.temp.status){
        // rollback products if remove all selected topping
        this.productsFilter = this.temp.products;
      }

    }
  }
}
</script>

<style scoped>
.management{
  display: flex;
  position: relative;
}
.management > .sidebar{
  width: 15%;
}
.management > .main{
  width: 85%;
}

/* sidebar css */
.sidebar{
  padding: 25px 0px;
  background-color: var(--main_color);
  color: white;
  min-height: 100vh;

  position: relative;
}
.sidebar > h2{
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.5px;

  margin-bottom: 30px;
}
.sidebar > ul.stores > li{
  text-align: center;
  padding:  15px 0px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
}
.sidebar > ul.stores > li:hover,
.sidebar > ul.stores > li.active{
  background-color: var(--main_color_hover);
  width: 100%;
  cursor: pointer;
  color: white;
}

.btn-toggle{
  padding: 0px;
  width: 25px;
  height: 25px;

  font-size: 13px;

  position: absolute;
  top: 10px;
  right: 10px;

  display: none;
}
.btn-toggle.open{
  top: 25px;
  left: 25px;

  width: 30px;
  height: 30px;

  border: 1px solid var(--main_color);
  background-color: white;
  color: var(--main_color);
  font-size: 15px;
}
/* list products, filter css */
.main{
  padding: 45px;
  position: relative;

  background-color: rgb(245, 245, 245);
}
.main > h2{
  font-size: 30px;
  letter-spacing: 1.5px;
  color: var(--main_color);
  text-align: center;
  font-weight: 700;

  margin-bottom: 40px;
}
.main > .filter{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.main > .filter > button{
  width: 135px;
  height: 40px;
  letter-spacing: 0.8px;
}
.main > .filter > div.filter-Sort{
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
}
.main > .filter > .filter-Sort > p{
  color: var(--main_color);
  margin-right: 15px;
  font-weight: 500;
}
.main > .filter > .filter-Sort > div{
  position: relative;
  cursor: pointer;
}
.filter-Sort > div >p{
  width: 100%;
  height: 100%;
  line-height: 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 135px;
  height: 40px;
  padding: 8px;

  background-color: rgb(228, 228, 228);
  border: 2px solid var(--main_color);
  border-radius: 4px;

  position: relative;
  cursor: pointer;
}
.icon-open{
  font-size: 10px;
  transform: rotate(180deg);
  transition: 0.3s;
}
.icon-open.icon-rotate{
  transform: rotate(0deg);
}
.filter-Sort > div > ul{
  position: absolute;
  top: 96%;
  left: 0px;
  z-index: 99;

  width: 100%;
  border: 2px solid var(--main_color);
  background-color: white;

  display: none;
  margin: 0 auto;
  font-size: 0;
}
.filter-Sort > div > ul.open{
  display: block;
}
.filter-Sort > div > ul > li{
  padding: 15px 8px;
  cursor: pointer;
  display: block;
  margin: -2px;
  font-size: 16px;
}
.filter-Sort > div > ul > li:hover{
  background-color: var(--main_color_hover);
  color: white;
}

.products{
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
}
.card-product{
  margin-bottom: 15px;
}
.no-item{
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: var(--main_color);

  margin-top: 50px;
}
/* filter by topping */
.filter-topping{
  width: 100%;
  margin: 15px 0px;
  padding: 15px;

  background-color: white;
}
.filter-topping > h4{
  font-size: 18px;
  color: var(--main_color);
  font-weight: 500;
  letter-spacing: 1px;

  margin-bottom: 15px;
}
.select-topping{
  display: flex;
  flex-wrap: wrap;
}
.select-topping > div{
  width: 35%;
  margin-bottom: 15px;
}
.checkbox-topping > input{
  display: none;
}
.checkbox-topping > span.checkbox-custom{
  height: 18px;
  width: 18px;
  border: 1px solid var(--main_color);
  display: inline-block;
  position: relative;
  margin-right: 8px;
}
.checkbox-topping > input[type=checkbox]:checked + span.checkbox-custom:after {
  content: '';
  display: block;
  width: 13px;
  height: 13px;
  background-color: var(--main_color);

  position: absolute;
  top: calc( 50% - ( 13px / 2 ) );
  left: calc( 50% - ( 13px / 2 ) );
}

.checkbox-topping{
  display: flex;
  align-items: center;
}
/* responsive */
@media only screen and (max-width: 1200px) {
  .management > .sidebar{
    width: 20%;
  }
  .management > .main{
    width: 80%;
  }
  .main{
    padding: 30px;
  }
}

@media only screen and (max-width: 992px) {
  .management > .sidebar{
    width: 25%;
  }
  .management > .main{
    width: 75%;
  }
  .main{
    padding: 25px;
  }
}

@media only screen and (max-width: 768px) {
  .management > .sidebar{
    width: 30%;

    position: absolute;
    top: 0px;
    left: -100%;
    z-index: 99;
    transition: 0.3s ease;

    padding-top: 35px;
  }
  .management > .sidebar.open-sidebar{
    left: 0px;
  }
  .management > .main{
    width: 100%;
  }
  .btn-toggle{
    display: block;
  }
}
@media only screen and (max-width: 600px) {
  .management > .sidebar{
    width: 50%;
  }
}
@media only screen and (max-width: 425px) {
  .main > .filter{
    flex-direction: column-reverse;
  }
  .main > .filter > button{
    width: 100%;
  }
  .main > .filter > div{
    width: 100%;
    margin-bottom: 15px;
  }
  .filter-Sort > div,
  .filter-Sort > div > p{
    width: 100%;
  }
  .main > .filter > .filter-Sort > p{
    width: 100%;
    margin-bottom: 8px;
  }
  .card-product{
    width: 100% !important;
  }

  .select-topping > div{
    width: 50%;
  }
}
@media only screen and (max-width: 375px) {
  .management > .sidebar{
    width: 70%;
  }
  .main{
    padding-top: 65px;
  }
  .main > h2{
    margin-bottom: 15px;
  }
}
</style>
