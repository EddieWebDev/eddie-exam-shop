import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import Categories from "./pages/Categories/Categories";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <UserProvider>
            <CartProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/:category" element={<Category />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
              </Routes>
              <Footer />
            </CartProvider>
          </UserProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
