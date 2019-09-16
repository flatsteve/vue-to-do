<template>
  <div id="app">
    <div class="app__container">
      <router-view />

      <div id="nav">
        <router-link to="/">Todos</router-link>
        <router-link to="/about">Settings</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("~normalize.css");

@import "./styles/colors";
@import "./styles/global";

* {
  box-sizing: border-box;
}

#app {
  background-image: linear-gradient(
    to right bottom,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  min-height: 100vh;
  padding: 1.25rem;
}

.app__container {
  margin: 0 auto;
  max-width: 50rem;
}

#nav {
  margin-top: 2.5rem;

  a {
    font-weight: bold;
    color: $white;
    margin: 0 10px;

    &.router-link-exact-active {
      color: $pink;
    }
  }
}
</style>
