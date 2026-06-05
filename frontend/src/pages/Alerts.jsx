import {
    useEffect,
    useState
} from "react";

import api from "../services/api";

import Navbar from "../components/Navbar";

function Alerts() {

    const [alerts, setAlerts] =
        useState([]);

    const fetchAlerts =
        async () => {

            try {

                const res =
                    await api.get(
                        "/alerts"
                    );

                setAlerts(
                    res.data
                );

            } catch (err) {

                console.log(err);

            }

        };

    const deleteAlert =
        async (id) => {

            try {

                await api.delete(
                    `/alerts/${id}`
                );

                fetchAlerts();

            } catch (err) {

                console.log(err);

            }

        };

    useEffect(() => {

        fetchAlerts();

    }, []);

    return (
        <>
            <Navbar />

            <div className="container">

                <div className="card">

                    <h1>
                        My Alerts
                    </h1>

                    <br />

                    <table>

                        <thead>

                            <tr>

                                <th>
                                    Symbol
                                </th>

                                <th>
                                    Condition
                                </th>

                                <th>
                                    Target
                                </th>

                                <th>
                                    Email
                                </th>

                                <th>
                                    Status
                                </th>

                                <th>
                                    Delete
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {alerts.map(
                                (alert) => (

                                    <tr
                                        key={
                                            alert._id
                                        }
                                    >

                                        <td>
                                            {
                                                alert.symbol
                                            }
                                        </td>

                                        <td>
                                            {
                                                alert.condition
                                            }
                                        </td>

                                        <td>
                                            {
                                                alert.targetPrice
                                            }
                                        </td>

                                        <td>
                                            {
                                                alert.email
                                            }
                                        </td>

                                        <td>
                                            {
                                                alert.triggered
                                                    ? "Triggered"
                                                    : "Pending"
                                            }
                                        </td>

                                        <td>

                                            <button
                                                onClick={() =>
                                                    deleteAlert(
                                                        alert._id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </div>
        </>
    );
}

export default Alerts;