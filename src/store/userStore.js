import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
       name: "",
       email: "",
      };
  },
  actions: {
    setUser(name, email) {
      this.name=name;
      this.email=email;
      console.log('nombre' + this.name);
      console.log('email'+ this.email);
    },
  },
});
