
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
