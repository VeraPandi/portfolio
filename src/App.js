import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./containers/Navigation";
import Sidebar from "./containers/Sidebar";
import "./styles/main.scss";

function App() {
   return (
      <ThemeContextProvider>
         <Router>
            <Navigation />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Project" element={<Project />} />
               <Route path="/About" element={<About />} />
               <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Sidebar />
         </Router>
      </ThemeContextProvider>
   );
}

export default App;
