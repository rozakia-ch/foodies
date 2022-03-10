<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col col-md-6">
          <div class="d-flex h-100">
            <div class="justify-contet-center align-self-center">
              <h2>
                <strong>Delicius Food Menu</strong>
                <br />in Your Gadget
              </h2>
              <p>Ayo segera pesan makanan favoritMu</p>
              <router-link class="btn btn-lg btn-success" to="/">
                Pesan
                <i class="bi bi-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col col-md-6">
          <img src="../assets/images/ilustrasi.png" alt="hero" class="d-block img-fluid w-100" />
        </div>
      </div>
    </div>
    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/images/ilustrasi.png" alt="hero" class="d-block img-fluid w-100" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-contet-center align-self-center">
              <h2>
                <strong>Delicius Food Menu</strong>
                <br />in Your Gadget
              </h2>
              <p>Ayo segera pesan makanan favoritMu</p>
              <router-link class="btn btn-lg btn-success" to="/">
                Pesan
                <i class="bi bi-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style>
</style>