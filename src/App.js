import './App.css';
import Header from './components/header';
import Nav from './components/navbar';


// import Footer from './components/footer';
import Home from './Pages/Home';


function App() {
  // make episodes statehere


  // make useEffect here
  // axios to API to get episode info
  // setEpisodes(res.data)

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav />
        {/* send episodes into HOME */}
        <Home/>
      
    
        {/* <Footer /> */}
      </header>
    </div>
  );
}

export default App;