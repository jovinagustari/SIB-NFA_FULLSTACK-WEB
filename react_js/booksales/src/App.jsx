import { Routes, Route } from "react-router-dom";
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages'
import Books from './pages/books'
import Team from './pages/team'
import Contact from './pages/contact'

import Login from './pages/auth/login'
import Register from './pages/auth/register'

import './styles.css'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
