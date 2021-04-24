import React, { Component } from 'react'
import MyNav from './mynav'
import MyBox from './box'

class Galery extends Component {
    render() {
        return (
            <div>
                <MyNav type="mygalery">Galeri<br />Adiwiyata</MyNav>
                <br />

                <div className="row">
                    <MyBox type="col-md-6 mx-auto" >
                        <br />
                        <br />
                        <h5 className="text-center">
                            <i>
                            "Ciri orang yang bijaksana adalah memanfaatkan alam secukupnya,
                            ikut melestarikan alam dan menjaga kebersihan lingkungan"
                            </i>
                        </h5>
                        <br />
                        <br />
                    </MyBox>
                </div>

                <div className="row text-center">
                    <MyBox type="col-md-8 mx-auto" css="box-carousel" title="Dokumentasi Adiwiyata">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="/galeri/adiwiyata1.jpg" alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="/galeri/adiwiyata2.jpg" alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="/galeri/adiwiyata3.jpg" alt="Third slide" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </MyBox>
                </div>

                <div className="row">
                    <MyBox type="col-md-3 mx-auto" css="box-foto">
                        <img src="/galeri/adiwiyata4.jpeg" alt="Third slide"/>
                    </MyBox>
                    <MyBox type="col-md-3 mx-auto" css="box-foto">
                        <img src="/galeri/adiwiyata5.jpg" alt="Third slide"/>
                    </MyBox>
                    <MyBox type="col-md-3 mx-auto" css="box-foto">
                        <img src="/galeri/adiwiyata6.jpg" alt="Third slide"/>
                    </MyBox>
                    <MyBox type="col-md-3 mx-auto" css="box-foto">
                        <img src="/galeri/adiwiyata7.JPG" alt="Third slide"/>
                        <br/>
                        <br/>
                    </MyBox>
                </div>

                <div className="row">
                    <MyBox type="col-md-6 mx-auto" >
                        <br />
                        <br />
                        <h5 className="text-center">
                            <i>
                                "Mari menyelamatkan bumi dengan hal-hal kecil seperti
                                membuang sampah pada tempatnya serta tidak menggunakan
                                plastik dan kertas secara berlebihan"
                            </i>
                        </h5>
                        <br />
                        <br />
                    </MyBox>
                </div>

            </div>

            

        )
    }
}

export default Galery
