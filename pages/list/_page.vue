<template>
  <div class="container">
    <div>
      <h1 class="title">list</h1>
    </div>
    <div>
      <div v-for="(item, index) in list" :key="index">
        <nuxt-link
          :to="'/detail/' + item.id"
          v-text="index + ': ' + item.title"
        />
      </div>
    </div>
    <el-pagination
      :total="total"
      :current-page.sync="pageIndex"
      @current-change="change"
    />
  </div>
</template>

<script>
export default {
  layout: 'list',
  data() {
    return {
      name: 'list',
      title: '列表 - xxxxxxx 标题',
      description: '列表 - xxxxxxx 摘要',
      // params
      keywords: '',
      pageIndex: 0,
      pageSize: 10,
      total: 0,
      // data
      list: []
      // other
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  },
  async asyncData({ $axios, params }) {
    const list = await $axios.$get(
      '/ua/show/page?current=' + (params.page || 1) + '&size=10'
    )
    return {
      list: list.data.records,
      total: list.data.total,
      pageIndex: parseInt(params.page) || 1
    }
  },
  methods: {
    change(val) {
      console.log('change')
      this.$router.push('/list/' + val)
    }
  }
}
</script>
