import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";
const CLIENT_ID = "580229356912-r6rmhebfntvfkdrqm92kccaan3av4s5r.apps.googleusercontent.com";
const API_KEY = "AIzaSyCuMMmZJ9X6gRdUC0t5LxTeYK1Ab2ahteY";
const SPREADSHEET_ID = "1MwjwC_LcnDQaCEmJGg3GjoSeiWXwvyG7evrRfpDHQj0";
function Test() {
    const [data, setData] = useState({
        Name: "",
        Birthday: "",
        TypeStudent: "",
        Email: "",
        PhoneNumber: "",
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
            <div className="register-form-main">
                <div className="container">
                    <div className="title-div">
                        <h3 className="tittle">
                            <span>F</span>orm
                        </h3>
                        <div className="tittle-style"></div>
                    </div>
                    <div className="register-form">
                        <form action="#" method="post" onSubmit={handleSubmit}>
                            <div className="fields-grid">
                                <div className="styled-input">
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Họ và tên"
                                        name="Name"
                                        required=""
                                    />
                                </div>
                                <div className="styled-input">
                                    <div className="styled-input">
                                        <input
                                            id="datepicker"
                                            placeholder="Ngày sinh"
                                            name="Birthday"
                                            type="text"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="styled-input agile-styled-input-top">
                                    <select
                                        className="category2"
                                        required=""
                                        name="TypeStudent"
                                        onChange={handleChange}
                                    >
                                        <option value="Sinh viên">Sinh viên</option>
                                        <option value="HS hoàn thành THPT">
                                            HS hoàn thành THPT
                                        </option>
                                        <option value="HS đang học lớp 12">
                                            HS đang học lớp 12
                                        </option>
                                        <option value="Người đi làm">Người đi làm</option>
                                    </select>
                                </div>
                                <div className="styled-input">
                                    <input
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="E-mail của bạn"
                                        name="Email"
                                        required=""
                                    />
                                </div>
                                <div className="styled-input">
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Số điện thoại của bạn"
                                        name="PhoneNumber"
                                        required=""
                                    />
                                </div>
                                <div className="styled-input agile-styled-input-top">
                                    <select
                                        className="category2"
                                        onChange={handleChange}
                                        required=""
                                        name="Specialized"
                                    >
                                        <option value="An ninh mạng">An ninh mạng</option>
                                        <option value="Phát triển phần mềm">
                                            Phát triển phần mềm
                                        </option>
                                        <option value="Thiết kế đồ họa">Thiết kế đồ họa</option>
                                    </select>
                                    <span></span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;