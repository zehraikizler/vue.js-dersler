<template>
  <div>
    <h1>Details</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias
      quidem id tempora qui! Excepturi, perspiciatis modi quasi accusantium
      consectetur quis voluptatibus natus obcaecati voluptates, ut, reiciendis
      suscipit tenetur pariatur?
    </p>
    <p>{{ $route.params.userID }}</p>
    <p>{{ $route.query.user }}</p>
    <button @click="goBack" class="btn btn-secondary">Geri Dön</button>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route);
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
