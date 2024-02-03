<script>
export default{
  data() {
    return {
      isMenuCondensed: false,
    };
  },
}
</script>
<template>
  <div id="header">
    <div class="container">
      <div class="header-top"></div>
      <div class="header-middle"></div>
      <div class="header-bottom"></div>
    </div>
  </div>
  <div id="menu">
    <div class="container">
      <ul class="menu-nav">
        <li class="menu-item">
          <NuxtLink activeClass="active" to="/"><span>Trang chủ</span></NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink activeClass="active" to="/gioi-thieu"><span>Giới Thiệu</span></NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink activeClass="active" to="/san-pham"><span>Sản Phẩm</span></NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink activeClass="active" to="/tin-tuc"><span>Tin Tức</span></NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink activeClass="active" to="/lien-he"><span>Liên Hệ</span></NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>
<style scoped="scss">
#menu{
  ul.menu-nav{
    display: flex;
    align-items: center;
    width: 100%;
    list-style-type: none;
    justify-content: center;

    .menu-item{
      padding: 0 15px;
      z-index: 1;
      position: relative;
      a{
        font-size: 17px;
        color: #575147;
        line-height: 40px;
        text-decoration: none;
        font-family: 'QsMe';
        display: block;
        text-transform: capitalize;
        position: relative;
        width: 100%;
        span{

        }
      }

      a:hover, a.active{
        color: #9d7955;
        span{

        }
      }

    }

  }
}
</style>