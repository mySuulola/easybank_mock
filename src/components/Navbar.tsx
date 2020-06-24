import React from 'react';

import logo from "../assets/images/logo.svg"
import Button from '../common/Button';

function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light  row m-0">
                <a className="navbar-brand col-2" href="/">
                <img src={logo} className="d-inline-block align-top" alt="easy bank logo" loading="lazy" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col collapse navbar-collapse justify-content-center"  id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a href="/" className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></a>
                        <a href="/" className="nav-item nav-link" >Features</a>
                        <a href="/" className="nav-item nav-link" >Pricing</a>
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-end">
                    <Button />
                </div>
            </nav>
    )
}


export default Navbar
