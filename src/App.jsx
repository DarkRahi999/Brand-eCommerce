import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import HelpPage from './pages/Help'
import ContactPage from './pages/Contact'
import AboutPage from './pages/About'
import ErrorPage from './pages/Error'
import './CSS/style.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage />}/>
          <Route path='/help' element={ <HelpPage />}/>
          <Route path='/contact' element={ <ContactPage />}/>
          <Route path='/about' element={ <AboutPage />}/>
          <Route path='/*' element={ <ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App