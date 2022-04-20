<template>
  <div class="container bg-light p-5">
    {{ $store.state.user }}
    {{ $store.state.theme }}
    <ul class="list-group my-3">
      <li
        v-for="permission in $store.state.permissions"
        :key="permission"
        class="list-group-item"
      >
        {{ permission }}
      </li>
    </ul>

    <ul class="list-group my-3">
      <li
        v-for="user in $store.state.userList"
        :key="user"
        class="list-group-item"
      >
        {{ user }}
      </li>
    </ul>
    {{ $store.state.fullName }}
    <NewUser />

    <UserList />
    <NewList />
  </div>
</template>

<script>
import NewUser from "./components/NewUser";
import UserList from "./components/UserList";
import NewList from "./components/NewList";

export default {
  name: "App",
  components: {
    NewUser,
    UserList,
    NewList,
  },
  created() {
    // console.log(this.$store.state.person);
    // // console.log(this.$store.state.itemList.filter(i => i.type === "mobilya"));
    // console.log(this.$store.getters._woodItems)
    // // console.log(this.$store.getters.activeUser)
    // console.log('this.activeUser :>> ', this.activeUser);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
