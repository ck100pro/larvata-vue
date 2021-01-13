<template >
    <div>
        <v-icon
            small
            class="mr-2"
            @click="showItem()"
        >
        mdi-eye
        </v-icon>
        <v-icon
            small
            class="mr-2"
            @click="editItem()"
        >
        mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="deleteItem()"
        >
        mdi-delete
        </v-icon>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object
        },
        methods: {
            showItem() {
                console.log(this.item)
            },
            editItem() {
                console.log(this.item)
            },
            deleteItem () {
                console.log(this.item)
            }
        }
    }
</script>

<style>

</style>