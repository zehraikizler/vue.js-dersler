<template>
  <div>
    <h1>Home</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non incidunt
      perferendis labore, porro a ullam perspiciatis esse. Dolore earum,
      obcaecati ullam eaque, quis ut excepturi, blanditiis accusamus laudantium
      molestias ipsam.
    </p>
    <input type="text" @keydown.enter="goToDetails" />
  </div>
</template>
<script>
export default {
  methods: {
    goToDetails(e) {
      // alert(e.target.value);
      // this.$router.push(`/detay/${e.target.value}`);
      this.$router.push({
        name: "DetailPage",
        params: {
          userID: e.target.value,
        },
        query: {
          type: "DetailAuth",
          user: "Zehraİkizler",
        },
      });
    },
  },
};
</script>
