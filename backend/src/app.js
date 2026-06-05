const express = require("express");
const cors = require("cors");
const marketRoutes = require("./routes/marketRoutes");
const alertRoutes = require("./routes/alertRoutes");

const app = express();
app.use(cors({
    origin:
    "https://price-alert-app-tau.vercel.app"
}));

app.use(express.json());
app.use("/api/market", marketRoutes);
app.use("/api/alerts", alertRoutes);

app.get("/", (req, res) => {
    res.send("API Running");
});

module.exports = app;