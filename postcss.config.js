module.exports = {
  plugins: {
    stylelint: {
      options: {
        configFile: './stylelint.config.js'
      }
    },
    'postcss-easy-import': {
      extensions: '.pcss'
    },
    'postcss-preset-env': {
      stage: 0,
      autoprefixer: {
        grid: true
      },
      insertBefore: {
        'nesting-rules': require('postcss-mixins')()
      }
    },
    cssnano: { preset: 'advanced' },
    'postcss-reporter': { clearReportedMessages: true }
  }
}
