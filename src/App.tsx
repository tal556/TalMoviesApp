import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} isLargeRow={false}/>
      <Row title='Top rated' fetchUrl={requests.fetchTopRated} isLargeRow={false}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} isLargeRow={false}/>
      <Row title='Commedy Movies' fetchUrl={requests.fetchComedyMovies} isLargeRow={false}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} isLargeRow={false}/>
      <Row title='Docomentry Movies' fetchUrl={requests.fetchDocumentaries} isLargeRow={false}/>
      <Row title='Upcoming Movies' fetchUrl={requests.fetchUpcoming} isLargeRow={false}/>
      

      <Footer/>
    

    </div>
  );
}

export default App;
