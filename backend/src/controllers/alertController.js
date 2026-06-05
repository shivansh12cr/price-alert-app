const Alert = require("../models/Alert");

const createAlert = async (req, res) => {

    try {

        const alert =
            await Alert.create(req.body);

        res.status(201).json(alert);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getAlerts = async (req, res) => {

    try {

        const alerts =
            await Alert.find();

        res.json(alerts);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const deleteAlert = async (req, res) => {

    try {

        await Alert.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: "Alert Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createAlert,
    getAlerts,
    deleteAlert
};