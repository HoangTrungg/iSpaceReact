import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const SPREADSHEET_ID = '1MwjwC_LcnDQaCEmJGg3GjoSeiWXwvyG7evrRfpDHQj0';
const API_KEY = 'AIzaSyCuMMmZJ9X6gRdUC0t5LxTeYK1Ab2ahteY';
const RANGE = 'Data!A1:F20'; // Thay đổi phạm vi nếu cần

function Data() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
      );
      setData(response.data.values);
      processMonthlyData(response.data.values);
    } catch (err) {
      setError(err);
      console.error("Error fetching data: ", err.response ? err.response.data : err.message);
    }
  }

  const processMonthlyData = (rawData) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  
    const monthlyCount = {};
    rawData.slice(1).forEach(row => {
      const dateStr = row[5]; // Assume datetime column is at index 5 (0-based)
      const [year, month, date] = dateStr.split("-"); // Split date string by "-"
      if (parseInt(year, 10) === currentYear) {
        const key = parseInt(month, 10);
        monthlyCount[key] = (monthlyCount[key] || 0) + 1;
      }
    });
  
    const formattedData = [];
    for (let i = 1; i <= 12; i++) {
      const count = monthlyCount[i] || 0;
      formattedData.push({ name: i.toString(), count });
    }
  
    setMonthlyData(formattedData);
  };
  
  return (
    <div className="container mt-5">
      <h1>Data from Google Sheets</h1>
      {error ? (
        <div className="alert alert-danger" role="alert">
          Error: {error.message}
        </div>
      ) : (
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
       <div className="container mt-5">
      <h1>Data from Google Sheets</h1>
      {error ? (
        <div className="alert alert-danger" role="alert">
          Error: {error.message}
        </div>
      ) : (
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              {data[0] && data[0].map((header, index) => <th key={index}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
}

export default Data;
