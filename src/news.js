const request = require('request')
const news = (callback) => {
    const url = 'https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=c9e66893f0b44607a42296825beaf786'
    request({url, json: true, headers:{'User-Agent': 'request'}}, (err, res) => {
        if(err) {
            callback('Error has occurred', undefined)
        } else if(res.body.articles.length == 0) {
            callback('Invalid search', undefined)
        } else if(res.body.message) {
            callback(res.body.message, undefined)
        } else {
            callback(undefined, res.body.articles)
        }
    })
}
module.exports = news