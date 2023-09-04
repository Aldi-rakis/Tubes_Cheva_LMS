//import './App.css'
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";


import Home from './Pages/Home';
import Login from './Pages/Login';
import Content from "./Pages/Content";


function App() {
  return (
    
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="Login" element={<Login/>}></Route>
      <Route path="Content" element={<Content/>}></Route>
      
    </Routes>


   </Router>

    
    
  )

}

export default App;
