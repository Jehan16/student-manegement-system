import React from "react";
import {Link} from 'react-router-dom';

function Header() {

    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <a class="navbar-brand" href="/" style={{color: "red"}}>Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/add">Create Student</a> */}
                            <Link to="/add" className="nav-link">Create Student</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;