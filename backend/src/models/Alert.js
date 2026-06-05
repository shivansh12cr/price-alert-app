const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
    {
        symbol: {
            type: String,
            required: true
        },

        assetType: {
            type: String,
            enum: ["gold", "crypto", "silver"],
            required: true
        },

        condition: {
            type: String,
            enum: ["ABOVE", "BELOW"],
            required: true
        },

        targetPrice: {
            type: Number,
            required: true
        },

        triggered: {
            type: Boolean,
            default: false
        },
        email: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Alert", alertSchema);