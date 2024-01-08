// WIUM_Index.js
import React from "react";
import SWORD from '../WIUM_SHIELD/SWORD';
import { useNavigate} from 'react-router-dom';
import "./WIUM_Index.css"; // Import file CSS (jika diperlukan)

const Index = () => {
  const currentURL = window.location.pathname;
  const currentPath = decodeURIComponent(currentURL.split('/dashboard/')[1] || '');
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history('/detail/'+currentPath);
  };
  

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav className="text-primary sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href={"/dashboard/"+currentPath}>
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/dashboard/"+currentPath}>
                Credential Ministerial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/dashboard/"+currentPath}>
                Licensed Ministers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handleLogout}>
                Log-Out
              </a>
            </li>
            {/* Tambahkan lebih banyak item menu sesuai kebutuhan */}
          </ul>
        </div>
      </nav>

      {/* Konten Halaman */}
      <div className="flex-grow-1 d-flex flex-column main-content">
        <main className="">
          <div className="box">
            <h2 className="box-title border-bottom p-2 text-light">{SWORD(currentPath, 3).replace(",", "")}</h2>
            <div className="box-content p-2">
              <p>Hello World</p>
              {/* Tambahkan konten box lainnya */}
            </div>
          </div>
        </main>

        <footer className="text-center p-3 text-dark bg-light fixed-bottom">
          <p className="mb-0">
            <u>&copy; 2023 WIUM, Jakarta Selatan</u>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
