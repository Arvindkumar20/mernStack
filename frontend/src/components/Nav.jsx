import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark text-light">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">Navbar</Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link  text-light" aria-current="page" to="/addtask">Add Task</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/list">Tasks</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/history">History</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
