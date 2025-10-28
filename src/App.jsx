
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import TopHeader from './components/Header/TopHeader'
import Home from './pages/Home'


function App() {


  return (
    <>
      <div>
        <TopHeader></TopHeader>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
