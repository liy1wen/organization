let baseUrl = '';
if (process.env.NODE_ENV == 'production') {
    baseUrl = 'https://xxxxxxxxx';
} else if (process.env.NODE_ENV == 'development') {
    baseUrl = '/api'
}

export {
    baseUrl
}