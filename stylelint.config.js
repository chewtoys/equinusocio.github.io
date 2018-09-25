module.exports = {
  'processors': ['@mapbox/stylelint-processor-arbitrary-tags'],
  'extends': 'stylelint-config-standard',
  'ignoreFiles': ['**/*.js', '.nuxt/**/*'],
  'rules': {
    'color-hex-case': 'upper',
    'max-empty-lines': null,
    'no-missing-end-of-source-newline': true,
    'no-descending-specificity': null,
    'selector-type-no-unknown': null,
    'at-rule-empty-line-before': null,
    'rule-empty-line-before': null,
    'string-quotes': 'single',
    'at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': [
          'define-mixin',
          'mixin',
          'import-normalize'
        ]
      }
    ],
    'property-no-vendor-prefix': true,
    'max-nesting-depth': 3,
    'property-no-unknown': [true, {
      'ignoreProperties': ['contain', 'appearance']
    }]
  }
}
