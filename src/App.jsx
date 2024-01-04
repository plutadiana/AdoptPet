import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Details from './routes/Details';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './routes/Home';
import Adoption from "./routes/Adoption";
import Cart from "./routes/Cart";
import Login from './routes/Login/Login';
import SignUp from './routes/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/adoption/:category' Component={Adoption} />
        <Route path='/details/:id' Component={Details} />
        <Route path='/cart' Component={Cart} />
        <Route path='*' element={<>Error page, try again....</>} />
        <Route path='/login' Component={Login} />
        <Route path='/sign-up'Component={SignUp}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
