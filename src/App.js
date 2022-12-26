import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Globalstyle from './Globalstyles'
import Testimonials from './components/Testimonials';
import Card from './components/Card';
import Footer from './components/Footer';
import styled from 'styled-components';
import image from './images/bg-tablet-pattern.svg'
function App() {
  return (
    <div className="App">
    <Container>
    <Navbar/>
      <Globalstyle/>
      <Header/>
      <Main/>
      <Testimonials/>
      <Card/>
      <Footer/>
    </Container>

    </div>
  );
}

export default App;

const Container = styled.div`


`