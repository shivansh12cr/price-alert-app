import {
    useState,
    useEffect
} from "react";

import api from "../services/api";
import socket from "../services/socket";

import toast from "react-hot-toast";

import Navbar from "../components/Navbar";

function Dashboard() {

    const [symbol, setSymbol] =
        useState("BTCUSDT");

    const [price, setPrice] =
        useState("");

    useEffect(() => {

        socket.on(
            "price-alert",
            (data) => {

                toast.success(
                    `${data.symbol} hit target`
                );

            }
        );

        return () =>
            socket.off(
                "price-alert"
            );

    }, []);

    const getPrice = async () => {

        try {

            const response =
                await api.get(
                    `/market/${symbol}`
                );

            setPrice(
                response.data.price
            );

        } catch (error) {

            console.log(error);

        }

    };

    return (
        <>
            <Navbar />

            <div className="container">

                <div className="card">

                    <h1>
                        Dashboard
                    </h1>

                    <br />

                    <input
                        type="text"
                        value={symbol}
                        onChange={(e) =>
                            setSymbol(
                                e.target.value
                            )
                        }
                    />

                    <button
                        onClick={getPrice}
                    >
                        Get Price
                    </button>

                    <br />
                    <br />

                    <h2>
                        Current Price:
                        {" "}
                        {price}
                    </h2>

                </div>

            </div>
        </>
    );
}

export default Dashboard;