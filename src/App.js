import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/navbar/Navbar";
import Stages from "./pages/Stages";
import Calculator from "./pages/Calculator";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Personaldetail from "./pages/Personaldetail";
import Paymentsuccess from "./pages/Paymentsuccess";
import PrivacyPolicy from "./pages/Extra/PrivacyPolicy";
import Termsandcondition from "./pages/Extra/Termsandcondition";
import Contactus from "./pages/Extra/Contactus";
import Cancellationandrefund from "./pages/Cancellationandrefund";
import Shippinganddelivery from "./pages/Shippinganddelivery";
import Disclaimer from "./pages/Extra/Disclaimer";
import Layout from "./pages/admin/Layout";
import Adminhome from "./pages/admin/home/Adminhome";
import Adminproducts from "./pages/admin/products/Adminproducts";
import Users from "./pages/admin/users/Users";

function App() {
  const routeConfig = [
    { path: "/", component: Home },
    { path: "/aboutus", component: AboutUs },
    { path: "/stages", component: Stages },
    { path: "/calculator", component: Calculator },
    { path: "/products", component: Products },
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
    { path: "/cart", component: Cart },
    { path: "/personaldetail", component: Personaldetail },
    { path: "/paymentsuccess", component: Paymentsuccess },
    { path: "/privacypolicy", component: PrivacyPolicy },
    { path: "/termsandcondition", component: Termsandcondition },
    {
      path: "/layout",
      element: <Layout />,
      children: [
        {
          path: "adminhome",
          element: <Adminhome />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "adminproducts",
          element: <Adminproducts />,
        },
      ],
    },
    { path: "/contactus", component: Contactus },
    { path: "/cancellationandrefund", component: Cancellationandrefund },
    { path: "/shippinganddelivery", component: Shippinganddelivery },
    { path: "/disclaimer", component: Disclaimer },
  ];

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routeConfig.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element || <route.component />}
            >
              {route.children &&
                route.children.map((childRoute) => (
                  <Route
                    key={childRoute.path}
                    path={childRoute.path}
                    element={childRoute.element}
                  ></Route>
                ))}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
