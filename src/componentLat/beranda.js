import React, { Component } from 'react'
import MyNav from './mynav'
import MyBox from './box'

class Beranda extends Component {
    render() {
        return (
            <div>
                <MyNav type="myberanda">Tentang<br />Adiwiyata</MyNav>
                <br />
                <div className="row">
                    <MyBox type="col-md-8 mx-auto " css="box-horizontal" title="Apa itu Adiwiyata?">
                        <p>Adiwiyata adalah upaya membangun program atau wadah yang
                        baik dan ideal untuk mendapatkan ilmu pengetahuan dan berbagai
                        norma serta etika yang dapat menjadi dasar manusia menuju terciptanya
                        kesejahteraan hidup untuk Cita-cita pembangunan berkelanjutan. Adiwiyata
                            merupakan nama program pendidikan lingkungan hidup.</p>
                    </MyBox>
                </div>
                <div className="row">
                    <MyBox type="col-md-4" css="box-vertical" title="Sejarah Adiwiyata">
                        <p>Tahun 1975 merupakan Sejarah awal tercentusnya pendidikan lingkungan hidup di
                        Indonesia yang diselengarakan pertama kali oleh Institut Keguruan dan
                        Ilmu Pendidikan (IKIP) Jakarta. Pada 2009 dikeluarkan Peraturan Menteri
                        Negara Lingkungan Hidup Nomor 02 tahun 2009 tentang Pedoman Pelaksanaan Program
                        Adiwiyata. Namun belum dapat menjawab kendala yang dihadapi daerah khususnya sekolah
                        pelaksana program.Dari kendala tersebut, maka dilakukan penyempurnaan Buku Panduan
                        Pelaksanaan Program Adiwiyata 2012 dan sistem pemberian penghargaan yang tetap merujuk
                        pada kebijakan-kebijakan yang telah ditetapkan Kementerian Lingkungan Hidup dan Kemendikbud.
                        </p>
                    </MyBox>
                    <MyBox type="col-md-4 mx-auto" css="box-vertical">
                        <img src="adiwiyata.jpg" alt="logo adiwiyata"/>
                    </MyBox>
                    <MyBox type="col-md-4" css="box-vertical" title="Prisip Adiwiyata">
                        <p>
                        <b>Edukatif</b> Prinsip ini mendidik programer Adiwiyata untuk mengedepankan nilai-nilai pendidikan
                         dan pembangunan karakter peserta didik agar mencintai lingkungan hidup, baik lingkungan dalam sekolah, 
                         di rumah dan di masyarakat
                        <br/>
                        <b>Partisipatif</b> Komunitas sekolah harus terlibat dalam manajemen sekolah yang meliputi keseluruhan 
                        proses perencanaan, pelaksanaan dan evaluasi sesuai tanggungjawab dan peran.Partisipatif ini juga 
                        merupakan sebuah sikap yang harus dituntujukkan kepada lingkungan. 
                        <br/>
                        <b>Berkelanjutan</b> Seluruh kegiatan harus dilakukan secara terencana dan terus menerus secara 
                        komprehensif dan berkesinambungan. Yang berarti tidak hanya pada acara atau festival tertentu saja
                        </p>
                    </MyBox>
                </div>
                <div className="row">
                    <MyBox type="col-md-8 mx-auto " css="box-horizontal" title="Manfaat Adiwiyata">
                        <p>
                                Mendukung pencapaian standar kompetensi/ kompertensi dasar dan standar kompetensi 
                                lulusan (SKL) pendidikan dasar dan menengah. Meningkatkan efesiensi penggunaan dana 
                                operasional sekolah melalui penghematan dan pengurangan konsumsi dari berbagai sumber daya dan energi.

                                Menciptakan kebersamaan warga sekolah dan kondisi belajar mengajar yang lebih nyaman dan kondusif.

                                Menjadi tempat pembelajaran tentang nilai-nilai pemeliharaan dan pengelolaan lingkungan hidup 
                                yang baik dan benar bagi warga sekolah dan masyarakat sekitar.

                                Meningkatkan upaya perlindungan dan pengelolaan lingkungan hidup meIalui kegiatan pengendalian 
                                pencemaran, pengendalian kerusakan dan pelestarian fungsi lingkungan di sekolah.
                        </p>
                    </MyBox>
                </div>
            </div>
        )
    }
}

export default Beranda