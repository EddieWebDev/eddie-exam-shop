import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import { UserContext } from "./context/UserContext";
import { useState, useMemo, useEffect } from "react";

function App() {
  const client = new QueryClient();

  const [user, setUser] = useState(null);

  const currentUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    if (user) {
      let expTime = user.exp - user.iat;
      const autoLogout = setInterval(() => {
        setUser(null);
      }, expTime * 1000);
      return () => clearInterval(autoLogout);
    }
  }, [user]);

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <UserContext.Provider value={currentUser}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product" element={<Product />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </UserContext.Provider>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
