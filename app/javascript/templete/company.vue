<template>
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
</template>

<script>
import larvataSearch from '../compents/search'
import larvataDataTable from '../compents/dataTable'

export default {
    components: { larvataSearch, larvataDataTable }
}
</script>

<style>

</style>