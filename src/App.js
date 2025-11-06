import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
// import About from './components/about/About';
// import Skills from './components/skills/Skills';
// import Services from './components/services/Services';
// import Qualification from './components/qualification/Qualification';
import Project from './components/projects/Project';
import Footer from './components/footer/Footer';
// import ScrollUp from './components/scrollup/ScrollUp';


const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      {/* <About /> */}
      {/* <Skills /> */}
      {/* <Qualification /> */}
      <Project />
      {/* <Services /> */}
    </main>
    
    <Footer />
    {/* <ScrollUp /> */}
    </>
  );
}

export default App;
