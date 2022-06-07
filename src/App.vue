<template>
  <div class="wrapper">

    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">Вью-СиЛиАй</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>



  </div>
</template>

<script>
export default {
  data(){
        return{
      links:[
        { title: 'Home', url: '/'},
        { title: 'Example', url: '/example'},
        { title: 'Store', url: '/store'},
      ]
    }
  }
}
</script>

<style lang="scss">
.navbar-item{
  &.router-link-exact-active{
    color: #000
  }
}
</style>
