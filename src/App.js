import React, { Component } from 'react';
import Main from './componentLat/main'
import { Link } from 'react-router-dom'
import MyBox from './componentLat/box'

class Lat extends Component {
    render() {
        return (
            <div >
                <div className="row">
                    {/* GRID NAVBAR */}
                    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                        <a class="navbar-brand" href="#">ADIWIYATA</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link class="nav-item nav-link" to="/">Beranda</Link>
                                <Link class="nav-item nav-link" to="/galery">Galery</Link>
                                <Link class="nav-item nav-link" to="/kalender">Kalender</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* GRID BODY 1 */}
                <div className="row">
                    <div className="col">
                        <Main />
                    </div>
                </div>

                <div className="row text-center footer ">
                    <MyBox type="col-md mx-auto">
                    <p className="text-center">Made By Agnes Juliana</p>
                    </MyBox>
                </div>
            </div>

        )
    }
}

export default Lat