import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Front from './components/front';
import Blog from './components/blog';
import Journey from "./components/journey";
import Present from "./components/presentation";
import Life from "./components/life";
import Contact from "./components/contact";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Front/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/jo' element={<Journey/>}/>
          <Route path='/pre' element={<Present/>}/>
          <Route path='/life' element={<Life/>}/>
          <Route path='/co' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
