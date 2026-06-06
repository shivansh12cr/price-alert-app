const axios = require("axios");

const TWELVE_DATA_BASE = "https://api.twelvedata.com/price";

const normalizeCryptoSymbol = (raw) => {

    const symbol = String(raw || "")
        .trim()
        .toUpperCase();

    if (symbol.includes("/")) {
        return symbol;
    }

    const quotes = ["USDT", "USDC", "USD"];

    for (const quote of quotes) {
        if (
            symbol.length > quote.length &&
            symbol.endsWith(quote)
        ) {
            return `${symbol.slice(0, -quote.length)}/USD`;
        }
    }

    return `${symbol}/USD`;
};

const fetchPrice = async (symbol) => {

    const response = await axios.get(TWELVE_DATA_BASE, {
        params: {
            symbol,
            apikey: process.env.TWELVE_DATA_API_KEY
        }
    });

    const data = response.data || {};
    const price = Number(data.price);

    if (data.status === "error" || !Number.isFinite(price)) {
        throw new Error(
            data.message ||
                `Failed to fetch price for ${symbol}`
        );
    }

    return price;
};

const getCryptoPrice = async (symbol) => {
    return fetchPrice(normalizeCryptoSymbol(symbol));
};

const getGoldPrice = async () => {
    return fetchPrice("XAU/USD");
};

const getSilverPrice = async () => {
    return fetchPrice("XAG/USD");
};

module.exports = {
    getCryptoPrice,
    getGoldPrice,
    getSilverPrice,
    normalizeCryptoSymbol
};
