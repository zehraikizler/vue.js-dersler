const app = Vue.createApp({
  data() {
    return {};
  },
});

app.component("counter-item", {
  data() {
    return {
      counter: 0,
    };
  },
  template: `
        <div class="container">
            <h3 class="mb-2">{{counter}} </h3>
            <button @click="counter--" class="btn btn-danger">-</button>
            <button @click="counter++" class="btn btn-primary">+</button>
        </div>
    `,
});

app.mount("#app");
