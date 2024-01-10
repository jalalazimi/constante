import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/currency',
    'src/date',
    'src/continents',
    'src/position',
    'src/html-tag-names',
    'src/language',
    'src/programming-language',
    'src/country-flags',
    'src/colors',
    'src/web-namespaces',
    'src/svg-tag-names',
    'src/mathml-tag-names',
    'src/aria-attributes',
    'src/javascript-types',
    'src/http-status-codes',
    'src/mime-types',
    'src/http-methods',
    'src/http-header-names',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
