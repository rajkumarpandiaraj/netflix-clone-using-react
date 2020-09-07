import React from 'react';
import './App.css';
import request from './request'
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner url={request.fetchNetflixOriginals}/>
      <Row title='Netflix Originals' isLarge={true} url={request.fetchNetflixOriginals}/>
      <Row title='Trending Now' url={request.fetchTrendingNow}/>
      <Row title='Top Rated' url={request.fetchTopRated}/>
      <Row title='Action Movies' url={request.fetchActionMovies}/>
      <Row title='Comedy Movies' url={request.fetchComedyMovies}/>
      <Row title='Horror Movies' url={request.fetchHorrorMovies}/>
      <Row title='Romance Movies' url={request.fetchRomanceMovies}/>

    </div>
  );
}

export default App;
