<template>
  <div class="page">
    <div v-text="project + ' : ' + ip"></div>
    <div class="title">公用组件</div>
    <logo />
    <div class="title">静态资源</div>
    <img src="~/assets/img/image.png" class="thum" />
    <div class="title">链接</div>
    <nuxt-link to="/list">列表</nuxt-link>
    <div class="title">第三方组件，moment</div>
    <div class="title" v-text="'$moment() : ' + $moment()"></div>
    <div class="title">第三方组件，lodash</div>
    <div
      class="title"
      v-text="'$_.indexOf([1, 2, 1, 2], 2) : ' + $_.indexOf([1, 2, 1, 2], 2)"
    ></div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      name: 'index',
      title: '首页 - xxxxx 标题',
      description: '首页 - xxxxxxx 摘要',
      fetchList: [],
      ip: ''
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  },
  // SSR 最重要的一个键, 支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象。
  async asyncData({ $axios }) {
    /* const ip = await $axios.$get('http://icanhazip.com')
    return { project: 'nuxt', ip } */
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  },
  // fetch() {}, //	与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据。详情请参考 关于fetch方法的文档。
  // head() {}, //	配置当前页面的 Meta 标签, 详情参考 页面头部配置API。
  // layout: '', //	指定当前页面使用的布局（layouts 根目录下的布局文件）。详情请参考 关于 布局 的文档。
  // loading: true, //	如果设置为false，则阻止页面自动调用this.$nuxt.$loading.finish()和this.$nuxt.$loading.start(),您可以手动控制它,请看例子,仅适用于在nuxt.config.js中设置loading的情况下。请参考API配置 loading 文档。
  // transition: '', //	指定页面切换的过渡动效, 详情请参考 页面过渡动效。
  // scrollToTop: '', //	布尔值，默认: false。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景。
  // validate: '', //	校验方法用于校验 动态路由的参数。
  // middleware: '' //	指定页面的中间件，中间件会在页面渲染之前被调用， 请参考 路由中间件。
  created() {
    this.fetchBaseURL()
  },
  methods: {
    async fetchBaseURL() {
      const list = await this.$axios.$get('/ua/show/page?current=1&size=5')
      this.fetchList = list.data.records
    }
  }
}
</script>

<style lang="scss" scoped>
// 样式
.page {
  background-color: #efefef;
  .title {
    padding: 10px 0;
  }
  .thum {
    width: 190px;
  }
}
</style>
