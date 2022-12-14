
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Appointment from './Pages/Appointment/Appointment';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Adddoctor from './Pages/Dashboard/Adddoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';



function App() {

  
  return (
    <>
      <div className='max-w-7xl mx-auto px-12'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/appointment" element={<RequireAuth><Appointment /></RequireAuth>}></Route>
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route index element={<MyAppointments></MyAppointments>}></Route>
            <Route path='review' element={<MyReview></MyReview>}></Route>
            <Route path='users' element={<RequireAdmin><Users/></RequireAdmin>}></Route>
            <Route path='adddoctor' element={<RequireAdmin><Adddoctor/></RequireAdmin>}></Route>
            <Route path='managedoctor' element={<RequireAdmin><ManageDoctor/></RequireAdmin>}></Route>
          </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
