<template>
        <v-app id="inspire">
            <navigation-drawer 
                :drawer='drawer'></navigation-drawer>

            <v-app-bar app>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>Application</v-toolbar-title>
            </v-app-bar>

            <v-main>
                <router-view></router-view>
            </v-main>
        </v-app>
</template>

<script>
import navigationDrawer from './compents/navigationDrawer'

export default {
    data () {
        return {
            drawer: false
        }
    },
    components: { navigationDrawer }
}
</script>

<style scoped>
    .main-body {
        height: 100%;
    }
    .main-search {
        border: 1px solid gray;
    }
</style>
