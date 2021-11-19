export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt_demo_20211109',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/i18n.js',
    '~/plugins/event-bus.ts'
  ],

  generate: {
    routes: ['/en-US', '/en-US/teachers','/en-US/students','/en-US/books', '/zh-ZN', '/zh-ZN/teachers', '/zh-ZN/students', '/zh-ZN/books']
  },
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor:['element-ui','vue-i18n']
  },

  router: {              // customize nuxt.js router (vue-router).
    middleware: 'i18n'   // middleware all pages of the application
  },
}
