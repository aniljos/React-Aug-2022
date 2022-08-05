import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ListProducts from './components/ListProducts';
import Search from './components/Search';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import GadgetStore from './components/GadgetStore';
import ViewCart from './components/ViewCart';
import HooksDemo from './components/HooksDemo';


function App(){
  return (

    <Router>
      <div className="container">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>

                    <ul className="nav">
                        <li className="nav-item">
                          <Link className="nav-link"  to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link"  to="/counter">Counter</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link"  to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link"  to="/search">Search</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link"  to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link"  to="/gadgets">Gadgets</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link"  to="/cart">ViewCart</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link"  to="/hooks">Hooks Demo</Link>
                        </li>
                    </ul>
                </div>
          </nav>

          <main>
                <Routes>
                  <Route path='/home' element={<Hello message="Hello World" color="blue"/>}/>
                  <Route path='/products' element={<ProtectedRoute> <ListProducts/> </ProtectedRoute>}/>
                  <Route path='/counter' element={<Counter initCount={5}/>}/>
                  <Route path='/search' element={<Search/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/gadgets' element={<GadgetStore/>}/>
                  <Route path='/cart' element={<ViewCart/>}/>
                  <Route path='/hooks' element={<HooksDemo/>}/>
                </Routes>
          </main>
          <div>
            <p></p>
          </div>
      </div>
    </Router>
  )
}


export default App;