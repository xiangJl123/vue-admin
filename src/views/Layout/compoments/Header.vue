<template>
    <div class="index-header">
        header
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
    .index-header{
          position: fixed;
        width: 100%;
        height: 70px;
        top: 0px;
        left: $navNenu;
        background-color: #fff;
        box-shadow:0 3px 16px 16px #ebeef5;
    }
</style>