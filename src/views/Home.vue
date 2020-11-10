<template>
<div>
<div class="title">
  <h1> Top 25 Songs in the USA Today 🇺🇸 </h1>
</div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <input placeholder="  🔎   Search" v-model="searchText" />
      </form>
    </div>
  </div>

  <ProductList :products="products" />

  <div class="footer">
      <p class = "small-font">Copyright 2020 · Daniel Tong · You can find my gitrepo here: <a href="https://github.com/danieltong-ii/CS260_Creative3.git"> Creative Lab 3.</a></p><br>
  </div>

</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Home',
  components: {
    ProductList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.name.toLowerCase().search(this.searchText) >= 0);
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

}

.footer {
    left: 0;
    right: 0;
    bottom: 0;
    width: 100;
    font-size: 20px;
    text-align: center;
    background-color: #11161c;
    color: white;
    margin-top: 100px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
}

.title {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 20px;
    font-weight: 700px;
}

.search {
  width: 27%;
  border-radius: 10px 10px 10px 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

h1 {
    font-size: 35px;
}

form {
  display: table;
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
  border-radius: 10px 10px 10px 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}
</style>
