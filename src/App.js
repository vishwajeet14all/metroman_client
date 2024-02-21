import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  // RouterProvider,
  // createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Stages from "./pages/Stages";
import Calculator from "./pages/Calculator";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Personaldetail from "./pages/Personaldetail";
import Paymentsuccess from "./pages/Paymentsuccess";
import PrivacyPolicy from "./pages/Extra/PrivacyPolicy";

function App() {
  // const browserRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Navbar />,
  //     children: [
  //       { path: "/", element: <Home /> },
  //       { path: "/aboutus", element: <AboutUs /> },
  //       { path: "/stages", element: <Stages /> },
  //       { path: "/calculator", element: <Calculator /> },
  //       { path: "/products", element: <Products /> },
  //       { path: "/login", element: <Login /> },
  //       { path: "/signup", element: <Signup /> },
  //       { path: "/cart", element: <Cart /> },
  //       { path: "/personaldetail", element: <Personaldetail /> },
  //       { path: "/paymentsuccess", element: <Paymentsuccess /> },
  //     ],
  //   },
  // ]);

  return (
    <>
      {/* <RouterProvider router={browserRouter} /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/stages" element={<Stages />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/personaldetail" element={<Personaldetail />} />
          <Route path="/paymentsuccess" element={<Paymentsuccess />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
