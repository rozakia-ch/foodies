<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">Foodies</a>
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
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Foods</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/keranjang">
              Keranjang
              <i class="bi bi-bag"></i>
              <span
                class="badge bg-success ms-2"
              >{{updateCarts?updateCarts.length:jumlah_pemesanan.length}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  props: ["updateCarts"],
  data() {
    return { jumlah_pemesanan: [] };
  },
  methods: {
    setJumlah(data) {
      this.jumlah_pemesanan = data;
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then(response => this.setJumlah(response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style>
</style>