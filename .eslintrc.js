module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'react-app',
        'plugin:react/recommended',
        'airbnb',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    parser: 'babel-eslint',

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'linebreak-style': 0,
        'react/prop-types': 0,
        'import/prefer-default-export': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'react/prefer-stateless-function': 0,
        'react/state-in-constructor': 0,
        'react/no-unused-state': -0,
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
            { usePrettierrc: true },
        ],
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'jsx-a11y/label-has-for': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'react/jsx-props-no-spreading': 'off',
    },
};
