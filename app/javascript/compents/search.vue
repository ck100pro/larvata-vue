<template>
    <div>
        <v-col cols='12'>
            <v-btn
                @click="view = !view"
                block>
                篩選條件</v-btn>
        </v-col>
        <v-col cols='12' v-if="view">
            <v-col cols='12'>
                    <v-autocomplete
                        label="承包廠商"
                        :items='items'
                        ></v-autocomplete>
            </v-col>
            <v-col cols='12'>
                    <v-autocomplete
                        v-model="search"
                        label="廠商類別"
                        ></v-autocomplete>
            </v-col>
        </v-col>
    </div>
</template>

<script>
export default {
    data() {
        return {
            view: false,
            search: '',
            items: [1, 2, 3]
        }
    }
}
</script>