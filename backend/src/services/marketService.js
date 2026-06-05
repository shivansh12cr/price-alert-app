const axios = require("axios");

const getCryptoPrice =
async (symbol) => {

    const response =
        await axios.get(
            `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
        );

    return Number(
        response.data.price
    );
};

const getGoldPrice =
async () => {

    const response =
        await axios.get(
            `https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${process.env.TWELVE_DATA_API_KEY}`
        );

    return Number(
        response.data.price
    );
};

const getSilverPrice =
async () => {

    const response =
        await axios.get(
            `https://api.twelvedata.com/price?symbol=XAG/USD&apikey=${process.env.TWELVE_DATA_API_KEY}`
        );

    return Number(
        response.data.price
    );
};

module.exports = {
    getCryptoPrice,
    getGoldPrice,
    getSilverPrice
};