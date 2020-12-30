import React from 'react';
import './App.css';
import Content from './layout/content';
import { Footer } from './layout/footer';
import { Header } from './layout/header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  // const [upcomingData, setUpcomingData] = useState([])




  return (
    <div className="App">
      <Router basename='/spaceX' >

        <Header />
        <Content />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
