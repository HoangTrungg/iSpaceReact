import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = "580229356912-afahd3oirmihpgiea04ounvqedmp6akb.apps.googleusercontent.com";
const API_KEY = "AIzaSyCuMMmZJ9X6gRdUC0t5LxTeYK1Ab2ahteY";
const SPREADSHEET_ID = "1MwjwC_LcnDQaCEmJGg3GjoSeiWXwvyG7evrRfpDHQj0";

function DKweb() {
    const [data, setData] = useState({
        Name: "",
        Email: "",
        PhoneNumber: "",
        TypeStudent: "",
        Specialized: "",
    });

    useEffect(() => {
        function start() {
            gapi.client
                .init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: [
                        "https://sheets.googleapis.com/$discovery/rest?version=v4",
                    ],
                    scope:
                        "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets",
                })
                .then(
                    () => {
                        console.log("GAPI client loaded for API");
                    },
                    (error) => {
                        console.error("Error loading GAPI client for API", error);
                    }
                );
        }

        gapi.load("client:auth2", start);
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await authenticate();
    };

    const authenticate = async () => {
        gapi.auth2
            .getAuthInstance()
            .signIn()
            .then(
                () => {
                    console.log("Sign-in successful");
                    execute();
                },
                (error) => {
                    console.error("Error signing in", error);
                }
            );
    };

    const execute = () => {
        const spreedData = Object.values(data);
        console.log(spreedData);
        gapi.client.sheets.spreadsheets.values
            .append({
                spreadsheetId: SPREADSHEET_ID,
                range: "A1",
                insertDataOption: "INSERT_ROWS",
                valueInputOption: "USER_ENTERED",
                resource: {
                    values: [spreedData],
                },
            })
            .then(
                (response) => {
                    console.log("Response", response);
                },
                (error) => {
                    console.error("Execute error", error);
                }
            );
    };
    return (
        <div>
            <div class="carousel-inner">
                <div class="carousel-item active" style={{ minHeight: '300px' }}>
                    <img class="position-relative w-100" src="./img/main2.jpg" style={{ minheight: '300px', objectfit: 'cover' }} alt='' />
                    <div class="carousel-caption d-flex align-items-center justify-content-center">
                        <div class="p-5" style={{ width: '100%', maxwidth: '900px' }}>
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
                            <input id="name" class="input-text js-input" type="text" required value={data.Name}
                                onChange={handleChange} />
                            <label class="label" for="name" style={{ height: "40px" }}>Họ và Tên</label>
                        </div>
                        <div class="form-field col-lg-6 ">
                            <input id="email" class="input-text js-input" type="email" required value={data.Email}
                                onChange={handleChange} />
                            <label class="label" for="email" style={{ height: "40px" }}>E-mail</label>
                        </div>
                        <div class="form-field col-lg-6 ">
                            <input id="phone" class="input-text js-input" type="tel" required value={data.PhoneNumber}
                                onChange={handleChange} />
                            <label class="label" for="phone" style={{ height: "55px" }}>Số Điện Thoại</label>
                        </div>
                        <div class="form-field col-lg-6 ">
                            <div className="form-group" id='doituong'>
                                <select className="input-text js-input" value={data.TypeStudent}
                                    onChange={handleChange}>
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
                                <select className="input-text js-input" style={{ height: '47px' }} value={data.Specialized}
                                    onChange={handleChange}>
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

export default DKweb;