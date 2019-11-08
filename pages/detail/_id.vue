<template>
  <div class="page">
    <div>
      <h1 class="title">detail</h1>
      <div class="" v-text="id"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'detail',
  data() {
    return {
      name: 'detail',
      title: '详情 - xxxxxxx 标题',
      keywords: '详情 - xxxxxxx 关键字',
      description: '详情 - xxxxxxx 摘要'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'keywords', name: 'keywords', content: this.keywords },
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  },
  asyncData({ $axios, params }) {
    return { project: 'nuxt', id: params.id }
  }
}
</script>
