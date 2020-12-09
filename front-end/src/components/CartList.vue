<template>
<div class="wrapper">

  <div class="products">
    <div class="product" v-for="product in $root.$data.cart" :key="product._id">
    <div class="image">
      <img :src="'/images/products/'+product.image">
    </div>
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.artist}}</p>
      </div>
      <div class="price">
        <button class="auto">
            <a :href="product.youtube" target="_blank">Listen</a></button>
        <button class="auto right-button" @click = "removeProduct(product)">Remove</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'CartList',
  props: {
    cartItems: Array,
  },
  data() {
    return {
      cartPos: '',
    }
  },
methods: {
    removeProduct(product) {
    console.log(product._id)
        console.log(this.$root.$data.cart.indexOf(product));
        this.cartPos = this.$root.$data.cart.indexOf(product);
        this.$root.$data.cart.splice(this.cartPos,1);
    },
  },
}

</script>


<style scoped>

a:link {
  text-decoration: none;
  color: white;
}

a:visited {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: none;
  color: black;
}

a:active {
  text-decoration: underline;
  color: white;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-left: 10px;
  margin-top: 50px;
  width: 250px;
  border-radius: 15px 15px 0px 0px;
}

.product img {
  height: 250px;
  width: 250px;
  object-fit: cover;
   border-radius: 15px 15px 0px 0px;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
  border-radius: 15px 15px 0px 0px;
}

.info {
  background: #e8e8e8;
  color: #000;
  padding: 10px 30px;
  height: 150px;
}

.info h1 {
  font-size: 21px;
}

.p {
    font-size: 15px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 16px;
}


.price {
    display: flex;
    font-size: 20px
}

button {
  height: 70px;
  background: #d7385e;
  color: white;
  text-decoration: none;
  width: 50%;
  border: none;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  border-radius: 0px 0px 0px 15px;
}

.right-button {
    height: 70px;
    background: #d7385e;
    color: white;
    width: 50%;
    border: none;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    border-radius: 0px 0px 15px 0px;
}


.auto {
  margin-left: auto;
}
</style>
