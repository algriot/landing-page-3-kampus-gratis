import React from 'react'
import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'
import BannerSilabus from '../../component/silabus/homeSilabus/BannerSilabus'
import InfoMatakuliah from '../../component/silabus/InfoMatakuliah'


const DetailMatakuliah = () => {
    return (
        <>
            <Header4 />
            <BannerSilabus />

            <main>
                <section>
                    <div className="container">
                        <InfoMatakuliah />
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-10">
                                <div class="accordion" id="accordion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button collapsed bg-dark text-light text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                <p className='ms-auto p-0 m-0'>Deskripsi MataKuliah</p>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
                                            <div class="accordion-body bg-secondary text-light">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a interdum odio. Mauris consectetur tortor ut enim efficitur tincidunt. Morbi porttitor auctor risus, vitae pretium nisi. Quisque interdum tortor eget odio rutrum, non semper urna cursus. Nullam rhoncus diam et nulla semper, ac tempus tellus pellentesque. Donec tincidunt laoreet nunc sit amet efficitur. Phasellus neque lacus, facilisis nec enim ac, sollicitudin euismod diam. Curabitur placerat ex ac lectus elementum blandit. Sed efficitur condimentum tortor. Proin ac nisl augue. Vivamus mollis iaculis mauris. Donec consequat erat lectus, eu lobortis nunc tincidunt vitae.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* <div>
                    <div className="row justify-content-center">
                        <div className="d-flex justify-content-center align-items-center col-md-4 border border-dark p-4">
                            <p className="m-0 fw-bold">Kompetensi Dasar</p>
                        </div>
                        <div className="col-md-6 border border-dark"></div>
                    </div>


                    <div className="row justify-content-center">
                        <div className="d-flex justify-content-center align-items-center col-md-4 border border-dark p-4">
                            <p className="m-0 fw-bold">Indikator</p>
                        </div>
                        <div className="col-md-6 border border-dark"></div>
                    </div>


                    <div className="row justify-content-center">
                        <div className="d-flex justify-content-center align-items-center col-md-4 border border-dark p-4">
                            <p className="m-0 fw-bold">Pengalaman Pembelajaran</p>
                        </div>
                        <div className="col-md-6 border border-dark"></div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="d-flex justify-content-center align-items-center col-md-4 border border-dark p-4">
                            <p className="m-0 fw-bold">Materi Ajar</p>
                        </div>
                        <div className="col-md-6 border border-dark"></div>
                    </div>

                </div> */}

                        <div className="row justify-content-center py-5 px-3 px-md-0">
                            <div className="col-md-10 p-0 detail-matkul">
                                <table className='table table-responsive rounded-3 m-0 text-dark'>
                                    <tr>
                                        <td className="col p-4 text-center detail-title">Kompetensi Dasar</td>
                                        <td className="col-9"></td>
                                    </tr>
                                    <tr>
                                        <td className="col p-4 text-center">Indikator</td>
                                        <td className="col-9"></td>
                                    </tr>
                                    <tr>
                                        <td className="col p-4 text-center">Pengalaman Pembelajaran</td>
                                        <td className="col-9"></td>
                                    </tr>
                                    <tr>
                                        <td className="col p-4 text-center">Materi Ajar</td>
                                        <td className="col-9"></td>
                                    </tr>
                                    <tr>
                                        <td className="col p-4 text-center">Waktu</td>
                                        <td className="col-9"></td>
                                    </tr>
                                    <tr>
                                        <td className="col p-4 text-center">Alat,Bahan,Sumber Ajar</td>
                                        <td className="col-9"></td>
                                    </tr>
                                    <tr>
                                        <td className="col p-4 text-center">Penilaian</td>
                                        <td className="col-9"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer3 />

        </>
    )
}

export default DetailMatakuliah