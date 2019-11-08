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
    return { name: 'detail' }
  },
  asyncData({ $axios, params }) {
    return { project: 'nuxt', id: params.id }
  }
}
</script>
