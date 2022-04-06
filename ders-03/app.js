const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  computed: {
    getResult() {
      //   console.log("Counter1 Çalıştı..");
      return this.counter > 0
        ? "Pozitif"
        : this.counter < 0
        ? "Negatif"
        : "Sıfır";
    },
    getResult2() {
      //   console.log("Counter2 Çalıştı..");
      return this.counter2 > 0
        ? "Pozitif"
        : this.counter2 < 0
        ? "Negatif"
        : "Sıfır";
    },
  },
  watch: {
    //   counter(newValue, oldValue) {
    //     console.log("Counter Watcher Calisti..", newValue, oldValue);
    //   },
    //   counter2(newValue, oldValue) {
    //     console.log("Counter Watcher Calisti..", newValue, oldValue);
    //   },
    getResult(newValue, oldValue) {
      console.log(`Watcher : Result-1 ${oldValue} => ${newValue}`);
    },
    getResult2(newValue, oldValue) {
      console.log(`Watcher : Result-2 ${oldValue} => ${newValue}`);
    },
  },
});

app.mount("#app");
