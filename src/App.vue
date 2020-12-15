<template>
  <div id="app">
    <div class="nav-icons-wrapper">
      <div class="square"></div>
      <div class="circle"></div>
      <div class="triangle-down"></div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/"><a class="navbar-brand" style="color: white">GettingArround Pula</a></router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/login"><a class="nav-link">Prijava korisnika</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sign-up"><a class="nav-link" href="#">Registracija</a></router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
a {
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar-light .navbar-nav .nav-link {
  color: white!important;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.square {
  height: 10px;
  width: 10px;
  background-color: white;
  margin-right: 4px;
}

.circle {
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 50%;
  margin-right: 4px;
}

.triangle-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid white;
  margin-right: 4px;
}

.functions-wrapper {
  margin-top: 5%;
  text-align: right;
  text-align: -webkit-right;
}

.function {
  width: 80%;
  padding: 4px 30px;
  margin: 15px 0 30px;
  color: white;
  background-color: #00370A;
  display: flex;
  justify-content: space-between;
}

.home-logo {
  width: 100%;
}

.nav-icons-wrapper {
  background-color: #427F5D;
  min-height: 15px;
  padding: 4px 0 4px 90%;
  display: flex;
}

.icon {
  align-items: flex-end;
}

.navbar-brand {
  color: white;
}

.navbar {
  overflow-y: hidden;
  position: relative;
  scrollbar-width: none;
  white-space: nowrap;
  background-color: #00370A!important;
  min-height: 50px;
  align-content: center;
  padding: 5px;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
