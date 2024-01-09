import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      '.yarn/**',
      'benchmark/**',
    ],
    rules: {
      'ts/no-duplicate-enum-values': 'off',
    },
  },
)
