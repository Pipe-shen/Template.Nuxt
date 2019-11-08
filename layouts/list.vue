<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  name: 'List',
  components: {
    Header,
    Footer
  }
}
</script>
