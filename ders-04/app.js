Vue.createApp({
  data() {
    return {
      textRed: "text-danger bg-white",
      counter: 0,
      classes: [
        "text-success",
        "text-warning",
        "text-info",
        "text-primary",
        "text-danger"
      ]
    };
  },
  created() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  computed: {
    boxClass() {
      return this.classes[this.counter % this.classes.length]
    },
  },
}).mount("#app");
