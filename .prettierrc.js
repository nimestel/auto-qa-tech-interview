module.exports = {
    printWidth: 80,
    proseWrap: 'never',
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    bracketSpacing: true,
    jsxBracketSameLine: true,
    arrowParens: 'always',
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            options: {
                parser: 'babel',
            },
        },
        {
            files: ['*.ts', '*.tsx'],
            options: {
                parser: 'typescript',
            },
        },
        {
            files: ['*.json', '.*rc', '.yaml', '.yml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
