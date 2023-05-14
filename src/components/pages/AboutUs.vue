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
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="Mario Rossi.."
          aria-label="First name"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="text-white form-label">Email</label>
        <input
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="@gmail.com..."
          id="inputEmail4"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="text-white form-label">Provincia</label>
        <input
          v-model="luogo"
          name="luogo"
          type="text"
          class="form-control"
          id="inputCity"
          placeholder="Pordenone..."
          required
        />
      </div>
      <div class="col-md-6">
        <label class="form-label text-white" for="phone">Telefono</label>
        <input
          v-model="telefono"
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
          v-model="text"
          name="text"
          class="form-control"
          placeholder="Descrivi ciò di cui hai bisogno"
          id="floatingTextarea2"
          style="height: 100px"
          required
        ></textarea>
      </div>
      <div class="col-12">
        <button type="submit" value="Send" class="btn btn-primary">Invia !</button>
        <br>
        <div id="conferma" class="text-light"></div>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "AboutUS",
  data() {
    return {
      name: "",       // Proprietà per memorizzare il nome
      email: "",      // Proprietà per memorizzare l'email
      luogo: "",      // Proprietà per memorizzare la provincia
      telefono: "",   // Proprietà per memorizzare il telefono
      text: ""        // Proprietà per memorizzare il testo
    };
  },
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
            document.getElementById('conferma').innerHTML = "Congratulazioni! Email inviata con successo! Ti risponderò non appena possibile :)"
          },
          (error) => {
            console.log("FAILED...", error)

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
