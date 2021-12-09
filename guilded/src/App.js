import Login from "./pages/landing"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import MainFeed from "./pages/dashboard/mainFeed";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}>
              <Route path="mainfeed" element={<MainFeed/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
