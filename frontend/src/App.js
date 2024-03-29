// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { KEY } from "./localKey";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import VideoPage from "./pages/VideoPage/VideoPage";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<PrivateRoute><HomePage /></PrivateRoute>}/>
        <Route path="/video/:id" element={<PrivateRoute><VideoPage /></PrivateRoute>}/>
        <Route path="/search/" element={<PrivateRoute><SearchPage /></PrivateRoute>}/>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
