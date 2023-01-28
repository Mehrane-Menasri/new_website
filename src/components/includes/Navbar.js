import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand">WEBDEV</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">الرئيسية</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">من نحن؟</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link">المشاريع</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link">الخدمات</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">اتصل بنا</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar