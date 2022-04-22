module.exports = {
    '*.{js,jsx,ts,tsx}': [
        'eslint --color --max-warnings=0 --fix src',
        () => 'tsc-files --noEmit',
    ],
    '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write src'],
};
