import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CreateAlert from "./pages/CreateAlert";
import Alerts from "./pages/Alerts";

import { Toaster } from "react-hot-toast";

function App() {

    return (

        <BrowserRouter>

            <Toaster />

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/create"
                    element={<CreateAlert />}
                />

                <Route
                    path="/alerts"
                    element={<Alerts />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default App;