import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListInovasiComponent from './components/inovasi/ListInovasiComponent'
import HeaderComponent from './components/templates/HeaderComponent'
import FooterComponent from './components/templates/FooterComponent'
import AddInovasiComponent from './components/inovasi/AddInovasiComponent'

function App() {

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <HeaderComponent />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/tambahh-inovasi" element={<AddInovasiComponent />} />
            <Route path="/edit-inovasi/:ino_id" element={<AddInovasiComponent />} />
            <Route path="/list-inovasi" element={<ListInovasiComponent />} />
          </Routes>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    </Router>
  )
}

export default App
