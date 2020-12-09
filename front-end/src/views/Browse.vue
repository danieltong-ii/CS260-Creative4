<template>
<div class="browse">
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="genre in $root.$data.genres" :key="genre.id">
    <div class="image">
        <a href="#" @click="select(genre.genre)">
          <img :src="'/images/genres/'+genre.image">
        </a>
    </div>
    </div>
  </div>
  <div class="separate">

  </div>
   <ProductList :products="products" />
</div>
<div class="footer">
    <p class = "small-font">Copyright 2020 · Daniel Tong · You can find my gitrepo here: <a href="https://github.com/danieltong-ii/CS260_Creative3.git"> Creative Lab 3.</a></p><br>
</div>
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Browse',
  components: {
    ProductList
  },
  data() {
    return {
      genre: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.genre === this.genre);
    }
  },
  methods: {
    select(genre) {
      this.genre = genre;
        console.log(genre);
    }
  }
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.browse {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.footer {
    display: flex;
    margin-bottom: 20px;
    margin-top: 20px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100;
    font-size: 20px;
    text-align: center;
    background-color: #11161c;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
}

.separate {
    height: 300px;
    width: auto;
    margin-bottom: 100px;
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
   border-radius: 15px 15px 15px 15px;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
  border-radius: 15px 15px 0px 0px;
}

.info {
  background: #f8efd4;
  color: #000;
  padding: 10px 30px;
  height: 150px;
}

.info h1 {
    font-size: 35px;
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
  font-size: 20px;
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
    font-size: 27px;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    border-radius: 0px 0px 15px 0px;
}


.auto {
  margin-left: auto;
}
</style>
