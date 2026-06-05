const {
    getCryptoPrice,
    getGoldPrice,
    getSilverPrice
} = require("../services/marketService");

const getPrice = async (req, res) => {

    try {

        const symbol =
            req.params.symbol
                .toLowerCase();

        let price;
        let displaySymbol;

        if (
            symbol === "gold"
        ) {

            price =
                await getGoldPrice();

            displaySymbol =
                "XAU/USD";

        } else if (
            symbol === "silver"
        ) {

            price =
                await getSilverPrice();

            displaySymbol =
                "XAG/USD";

        } else {

            price =
                await getCryptoPrice(
                    req.params.symbol
                        .toUpperCase()
                );

            displaySymbol =
                req.params.symbol
                    .toUpperCase();
        }

        res.json({
            symbol:
                displaySymbol,
            price
        });

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });

    }
};

module.exports = {
    getPrice
};