const axios = require("axios");

const getCryptoPrice = async (symbol) => {

    const map = {
        BTCUSDT: "BTC",
        ETHUSDT: "ETH",
        SOLUSDT: "SOL",
        BNBUSDT: "BNB",
        XRPUSDT: "XRP",
        DOGEUSDT: "DOGE"
    };

    const coin = map[symbol.toUpperCase()];

    if (!coin) {
        throw new Error(
            `Unsupported crypto symbol: ${symbol}`
        );
    }

    const response =
        await axios.get(
            `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD`
        );

    return Number(
        response.data.USD
    );
};

const getGoldPrice = async () => {

    const response =
        await axios.get(
            `https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${process.env.TWELVE_DATA_API_KEY}`
        );

    return Number(
        response.data.price
    );
};

const getSilverPrice = async () => {

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