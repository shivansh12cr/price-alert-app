const express = require("express");

const {
    createAlert,
    getAlerts,
    deleteAlert
} = require("../controllers/alertController");

const router = express.Router();

router.post("/", createAlert);

router.get("/", getAlerts);

router.delete("/:id", deleteAlert);

module.exports = router;