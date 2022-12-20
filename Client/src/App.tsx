import Products from "./components/Products/Products";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
