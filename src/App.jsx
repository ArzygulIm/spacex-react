import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Technology from "./pages/Technology/Technology.jsx";
import DevProcess from './pages/DevProcess/DevProcess.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/technology" element={<Technology />} />
                <Route path={"/flights" ||"/guarantees"||"/about"||"/contacts"} element={<DevProcess />} />
            </Routes>
        </Router>
    )
}

export default App
