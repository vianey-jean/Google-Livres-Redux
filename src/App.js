import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AddBooks from './containers/AddBooks'
import SearchBooks from './containers/SearchBooks'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={ < SearchBooks/>} />
          <Route path="/search" element={< AddBooks /> } />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
