import React from "react";
import WIUM_HEADER_2 from "./WIUM_HEADER_2";
import WIUM_DEPT from "./WIUM_DEPT";

const WIUM_INDEX = () => {
    return(
        <>
            <header className="bg-primary text-white text-center pb-3">
                <WIUM_HEADER_2 />
            </header>

            <section className="bg-light">
              <WIUM_DEPT />
            </section>

            <footer className="text-center p-3 text-light">        
                <p className="mb-0"><u>&copy; 2023 WIUM, Jakarta Selatan</u></p>
            </footer>
        </>
    );
}

export default WIUM_INDEX;