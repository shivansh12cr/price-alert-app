const express = require("express");

const {
    getPrice
} = require("../controllers/marketController");

const router = express.Router();

router.get("/:symbol", getPrice);

module.exports = router;