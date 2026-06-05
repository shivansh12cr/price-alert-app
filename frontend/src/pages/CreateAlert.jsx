import { useState } from "react";

import api from "../services/api";

import toast from "react-hot-toast";

import Navbar from "../components/Navbar";

function CreateAlert() {

    const [form, setForm] =
        useState({

            symbol: "BTCUSDT",

            assetType: "crypto",

            condition: "ABOVE",

            targetPrice: "",

            email: ""

        });

    const handleChange =
        (e) => {

            const {
                name,
                value
            } = e.target;

            if (
                name === "assetType"
            ) {

                let symbol =
                    "BTCUSDT";

                if (
                    value === "gold"
                ) {
                    symbol =
                        "XAU/USD";
                }

                if (
                    value === "silver"
                ) {
                    symbol =
                        "XAG/USD";
                }

                setForm({
                    ...form,
                    assetType:
                        value,
                    symbol
                });

                return;
            }

            setForm({
                ...form,
                [name]:
                    value
            });

        };

    const createAlert =
        async (e) => {

            e.preventDefault();

            try {

                await api.post(
                    "/alerts",
                    form
                );

                toast.success(
                    "Alert Created"
                );

                setForm({

                    symbol:
                        form.assetType ===
                        "crypto"
                            ? "BTCUSDT"
                            : form.assetType ===
                              "gold"
                            ? "XAU/USD"
                            : "XAG/USD",

                    assetType:
                        form.assetType,

                    condition:
                        "ABOVE",

                    targetPrice:
                        "",

                    email:
                        ""

                });

            } catch (err) {

                console.log(err);

                toast.error(
                    "Failed to create alert"
                );

            }

        };

    return (

        <>

            <Navbar />

            <div className="container">

                <div className="card">

                    <h1>
                        Create Alert
                    </h1>

                    <br />

                    <form
                        onSubmit={
                            createAlert
                        }
                    >

                        <label>
                            Asset Type
                        </label>

                        <select
                            name="assetType"
                            value={
                                form.assetType
                            }
                            onChange={
                                handleChange
                            }
                        >

                            <option value="crypto">
                                Crypto
                            </option>

                            <option value="gold">
                                Gold
                            </option>

                            <option value="silver">
                                Silver
                            </option>

                        </select>

                        <label>
                            Symbol
                        </label>

                        <input
                            name="symbol"
                            value={
                                form.symbol
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="BTCUSDT"
                        />

                        <label>
                            Email
                        </label>

                        <input
                            name="email"
                            value={
                                form.email
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Email"
                        />

                        <label>
                            Condition
                        </label>

                        <select
                            name="condition"
                            value={
                                form.condition
                            }
                            onChange={
                                handleChange
                            }
                        >

                            <option value="ABOVE">
                                ABOVE
                            </option>

                            <option value="BELOW">
                                BELOW
                            </option>

                        </select>

                        <label>
                            Target Price
                        </label>

                        <input
                            type="number"
                            name="targetPrice"
                            value={
                                form.targetPrice
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Target Price"
                        />

                        <button
                            type="submit"
                        >
                            Create Alert
                        </button>

                    </form>

                </div>

            </div>

        </>

    );
}

export default CreateAlert;