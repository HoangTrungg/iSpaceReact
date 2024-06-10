import React, { useState } from 'react';
import axios from 'axios';

export default function FetchCSVData(props) {
    const [csvData, setCsvData] = useState([]);
    const [csvUrl, setCsvUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Ngăn chặn trình duyệt gửi yêu cầu mặc định

        const apiUrl = 'http://localhost:3000/fetch-csv'; // Replace with your API endpoint URL

        try {
            const response = await axios.post(apiUrl, { url: csvUrl });
            const parsedCsvData = parseCSV(response.data);
            setCsvData(parsedCsvData);
            console.log(parsedCsvData);
        } catch (error) {
            console.error('Error fetching CSV data:', error);
        }
    };

    const parseCSV = (csvText) => {
        const rows = csvText.split(/\r?\n/);
        const headers = rows[0].split(',');
        const data = [];
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(',');
            const rowObject = {};
            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j]] = rowData[j];
            }
            data.push(rowObject);
        }
        return data;
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    CSV URL:
                    <input
                        type="text"
                        value={csvUrl}
                        onChange={(event) => setCsvUrl(event.target.value)}
                    />
                </label>
                <button type="submit">Fetch CSV</button>
            </form>
            <ul>
                {csvData.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    );
}
