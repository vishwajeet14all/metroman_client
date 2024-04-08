import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/navbar/Navbar";
import { selectUserOAuthData } from "./redux/slices/auth/authSlice";
import { useSelector } from "react-redux";
import Loader from "./components/loader/Loader";
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Stages = lazy(() => import("./pages/Stages"));
const Products = lazy(() => import("./pages/Products"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Cart = lazy(() => import("./pages/Cart"));
const Personaldetail = lazy(() => import("./pages/Personaldetail"));
const Paymentsuccess = lazy(() => import("./pages/Paymentsuccess"));
const PrivacyPolicy = lazy(() => import("./pages/Extra/PrivacyPolicy"));
const Termsandcondition = lazy(() => import("./pages/Extra/Termsandcondition"));
const Contactus = lazy(() => import("./pages/Extra/Contactus"));
const Cancellationandrefund = lazy(() =>
  import("./pages/Cancellationandrefund")
);
const Shippinganddelivery = lazy(() => import("./pages/Shippinganddelivery"));
const Disclaimer = lazy(() => import("./pages/Extra/Disclaimer"));
const Layout = lazy(() => import("./pages/admin/Layout"));
const Adminhome = lazy(() => import("./pages/admin/home/Adminhome"));
const Adminproducts = lazy(() =>
  import("./pages/admin/products/Adminproducts")
);
const AdminUsers = lazy(() => import("./pages/admin/users/AdminUsers"));
const SingleUser = lazy(() => import("./pages/admin/singleUser/SingleUser"));
const SingleProduct = lazy(() =>
  import("./pages/admin/singleProduct/SingleProduct")
);
const Calculator = lazy(() => import("./pages/Calculator"));




function App() {
  const userDataOAuth = useSelector(selectUserOAuthData);

  const routeConfig = [
    { path: "/", component: Home },
    { path: "/aboutus", component: AboutUs },
    { path: "/stages", component: Stages },
    { path: "/calculator", component: Calculator },
    { path: "/product", component: Products },
    {
      path: "/login",
      element:
        Object.keys(userDataOAuth).length !== 0 ? (
          <Navigate to="/" />
        ) : (
          <Login />
        ),
    },
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
          path: "adminusers",
          element: <AdminUsers />,
        },
        {
          path: "adminproducts",
          element: <Adminproducts />,
        },
        {
          path: "users/:id",
          element: <SingleUser />,
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
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
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </BrowserRouter>
    </>
  );
}
export default App;
