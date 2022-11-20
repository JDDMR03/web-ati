<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #5e2129">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img
          src="https://cdn-icons-png.flaticon.com/512/505/505778.png"
          style="height: 100px"
          alt=""
        />
        <font face="CaskaydiaCove Nerd Font" color="white" size="6px"
          >Negligencia en Construcciones</font
        ></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="btn btn-outline-primary"
              v-on:click.prevent="changeDir('introduccion')"
              href="#"
              >Introduccion</a
            >
          </li>
          <li class="nav-item">
            <a
              class="btn btn-outline-primary"
              v-on:click.prevent="changeDir('problematica')"
              href="#"
              >Problematica</a
            >
          </li>
          <li class="nav-item">
            <a
              class="btn btn-outline-primary"
              v-on:click.prevent="changeDir('desarrollo')"
              href="#"
              >Desarrollo</a
            >
          </li>
          <li class="nav-item">
            <a
              class="btn btn-outline-primary"
              v-on:click.prevent="changeDir('infografia')"
              href="#"
              >Infografia</a
            >
          </li>
          <li class="nav-item">
            <a
              class="btn btn-outline-primary"
              v-on:click.prevent="changeDir('solucion')"
              href="#"
              >Solucion</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="row">
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeDir(dir) {
      this.$router.push("/" + dir);
    },
  },
};
</script>

<style>
@font-face {
  font-family: "CaskaydiaCove Nerd Font";
  src: (
    "/usr/share/fonts/nerd-fonts-complete/TTF/Caskaydia Cove Nerd Font Complete.ttf"
  );
}
.btn-outline-primary {
  border-color: #be3208;
  color: white;
  font-family: CaskaydiaCove Nerd Font;
  font-size: 16px;
}
.btn-outline-primary:hover {
  background-color: brown;
  border-color: brown;
}
h1 {
  font-family: CaskaydiaCove Nerd Font;
  font-size: 55px;
  color: #be3208;
}
a {
  font-family: CaskaydiaCove Nerd Font;
  font-size: 30px;
}
.row {
  align-items: center;
}
h6 {
  font-family: CaskaydiaCove Nerd Font;
  font-size: 30px;
  color: #be3208;
}
h2 {
  font-family: CaskaydiaCove Nerd Font;
  font-size: 31px;
  color: #be3208;
}
li{
  font-family: CaskaydiaCove Nerd Font;
  font-size: 30px;
}
</style>
