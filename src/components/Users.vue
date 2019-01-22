<template>
  <div class="users">
    <h1>Users App</h1>

    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="New User Name">
      <br>
      <input type="text" v-model="newUser.email" placeholder="New User Email">
      <br>
      <input type="submit" value="Submit">
    </form>

    <ul>
      <li v-for="user in users">
        <input type="checkbox" v-model="user.contacted">
        
        <span v-bind:class="{contacted: user.contacted}">
          <!-- if truthiness of user is contacted, use class of contacted -->
          {{user.name}} | {{user.email}}
          <button v-on:click="deleteUser(user)">x</button>
        </span>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  name: "users",
  data() {
    return {
      newUser: {},
      users: [
        {
          name: "John Doe",
          email: "johndoe@gmail.com",
          contacted: true
        },
        {
          name: "Jane Austen",
          email: "janeausten@gmail.com",
          contacted: false
        },
        {
          name: "Amy Hello",
          email: "amyhello@gmail.com",
          contacted: false
        }
      ]
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
  }
};
</script>

<style scoped>
.contacted {
  text-decoration: line-through;
}
</style>

