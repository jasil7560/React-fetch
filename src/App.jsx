
import './App.css'
import Homepage from './components/Homepage';
import Details from './components/Details'; 
import { BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage />}/>
    <Route path='/details/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
