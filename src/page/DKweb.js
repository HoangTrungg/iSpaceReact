import './DKwebstyle.css';
import { useState } from "react";
import axios from 'axios';

function DK() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [doituong, setDoituong] = useState('');
    const [nganhhoc, setNganhhoc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            Name: name,
            Email: email,
            Phone: phone,
            Doituong: doituong,
            Nganhhoc: nganhhoc,
            submittedAt: new Date().toLocaleString()
        };

        axios.post('https://sheet.best/api/sheets/aebf30fb-056d-4229-83d5-df486dc58b4f', data).then((response) => {
            if (response.status === 200) {
                alert("Đã Gửi! Chúng tôi sẽ phản hồi bạn sớm nhất có thể");
                setName('');
                setEmail('');
                setPhone('');
                setDoituong('');
                setNganhhoc('');
            }
            else {
                alert("Có lỗi xảy ra!");
                console.error(response.data);
            }
        });
    };
    return (
        <div>
            <div class="carousel-inner">
                <div class="carousel-item active" style={{ minHeight: '300px' }}>
                    <img class="position-relative w-100" src="./img/main2.jpg" style={{ minheight: '300px', objectfit: 'cover' }} alt=''/>
                    <div class="carousel-caption d-flex align-items-center justify-content-center">
                        <div class="p-5" style={{width: '100%', maxwidth: '900px'}}>
                            <h5 class="text-primary text-uppercase mb-md-3">Learning By Doing </h5>
                            <h1 class="display-3 text-white mb-md-4">ỨNG TUYỂN</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <section class="get-in-touch">
                <h1 class="title">ỨNG TUYỂN NGAY</h1>
                <form class="contact-form row" onSubmit={handleSubmit}>
                    <div class="form-field col-lg-6">
                        <input id="name" class="input-text js-input" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                        <label class="label" for="name" style={{height: "40px"}}>Họ và Tên</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <input id="email" class="input-text js-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label class="label" for="email" style={{height: "40px"}}>E-mail</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <input id="phone" class="input-text js-input" type="tel"  required value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <label class="label" for="phone" style={{height: "55px"}}>Số Điện Thoại</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <div className="form-group" id='doituong'>
                            <select className="input-text js-input" value={doituong} onChange={(e) => setDoituong(e.target.value)}>
                                <option selected>Bạn là?</option>
                                <option value="Hs12">Học sinh lớp 12(đăng kí giữ chỗ)</option>
                                <option value="DaTotNghiepC3">Học sinh đã tốt nghiệp THPT/lớp 12</option>
                                <option value="SinhVien">Sinh viên</option>
                                <option value="NguoiDilam">Người đi làm</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-field col-lg-12">
                        <div className="form-group">
                            <select className="input-text js-input" style={{ height: '47px' }} value={nganhhoc} onChange={(e) => setNganhhoc(e.target.value)}>
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
                    </div>
                    <div class="form-field col-lg-12">
                    <button class="submit-btn" type="submit" value="Submit" >Gửi</button>
                    </div>
                </form>
            </section>
            </div>
        </div>
    )
}

export default DK;