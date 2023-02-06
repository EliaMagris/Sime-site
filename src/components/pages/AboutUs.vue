<template>
  <div class="Container">
    <form class="py-5 px-5 row g-3">
      <div class="col-md-6 ">
        <label for="inputName" class="text-white form-label">Name</label>
        <input type="text" class="form-control bg-info" placeholder="Mario Rossi.." aria-label="First name" />
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
        <label for="inputCity" class="text-white form-label">City</label>
        <input type="text" class="form-control" id="inputCity" />
      </div>
      <div class="col-md-6">
        <label for="inputState" class="text-white form-label">State</label>
        <select id="inputState" class="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-12">
       <label for="inputState" class="text-white form-label">Testo</label>
  <textarea class="form-control" placeholder="Descrivi ciò di cui hai bisogno" id="floatingTextarea2" style="height: 100px"></textarea>
  
</div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck"> Check me out </label>
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
}
@media screen and (max-width: 991px) {
}
@media screen and (max-width: 576px) {
}
.Container{
  background-color: rgb(134,0,0);
  height: 100%;
}
</style>
