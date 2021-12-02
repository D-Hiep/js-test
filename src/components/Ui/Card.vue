<template>
  <div class="card">
    <h3 class="product-code">{{product.id | addPrefixId('MT')}}</h3>
    <h2 class="product-name">{{product.name}}</h2>
    <div class="split"></div>
    <p>
      <span>Toppings:</span> 
      <span v-for="topping in productToppings" :key="topping" class="toppings">{{topping}}</span>
    </p>
    <div class="product-info">
      <p class="trending-tag">Trending</p>
      <p class="product-price">{{product.price | addUnit('$')}}</p>
    </div>
  </div>
</template>

<script>
  import dataToppings from '../../data/toppings.json'

  export default {
    props: ['product'],
    data(){
      return{
        productToppings: [],
      }
    },
    mounted(){
      this.getToppings();
    },
    methods:{
      getToppings(){
        let toppings = dataToppings.toppings;
        this.product.toppingsId.forEach(toppingID => {
          toppings.forEach(topping => {
            if(topping.id == toppingID){
              this.productToppings.push(topping.name);
            }
          })
        });
      }
    },
    filters:{
      addUnit: (text ,unit) => {
        return `${unit} ${text}`
      },
      addPrefixId(text, prefix){
        return `${prefix}-${text}`
      }
    }
  }
</script>

<style scoped>
.card{
  padding: 15px;
  width: 100%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
}
.card > h3,
.card > h2,
.card > p{
  font-size: 18px;
  color: var(--main_color);
  line-height: 25px;
  letter-spacing: 0.8px;
}
.card > h2{
  font-weight: 500;
  height: 25px;
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: block;
}
.split{
  width: 100;
  height: 2.5px;
  background-color: var(--main_color);
  margin: 8px 0px;
}
.card > p{
  height: 120px;
}
.card > p > span.toppings{
  font-size: 17px;
  font-weight: normal;
}
.card > p > span.toppings:not(:last-child):after{
  content: ', ';
}
.card > p > span:first-child{
  display: block;
  font-size: 18px;
  font-weight: 500;
}
.product-info{
  position: relative;
  width: 100%;
  height: 30px;
}
.trending-tag{
  position: absolute;
  top: 0px;
  left: calc(0px - 15px);

  width: 90px;
  height: 25px;
  line-height: 10px;
  font-size: 15px;
  background-color: var(--main_color);
  color: white;

  padding: 8px 12px;

  display: hidden;
}

.product-price{
  position: absolute;
  top: 0px;
  right: 0px;

  color: var(--main_color);
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
}
</style>