const app = Vue.createApp({
  data() {
    return {
      title: "Bu Vue tarafından gelen bir bilgidir...",
      content: "lorem ipsum dolor sit amet",
      hobbies: [1, 2, 3, 4, 5],
      personal: {
        name: "Zehra",
        lname: "İkizler",
        phone: "xxxxx",
      },
      details: `<a href="https://github.com/zehraikizler">Profili görmek için tıklayınız</a>`,
      url: "https://github.com/zehraikizler",
      coordX: 0,
      coordY: 0,
      fullName: "Zehra İkizler",
    };
  },
  methods: {
    updateTitle(title) {
      this.title = title || "Bu benim yeni mesajım...";
    },
    updateCoords(e) {
      //   console.log("e :>> ", e);
      this.coordX = e.offsetX;
      this.coordY = e.offsetY;
      this.updateTitle(`${this.coordX},${this.coordY}`);
    },
    updateValue(customText, e) {
      console.log(customText, e);
      this.fullName = e.target.value;
    },
  },
}).mount("#app");
