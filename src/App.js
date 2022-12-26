import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Globalstyle from './Globalstyles'
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Globalstyle/>
      <Header/>
      <Main/>
      <Testimonials/>
    </div>
  );
}

export default App;
