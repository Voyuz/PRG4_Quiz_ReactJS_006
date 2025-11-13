import React from "react";

function HeaderComponent() {
    return (
        <nav className="navbar navbar-expand-lg nvabar-light bg-light">
            <div className="container">
                <a href="/" className="navbar-brand">
                    Toko Inovasi
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collpase navbar-collapse" id="narbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="/list-inovasi" className="nav-link">
                                Inovasi
                            </a>
                        </li>
                        <div className="nav-item">
                            <a href="/about" className="nav-link">
                                Tentang
                            </a>
                        </div>
                        <div className="nav-item">
                            <a href="/contact" className="nav-link">
                                Kontak
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;
