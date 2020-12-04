<template>
    <v-container class="pa-3 white">
        <v-row>
            <v-col cols='12'>
                <v-btn
                    @click="view = !view"
                    block>
                    篩選條件</v-btn>
            </v-col>
            

            <v-col class="px-10" cols='12' v-if="view">
                <v-row>
                    <v-col cols='2'>
                        組織
                    </v-col>
                    <v-col cols='10'>
                        <v-autocomplete
                            @click="MouseEvent"
                            label="請選擇"
                            :loading="items.org.loading"
                            :items='items.org.data'
                            id='org'
                            name='org_id'
                            clearable
                            hide-no-data
                            solo
                            dense
                            ></v-autocomplete>
                    </v-col>

                </v-row>
                <v-row>
                    <v-col cols='2'>
                        廠商
                    </v-col>
                    <v-col cols='10'>
                        <v-autocomplete
                            label="請選擇"
                            id='manufacturer'
                            name='manufacturer_id'
                            :loading="items.manufacturer.loading"
                            :items='items.manufacturer.data'
                            @click="MouseEvent"
                            clearable
                            hide-no-data
                            solo
                            dense
                            ></v-autocomplete>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            view: false,
            loading: false,
            items: { 
                org: {
                    url: 'org',
                    loading: 'false',
                    data: []
                    },
                manufacturer: {
                    url: 'manufacturer',
                    loading: 'false',
                    data: []
                } }
        }
    },
    methods: {
        MouseEvent(e) {
            let targetValue = this['items'][`${e.target.id}`]
            let url = targetValue['url']
            targetValue['loading'] = true

            this.axios.get(`/${url}`).then((response) => {
                // setTimeout用於模擬資料延遲回傳
                setTimeout(() => {
                    targetValue['data'] = response.data
                    targetValue['loading'] = false
                }, 500)
            })
        }
    },
    watch: {

    }
}
</script>

<style scoped>
    
</style>