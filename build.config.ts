import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/currency',
    'src/aria-attributes',
    'src/date',
    'src/continents',
    'src/position',
    'src/html-tag-names',
    'src/language',
    'src/colors',
    'src/programming-language',
    'src/country-flags',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
