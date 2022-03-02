<template>
  <nav>
    <button class="btn btn-primary">
      <router-link to="/home">home</router-link>  
    </button>

    <button class="btn btn-primary">
      <router-link to="/about">About</router-link>  
    </button>
  
    <button class="btn btn-primary">
      <router-link to="/posts">Get Posts</router-link>  
    </button>
  
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* nav a.router-link-exact-active {
  color: white;
  background-color: blue;
  border-radius: 4px;
  text-decoration: none;
} */

.btn {
  margin: 5px;
  padding: 5px;
}
</style>
