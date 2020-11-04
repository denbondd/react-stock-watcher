import request from 'request';

function getData(symbol, dataType, months, onFinish) {
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
                onFinish(filterData(body, dataType, from));
            });
    } catch (e) {
        console.error(e);
    };
}

function filterData(body, dataType, date) {
    let data = []
    switch (dataType) {
        case 'one':
            body['o'].forEach((element) => {
                date.setDate(date.getDate() + 1);
                data.push({ time: getFormattedDate(date), value: element });
            });
            break;
        case 'all':
            for (let i = 0; i < body['o'].length; i++) {
                date.setDate(date.getDate() + 1);
                data.push({
                    time: getFormattedDate(date),
                    open: body['o'][i],
                    high: body['h'][i],
                    low: body['l'][i],
                    close: body['c'][i]
                });
            };
            break;
        default:
            data.push('Wrong dataType')
            break;
    }
    return data;
}

function getFormattedDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export { getData };