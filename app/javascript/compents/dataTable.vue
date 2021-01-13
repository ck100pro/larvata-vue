<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="itemsPerPage"
            :page.sync="page"
            :loading='loading'
            hide-default-footer
            loading-text="資料讀取中請稍候"
            item-key="name"
            class="elevation-1"
        >
          <template v-slot:[`item.options`]="{ item }">
            <larvata-data-table-options
            :item="item"
            ></larvata-data-table-options>
          </template>
        </v-data-table>

        <div class="text-center pt-2">
          <v-pagination
            v-model="page"
            :length="pageCount"
            :total-visible="totalVisible"
            @input="inputPagination"
          ></v-pagination>

          <v-text-field
            :value="itemsPerPage"
            label="Items per page"
            type="number"
            :min="perPageMin"
            :max="perPageMax"
            @input="inputPerPage"
          ></v-text-field>
      </div>
    </div>
</template>

<script>
  import larvataDataTableOptions from './options'

  export default {
    data () {
      return {
        items: [],
        itemsPerPage: 10,
        page: 1,
        pageCount: 0,
        start: 0,
        totalVisible: 10,
        perPageMax: 20,
        perPageMin: 5,
        loading: false
      }
    },
    computed: {
      headers () {
        return [
          {
            text: '操作',
            value: 'options',
            sortable: false
          },
          {
            text: '建立日期',
            value: 'created_at',
            sortable: false
          },
          {
            text: '組織名稱',
            value: 'name',
            sortable: false
          },
          {
            text: '負責人',
            value: 'principal',
            sortable: false
          },
          { 
            text: '編碼',
            value: 'code',
            sortable: false
          },
          { 
            text: '電話',
            value: 'tel',
            sortable: false
          },
          { 
            text: '信箱',
            value: 'email',
            sortable: false
          },
          { 
            text: '結帳日',
            value: 'account_day',
            sortable: false
          },
        ]
      },
    },
    methods: {
      datatableAttr() {
        this.loading = true
        this.axios.get('api/manufacturer/datatables',{
          params: {
            start: this.start,
            length: this.itemsPerPage
          }
        }).then((response) => {
          console.log(response.data)
          this.items = response.data.data
          this.pageCount = Math.ceil(response.data.count / this.itemsPerPage)
        }).catch((error) => {

        }).then(() => {
          this.loading = false
        })
      },
      inputPagination(e) {
        this.page = parseInt(e, 10)
        this.start = (this.page - 1) * this.itemsPerPage
        this.datatableAttr()
      },
      inputPerPage(e) {
        let inputNum = parseInt(e, 10)
        if (inputNum > this.perPageMax) {
          this.itemsPerPage = this.perPageMax
        } else if (inputNum < this.perPageMin) {
          this.itemsPerPage = this.perPageMin
        } else {
          this.itemsPerPage = inputNum
        }
        this.datatableAttr()
      }
    },
    created: function() {
      this.datatableAttr()
    },
    components: { larvataDataTableOptions }
  }
</script>