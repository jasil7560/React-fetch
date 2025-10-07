
import './App.css'
import Homepage from './components/Homepage';
import Details from './components/Details';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  const[inp,setInp]=useState("")

  return (
    <>
    <BrowserRouter>
    <Navbar setInp={setInp}/>
    <Routes>
    <Route path='/' element={<Homepage inp={inp}/>}/>
    <Route path='/details/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
