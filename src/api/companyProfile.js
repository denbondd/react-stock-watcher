import request from 'request';

function getCompanyProfile(code, onFinish) {
    request(`https://finnhub.io/api/v1/stock/profile2?` +
        `symbol=${code}&token=bu1ut0f48v6sao5m3j2g`, { json: true },
        (error, response, body) => {
            if (error) {
                console.log(error);
                return;
            }
            onFinish(body);
        });
}

export { getCompanyProfile };