import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Gemstones from './pages/Gemstones';
import GemDetail from './pages/GemDetail';
import Jewelry from './pages/Jewelry';
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
                <Route path="/gemstones" element={<Gemstones />} />
                <Route path="/gemstone/:slug" element={<GemDetail />} />
                <Route path="/jewelry" element={<Jewelry />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                <Route path="/collection" element={<Jewelry />} />
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
