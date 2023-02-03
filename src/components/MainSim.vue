<template>
  <div >
    <div class="w-100 photo-bg">
      <div class="d-flex title-container text-center justify-content-center">
        
        <div class="container-text px-4">
          <h1 class="text-white title-big">INDACO DECORI <br />azienda di Adriano e Filippo Simeoni</h1>
          <p class="text-white text-info py-4 fs-4">Più di 30 anni di esperienza</p>
          <button type="button" class="btn btn-danger btn-lg">Chiedi un preventivo</button>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div>
          <h2>Chi siamo</h2>
      <div class="slideshow-container">
        <div class="mySlides">
          <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
          <p class="author">- John Keats</p>
        </div>

        <div class="mySlides">
          <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
          <p class="author">- Ernest Hemingway</p>
        </div>

        <div class="mySlides">
          <q>I have not failed. I've just found 10,000 ways that won't work.</q>
          <p class="author">- Thomas A. Edison</p>
        </div>

        <a class="prev" onclick="plusSlides(-1)"></a>
        <a class="next" onclick="plusSlides(1)"></a>
      </div>

      <div class="dot-container">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
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
      slideIndex: 1
    };
  },
  mounted() {
    this.showSlides(this.slideIndex);
  },
  methods: {
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    },
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
    },
    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) { this.slideIndex = 1 }    
      if (n < 1) { this.slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";  
      dots[this.slideIndex - 1].className += " active";
    }
  }
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


/* Slideshow container */
.slideshow-container {
  position: relative;
  background: #f1f1f1f1;
}

/* Slides */
.mySlides {
  display: none;
  padding: 80px;
  text-align: center;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -30px;
  padding: 16px;
  color: #888;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  position: absolute;
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
  color: white;
}

/* The dot/bullet/indicator container */
.dot-container {
    text-align: center;
    padding: 20px;
    background: #ddd;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

/* Add a background color to the active dot/circle */
.active, .dot:hover {
  background-color: #717171;
}

/* Add an italic font style to all quotes */
q {font-style: italic;}

/* Add a blue color to the author */
.author {color: cornflowerblue;}
</style>
