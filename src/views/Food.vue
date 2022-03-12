<template>
  <div class="food-detail">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Food Order</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <img :src="getImgUrl(`${product.gambar}`)" class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{product.nama}}</strong>
          </h2>
          <hr />
          <h4>
            Harga:
            <strong>Rp. {{product.harga}}</strong>
          </h4>
          <form class="mt-4">
            <div class="form-group mb-3">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input type="number" class="form-control" />
            </div>
            <div class="form-group mb-3">
              <label for="keterangan">Keterangan</label>
              <textarea class="form-control" placeholder="keterangan"></textarea>
            </div>
            <button type="submit" class="btn btn-success">
              <i class="bi bi-cart"></i> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Food",
  components: {
    Navbar
  },
  data() {
    return { product: {} };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    getImgUrl: function(imageName) {
      if (imageName != "undefined")
        return require(`@/assets/images/${imageName}`);
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then(response => this.setProduct(response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style>
</style>