import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import OurStory from './components/OurStory'
import Menu from './components/Menu'
import Catering from './components/Catering'
import Order from './components/Order'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ourstory' element={<OurStory />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='cateringmenu' element={<Catering />} />
      <Route path='/order' element={<Order />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
