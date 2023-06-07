
import './App.css';
import Home from './components/home';
import Gallery from './components/gallery'
import MyCart from './components/myCart';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Details from './components/details';
import Pay from './components/pay';
import End from './components/endOrder';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>   
            <br/><Link to="/about"><button>ABOUT US</button></Link>
            <Link to="/gallery"><button>OUR PRODUCTD</button></Link>
            <Link to="/myCart"><button>MY CART</button></Link> 
      <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/myCart">
            <Route path="" element={ <MyCart/> }/>
            <Route path=":pay" element={<Pay/>}/>
          </Route>
          <Route path="/myCart/pay">
             <Route path="" element={ <Pay/> }/> 
             <Route path=":endOrder" element={ <End/> }/>
          </Route>
          <Route path="/gallery">
             <Route path="" element={ <Gallery/> }/>
             <Route path=":name" element={ <Details/> }/>
          </Route> 

      </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default App;
