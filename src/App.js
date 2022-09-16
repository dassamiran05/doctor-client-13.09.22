
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Appointment from './Pages/Appointment/Appointment';
import Signup from './Pages/Login/Signup';

function App() {
  return (
    <>
      <div className='max-w-7xl mx-auto px-12'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/appointment" element={<Appointment></Appointment>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
