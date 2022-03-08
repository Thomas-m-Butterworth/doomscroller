import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ImageCard from './components/ImageCard';
import Articles from './components/Articles';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Nav />
      <ImageCard />
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
