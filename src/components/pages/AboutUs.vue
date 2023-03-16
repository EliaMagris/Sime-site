<template>
  <div class="Container">
    <form
      ref="form"
      @submit.prevent="sendEmail"
      class="py-5 px-5 row formBoot g-3"
    >
      <div class="col-md-6">
        <label for="inputName" class="text-white form-label">Nome</label>
        <input
          name="name"
          type="text"
          class="form-control"
          placeholder="Mario Rossi.."
          aria-label="First name"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="text-white form-label">Email</label>
        <input
          name="email"
          type="email"
          class="form-control"
          placeholder="@gmail.com..."
          id="inputEmail4"
        />
      </div>
      <!-- <div class="col-12">
        <label for="inputAddress" class="text-white form-label">Indirizzo</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="" />
      </div> -->
      <div class="col-md-6">
        <label for="inputCity" class="text-white form-label">Provincia</label>
        <input
          name="luogo"
          type="text"
          class="form-control"
          id="inputCity"
          placeholder="Pordenone..."
        />
      </div>
      <div class="col-md-6">
        <label class="form-label text-white" for="phone">Telefono</label>
        <input
          name="telefono"
          type="text"
          id="phone"
          class="form-control"
          data-mdb-input-mask="+48 999-999-999"
        />
      </div>
      <div class="col-12">
        <label for="inputState" class="text-white form-label">Testo</label>
        <textarea
          name="text"
          class="form-control"
          placeholder="Descrivi ciò di cui hai bisogno"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
      </div>
      <div class="col-12">
        <button type="submit" value="Send" class="btn btn-primary">Sign in</button>
        <div id="conferma" class="text-light"></div>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "AboutUS",
  props: {},
  data() {},
  mounted() {},
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_9kftboo",
          "template_djrewhz",
          this.$refs.form,
          "BwUoq_S_g_lHVwIu2"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            document.getElementById('conferma').innerHTML = "Congratulazioni! Email inviata con successo! ti risponderò non appena possibile :)"
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (min-width: 992px) {
  .Container{
    padding-top: 6rem !important;
  }
}
@media screen and (max-width: 991px) {
  .Container{
    padding-top: 4.5rem;
  }
}
@media screen and (max-width: 576px) {
  
}
.Container {
  background-color: rgb(134, 0, 0);
  height: 100%;

  .formBoot {
    margin-right: 0;
    background-color: rgb(134, 0, 0);
  }
}
</style>
