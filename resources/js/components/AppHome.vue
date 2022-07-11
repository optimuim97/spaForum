<template>
    <div>
        <toolbar></toolbar>
            <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import toolbar  from './Toolbar'
    import appFooter from './AppFooter'

    export default{
        components:
        {
            toolbar,
            appFooter
        }
    }
</script>



