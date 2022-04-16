<template>
  <div class="placed-order">
    <Navbar />>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col text-center">
          <img src="../assets/images/menunggu.png" alt="..." width="300" />
          <h2>
            Order
            <strong>placed.</strong>
          </h2>
          <h4>
            Pesanan anda segera diproses
            <br />Mohon Ditunggu
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Ordered",
  components: {
    Navbar
  }
};
</script>

<style>
</style>