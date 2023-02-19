<template>
  <div>
    <div class="w-100 photo-bg">
      <div class="d-flex title-container text-center justify-content-center">
        <div class="container-text px-4">
          <h1 class="text-white title-big">INDACO DECORI <br />azienda di Adriano e Filippo Simeoni</h1>
          <p class="text-white text-info py-4 fs-4">Più di 30 anni di esperienza</p>
          <router-link to="/about-us">
          <button type="button" class="btn btn-danger btn-lg">Chiedi un preventivo</button>
          </router-link>
        </div>
      </div>
    </div>
    <h2>Chi siamo</h2>
    <div class="d-flex  justify-content-center">
      
      <div>
        
      <div class="slideshow">
    <div class="slideshow-container">
      <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{'active': index === currentIndex}">
        <p>{{ slide.text }}</p>
      </div>
    </div>
    <div class="controls">
      <button @click="prevSlide" class="prev btn btn-danger">Prev</button>
      <button @click="nextSlide" class="next btn btn-danger">Next</button>
    </div>
  </div>

        
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSim',
  props: {},
   data() {
    return {
      slides: [
        {
          
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          
          text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        },
        {
          
          text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
        }
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopSlideshow() {
      clearInterval(this.intervalId);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    }
  },
  beforeDestroy() {
    this.stopSlideshow();
  }
}
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (min-width: 992px) {
  .title-big {
    font-size: 3rem;
  }
}
@media screen and (max-width: 991px) {
}
@media screen and (max-width: 576px) {
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

.slideshow {
  position: relative;
}
.slideshow-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.slide {
  display: none;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  opacity: 0;
  transition: opacity 1s ease-in-out;
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
