import React from 'react';

const WIUM_DEPT = () => {
  const rows = [
    [
      { id: 1, link: '#', dept: 'WEST INDONESIA UNION MISSION', kode: 'A90-UIKB' },
      { id: 2, link: '#', dept: 'NORTH SUMATRA MISSION', kode: 'A10-DSKU' },
      { id: 3, link: '#', dept: 'UNIVERSITAS SURYA NUSANTARA', kode: 'C12-USN' },
      { id: 4, link: '#', dept: 'CENTRAL JAVA MISSION', kode: 'A55-DJKT' }
    ],
    // [
    //   { id: 1, link: '#', dept: 'WEST INDONESIA UNION MISSION', kode: 'A90-UIKB' },
    //   { id: 2, link: '#', dept: 'NORTH SUMATRA MISSION', kode: 'A10-DSKU' },
    //   { id: 3, link: '#', dept: 'UNIVERSITAS SURYA NUSANTARA', kode: 'C12-USN' },
    //   { id: 4, link: '#', dept: 'CENTRAL JAVA MISSION', kode: 'A55-DJKT' }
    // ],
    // [
    //   { id: 1, link: '#', dept: 'WEST INDONESIA UNION MISSION', kode: 'A90-UIKB' },
    //   { id: 2, link: '#', dept: 'NORTH SUMATRA MISSION', kode: 'A10-DSKU' },
    //   { id: 3, link: '#', dept: 'UNIVERSITAS SURYA NUSANTARA', kode: 'C12-USN' },
    //   { id: 4, link: '#', dept: 'CENTRAL JAVA MISSION', kode: 'A55-DJKT' }
    // ],
  ];

  return (
    <div className="container pb-5 pt-5">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row p-2">
          {row.map((box, boxIndex) => (
            <div
              key={boxIndex}
              className="col-sm-3 border border-primary p-3 bg-body text-dark"
              style={{ width: '25%', borderRadius:"5%"}}
            >
              <div className="box">
                <a href={box.link} style={{ textDecoration: "none", display: 'block', textAlign:"center"}}>
                  <div className='responsive-font text-dark' style={{ fontWeight:"bold", fontSize:"1.5vm"}}>{box.dept}</div>
                  <div className='small font-italic text-dark' style={{ fontSize:"0.8em", textAlign:"center" }}><u>{box.kode}</u></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WIUM_DEPT;