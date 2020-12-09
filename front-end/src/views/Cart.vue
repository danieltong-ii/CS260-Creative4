<template>
<div>
<div class="wrapper">
<h1>Your Saved Songs 💛 </h1>
</div>
  <div class="wrapper">

  <div class="emptyMessage">
    <p v-show="this.$root.$data.cart.length === 0">You have no songs saved yet. </p>
  </div>
  </div>
  <CartList :cartItems="cartFunction" />

  <div class="footer">
      <p class = "small-font">Copyright 2020 · Daniel Tong · You can find my gitrepo here: <a href="https://github.com/danieltong-ii/CS260_Creative4.git"> Creative Lab 4.</a></p><br>
  </div>

</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'Home',
  components: {
    CartList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    cartFunction() {
      return this.$root.$data.cart;
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
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

h1 {
    font-size: 35px;
}

.emptyMessage {
    font-size: 20px;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
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
}
</style>
