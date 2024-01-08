import React from "react";
import { useNavigate} from 'react-router-dom';

const Nav = () => {
  const currentURL = window.location.pathname;
  const currentPath = decodeURIComponent(currentURL.split('/dashboard/')[1] || '');
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history('/detail/'+currentPath);
  };

  return (
    <div>
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
    </div>
  );
};

export default Nav;

