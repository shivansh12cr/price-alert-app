const cron = require("node-cron");
const { getIO } = require("../sockets/socketHandler");
const Alert = require("../models/Alert");
const {
    getCryptoPrice,
    getGoldPrice,
    getSilverPrice
} = require("../services/marketService");
const {
    sendAlertEmail
} = require("../services/emailService");


cron.schedule("*/1 * * * *", async () => {
    console.log("Checking alerts...");

    try {
        const alerts = await Alert.find({
            triggered: false
        });

        for (const alert of alerts) {

            let currentPrice;

            if (
                alert.assetType ===
                "crypto"
            ) {

                currentPrice =
                    await getCryptoPrice(
                        alert.symbol
                    );

            }

            if (
                alert.assetType ===
                "gold"
            ) {

                currentPrice =
                    await getGoldPrice();

            }

            if (
                alert.assetType ===
                "silver"
            ) {

                currentPrice =
                    await getSilverPrice();

            }

            let shouldTrigger = false;

            if (
                alert.condition === "ABOVE" &&
                currentPrice >= alert.targetPrice
            ) {
                shouldTrigger = true;
            }

            if (
                alert.condition === "BELOW" &&
                currentPrice <= alert.targetPrice
            ) {
                shouldTrigger = true;
            }

            if (shouldTrigger) {

                alert.triggered = true;

                await alert.save();

                const io = getIO();

                io.emit("price-alert", {
                    symbol: alert.symbol,
                    currentPrice,
                    targetPrice:
                        alert.targetPrice
                });

                await sendAlertEmail(
                    alert.email,
                    alert.symbol,
                    currentPrice
                );


                console.log(
                    `ALERT TRIGGERED -> ${alert.symbol}`
                );
            }
        }
    } catch (error) {
        console.log(error.message);
    }
});