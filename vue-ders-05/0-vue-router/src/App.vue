<template>
  <div class="container mt-3">
    <div>
      <router-link
        class="nav-link d-inline fw-bold fs-2"
        active-class="active"
        to="/"
      >
        Anasayfa
      </router-link>
      <router-link
        class="nav-link d-inline fw-bold fs-2"
        active-class="active"
        to="/hakkimda"
      >
        Hakkımda
      </router-link>
      <router-link
        class="nav-link d-inline fw-bold fs-2"
        active-class="active"
        to="/detay/123"
      >
        Detay
      </router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<style>
.nav-link {
  color: #fa6558;
  border: 1px solid #fa6558;
}
.nav-link:hover {
  color: initial;
}
.active {
  background-color: #fa6558;
  color: #fff;
}
</style>
