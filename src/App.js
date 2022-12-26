import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Globalstyle from './Globalstyles'
import Testimonials from './components/Testimonials';
import Card from './components/Card';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Globalstyle/>
      <Header/>
      <Main/>
      <Testimonials/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
