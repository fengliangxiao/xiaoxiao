<template>
    <div class="header">
        <div class="header-logo header-common">
            <a class="web-font" href="javascript:void(0)">xiaoxiao</a>
        </div>
        <div class="header-nav header-common">
            <nav>
                <a href="/">首页</a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    menus: []
  }
}
</script>
<style scoped>
a {
    text-decoration: none;
    color:black;
}
.header {
    height: 60px;
}
.header-logo {
    float:left;
    font-size: large;
    margin-left: 60px
}
.header-nav {
    float: right;
    margin-right: 15%
}
.header-common {
    height: 100%;
    display: flex;
    align-items: center
}
@font-face {
  font-family: 'webfont';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_46ebx1n57jv.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_46ebx1n57jv.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_46ebx1n57jv.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_46ebx1n57jv.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_46ebx1n57jv.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_46ebx1n57jv.svg#NotoSansHans-Black') format('svg'); /* iOS 4.1- */
}
.web-font{
    font-family:"webfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
</style>
