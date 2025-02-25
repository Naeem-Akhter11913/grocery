
module.exports = {
    BASE_URL: process.env.DEVELOPMENT_TYPE === 'development' ? process.env.DEV_BASE_URL : process.env.PROD_BASE_URL,
    PERSONAL_API_KEY: process.env.DEVELOPMENT_TYPE === 'development' ? process.env.DEV_PERSONAL_API_KEY : process.env.PROD_PERSONAL_API_KEY,
}