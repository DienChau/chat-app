import Home from "./pages/Home";
import "./App.css";
import Test from "./pages/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
