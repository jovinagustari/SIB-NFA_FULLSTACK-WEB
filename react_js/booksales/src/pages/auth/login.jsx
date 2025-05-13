import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="container">
            <div className="row justify-content-center b-auth-bg p-5">
                <div className="col-md-6">
                    <div className="card b-card p-4">
                    <h2 className="text-center my-2">Login</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-semibold">Password</label>
                            <input type="password" className="form-control" id="password" required />
                        </div>
                        <button type="submit" className="btn b-btn-fill w-100 fw-semibold">Login</button>
                    </form>
                    <p className="mt-3 text-center">
                        Don't have an account? <Link to="/auth/register">Register Here</Link>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};