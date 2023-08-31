import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SWORD from './SWORD';
import WIUM_HEADER_2 from '../WIUM_COMPONENTS/WIUM_HEADER_2';

const WIUM_LOGIN = () => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const currentURL = window.location.pathname;
  const currentPath = decodeURIComponent(currentURL.split('/detail/'));

  const handleLogin = () => {
    // Implementasi logika login di sini
    console.log('Number:', number);
    console.log('Password:', password);
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
                    <h4 className="text-center mb-4 border border-danger">{SWORD(currentPath, 3).replace(",", "")}</h4>
                    <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="USER"
                        value={number}
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

        <footer className="text-center p-2 border">        
            <p className="mb-0"><u>&copy; 2023 WIUM, Jakarta Selatan</u></p>
        </footer>
    </>

  );
};

export default WIUM_LOGIN;
