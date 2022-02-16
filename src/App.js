import './App.css';
import Login from "./Login"
import Profiles from "./Profiles"
import {Route,Routes} from "react-router-dom"
import UserDetails from './UserDetails';

function App() {
  return (
    <div className='App'>
     
     <Routes>
       <Route path='/' element={<Login/>}></Route>
       <Route path='/Profiles' >
         <Route path=':id' element={<UserDetails/>}></Route>
         <Route index element={<Profiles/>}></Route>
       </Route>
  
     </Routes>
  </div>
  );
}

export default App;
