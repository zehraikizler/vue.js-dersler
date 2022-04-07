const app = Vue.createApp({
  data() {
    return {
      textRed: "text-danger bg-white",
      counter: 0,
    };
  },
  created() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  computed: {
    boxClass() {
      return {
        "text-success": this.counter === 0,
        "text-warning": this.counter === 1,
        "text-info": this.counter === 2,
        "text-primary": this.counter === 3,
        "text-danger": this.counter === 4,
      };
    },
  },
}).mount("#app");
