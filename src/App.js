import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./containers/Navigation";
import Sidebar from "./containers/Sidebar";
import "./styles/main.scss";

function App() {
   return (
      <ThemeContextProvider>
         <Router basename={process.env.PUBLIC_URL}>
            <Navigation />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Projects" element={<Projects />} />
               <Route path="/Work/:ID" element={<Work />} />
               <Route path="/About" element={<About />} />
               <Route path="/Contact" element={<Contact />} />
               <Route path="/404" element={<NotFound />} />
               <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
            <Sidebar />
         </Router>
      </ThemeContextProvider>
   );
}

export default App;
