import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import AboutPage from './pages/About'
import ErrorPage from './pages/Error'
import './CSS/style.css'
import Footer from './Layouts/Footer'
import Navbar from './Layouts/Navbar'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={ <HomePage />}/>
            <Route path='/about' element={ <AboutPage />}/>
            <Route path='/contact' element={ <ContactPage />}/>
            <Route path='/*' element={ <ErrorPage />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App