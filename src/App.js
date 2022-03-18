import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from "./pages/Home";
import AddToken from "./pages/AddToken";
import EditToken from './pages/EditToken';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add-token" element={<AddToken />} />
            <Route exact path="/edit-token" element={<EditToken />} />
        </Routes>
    </Router>
  )
}

export default App;