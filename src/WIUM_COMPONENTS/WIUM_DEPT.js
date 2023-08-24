import React from 'react';

const Box = ({ link, dept, kode }) => (
  <a className='containBox' href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', width: '200px' }}>
    <div style={{ border: '1px solid', padding: '5px', margin: '5px', textAlign: 'center', borderRadius: '5px', borderColor:"#fff", color:"#fff", width: '200px', height: '100px'}}>
      <p style={{ fontSize: '15px', fontWeight: 'bold' }}>{dept}</p>
      <p style={{ fontSize: '12px', margin: '5px 0' }}>{kode}</p>
    </div>
  </a>
);

const WIUM_DEPT = () => {
  const boxes = [
    { id: 1, link: '#', dept: 'WEST INDONESIA UNION MISSION', kode: 'A90-UIKB' },
    { id: 2, link: '#', dept: 'NORTH SUMATRA MISSION', kode: 'A10-DSKU' },
    { id: 3, link: '#', dept: 'UNIVERSITAS SURYA NUSANTARA', kode: 'C12-USN' },
    { id: 4, link: '#', dept: 'CENTRAL JAVA MISSION', kode: 'A55-DJKT' },
    // { id: 5, link: '#', dept: 'NUSA TENGGARA MISSION', kode: 'A80-DNT' },
    // { id: 6, link: '#', dept: 'INDONESIA PUBLISIHNG HOUSE', kode: 'D13-IPH' },
    // { id: 7, link: '#', dept: 'CENTRAL SUMATRA MISSION', kode: 'A20-DSKT' },
    // { id: 8, link: '#', dept: 'SOUTH SUMATRA MISSION', kode: 'A50-DSKS' },
    // { id: 9, link: '#', dept: 'RUMAH SAKIT ADVENT BANDUNG', kode: 'B16-RSA-BL' },
    // { id: 10, link: '#', dept: 'EAST JAVA CONFRENCE', kode: 'A60-KJKT' },
    // { id: 11, link: '#', dept: 'WEST JAVA CONFRENCE', kode: 'A50-KJB' },
    // { id: 12, link: '#', dept: 'RUMAH SAKIT ADVENT   BANDAR LAMPUNG', kode: 'B16-RSA-BL' },
    // { id: 13, link: '#', dept: 'EAST KALIMANTAN MISSION', kode: 'A70-DKKT' },
    // { id: 14, link: '#', dept: 'WEST KALIMANTAN ATTACHED DISTRICT', kode: 'A75-WKR' },
    // { id: 15, link: '#', dept: 'RUMAH SAKIT ADVENT MEDAN', kode: 'B17-RSA-MDN' },
    // { id: 16, link: '#', dept: 'JAKARTA CONFRENCE', kode: 'A40-DKI' },
    // { id: 17, link: '#', dept: 'UNIVERSITAS ADVENT INDONESIA', kode: 'C11-UNAI' },
    // { id: 18, link: '#', dept: 'AECS', kode: 'G18-AECS' },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
      {boxes.map((box) => (
        <Box key={box.id} link={box.link} dept={box.dept} kode={box.kode} />
      ))}
    </div>
  );
};

export default WIUM_DEPT;