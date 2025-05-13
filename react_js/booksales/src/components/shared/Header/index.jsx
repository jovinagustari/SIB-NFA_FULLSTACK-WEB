import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <Link to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
                            <i className="fa-solid fa-book fa-2xl b-text-brown"></i>
                            <span className="ms-2 fs-4 fw-semibold b-text-brown">bookies</span>
                        </Link>
                    </div>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => `b-nav-link px-2 b-text-brown ${isActive ? 'active' : ''}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/books"
                                className={({ isActive }) => `b-nav-link px-2 b-text-brown ${isActive ? 'active' : ''}`}
                            >
                                Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/team"
                                className={({ isActive }) => `b-nav-link px-2 b-text-brown ${isActive ? 'active' : ''}`}
                            >
                                Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => `b-nav-link px-2 b-text-brown ${isActive ? 'active' : ''}`}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="col-md-3 text-end">
                        <Link to="/auth/login">
                            <button type="button" className="btn b-btn-outline me-2">
                                Login
                            </button>
                        </Link>
                        <Link to="/auth/register">
                            <button type="button" className="btn b-btn-fill">
                                Register
                            </button>
                        </Link>
                    </div>
                </header>
            </div>
        </>
    );
};