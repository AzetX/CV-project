module.exports = {
    root: true,
    env: {
        node: true,
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended',
        'plugin:jsdoc/recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi': 2,
        'comma-dangle': ['error', {
            'objects': 'always',
        }],
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true, }],

        'valid-jsdoc': [2, {
            'preferType': {
                'String': 'string',
                'Number': 'number',
                'Boolean': 'boolean',
                'object': 'Object',
                'array': 'Array',
            },
            'prefer': {
                'return': 'returns',
            },
            'requireReturn': false,
            'requireReturnDescription': false,
        }],
        'jsdoc/require-returns-description': 0,
        'jsdoc/require-returns-check': 0,
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true,
            },
        },
        {
            files: [
                '*.spec.js'
            ],
            rules: {
                'require-jsdoc-except/require-jsdoc': 'off',
                'jsdoc/check-tag-names': 'off',
            },
        },
        {
            files: [
                'tests/utils.js'
            ],
            rules: {
                'jsdoc/no-undefined-types': 'off',
            },
        },
        {
            files: [
                'resources/**/*.stories.js'
            ],
            rules: {
                'valid-jsdoc': 'off',
                'require-jsdoc-except/require-jsdoc': 'off',
            },
        }
    ],
};
