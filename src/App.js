import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Prediction from "./containers/Prediction";
import Feedback from "./containers/Feedback";
import PageNotFound from "./containers/PageNotFound";

function App() {
  return (
    <div className="App" style={{ display: "flex", flex: 1 }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/predict" element={<Prediction />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/prediction" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
