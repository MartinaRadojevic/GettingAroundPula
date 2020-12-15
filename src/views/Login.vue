<template>
  <div class="login">
    <div class="back-wrapper">
      <i v-if="mobileVersion()" @click="$router.go(-1)" class="fa fa-angle-left" style="font-size:36px"></i>
      <h1 class="title">Prijava korisnika</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="emailInput">Email adresa</label>
              <input type="email" class="form-control"
                     id="emailInput" placeholder="Unesite
email"/>
            </div>
            <div class="form-group">
              <label for="passwordInput">Lozinka</label>
              <input type="password" class="form-control"
                     id="passwordInput" placeholder="Unesite lozinku"/>
            </div>
            <button class="function">
              <span>+</span><span class="btn-text">Potvrdi</span>
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    mobileVersion() {
      return window.innerWidth < 762;
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  background-color: #7DAA96;
  height: 100vh;
  .back-wrapper {
    display: flex;
    background-color: #41764b;
    padding: 4px 0;
    i {
      padding-left: 8px;
    }
    .title {
      flex: auto;
    }
  }
  .container {
    padding-top: 36px;
  }
}
</style>
