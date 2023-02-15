import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cities from './components/city/citylist';
import Details from './components/details/details';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Cities />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
