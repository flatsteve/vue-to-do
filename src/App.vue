<template>
  <div id="app">
    <div class="app__container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url("~normalize.css");

@import "./styles/colors";
@import "./styles/global";

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
}

.app__container {
  margin: 0 auto;
  max-width: 50rem;
}
</style>
