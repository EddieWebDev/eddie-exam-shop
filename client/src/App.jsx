import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
const Admin = React.lazy(() => import("./pages/Admin/Admin"));
const Categories = React.lazy(() => import("./pages/Categories/Categories"));
const Category = React.lazy(() => import("./pages/Category/Category"));
const Product = React.lazy(() => import("./pages/Product/Product"));
const Checkout = React.lazy(() => import("./pages/Checkout/Checkout"));
const User = React.lazy(() => import("./pages/User/User"));
const About = React.lazy(() => import("./pages/About/About"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const CreateAccount = React.lazy(() =>
  import("./pages/CreateAccount/CreateAccount")
);

function App() {
  const client = new QueryClient();

  return (
    <main className="flex flex-col min-h-screen">
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <UserProvider>
            <CartProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/about"
                  element={
                    <React.Suspense fallback="Loading...">
                      <About />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <React.Suspense fallback="Loading...">
                      <Admin />
                    </React.Suspense>
                  }
                />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="/checkout"
                  element={
                    <React.Suspense fallback="Loading...">
                      <Checkout />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/categories"
                  element={
                    <React.Suspense fallback="Loading...">
                      <Categories />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/category/:category"
                  element={
                    <React.Suspense fallback="Loading...">
                      <Category />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/createaccount"
                  element={
                    <React.Suspense fallback="Loading...">
                      <CreateAccount />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/product/:id"
                  element={
                    <React.Suspense fallback="Loading...">
                      <Product />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <React.Suspense fallback="Loading...">
                      <Login />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/user/:id"
                  element={
                    <React.Suspense fallback="Loading...">
                      <User />
                    </React.Suspense>
                  }
                />
              </Routes>
              <Footer />
            </CartProvider>
          </UserProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </main>
  );
}

export default App;
