import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PropertyDetails from './components/PropertyListing/PropertyDetails'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollWrapper/ScrollWrapper'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
