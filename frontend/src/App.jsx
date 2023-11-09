
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './componets/login'

function App() {
  

  return (
    <>
      <div className='text-white h-[100vh] flax justify-center items-center bg-cover'>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
      
    
      </div>
      
    </>
  )
}

export default App
