import { Routes, Route } from "react-router-dom";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Home from "./pages";
import Books from "./pages/books";
import Team from "./pages/team";
import Contact from "./pages/contact";

import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

import './App.css'

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth Pages */}
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App;
