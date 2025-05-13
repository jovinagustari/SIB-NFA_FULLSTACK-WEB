import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <Link to="/" class="b-nav-link px-2 b-text-brown">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/books" class="b-nav-link px-2 b-text-brown">
              Books
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/team" class="b-nav-link px-2 b-text-brown">
              Team
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="b-nav-link px-2 b-text-brown">
              Contact
            </Link>
          </li>
        </ul>
        <p class="text-center text-body-secondary">&copy; 2025 Nurul Fikri Academy</p>
      </footer>
    </div>
  );
};
