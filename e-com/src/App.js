
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
