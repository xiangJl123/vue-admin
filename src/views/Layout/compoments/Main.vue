<template>
    <div class="index-main">
       <div class="main">

           <router-view />
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    }
}
</script>
<style lang="scss">
@import "../../../style/config.scss";
    .index-main{
        position: absolute;
        background-color: #f7f7f7;
        left: $navNenu;
        top: 70px;
        right: 0;
        bottom: 0;
        box-sizing: border;
        padding:30px;
        .main{
            width: 100%;
            height: 100%;
            background-color: #fff;
        }
    }
</style>