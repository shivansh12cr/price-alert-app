const { getCryptoPrice } = require("../services/marketService");

const getPrice = async (req, res) => {
    try {
        const price = await getCryptoPrice(
            req.params.symbol
        );

        res.json({
            symbol: req.params.symbol,
            price
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getPrice
};