import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import './DKwebstyle.css'
import swal from 'sweetalert';

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
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        const newData = { ...data, Date: formattedDate };
        await authenticate();
        await execute(newData);
    };

    const authenticate = async () => {
        gapi.auth2
            .getAuthInstance()
            .signIn()
            .then(
                () => {
                    console.log("Sign-in successful");
                },
                (error) => {
                    console.error("Error signing in", error);
                }
            );
    };

    const execute = (newData) => {
        const spreedData = Object.values(newData);
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
                    if (response.status === 200) {
                        swal("Đã Gửi", "Chúng tôi sẽ phản hồi bạn sớm nhất có thể", "success");
                    } else {
                        swal("Đã Gửi", "Chúng tôi sẽ phản hồi bạn sớm nhất có thể", "error");
                    }
                },
                (error) => {
                    console.error("Execute error", error);
                    swal("Đã Gửi", "Chúng tôi sẽ phản hồi bạn sớm nhất có thể", "error");
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
                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="Name"
                                                className="form-control border-0 p-4 bg-secondary"
                                                placeholder="Họ và Tên"
                                                required="required"
                                                value={data.Name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="Email"
                                                className="form-control border-0 p-4 bg-secondary"
                                                placeholder="Email"
                                                required="required"
                                                value={data.Email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                name="PhoneNumber"
                                                className="form-control border-0 p-4 bg-secondary"
                                                placeholder="Số điện thoại"
                                                required="required"
                                                value={data.PhoneNumber}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <select
                                                name="TypeStudent"
                                                className="custom-select border-0 px-4 bg-secondary"
                                                style={{ height: "47px" }}
                                                value={data.TypeStudent}
                                                onChange={handleChange}
                                            >
                                                <option value="">Bạn là?</option>
                                                <option value="Hs12">Học sinh lớp 12(đăng kí giữ chỗ)</option>
                                                <option value="DaTotNghiepC3">Học sinh đã tốt nghiệp THPT/lớp 12</option>
                                                <option value="SinhVien">Sinh viên</option>
                                                <option value="NguoiDilam">Người đi làm</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <select
                                                name="Specialized"
                                                className="custom-select border-0 px-4 bg-secondary"
                                                style={{ height: "47px" }}
                                                value={data.Specialized}
                                                onChange={handleChange}
                                            >
                                                <option value="">Chương trình học</option>
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
                                            <button className="btn btn-dark btn-block border-0 py-3" type="submit" value="Submit">
                                                Gửi
                                            </button>
                                        </div>
                                    </form>

                    
                    
                </section>
            </div>
        </div>
    )
}

export default DKweb;