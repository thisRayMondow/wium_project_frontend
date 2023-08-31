import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import WIUM_INDEX from './WIUM_COMPONENTS/WIUM_INDEX';
import WIUM_LOGIN from './WIUM_SHIELD/WIUM_LOGIN';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' Component={WIUM_INDEX} />
        <Route path='/detail/*' Component={WIUM_LOGIN} />
      </Routes>
    </Router>      
    </>
  );
}

export default App;
