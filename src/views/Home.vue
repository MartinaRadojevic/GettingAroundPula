<template>
    <div class="home">
      <img v-if="mobileVersion()" class="home-logo" alt="GettingArround Pula" src="@/assets/pula-home.png">
      <img v-else class="home-logo" alt="GettingArround Pula" src="@/assets/pula_web.jpg">
      <div class="functions-wrapper col-6">
        <button class="function">
          <router-link to="/login">
            <span>+</span><span class="btn-text">PRIJAVA KORISNIKA</span>
          </router-link>
        </button>
        <button class="function">
          <router-link to="/sign-up">
            <span>+</span><span class="btn-text">REGISTRACIJA</span>
          </router-link>
        </button>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    mobileVersion() {
      return window.innerWidth < 762;
    }
  }
}
</script>
<style scoped lang="scss">
.home {
  background-color: #7DAA96;
  height: 100vh;
  .home-logo {
    max-height: 500px;
  }
  a {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white!important;
  }
}
</style>
