import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Technology from "./pages/Technology/Technology.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/technology" element={<Technology />} />
            </Routes>
        </Router>
    )
}

export default App
