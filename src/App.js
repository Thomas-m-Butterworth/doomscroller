import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ImageCard from './components/ImageCard';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <ImageCard />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
