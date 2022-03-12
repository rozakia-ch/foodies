<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <h2>
          Daftar
          <strong>Foods</strong>
        </h2>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Cari"
              aria-label="Cari"
              v-model="search"
              @keyup="searchFood"
            />
            <span class="input-group-text" id="basic-addon1">
              <i class="bi bi-search"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "Foods",
  components: {
    Navbar,
    CardProduct
  },
  data() {
    return { products: [], search: "" };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then(response => this.setProducts(response.data))
        .catch(error => console.log(error));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then(response => this.setProducts(response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style>
</style>