import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import Appshop from './components/shop';
import AppTestimonials from './components/testimonials';
import AppPricing from './components/pricing';
import Appblog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';



function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <Appshop/>
        <AppTestimonials />
        <AppPricing />
        <Appblog />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;