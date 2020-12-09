<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/logo.png">
      </router-link>
    </div>
    <div id="side">
        <router-link to="/">
          <div class="menu-item browse">
            <p>Home</p>
          </div>
        </router-link>
      <router-link to="/browse">
        <div class="menu-item browse">
          <p>Genres</p>
        </div>
      </router-link>
      <router-link to="/add">
        <div class="menu-item browse">
          <p>Add Song</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item">
          <p>Saved Songs</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App',
  props: {
  },
  data() {
    return {
      numberOfItems_: '',
    }
  },
computed: {
    numberOfItems () {
        return this.$root.$data.cart.length;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;700&display=swap');

body {
  margin: 100px 100px 0px 100px;
  background-color: #11161c;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
  color: white;
}

#menu a {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 300px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

</style>
