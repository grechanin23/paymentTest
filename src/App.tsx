import './assets/styles/payment.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Checkout from './pages/Checkout'

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Link to='/checkout'>Checkout</Link>} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<>404 Not Found</>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
