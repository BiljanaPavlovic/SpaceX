import React, { useState } from 'react';
import './App.css';
import PastLList from './components/past-l-list';
import { getPastLaunches, getUpcomingLaunches } from './utility/space-x-service';
import UpcomingLList from './components/upcoming-l-list';
import Content from './layout/content';
import { Footer } from './layout/footer';
import { Header } from './layout/header';

function App() {
  
 // const [upcomingData, setUpcomingData] = useState([])




  return (
    <div className="App">
     <Header />
     <Content />
     <Footer />
    </div>
  );
}

export default App;
