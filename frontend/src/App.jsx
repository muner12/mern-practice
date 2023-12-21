
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SignUp from './pages/SignUp/signup';
import Login from './pages/Login/Login';
import NavBar from './components/NavBar';
import Logout from './pages/Logout/Logout';

function App() {
  

  return (
    <div>
    
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
 
  )
}

export default App
