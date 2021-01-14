<template>
    <div>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    詎詮科技驗證顧問有限公司
                </v-list-item-title>

                <v-list-item-subtitle>
                    Prodigy Technology Consultant Co.,Ltd.
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
        
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>

            <v-list-group
            v-for="item in items"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
            >
                <template v-slot:activator>
                    <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </template>
    
                <v-list-item
                    v-for="child in item.items"
                    :key="child.title"
                    :href="child.href"
                >
                    <v-list-item-content>
                        <v-list-item-title v-text="child.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            propDrawer: this.drawer,
            items: [
                {
                    action: 'mdi-folder',
                    items: [
                        { title: '報價單管理' },
                        { title: '專案管理' },
                        { title: '測試工單' },
                        { title: '驗證工單' },
                        { title: '服務請款單' },
                        { title: '相關資料維護' }
                    ],
                    title: '業務及專案流程',
                },
                {
                    action: 'mdi-folder',
                    items: [
                        { title: '公司資料', href:'/company' },
                        { title: '訪談紀錄', href:'/talk' }
                    ],
                    title: '客戶管理',
                },
                {
                    action: 'mdi-folder',
                    items: [
                        { title: '報表總覽' },
                        { title: '費用申請單' }],
                    title: '報表及單據申請',
                },
                {
                    action: 'mdi-folder',
                    items: [
                        { title: '組織及權限管理' },
                        { title: '公司資料管理' },
                        { title: '公司資料設定' },
                        { title: '系統參數設定' }],
                    title: '系統設定',
                }
                ],
        }
    }
}
</script>

<style>

</style>