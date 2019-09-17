<template>
  <div id="app">
    <SplashImage />
  </div>
</template>

<script>
import SplashImage from "./components/SplashImage";

export default {
  name: "app",
  components: {
    SplashImage
  },
  data() {
    return {
      todos: [
        { id: 1, title: "Clean Car", completed: false },
        { id: 2, title: "Clean House", completed: false },
        { id: 3, title: "Clean Yard", completed: false }
      ]
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
.btn {
  color: red;
}
</style>
