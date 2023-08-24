import './App.css';
// import WIUM_HEADER_1 from './WIUM_COMPONENTS/WIUM_HEADER_1';
import WIUM_DEPT from './WIUM_COMPONENTS/WIUM_DEPT';
import WIUM_HEADER_2 from './WIUM_COMPONENTS/WIUM_HEADER_2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <WIUM_HEADER_2 />
          <section>        
            <WIUM_DEPT />
          </section>
      </header>

      <footer style={{ textAlign: 'center', color: '#000', fontWeight: 'bold' }}>
        <p><u>&copy; 2023 WIUM, Jakarta Selatan</u></p>
      </footer>
    </div>
  );
}

export default App;
