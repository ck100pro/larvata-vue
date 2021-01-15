<template>
    <v-container fluid>
        <!-- 基本資訊 -->
        <v-row>
            <v-col cols="6">
                <v-card
                    class="mx-auto"
                    outlined
                    >
                    <v-toolbar
                        flat
                        color="grey"
                        dark
                    >
                        <v-toolbar-title>基本資訊</v-toolbar-title>
                    </v-toolbar>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>客戶代號</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="Larvata"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>客戶簡稱</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="果子云"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>公司全名</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="果子云數位科技有限公司"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                
                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>英文全名</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="Larvata Digital Technology Co. Ltd."
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>統一編號</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="54368812"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>統一編號</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="王小明 (Windy Wang)"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>主要產品</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="Projector、LCD TV、LCD Monitor"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>放款條件</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="月結 30 天"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <!-- 公司資料 -->
            <v-col cols="6">
                <v-card
                    class="mx-auto"
                    outlined
                    >
                    
                    <v-toolbar
                        flat
                        color="grey"
                        dark
                    >
                        <v-toolbar-title>公司資料</v-toolbar-title>
                    </v-toolbar>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>負責人</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="王大明"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>成立日期</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="(無)"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>公司電話</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="0229987099"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                
                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>公司傳真</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="(無)"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>公司地址</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="台北市中正區北平東路16號3樓之1"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>英文地址</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="3F.-1, No. 16, Beiping E. Rd., Zhongzheng Dist., Taipei City 100, Taiwan (R.O.C.)"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>帳單地址</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="台北市中正區北平東路16號3樓之1"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>報告地址</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="台北市中正區北平東路16號3樓之1"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                        <v-col cols="4">
                            <v-subheader>網址</v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                :readonly="true"
                                solo
                                value="https://larvata.tw"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <v-card
                    class="mx-auto"
                    outlined
                    >
                    <v-toolbar
                        flat
                        color="grey"
                        dark
                    >
                        <v-toolbar-title>其他</v-toolbar-title>
                    </v-toolbar>

                    <v-row class="mx-auto">
                        <v-col cols="2">
                            <v-subheader>備註</v-subheader>
                        </v-col>
                        <v-col cols="10">
                            <v-textarea
                                name="input-7-1"
                                solo
                                auto-grow
                                :readonly="true"
                                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>