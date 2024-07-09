import "./css/App.css";
import "./css/global.css";
import Header from './components/Header/index.jsx'
import Search from "./components/Search/index.jsx";
import LatestReleases from "./components/LatestReleases/index.jsx"


function App() {

  return (
    <>
      <div className="App">
		    <Header/>
        <Search/>
        <LatestReleases/> 
      </div>
    </>
  );
}

export default App;
