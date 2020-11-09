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

h1 {
    font-size: 30px;
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
