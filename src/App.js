import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import Pictures from './components/Pictures';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
      <Testimonials />
      <Pictures />
      <Footer />
    </div>
  );
}

export default App;
