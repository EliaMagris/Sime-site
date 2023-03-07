<template>
  <div class="Container ">
    <form class="py-5 px-5 row formBoot g-3">
      <div class="col-md-6">
        <label for="inputName" class="text-white form-label">Nome</label>
        <input type="text" class="form-control" placeholder="Mario Rossi.." aria-label="First name" />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="text-white form-label">Email</label>
        <input type="email" class="form-control" placeholder="@gmail.com..." id="inputEmail4" />
      </div>
      <!-- <div class="col-12">
        <label for="inputAddress" class="text-white form-label">Indirizzo</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="" />
      </div> -->
      <div class="col-md-6">
        <label for="inputCity" class="text-white form-label">Provincia</label>
        <input type="text" class="form-control" id="inputCity" placeholder="Pordenone..." />
      </div>
      <div class="col-md-6">
        <label class="form-label text-white" for="phone">Telefono</label>
        <input type="text" id="phone" class="form-control" data-mdb-input-mask="+48 999-999-999" />
        
      </div>
      <div class="col-12">
        <label for="inputState" class="text-white form-label">Testo</label>
        <textarea
          class="form-control"
          placeholder="Descrivi ciò di cui hai bisogno"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label text-white" for="gridCheck"> Check me out </label>
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AboutUS',
  props: {},
  data() {},
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (min-width: 992px) {
  // .Container{
  //   padding-top: 2rem;
  // }
}
@media screen and (max-width: 991px) {
}
@media screen and (max-width: 576px) {
  // .Container{
  //   padding-top: 2rem;
  // }
}
.Container {
  background-color: rgb(134, 0, 0);
  height: 100%;
  padding-top: 4.5rem;
  .formBoot{
    margin-right: 0;
    background-color: rgb(134, 0, 0);
  }
}
</style>
