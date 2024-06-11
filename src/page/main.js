import FormDK from '../component/formDK';
import {Link } from 'react-router-dom';

function Main() {
    
    return (
        <div>

            <div className="container-fluid p-0 pb-5 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#header-carousel" data-slide-to="1"></li>
                        <li data-target="#header-carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{ minHeight: '300px' }}>
                            <img className="position-relative w-100" src="./img/main.jpg" style={{ minheight: '300px', objectfit: 'cover' }} alt=''/>
                        </div>
                        <div className="carousel-item" style={{ minHeight: '300px' }}>
                            <img className="position-relative w-100" src="./img/main2.jpg" style={{ minheight: '300px', objectfit: 'cover' }} alt=''/>
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" style={{ width: '100%', maxwidth: '900px' }}>
                                    <h5 className="text-white text-uppercase mb-md-3">Learning By Doing </h5>
                                    <h1 className="display-3 text-white mb-md-4">Cao Đẳng Chính Quy</h1>
                                    <a  className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Đọc Thêm</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ minHeight: '300px' }}>
                            <img className="position-relative w-100" src="./img/main2.jpg" style={{ minheight: '300px', objectfit: 'cover' }} alt=''/>
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" style={{ width: '100%', maxwidth: '900px' }}>
                                    <h5 className="text-white text-uppercase mb-md-3">Learning By Doing </h5>
                                    <h1 className="display-3 text-white mb-md-4">Khóa Học Ngắn Hạn</h1>
                                    <a  className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Đọc Thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid rounded mb-4 mb-lg-0" src="./img/anhtruong.jpg" alt="" />
                        </div>
                        <div className="col-lg-7">
                            <div className="text-left mb-4">
                                <h5 className="text-primary text-uppercase mb-3" style={{ letterspacing: '5px' }}>Tổng Quan</h5>
                                <h1>TRƯỜNG CAO ĐẲNG AN NINH MẠNG ISPACE</h1>
                            </div>
                            <p>Trường Cao Đẳng An ninh mạng iSPACE là đơn vị thuộc NGS Group. iSPACE tiên phong trong đào tạo thực hành từ năm 2008 theo tiêu chí tuyển sinh đi liền tuyển dụng.
                                Từ năm 2015, Trường iSPACE thực hiện chương trình tuyển sinh và đào tạo đặc biệt “CNTT- Học để làm việc ngay”. Chương trình mang đến cho các bạn trẻ đam mê CNTT ba giá trị vượt trội: 70% học thực hành, 100% làm việc ngay, 100% thêm nghề phụ.
                                Năm học 2021- 2022, Trường Cao đẳng An ninh mạng iSPACE mở rộng và nâng cấp cơ sở vật chất với quy mô hiện đại và sáng tạo theo xu hướng trường học quốc tế.</p>
                            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Đọc Thêm</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h5 style={{ letterspacing: '5px' }}>NGÀNH HỌC</h5>
                        <h1 className="text-primary text-uppercase mb-3">CHƯƠNG TRÌNH ĐÀO TẠO CHỈ 2 NĂM 3 THÁNG VÀ CÁC KHÓA HỌC NGẮN HẠN</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="./img/ANM.jpg" alt="" style={{ width: "200px" }} />
                                <a className="cat-overlay text-white text-decoration-none" href="">
                                    <h4 className="text-white font-weight-medium">An ninh mạng</h4>
                                    <Link to="/ANM" className="text-primary">ĐĂNG KÍ NGAY</Link>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="./img/PTPM.jpg" alt="" style={{ width: "200px" }} />
                                <a className="cat-overlay text-white text-decoration-none" href="">
                                    <h4 className="text-white font-weight-medium">Phát triển phần mềm</h4>
                                    <Link to="/LTW" className="text-primary">ĐĂNG KÍ NGAY</Link>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="./img/TKDH.jpg" alt="" style={{ width: "200px" }} />
                                <a className="cat-overlay text-white text-decoration-none" href="">
                                    <h4 className="text-white font-weight-medium">Thiết kế đồ họa</h4>
                                    <Link to="/TKDH" className="text-primary">ĐĂNG KÍ NGAY</Link>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="./img/QTM.jpg" alt="" style={{ width: "200px" }} />
                                <a className="cat-overlay text-white text-decoration-none" href="">
                                    <h4 className="text-white font-weight-medium">Quảng trị mạng</h4>
                                    <span className="text-primary">ĐĂNG KÍ NGAY</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="./img/TMDT.jpg" alt="" style={{ width: "200px" }} />
                                <a className="cat-overlay text-white text-decoration-none" href="">
                                    <h4 className="text-white font-weight-medium">Thương mại điện tử</h4>
                                    <span className="text-primary">ĐĂNG KÍ NGAY</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src="./img/CEHweb.jpg" alt="" style={{ width: "175px" }} />
                                <a class="cat-overlay text-white text-decoration-none" href="">
                                    <h4 class="text-white font-weight-medium">KHÓA HỌC CEH (V12)</h4>
                                    <Link to="/CEH" class="text-primary">ĐĂNG KÍ NGAY</Link>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src="./img/AWSmain.jpg" alt="" style={{ width: "200px" }} />
                                <a class="cat-overlay text-white text-decoration-none" href="">
                                    <h4 class="text-white font-weight-medium">KHÓA HỌC AWS</h4>
                                    <Link to="/AWS" class="text-primary">ĐĂNG KÍ NGAY</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid py-5" >
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h1 className="text-primary text-uppercase mb-3" style={{ letterspacing: '5px' }}>Doanh Nghiệp</h1>
                    </div>
                    <div className="text-center mb-5">
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/1.jpg" alt='' />
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/2.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/3.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/4.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/5.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/6.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/7.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/8.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/9.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/10.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/11.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/12.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/13.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/14.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/15.jpg" alt=''/>
                        <img className="img-fluid" style={{ width: '250px' }} src="./img/16.jpg" alt=''/>

                    </div>
                </div>
            </div>

            <FormDK/>

            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h1 className="text-primary text-uppercase mb-3" style={{ letterspacing: '5px' }}>BAN CỐ VẤN - GIẢNG VIÊN</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 text-center team mb-4 ">
                            <div className="team-item rounded overflow-hidden mb-2 ">
                                <div className="team-img position-relative ">
                                    <img className="img-fluid" src="./img/hieutruong.png" alt="" style={{ width: "600px" }} />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-warning p-4">
                                    <h5>THẠC SĨ NGUYỄN DUY HÀM</h5>
                                    <p className="m-0">HIỆU TRƯỞNG</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="./img/teacher1.png" alt="" style={{ width: "600px" }} />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-warning p-4">
                                    <h5>THẠC SĨ LÊ HOÀNG BÌNH NGUYÊN</h5>
                                    <p className="m-0">Phó Trưởng Khoa CNTT</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="./img/teacher2.png" alt="" style={{ width: "600px" }} />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-warning p-4">
                                    <h5>TRƯƠNG PHẠM HOÀI THƯƠNG</h5>
                                    <p className="m-0">GV Khoa An Ninh Mạng</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="./img/teacher3.jpg" alt="" style={{ width: "300px" }} />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-warning p-4">
                                    <h5>THS VĂN MINH ĐẠI</h5>
                                    <p className="m-0">Khoa Thương Mại Điện Tử</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="./img/teacher4.png" alt="" style={{ width: "600px" }} />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-warning p-4">
                                    <h5>THẦY NGUYỄN THẾ PHƯƠNG</h5>
                                    <p className="m-0">Kỹ Sư CNTT</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="./img/teacher5.jpg" alt="" style={{ width: "800px" }} />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-warning p-4">
                                    <h5>CÔ LÊ KIM NGÂN</h5>
                                    <p className="m-0">GV cơ hữu Khoa Thiết Kế Đồ Họa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;
