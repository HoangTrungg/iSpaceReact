import axios from 'axios';
import React, { useState } from 'react';


function FormDK() {
    return (
        <div>
            <div className="container-fluid bg-registration py-5" style={{ margin: '90px 0' }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="mb-4">
                                <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>ỨNG TUYỂN NGAY</h5>
                                <h1 className="text-white">VÀO ISPACE NHẬN IPHONE</h1>
                            </div>
                            <p className="text-white">09 iPhone 15 Pro dành tặng cho 09 bạn có điểm cao nhất mỗi đợt xét tuyển</p>
                            <img className="img-fluid" style={{ width: '500px' }} src="./img/DANGKI.jpg" alt='' />
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0">
                                <div className="card-header bg-light text-center p-4">
                                    <h1 className="m-0">Ứng Tuyển Ngay</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-primary p-5">
                                    <form>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control border-0 p-4"
                                                placeholder="Họ và Tên"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control border-0 p-4"
                                                placeholder="Email"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                className="form-control border-0 p-4"
                                                placeholder="Số điện thoại"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <select className="custom-select border-0 px-4" style={{ height: '47px' }}>
                                                <option selected>Bạn là?</option>
                                                <option value="Hs12">Học sinh lớp 12(đăng kí giữ chỗ)</option>
                                                <option value="DaTotNghiepC3">Học sinh đã tốt nghiệp THPT/lớp 12</option>
                                                <option value="SinhVien">Sinh viên</option>
                                                <option value="NguoiDilam">Người đi làm</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <select className="custom-select border-0 px-4" style={{ height: '47px' }}>
                                                <option selected>Chương trình học</option>
                                                <option value="ANM">An ninh mạng</option>
                                                <option value="LTW">Phát triển phần mềm</option>
                                                <option value="TKDH">Thiết kế đồ họa</option>
                                                <option value="QTM">Quản trị mạng</option>
                                                <option value="TMDT">Thương mại điện tử</option>
                                                <option value="CEH">Khóa học CEH</option>
                                                <option value="AWS">Khóa học AWS Cloud Foundation</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button className="btn btn-dark btn-block border-0 py-3" type="submit" value="Submit">Gửi</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormDK;
