const nodemailer = require("nodemailer");

const transporter =
nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendAlertEmail = async (
    email,
    symbol,
    currentPrice
) => {

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Price Alert: ${symbol}`,
        text: `
${symbol} reached your target price.

Current Price: ${currentPrice}
`
    });

};

module.exports = {
    sendAlertEmail
};