<template>
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />

    <div class="w-100 pt-5 photo-bg">
      <div class="d-flex title-container text-center justify-content-center">
        <div class="container-text px-4">
          <h1 class="text-white title-big">
            INDACO DECORI <br />azienda di Adriano e Filippo Simeoni
          </h1>
          <p class="text-white text-date py-4 fs-4">
            Più di 30 anni di esperienza
          </p>
          <router-link to="/about-us">
            <button type="button" class="btn btn-danger btn-lg">
              Chiedi un preventivo
            </button>
          </router-link>
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
                class="slide"
                :class="{ active: index === currentIndex }"
              >
                <h5 class="testoD">{{ slide.text }}</h5>
              </div>
            </div>
            <div class="controls mt-lg-3 mt-xl-2">
              <button @click="prevSlide" class="prev btn btn-danger">
                Prev
              </button>
              <button @click="nextSlide" class="next btn btn-danger">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="position-relative">
      <!-- <h2>I nostri lavori</h2> -->
      <div class="ourWorks">
        <img class="p-0 m-0" src="../assets/img/wave.svg" alt="" />
        <div>
          <h2>ciao</h2>

          <div class="container">
            <div class="row">
              <div class="col-md-6">

                

              </div>
              <div class="col-md-6">

                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/img/foto-2/2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/img/foto-2/2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/img/foto-2/2.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

              </div>
            </div>
          </div>

          <h2>wewe</h2>
        </div>
      </div>
    </div>
  </div>
 
</template>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
<script>
export default {
  name: "MainSim",
  props: {},
  data() {
    return {
      slides: [
        {
          text: "Con la collaborazione di mio figlio Filippo realizziamo con cura e passione ogni intervento affidatoci al fine di garantire ai nostri clienti affidabilità e precisione cercando di soddisfare ogni esigenza portandola alla soluzione più accurata e adatta alle proprie necessità.",
        },
        {
          text: "Utilizziamo prodotti di alta qualità all'acqua e atossici per la prevenzione di muffe, problemi di condense e umidità garantendone i risultati nel tempo.",
        },
        {
          text: "Le coibentazioni esterne le realizziamo con materiali innovativi e performanti di ultima generazione, rimaniamo a disposizione per sopralluoghi e formulazione di preventivi gratuiti.",
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
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
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
}
@media screen and (max-width: 991px) {
  .ChiSiam {
    margin-bottom: 3rem;
  }
}
@media screen and (max-width: 576px) {
  .title-big {
    font-size: 2rem;
  }
  .controls {
    margin-top: 3rem;
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
  // background-image: url(../assets/img/wave.svg);
  // background-size: 100% 100px;
  position: absolute;
  width: 100%;
  top: -2px;
}
.photo-bg {
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/img/foto-1/5.jpg);
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
.slide {
  display: none;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  opacity: 0;
  -webkit-transition: opacity 1s ease-in-out; /* Prefisso per il browser WebKit */
  transition: opacity 1s ease-in-out;

  // h5{
  //   line-height: 3rem;
  // }
}

.slide.active {
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
