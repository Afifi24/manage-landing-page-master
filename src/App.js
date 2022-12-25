import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Globalstyle from './Globalstyles'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Globalstyle/>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
