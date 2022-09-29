module.exports = {
    content: [
      '~/assets/data/websites.ts'
    ],
    safeList: [
        {
            pattern: /bg-(red|green|blue|orange|purple)-(300|400|500|600|700)/,
        }
    ],
    theme: {
        extend: {
            width: {
                '2xl': '1380px',
                'xl': '1150px',
                'lg': '950px',
            },
        },
    },
}
