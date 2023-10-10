// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Category from './pages/category/Category';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='category' element={<Category/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
        <Footer/>
      </div>


    </>
  );
}

export default App;
