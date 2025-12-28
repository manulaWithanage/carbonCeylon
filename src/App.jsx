import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
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

// Admin imports
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminGemstones from './pages/admin/AdminGemstones';
import AdminJewelry from './pages/admin/AdminJewelry';
import ProtectedRoute from './components/admin/ProtectedRoute';

// Store layout wrapper (shows navbar/footer)
const StoreLayout = ({ children }) => (
  <>
    <Navbar />
    <CartDrawer />
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <CurrencyProvider>
            <CartProvider>
              <div className="antialiased selection:bg-[#0d9488] selection:text-white">
                <Routes>
                  {/* Store Routes */}
                  <Route path="/" element={<StoreLayout><Home /></StoreLayout>} />
                  <Route path="/gemstones" element={<StoreLayout><Gemstones /></StoreLayout>} />
                  <Route path="/gemstone/:slug" element={<StoreLayout><GemDetail /></StoreLayout>} />
                  <Route path="/jewelry" element={<StoreLayout><Jewelry /></StoreLayout>} />
                  <Route path="/product/:slug" element={<StoreLayout><ProductDetail /></StoreLayout>} />
                  <Route path="/collection" element={<StoreLayout><Jewelry /></StoreLayout>} />
                  <Route path="/gem-visualizer" element={<StoreLayout><Bespoke /></StoreLayout>} />
                  <Route path="/custom-designer" element={<StoreLayout><Bespoke /></StoreLayout>} />
                  <Route path="/bespoke" element={<StoreLayout><Bespoke /></StoreLayout>} />
                  <Route path="/our-story" element={<StoreLayout><OurStory /></StoreLayout>} />
                  <Route path="/contact" element={<StoreLayout><Contact /></StoreLayout>} />

                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute>
                        <AdminLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<AdminDashboard />} />
                    <Route path="gemstones" element={<AdminGemstones />} />
                    <Route path="jewelry" element={<AdminJewelry />} />
                  </Route>
                </Routes>
              </div>
            </CartProvider>
          </CurrencyProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
