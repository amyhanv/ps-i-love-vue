<template>
  <div class="test">
    <h1>{{title}}</h1>

    <!-- binding to title, input will be model for 'title'-->
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
    <br>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
    <hr>
    <label>First name:</label>
    <input type="text" v-model="user.firstName">
    <br>
    <label>Last name:</label>
    <input type="text" v-model="user.lastName">
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>
  </div>
</template>



<script>
export default {
  name: "test",
  // Props: pass data from a parent to a child
  props: {
    msg: {
      default: "Default msg",
      type: String
    }
  },
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
    },
    pressKey: function(e) {
      console.log(e.target.value);
    },
    enterHit: function() {
      console.log("enter was hit");
    }
  },
  /* Diff b/w method: 
  computed properties are cached based on their dependencies. A computed property will 
  only re-evaluate when some of its dependencies have changed.
  Not having to run the function again, returned immediately unless changed.
  */
  computed: {
    fullName: function() {
      return this.user.firstName + " " + this.user.lastName;
    }
  }
};
</script>

<style scoped>
</style>

