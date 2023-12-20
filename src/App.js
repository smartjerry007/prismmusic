import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer'
import Dashboard from './pages/Dashboard/dashboard';
import Menu from './pages/Menu/menu'
import Story from './pages/Story/story'

function App() {
  return (
    <div class="back-grey">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Dashboard />} />
        <Route path="/menu" element= {<Menu />} />
        <Route path="/story" element= {<Story />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
