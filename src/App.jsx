import './App.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Projects from './routes/Projects.jsx';
import NotFound from './routes/NotFound.jsx';
import Footer from './components/Footer';
import Header from './components/Header.jsx';

function App() {

  return (
    <>
    {/* <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path='*' component={NotFound} />
        </Routes>
      </Router>
    <Footer/> */}
    </>
  )
}

export default App
