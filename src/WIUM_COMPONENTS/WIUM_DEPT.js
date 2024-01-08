import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SHIELD from '../WIUM_SHIELD/SHIELD';

const WIUM_DEPT = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:8000/api/WIUM_DEPT')
    fetch('http://10.13.0.37:8000/api/WIUM_DEPT')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  // Membagi data menjadi grup 4 elemen
  const groupedData = data.reduce((accumulator, currentValue, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!accumulator[groupIndex]) {
      accumulator[groupIndex] = [];
    }
    accumulator[groupIndex].push(currentValue);
    return accumulator;
  }, []);

  return (
    <div className="container border border-dark bg-light py-3" style={{ borderRadius:"2px" }}>
      {groupedData.map((row, rowIndex) => (
        <div key={rowIndex} className="row m-2 p-2">
          {row.map((box, boxIndex) => (
            <div
              key={boxIndex}
              className="card col-md-4 border border-primary p-2 bg-body text-dark mx-auto"
            >
              <div className="m-4">
                <Link
                  to={'/detail/' + SHIELD(box.dept, 3)}
                  style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                >
                  <div className="responsive-font text-dark" style={{ fontWeight: 'bold', fontSize: '1.5vm' }}>
                    {box.dept}
                  </div>
                  <div className="small font-italic text-dark" style={{ fontSize: '0.8em', textAlign: 'center' }}>
                    <u>{box.kode}</u>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WIUM_DEPT;
