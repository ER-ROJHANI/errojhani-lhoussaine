import Header from './components/Header';
import Showcase from './components/Showcase';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SocialBar from './components/SocialBar';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <Projects />
      <Blog />
      <Footer />
      <SocialBar />
    </div>
  );
}

export default App;