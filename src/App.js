import React from "react";
//Global style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUs from './pages/AboutUs';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Nav from './components/Nav';
import MovieDetail from "./pages/MovieDetail";


//Router
import { Routes,Route, useLocation } from 'react-router-dom';

//animation
import { AnimatePresence } from "framer-motion";

  //we pass the key from routes to let know that we pass the page

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <GlobalStyle />
      
      <Nav />
      <AnimatePresence exitBeforeEnter>
      
      <Routes location={location} key={location.pathname}>

      <Route path="/" exact element={<AboutUs />}/>
      <Route path="/work" exact element={<Portfolio />}/>
      <Route path="/work/:id" element={ <MovieDetail />}/>
      <Route path="/contact" element={ <ContactMe />}/> 

      </Routes>
      </AnimatePresence>
    </div>
   
  ); 
}

export default App;

