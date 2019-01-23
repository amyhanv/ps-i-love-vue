<template>
  <div class="test">
    <div id="title" class="section-container">
      <div class="section-content">
        <p class="div-desc">
          <b>V-model</b> binding between the title with the input
          <br>
        </p>
        <h1>{{title}}</h1>
        <!-- binding to title, input will be model for 'title'-->
        <input type="text" v-model="title" placeholder="Edit The Title">
      </div>
    </div>

    <div id="elif" class="section-container">
      <div class="section-content">
        <p class="div-desc">
          Use truthiness,
          <b>v-if</b>,
          <b>v-else</b>
          conditions to display certain info in data()
          <br>if variable 'showName' is True, name will be displayed,
          <a
            v-on:click="showName = !showName"
          >else...</a>
        </p>
        <h3 v-if="showName">{{user.firstName}}</h3>
        <h3 v-else="showName">Ain't nothin' here to see, folks.</h3>
        <!-- <p v-html="user.firstName"></p> -->
      </div>
    </div>

    <div id="loop" class="section-container">
      <div class="section-content">
        <!-- loop thru title -->
        <p class="div-desc">
          <b>V-for</b> loops through each element in 'items' prespecified list
        </p>
        <ol>
          <li v-for="element in items">{{element.title}}</li>
        </ol>
      </div>
    </div>

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
      title: "My Heading",
      user: {
        firstName: "Donald",
        lastName: "Glover"
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

<style >
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono|Nunito+Sans");

/* remove preset class generated */
.gorgias-loaded {
  margin: 0 !important;
}

.test {
  font-family: "Roboto Mono";
  text-align: center;
  padding: 0;
}

.div-desc {
  font-style: italic;
  line-height: 1.8;
  padding-top: 10px;
  padding-bottom: 10px;
}

.section-container {
  height: 500px;
  display: flex;
  justify-content: center;
  margin: 12px;
}

.section-content {
  align-self: center;
  padding: 20px;
}

.test a {
  text-decoration: underline;
}
.test a:hover {
  cursor: pointer;
}

.test input {
  border: none;
  border-radius: 5px;
  margin: 0;
  outline: 0;
  padding: 15px 10px;
  color: #8a97a0;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.03);
  margin-bottom: 30px;
}

#title {
  background-color: antiquewhite;
}
h1,
h3 {
  font-family: "Nunito Sans ";
  letter-spacing: 1.5px;
  color: darkslategrey;
}

#title li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#elif {
  background-color: #d3e8e8;
}

#loop {
  background-color: #ffeaea;
}
</style>

