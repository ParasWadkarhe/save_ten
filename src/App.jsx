import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Community from "./pages/Community";
import Fundraising from "./pages/Fundraising";
import Stories from "./pages/Stories";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/fundraising" element={<Fundraising />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
