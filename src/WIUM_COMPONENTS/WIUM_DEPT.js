import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SHIELD from '../WIUM_SHIELD/SHIELD';

const WIUM_DEPT = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/WIUM_DEPT')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  // Membagi data menjadi grup 4 elemen
  const groupedData = data.reduce((accumulator, currentValue, index) => {
    const groupIndex = Math.floor(index / 4);
    if (!accumulator[groupIndex]) {
      accumulator[groupIndex] = [];
    }
    accumulator[groupIndex].push(currentValue);
    return accumulator;
  }, []);

  return (
    <div className="container pb-5 pt-5">
      {groupedData.map((row, rowIndex) => (
        <div key={rowIndex} className="row p-2">
          {row.map((box, boxIndex) => (
            <div
              key={boxIndex}
              className="col-sm-3 border border-primary p-3 bg-body text-dark"
              style={{ width: '25%', borderRadius: '5%' }}
            >
              <div className="box">
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
