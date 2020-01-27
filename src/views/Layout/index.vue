<template>
    <div>
        首页
        <LayoutHeader></LayoutHeader>
        <LayoutNav></LayoutNav>
        <LayoutMain></LayoutMain>   
    </div>
</template>
<script>
import LayoutHeader from './compoments/Header'
import LayoutNav from './compoments/Nav'
import LayoutMain from './compoments/Main'
export default {
    components:{
        LayoutHeader,
        LayoutNav,
        LayoutMain
    },
    setup(){

    }
}
</script>
<style lang="scss">
    
</style>