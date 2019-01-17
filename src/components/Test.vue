<template>
  <div class="test">
    <h1>{{title}}</h1>

    <!-- binding to title-->
    <input type="text" v-model="title">

    <!-- same as v-text -->
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else="showName">Nobody</p>
    <!-- <p v-html="user.firstName"></p> -->
    <!-- loop thru title -->
    <ul>
      <li v-for="element in items">{{element.title}}</li>
    </ul>

    <!-- events -->
    <button v-on:click="greet">Say greeting</button>
  </div>
</template>



<script>
export default {
  name: "test",
  data() {
    return {
      title: "Hello world omfg",
      user: {
        firstName: "Amy",
        lastName: "Hanvoravongchai"
      },
      //conditionals
      showName: true,
      items: [{ title: "Item 1" }, { title: "Item 2" }, { title: "Item 3" }]
    };
  },
  methods: {
    greet: function() {
      alert("What up my dawg?");
    }
  }
};
</script>

<style scoped>
</style>

