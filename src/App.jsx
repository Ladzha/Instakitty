
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import AuthPage from './Pages/AuthPage/AuthPage'
import PageLayout from './Components/Layouts/PageLayout/PageLayout'

function App() {

  return (
    <PageLayout>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/auth' element={<AuthPage/>}/> 
      </Routes>
    </PageLayout>
  )
}

export default App
