import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Rows from './components/Rows';
import requests from './request';

function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Rows isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Rows>
      <Rows title="Top Trending" fetchUrl={requests.fetchTrending}></Rows>
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}></Rows>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}></Rows>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Rows>
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Rows>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Rows>
    </div>
  );
}

export default App;
