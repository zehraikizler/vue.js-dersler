export default {
  namespaced: true,
  state: {
    contactName: "Trabzon Üniversitesi",
    contactAdress: "Akçaabat",
  },
  mutations: {
    setItem(state, name) {
      state.contactName = name;
    },
  },
  getters: {
    _contactName: (state) => state.contactName,
  },
};
