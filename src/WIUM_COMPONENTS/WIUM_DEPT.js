import React from 'react';

const Box = ({ link, dept, kode }) => (
  <a className='col card border border-dark m-2 text-decoration-none' href={link} style={{width:'300px', height: '125px'}}>
    <div className="text-center text-dark m-auto">
      <p className="fw-bold responsive-font">{dept}</p>
      <p className="responsive-font" >{kode}</p>
    </div>
  </a>
);

const WIUM_DEPT = () => {
  const boxes = [
    { id: 1, link: '#', dept: 'WEST INDONESIA UNION MISSION', kode: 'A90-UIKB' },
    { id: 2, link: '#', dept: 'NORTH SUMATRA MISSION', kode: 'A10-DSKU' },
    { id: 3, link: '#', dept: 'UNIVERSITAS SURYA NUSANTARA', kode: 'C12-USN' },
    { id: 4, link: '#', dept: 'CENTRAL JAVA MISSION', kode: 'A55-DJKT' },
  ];

  return (
    <div className='container p-3'>
      <div className='row align-items-center'>        
        {boxes.map((box) => (        
            <Box link={box.link} dept={box.dept} kode={box.kode} />
          ))}
      </div>
    </div>
  );
};

export default WIUM_DEPT;
