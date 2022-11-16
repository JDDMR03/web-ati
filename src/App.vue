<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img
          src="https://cdn-icons-png.flaticon.com/512/505/505778.png"
          style="height: 50px"
          alt=""
        />
        Negligencia en Construcciones</a
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
            <a class="nav-link active" v-on:click.prevent="changeDir('problematica')" href="#">Problematica</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" v-on:click.prevent="changeDir('solucion')" href="#">Solucion</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" v-on:click.prevent="changeDir('infografia')" href="#">Infografia</a>
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

<style></style>
