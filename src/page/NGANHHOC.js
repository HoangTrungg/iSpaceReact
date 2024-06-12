
import ANM from './ANM';
import LTW from './LTW';
import TKDH from './TKDH';
import CEH from './CEHweb';
import AWS from './AWSweb';
import { Route, Routes, Link } from 'react-router-dom';

function NH() {
    return (
        <div>
            <Routes>
                <Route path='/NH' element={<NH />} />
                <Route path='/ANM' element={<ANM />} />
                <Route path='/LTW' element={<LTW />} />
                <Route path='/TKDH' element={<TKDH />} />
                <Route path='/CEH' element={<CEH />} />
                <Route path='/AWS' element={<AWS />} />
            </Routes>

            <div class="container-fluid py-5">
                <div class="container pt-5 pb-3">
                    <div class="text-center mb-5">
                        <h5 style={{ letterspacing: '5px' }}>NGÀNH HỌC</h5>
                        <h1 class="text-primary text-uppercase mb-3">CHƯƠNG TRÌNH ĐÀO TẠO CHỈ 2 NĂM 3 THÁNG VÀ CÁC KHÓA HỌC NGẮN HẠN</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src="./img/ANM.jpg" alt="" style={{ width: "300px" , height: "150px"}} />
                                <a class="cat-overlay text-white text-decoration-none" href="">
                                    <h4 class="text-white font-weight-medium">An ninh mạng</h4>
                                    <Link to="/ANM" class="text-primary">ĐĂNG KÍ NGAY</Link>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src="./img/PTPM.jpg" alt="" style={{ width: "300px" , height: "150px"}} />
                                <a class="cat-overlay text-white text-decoration-none" href="">
                                    <h4 class="text-white font-weight-medium">Phát triển phần mềm</h4>
                                    <Link to="/LTW" class="text-primary">ĐĂNG KÍ NGAY</Link>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src="./img/TKDH.jpg" alt="" style={{ width: "300px" , height: "150px"}} />
                                <a class="cat-overlay text-white text-decoration-none" href="">
                                    <h4 class="text-white font-weight-medium">Thiết kế đồ họa</h4>
                                    <Link to="/TKDH" class="text-primary">ĐĂNG KÍ NGAY</Link>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src="./img/QTM.jpg" alt="" style={{ width: "300px" , height: "150px"}} />
                                <a class="cat-overlay text-white text-decoration-none" href="">
                                    <h4 class="text-white font-weight-medium">Quảng trị mạng</h4>
                                    <Link to="/NH" class="text-primary">ĐĂNG KÍ NGAY</Link>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src="./img/TMDT.jpg" alt="" style={{ width: "300px" , height: "150px"}} />
                                <a class="cat-overlay text-white text-decoration-none" href="">
                                    <h4 class="text-white font-weight-medium">Thương mại điện tử</h4>
                                    <Link to="/NH" class="text-primary">ĐĂNG KÍ NGAY</Link>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src="./img/CEHweb.jpg" alt="" style={{ width: "300px" , height: "150px"}} />
                                <a class="cat-overlay text-white text-decoration-none" href="">
                                    <h4 class="text-white font-weight-medium">KHÓA HỌC CEH (V12)</h4>
                                    <Link to="/CEH" class="text-primary">ĐĂNG KÍ NGAY</Link>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="cat-item position-relative overflow-hidden rounded mb-2">
                                <img class="img-fluid" src="./img/AWSmain.jpg" alt="" style={{ width: "300px" , height: "150px"}} />
                                <a class="cat-overlay text-white text-decoration-none" href="">
                                    <h4 class="text-white font-weight-medium">KHÓA HỌC AWS</h4>
                                    <Link to="/AWS" class="text-primary">ĐĂNG KÍ NGAY</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NH;
