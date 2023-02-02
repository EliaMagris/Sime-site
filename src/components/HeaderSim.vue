<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
      <div class="container-fluid bg-white container-navbar">
        <a class="navbar-brand w-25">
          <router-link to="/about-us">
            <img class="logo-size" src="../assets/img/LOGO INDACO DECORI.png" alt="" />
          </router-link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active fw-bold fs-5 p-0" aria-current="page" href="#">Contattaci</a>
          </div>
          <div class="navbar-nav">
            <a class="nav-link active fw-bold p-0 fs-5" href="#">Chi siamo</a>
          </div>
        </div>
        <a class="navbar-brand w-25 special-center-nav" href="#"></a>
      </div>
    </nav>
    <div class="w-100 photo-bg">
      <div class="d-flex title-container text-center justify-content-center">
        <div class="container-text px-4">
          <h1 class="text-white title-big">INDACO DECORI <br />azienda di Adriano e Filippo Simeoni</h1>
          <p class="text-white text-info py-4 fs-4">Più di 30 anni di esperienza</p>
          <button type="button" class="btn btn-danger btn-lg">Chiedi un preventivo</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (min-width: 992px) {
  .logo-size {
    width: 50%;
  }
  .title-big {
    font-size: 3rem;
  }
}
@media screen and (max-width: 991px) {
  .logo-size {
    width: 75%;
  }

  .special-center-nav {
    display: none;
  }
}
@media screen and (max-width: 576px) {
  .logo-size {
    width: 100%;
  }
  .title-big {
    font-size: 2rem;
  }
}

// NAV BAR ITEMS

.title-container {
  padding-top: 7rem;
  .container-text {
    padding-top: 2rem;
    .title-big {
      text-shadow: 2px 2px 4px #000000;
    }
    .text-info {
      text-shadow: 2px 2px 4px #000000;
    }
  }
}

.photo-bg {
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/img/foto-1/5.jpg);
}
</style>
