<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />

    <div class="w-100 pt-5 photo-bg">
      <div class="d-flex title-container text-center justify-content-center">
        <div class="container-text px-4">
          <h1 class="text-white title-big">INDACO DECORI <br />azienda di Adriano e Filippo Simeoni</h1>
          <p class="text-white text-date py-4 fs-4">Più di 30 anni di esperienza</p>
          <router-link to="/about-us">
            <button type="button" class="btn btn-danger btn-lg">Chiedi un preventivo</button>
          </router-link>
          <!-- <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view> -->
        </div>
      </div>
    </div>
    <div class="Whois">
      <h2 class="mb-md-2 ChiSiam text-center pt-3 pb-lg-3 pb-xl-2">
        <i>Chi siamo</i>
      </h2>
      <div class="d-flex justify-content-center">
        <div class="pb-5">
          <div class="slideshow">
            <div class="slideshow-container">
              <div
                v-for="(slide, index) in slides"
                :key="index"
                class="slider"
                :class="{ active: index === currentIndex }"
              >
                <h5 class="testoD">{{ slide.text }}</h5>
              </div>
            </div>
            <div class="controls mt-lg-3 mt-xl-2">
              <button @click="prevSlide" class="prev btn btn-danger">Prev</button>
              <button @click="nextSlide" class="next btn btn-danger">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <!-- <h2>I nostri lavori</h2> -->
      <div class="ourWorks bg-warning">
        <img class="p-0 m-0 swg" src="../assets/img/wave.svg" alt="" />
        <div class="position-relative cont-our">
          <h2 class="fs-1 text-center py-2"><i>I nostri lavori</i></h2>

          <div class="carosello pb-5 m-auto">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner rounded-2">
                <div class="carousel-item active">
                  <img src="../assets/img/foto-1/1.jpg" class="d-block w-100" alt="image" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/foto-1/2.jpg" class="d-block w-100" alt="image" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/foto-1/3.jpg" class="d-block w-100" alt="image" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/foto-1/4.jpg" class="d-block w-100" alt="image" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/foto-1/6.jpg" class="d-block w-100" alt="image" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/foto-1/7.jpg" class="d-block w-100" alt="image" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/foto-1/8.jpg" class="d-block w-100" alt="image" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/foto-1/9.jpg" class="d-block w-100" alt="image" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/foto-2/1.jpg" class="d-block w-100" alt="image" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/foto-2/2.jpg" class="d-block w-100" alt="image" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/foto-2/4.jpg" class="d-block w-100" alt="image" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/foto-2/5.jpg" class="d-block w-100" alt="image" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/foto-2/7.jpg" class="d-block w-100" alt="image" />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="Ourinfo px-5 py-4 bg-black text-white">
            <h2 class="text-center"><i>Info</i></h2>
            <div class="container infocont">
              <div class="row">
                <div class="col-md-6 d-flex justify-content-around flex-column">
                  <div class="Adrian">
                    Adriano:
                    <a class="text-primary px-2" href="tel:+393356132110"><font-awesome-icon icon="fa-solid fa-phone" /></a>
                    oppure
                    <a class="text-danger px-2" href="https://api.whatsapp.com/send?phone=393356132110" target="_blank"
                      ><font-awesome-icon icon="fa-brands fa-whatsapp"
                    /></a>
                  </div>
                  <div class="Simens">
                    Filippo:
                    <a class="text-primary px-2" href="tel:+393899474164"><font-awesome-icon icon="fa-solid fa-phone" /></a>
                    oppure
                    <a class="text-danger px-2" href="https://api.whatsapp.com/send?phone=393899474164" target="_blank"
                      ><font-awesome-icon icon="fa-brands fa-whatsapp"
                    /></a>
                  </div>
                </div>
                <div class="col-md-6 ContLogoBottom d-flex">
                  <img class="LogoBottom" src="../assets/img/LOGO INDACO DECORI.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
  crossorigin="anonymous"
></script>
<script>
export default {
  name: 'MainSim',
  props: {},
  data() {
    return {
      slides: [
        {
          text: 'Con la collaborazione di mio figlio Filippo realizziamo con cura e passione ogni intervento affidatoci al fine di garantire ai nostri clienti affidabilità e precisione cercando di soddisfare ogni esigenza portandola alla soluzione più accurata e adatta alle proprie necessità.',
        },
        {
          text: "Utilizziamo prodotti di alta qualità all'acqua e atossici per la prevenzione di muffe, problemi di condense e umidità garantendone i risultati nel tempo.",
        },
        {
          text: 'Le coibentazioni esterne le realizziamo con materiali innovativi e performanti di ultima generazione, rimaniamo a disposizione per sopralluoghi e formulazione di preventivi gratuiti.',
        },
      ],
      currentIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    // startSlideshow() {
    //   this.intervalId = setInterval(() => {
    //     this.nextSlide();
    //   }, 8000);
    // },
    // stopSlideshow() {
    //   clearInterval(this.intervalId);
    // },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
  },
  // beforeDestroy() {
  //   this.stopSlideshow();
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (min-width: 992px) {
  .title-big {
    font-size: 3rem;
  }
  .carosello {
    width: 75%;
  }
  .ContLogoBottom{
     justify-content: end;

    .LogoBottom{
      width: 30%;
  }
  }
  
}
@media screen and (max-width: 991px) {
  .ChiSiam {
    margin-bottom: 3rem;
  }

  .ContLogoBottom{
     justify-content: end;

    .LogoBottom{
      width: 70%;
  }
  }
}
@media screen and (max-width: 576px) {
  .title-big {
    font-size: 2rem;
  }
  .controls {
    margin-top: 3rem;
  }
  .Adrian{
    padding: 1rem 0;
  }
  .ContLogoBottom{
     justify-content: start;
     padding-top: 2rem;

    .LogoBottom{
      width: 70%;
  }
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
    .text-date {
      text-shadow: 2px 2px 4px #000000;
    }
  }
}

.Whois {
  background-color: #61fafa;
}

.ourWorks {
  position: relative;
  width: 100%;

  .swg {
    position: absolute;
    top: -3px;
  }
  .cont-our {
    padding-top: 8%;
  }
}
.photo-bg {
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/img/foto-1/5.jpg);
}

.infocont{
  max-width: 100% !important;

  .infoName{

  }
}

.slideshow {
  position: relative;
}
.slideshow-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
}
.slider {
  display: none;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  opacity: 0;
  -webkit-transition: opacity 1s ease-in-out; /* Prefisso per il browser WebKit */
  transition: opacity 1s ease-in-out;
}
.carousel-inner {
  height: 750px;
  .carousel-item {
    height: 100%;
    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
    }
  }
}

.slider.active {
  display: block;
  opacity: 1;
}
.controls {
  text-align: center;
}
button {
  margin: 0 0.5rem;
}
</style>
