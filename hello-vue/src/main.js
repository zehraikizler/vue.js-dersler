import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style.css";
// import "/src/assets/style.css"
import AppHeader from "@/components/AppHeader";

const app = createApp(App);

app.component("app-header", AppHeader);

app.mount("#app");
