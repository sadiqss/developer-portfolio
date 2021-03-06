import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Services from './component/services/Services';
import Experience from './component/Experience/Experience';
import Portfolio from './component/portfolio/Portfolio';

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </>
  );
}

export default App;
