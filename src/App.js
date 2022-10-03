import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import "./styles/main.scss";

function App() {
   return (
      <ThemeContextProvider>
         <Router basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Projects" element={<Projects />} />
               <Route path="/404" element={<NotFound />} />
               <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
            <Footer />
         </Router>
      </ThemeContextProvider>
   );
}

export default App;
