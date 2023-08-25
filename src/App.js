import './App.css';
// import WIUM_HEADER_1 from './WIUM_COMPONENTS/WIUM_HEADER_1';
import WIUM_DEPT from './WIUM_COMPONENTS/WIUM_DEPT';
import WIUM_HEADER_2 from './WIUM_COMPONENTS/WIUM_HEADER_2';

function App() {
  return (
    <>
      <header className="bg-primary text-white text-center">
          <WIUM_HEADER_2 />
      </header>

      <section className='bg-primary text-white'>
        <WIUM_DEPT />
      </section>

      <footer className="text-center">        
        <p className="mb-0"><u>&copy; 2023 WIUM, Jakarta Selatan</u></p>
      </footer>
    </>
  );
}

export default App;
