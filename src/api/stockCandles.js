const request = require('request');

let currentDate = new Date().getTime();
var data = [{time: '2020-10-14', value: 140}]
request(`https://finnhub.io/api/v1/stock/candle?symbol=IBM&resolution=D&from=1602288000&to=${currentDate}&token=bu1ut0f48v6sao5m3j2g`, { json: true }, function (error, response, body) {
    if (error) {
        console.log(error);
        return;
    }
    body['o'].forEach((element, index) => {
        let number = index + 1;
        data.push({ time: `${(2020).toString()}-10-${(14 + number).toString()}`, value: element })
    });
    data.shift();
});

export { data };