<template>
  <div class="food-cart">
    <Navbar :updateCarts="carts" />
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
              <li class="breadcrumb-item active" aria-current="page">Food Cart</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <h2>
            My
            <strong>Cart</strong>
          </h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Name</th>
                  <th scope="col">Desc</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cart, index) in carts" :key="cart.id">
                  <th>{{index +1}}</th>
                  <td>
                    <img
                      :src="require(`@/assets/images/${cart.products.gambar}`)"
                      class="img-fluid shadow"
                      alt="..."
                      width="250"
                    />
                  </td>
                  <td>
                    <strong>{{ cart.products.nama}}</strong>
                  </td>
                  <td>{{ cart.keterangan?cart.keterangan:'-' }}</td>
                  <td>{{ cart.jumlah_pemesanan }}</td>
                  <td align="right">Rp. {{ cart.products.harga }}</td>
                  <td align="right">
                    <strong>Rp. {{ cart.jumlah_pemesanan*cart.products.harga }}</strong>
                  </td>
                  <td align="center" class="text-danger">
                    <i class="bi bi-trash" @click="removeCart(cart.id)"></i>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Price:</strong>
                  </td>
                  <td colspan="2" align="right">
                    <strong>Rp. {{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Form Checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group mb-3">
              <label for="nama">Nama</label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>
            <div class="form-group mb-3">
              <label for="noMeja">No Meja</label>
              <input type="text" class="form-control" v-model="pesan.noMeja" />
            </div>
            <button type="submit" class="btn btn-success float-right" @click="checkout">
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
  name: "Cart",
  components: {
    Navbar
  },
  data() {
    return { carts: [], pesan: {} };
  },
  methods: {
    setCarts(data) {
      this.carts = data;
    },
    removeCart(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.$toast.error("Success remove", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true
          });
          axios
            .get("http://localhost:3000/keranjangs")
            .then(response => this.setCarts(response.data))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    },
    checkout() {
      if (this.pesan.nama && this.pesan.noMeja) {
        this.pesan.keranjangs = this.carts;
        axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {
            this.carts.map(function(item) {
              return axios
                .delete("http://localhost:3000/keranjangs/" + item.id)
                .catch(error => console.log(error));
            });
            this.$router.push({ path: "/pesanan" });
            this.$toast.success("Order placed.", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true
            });
          })
          .catch(error => console.log(error));
      } else {
        this.$toast.error("Nama dan no meja harus di isi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true
        });
      }
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then(response => this.setCarts(response.data))
      .catch(error => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.carts.reduce(function(item, data) {
        return item + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    }
  }
};
</script>