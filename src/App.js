import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import NavBar from "./components/NavBar"

export default function App(){
  return (
    <Router>
          <NavBar />
           <Routes>
                 <Route path='/login' element={< LogIn />} />
                 <Route path="/signup" element ={<SignUp />} />
          </Routes>
       </Router>
  );
}