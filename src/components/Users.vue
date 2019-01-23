<template>
  <div class="users">
    <h1>My Invite List</h1>
    <img id="logo" src="../assets/smiley-derp.png">
    <div id="add-to-invite-list">
      <div class="div-content">
        <form v-on:submit="addUser" id="add-user">
          <p>Add contact info</p>
          <input type="text" v-model="newUser.name" placeholder="New User Name">
          <input type="text" v-model="newUser.email" placeholder="New User Email">
          <input id="submit-user" type="submit" value="Submit">
        </form>
      </div>
    </div>

    <div id="invite-list">
      <div class="div-content">
        <ul>
          <li v-for="user in users">
            <button id="delete-button" v-on:click="deleteUser(user)">delete</button>
            <input type="checkbox" v-model="user.contacted">
            
            <span v-bind:class="{contacted: user.contacted}">
              <!-- if truthiness of user is contacted, use class of contacted -->
              {{user.name}} |
              {{user.email}}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <a href="http://helloimamy.com">
      <p>to Amy's website -></p>
    </a>
  </div>
</template>



<script>
export default {
  name: "users",
  data() {
    return {
      newUser: {},
      users: []
    };
  },
  methods: {
    addUser: function(e) {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      e.preventDefault();
    },
    deleteUser: function(user) {
      // splice() adds/removes items to/from an array,
      // and returns the removed item(s)
      this.users.splice(this.users.indexOf(user), 1);
    }
  },
  created: function() {
    /* lifecycle hooks:
        users can add their own code at specific stages of initialization
        "created" hook use to run code after an instance is created
    */
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        // console.log(response.data);
        this.users = response.data;
      });
  }
};
</script>

<style >
/* remove preset class generated */
.gorgias-loaded {
  margin: 0 !important;
}
.contacted {
  text-decoration: line-through;
}
#nav {
  text-align: center;
  padding: 20px;
}

#nav li {
  float: left;
  padding: 0 20px;
  font-family: "Roboto Mono";
  text-transform: uppercase;
  color: #000;
  list-style-type: none;
}

#nav li:hover {
  cursor: pointer;
}

#logo {
  margin: 0 auto;
  width: 120px;

  padding: 0;
  display: block;
}

#add-to-invite-list {
  padding: 30px;
  font-family: "Roboto Mono";
  /* color: #fff !important; */
  margin: 12px;
  display: flex;
  justify-content: center;
  /* background-color: #bbbbbb; */
}

.div-content {
  align-self: center;
  font-family: "Roboto Mono";
  line-height: 2;
}
.users a {
  font-family: "Roboto Mono";
  font-weight: 100;
  text-align: center;
}

.users h1 {
  letter-spacing: 1.5px;
  font-family: "Roboto Mono";
  text-align: center;
  font-weight: 400;
  margin-top: 40px;
  color: #000;
}

#add-to-invite-list input {
  border: none;
  border-radius: 5px;
  margin: 0;
  outline: 0;
  padding: 15px 10px;
  color: #8a97a0;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

#add-to-invite-list ul {
  padding: 0;
  margin: 0;
}

#add-user {
  text-align: center;
}

#add-user #submit-user {
  padding: 13px 30px;
  margin: 15px 0;
  box-shadow: none;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  text-transform: uppercase;
  /* color: #fff; */
  background-color: transparent;
}

#submit-user:hover {
  cursor: pointer;
  box-shadow: 3px 3px rgb(104, 104, 104);
}
@media only screen and (max-width: 600px) {
  #invite-list {
    padding: 10px;
  }
}
#invite-list {
  /* background-color: #ececec; */
  display: flex;
  margin: 12px;
  padding: 30px;
  justify-content: center;
}

#invite-list ul {
  padding: 0;
}
#invite-list ul li {
  list-style-type: none;
}

#delete-button {
  margin: 0px 10px 0px 0;
  box-shadow: none;
  padding: 1px 8px;
  border: 1px solid #e87878;
  border-radius: 5px;
  color: #e87878;
  text-transform: uppercase;
  /* color: #fff; */
  background-color: transparent;
}
#delete-button:hover {
  cursor: pointer;
  background-color: #e87878;
  color: #fff;
}
</style>

