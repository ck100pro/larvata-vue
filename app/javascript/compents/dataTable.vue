<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="itemsPerPage"
            :page.sync="page"
            hide-default-footer
            loading-text="資料讀取中請稍候"
            item-key="name"
            class="elevation-1"
        ></v-data-table>

        <v-pagination
          v-model="page"
          :length="pageCount"
          :total-visible="10"
          @input="pagination"
        ></v-pagination>
    </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      itemsPerPage: 10,
      page: 1,
      pageCount: 0,
      start: 0
    }
  },
  computed: {
    headers () {
      return [
        {
          text: '建立日期',
          value: 'created_at',
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
    call_api() {
      this.axios.get('api/manufacturer/datatables',{
        params: {
          start: this.start,
          length: this.itemsPerPage
        }
      }).then((response) => {
        console.log(response.data)
        this.items = response.data.data
        this.pageCount = response.data.count / this.itemsPerPage
      }).catch((error) => {

      }).then(() => {

      })
    },
    pagination(page) {
      this.page = page
      this.start = this.start
      console.log(page)
    }
  },
  created: function() {
    this.call_api()
  }
}
</script>