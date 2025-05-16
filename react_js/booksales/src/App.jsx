import { Routes, Route } from "react-router-dom";

import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import Home from "./Pages";
import Books from "./Pages/Books";
import BookDetail from "./Pages/Books/BookDetail";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";

import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

import './global.css'

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetail />} />
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
