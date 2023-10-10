import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
