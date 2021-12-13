import './App.css';
import {Route, Routes} from 'react-router';
import CupList from './components/cups/CupList';

function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Routes>
        <Route path="/cups" element={<CupList/>}/>
      </Routes>
    </div>
  );
}

export default App;
