import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from "./pages/Home";
import AddToken from "./pages/AddToken";

const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add-token" element={<AddToken />} />
        </Routes>
    </Router>
  )
}

export default App;