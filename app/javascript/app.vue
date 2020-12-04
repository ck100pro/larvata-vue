<template>
        <v-app id="inspire">
            <v-navigation-drawer
                v-model="drawer"
                app
            >
            </v-navigation-drawer>

            <v-app-bar app>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>Application</v-toolbar-title>
            </v-app-bar>

            <v-main>
                <div class="main-body grey lighten-4 pa-8">
                    <div class="pa-3 white">
                        <div class="main-container white pa-7">
                            <!-- 搜尋區塊 -->
                            <div class="main-search">
                                <larvata-search></larvata-search>
                            </div>

                            <v-divider class="my-4"></v-divider>

                            <!-- 資料列表區塊 -->
                            <div class="main-datatable">
                                <larvata-data-table></larvata-data-table>
                            </div>
                        </div>
                    </div>
                </div>
            </v-main>
        </v-app>
</template>

<script>
import larvataSearch from './compents/search'
import larvataDataTable from './compents/dataTable'

export default {
  data () {
    return {
      drawer: null
    }
  },
  components: { larvataSearch, larvataDataTable }
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
