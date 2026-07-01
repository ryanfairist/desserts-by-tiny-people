import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import CartButton from './components/CartButton'

function App() {
  return(
    <div className ="min-h-screen bg-cream text-truffle-800">
      <CartButton/>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/menu" element= {<Menu />} />
      </Routes>
    </div>
  )
}

export default App