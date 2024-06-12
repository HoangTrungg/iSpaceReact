import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import swal from 'sweetalert';

const CLIENT_ID = "580229356912-afahd3oirmihpgiea04ounvqedmp6akb.apps.googleusercontent.com";
const API_KEY = "AIzaSyCuMMmZJ9X6gRdUC0t5LxTeYK1Ab2ahteY";
const SPREADSHEET_ID = "1MwjwC_LcnDQaCEmJGg3GjoSeiWXwvyG7evrRfpDHQj0";

function FormDK() {
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
                        <div className="col-lg-5" >
                            <div className="card border-0 bg-white">
                                <div className="card-header bg-light text-center p-4">
                                    <h1 className="m-0">Ứng Tuyển Ngay</h1>
                                </div>
                                <div className="card-body rounded-top rounded-bottom bg-primary p-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="Name"
                                                className="form-control border-0 p-4"
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
                                                className="form-control border-0 p-4"
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
                                                className="form-control border-0 p-4"
                                                placeholder="Số điện thoại"
                                                required="required"
                                                value={data.PhoneNumber}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <select
                                                name="TypeStudent"
                                                className="custom-select border-0 px-4"
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
                                                className="custom-select border-0 px-4"
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

