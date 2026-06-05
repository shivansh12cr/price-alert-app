import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                background: "#1e293b",
                padding: "20px",
                display: "flex",
                gap: "20px",
                alignItems: "center"
            }}
        >
            <h2
                style={{
                    color: "white",
                    marginRight: "20px"
                }}
            >
                Price Alert Pro
            </h2>

            <Link
                style={{ color: "white" }}
                to="/"
            >
                Dashboard
            </Link>

            <Link
                style={{ color: "white" }}
                to="/create"
            >
                Create Alert
            </Link>

            <Link
                style={{ color: "white" }}
                to="/alerts"
            >
                My Alerts
            </Link>
        </nav>
    );
}

export default Navbar;