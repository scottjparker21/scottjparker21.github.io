<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

// add this line
import TodoList from './components/TodoList'  
// remove this line
import Hello from './components/Hello'  

import TodoList from './components/TodoList';

export default {
  components: {
    // Add a reference to the TodoList component in the components property
    TodoList,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
