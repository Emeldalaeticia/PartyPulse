
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './componets/login'
import Register from './componets/Register'
import HomePage from './componets/HomePage'

function App() {
  

  return (
    <>
      
        <div className='text-white h-[100vh] flax justify-center items-center bg-cover'>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>

        </Routes>
      
    
      </div>
      
    </>
  )
}

export default App
