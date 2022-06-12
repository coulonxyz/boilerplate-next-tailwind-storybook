module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@cazoo/eslint/react'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-object-literal-type-assertion': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/ban-ts-comment': 0,
    },
};
