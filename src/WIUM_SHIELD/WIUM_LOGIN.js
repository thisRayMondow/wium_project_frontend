import React, { useState, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SWORD from './SWORD';
import WIUM_HEADER_2 from '../WIUM_COMPONENTS/WIUM_HEADER_2';
import axios from 'axios';

const WIUM_LOGIN = () => {
  const [user, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();
  
  const currentURL = window.location.pathname;
  const currentPath = decodeURIComponent(currentURL.split('/detail/')[1] || '');
  const clickCount = useRef(0);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:8000/api/LOG-IN', {
        const response = await axios.post('http://10.13.0.37:8000/api/LOG-IN', {
        user,
        password,
      });

      if (response.data.status === "01") {
        console.log (response.data.access_token);

        // Simpan token ke localStorage
        localStorage.setItem('token', response.data.access_token);

        history('/dashboard/'+ currentPath);
      }else{
        console.log ("Gagal Login");
        setError('Gagal Login: Pengguna dan Sandi tidak sesuai');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleFooterClick = () => {
    clickCount.current += 1;

    // Jika terjadi tiga klik atau lebih, arahkan ke halaman login
    if (clickCount.current >= 3) {
      // window.location.href = "http://localhost:8000/log-in"; // Ganti dengan URL halaman login Anda
      window.location.href = "http://10.13.0.37:8000/log-in"; // Ganti dengan URL halaman login Anda
    }
  };

  return (
    <>
        <header className="bg-primary text-white text-center pt-3">
            <WIUM_HEADER_2 />
        </header>

        <section className="container-fluid bg-primary">
            <div className="row justify-content-center p-5 bg-primary">
                <div className="col-md-4 bg-info p-4 border border-dark" style={{ borderStyle: "double", borderRadius: "5%" }}> 
                <div className="login-form p-3">
                    <h4 className="text-center mb-4 p-4 border border-light">{SWORD(currentPath, 3).replace(",", "")}</h4>
                    {error && <p className="text-danger text-center">{error}</p>}
                    <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="USER"
                        value={user}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="PASSWORD"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </div>
                    <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={handleLogin}>
                        Login
                    </button>
                    <Link to={"/"} className="btn btn-danger">
                        Back
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <footer className="text-center p-2 border bg-light" onClick={handleFooterClick}>      
            <p className="mb-0"><u>&copy; 2023 WIUM, Jakarta Selatan</u></p>  
        </footer>
    </>

  );
};

export default WIUM_LOGIN;
