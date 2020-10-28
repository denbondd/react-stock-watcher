const request = require('request');

function getData(id, symbol, months, onFinish, myRef) {
    let data = [{ time: '2020-10-14', value: 140 }];
    let to = new Date();
    let from = new Date();
    from.setMonth(from.getMonth() - months);
    try {
        request(`https://finnhub.io/api/v1/stock/candle` +
            `?symbol=${symbol}` +
            `&resolution=D` +
            `&from=${Math.round(from.getTime() / 1000)}` +
            `&to=${Math.round(to.getTime() / 1000)}` +
            `&token=bu1ut0f48v6sao5m3j2g`,
            { json: true },
            function (error, response, body) {
                if (error) {
                    console.log(error);
                    return;
                }
                let date = from;
                body['o'].forEach((element) => {
                    date.setDate(date.getDate() + 1);
                    data.push({ time: getFormattedDate(date), value: element });
                });
                data.shift();
                onFinish(id, symbol, data, myRef);
            });
    } catch(e) {
        console.error(e);
    };
}

function getFormattedDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export { getData };