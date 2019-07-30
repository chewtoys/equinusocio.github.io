const NAME = 'Development tips and projects'
const DESCRIPTION =
  "I'm Mattia Astorino, UX Engineer in Milan and member of Open Source Design."

export const headConfig = {
  TITLE: 'Development tips and projects',
  COMMON_META: [
    {
      charset: 'utf-8'
    },
    {
      name: 'author',
      content: NAME
    },
    {
      name: 'theme-color',
      content: '#ffffff'
    },
    {
      name: 'creator',
      content: 'Astorino Mattia, UX Engineer'
    },
    {
      name: 'publisher',
      content: 'equinusocio.dev'
    },
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover'
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default'
    },
    {
      hid: 'description',
      name: 'description',
      content: DESCRIPTION
    },
    {
      hid: 'ip:name',
      itemprop: 'name',
      content: NAME
    },
    {
      hid: 'ip:headline',
      itemprop: 'headline',
      content: `${NAME}, UX Engineer`
    },
    {
      hid: 'ip:description',
      itemprop: 'description',
      content: DESCRIPTION
    },
    {
      hid: 'ip:image',
      vmid: 'ip:image',
      itemprop: 'image',
      content: 'https://equinusocio.dev/cover.jpg'
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: NAME
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://equinusocio.dev'
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: NAME
    },
    {
      hid: 'og:image',
      vmid: 'og:image',
      property: 'og:image',
      content: 'https://equinusocio.dev/cover.jpg'
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: DESCRIPTION
    },
    {
      hid: 'og:locale',
      property: 'og:locale',
      content: 'en_US'
    },
    {
      hid: 'twitter:card',
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: NAME
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: DESCRIPTION
    },
    {
      hid: 'twitter:creator',
      property: 'twitter:creator',
      content: '@equinusocio'
    },
    {
      hid: 'twitter:image',
      vmid: 'twitter:image',
      property: 'twitter:image',
      content: 'https://equinusocio.dev/cover.jpg'
    },
    {
      hid: 'twitter:url',
      property: 'twitter:url',
      content: 'https://equinusocio.dev'
    },
    {
      property: 'twitter:creator',
      content: '@equinusocio'
    },
    {
      property: 'twitter:site',
      content: 'https://equinusocio.dev'
    }
  ],
  COMMON_LINKS: [
    {
      rel: 'alternate',
      type: 'application/atom+xml',
      href: 'https://equinusocio.dev/feed.xml',
      title: 'Equinusocio Blog'
    },
    {
      rel: 'style',
      href: 'https://unpkg.com/modern-normalize@latest/modern-normalize.css'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.png'
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '512x512',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '167x167',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      sizes: '192x192',
      type: 'mage/png',
      href: '/apple-touch-icon.png'
    }
  ],
  COMMON_SCRIPTS: []
}
