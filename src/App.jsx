import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import Bespoke from './pages/Bespoke';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <CurrencyProvider>
        <CartProvider>
          <div className="antialiased selection:bg-[#0d9488] selection:text-white">
            <Navbar />
            <CartDrawer />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                <Route path="/bespoke" element={<Bespoke />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </CurrencyProvider>
    </BrowserRouter>
  );
}

export default App;
