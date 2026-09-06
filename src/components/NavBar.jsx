import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        CareerAI
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/resume">AI Match</Link>
        <Link to="/applications">
          Applications
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;