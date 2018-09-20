const NAME = 'Mattia Astorino'
const DESCRIPTION = 'CSS/HTML architect in Monza and member of Open Source Design.'

module.exports = Object.freeze({
  TITLE: 'Mattia Astorino - Equinusocio',
  COMMON_META: [
    { charset: 'utf-8' },
    { name: 'HandheldFriendly', content: 'True' },
    { name: 'author', content: NAME },
    { name: 'creator', content: 'Astorino Mattia, Frontend Developer' },
    { name: 'publisher', content: 'equinsuocha.io' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' },
    { hid: 'description', name: 'description', content: DESCRIPTION },
    { hid: 'ip:name', itemprop: 'name', content: NAME },
    { hid: 'ip:headline', itemprop: 'headline', content: `${NAME}, Frontend Developer` },
    { hid: 'ip:description', itemprop: 'description', content: DESCRIPTION },
    { hid: 'ip:image', itemprop: 'image', content: '' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:title', property: 'og:title', content: NAME },
    { hid: 'og:url', property: 'og:url', content: '' },
    { hid: 'og:site_name', property: 'og:site_name', content: NAME },
    { hid: 'og:image', property: 'og:image', content: NAME },
    { hid: 'og:description', property: 'og:description', content: DESCRIPTION },
    { hid: 'og:locale', property: 'og:locale', content: 'default' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', name: 'twitter:title', content: NAME },
    { hid: 'twitter:description', name: 'twitter:description', content: DESCRIPTION },
    { hid: 'twitter:creator', name: 'twitter:creator', content: '@equinusocio' }
  ],
  COMMON_LINKS: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/x-icon', href: '/apple-touch-icon.png' },
    { rel: 'icon', sizes: '192x192', type: 'mage/png', href: '/apple-touch-icon.png' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/minireset.css/0.0.2/minireset.min.css' }
  ]
})