import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/question1" element={<Question1 />} />

                <Route path="/question2" element={<Question2 />} />

                <Route path="/question3" element={<Question3 />} />

                <Route path="/question4" element={<Question4 />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;