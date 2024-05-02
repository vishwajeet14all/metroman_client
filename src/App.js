import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import Loader from "./components/loader/Loader";
import Navbar from "./components/navbar/Navbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import {
  selectUserOAuthData,
  selectUserLoginData,
} from "./redux/slices/auth/authSlice";

const Orders = lazy(() => import("./pages/admin/adminOrdersTable/Orders"));
const Order = lazy(() => import("./pages/admin/singleOrder/Order"));
const Updateproduct = lazy(() => import("./components/update/Updateproduct"));
const Addproduct = lazy(() => import("./pages/admin/addProduct/Addproduct"));
const Shipping = lazy(() => import("./pages/Shipping/Shipping"));
const Home = lazy(() => import("./pages/home/Home"));
const AboutUs = lazy(() => import("./pages/aboutUs/AboutUs"));
const Stages = lazy(() => import("./pages/stages/Stages"));
const Products = lazy(() => import("./pages/products/Products"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Personaldetail = lazy(() =>
  import("./pages/personalDetail/Personaldetail")
);
const Paymentsuccess = lazy(() => import("./pages/Paymentsuccess"));
const PrivacyPolicy = lazy(() => import("./pages/Extra/PrivacyPolicy"));
const Termsandcondition = lazy(() => import("./pages/Extra/Termsandcondition"));
const Contactus = lazy(() => import("./pages/Extra/Contactus"));
const Cancellationandrefund = lazy(() =>
  import("./pages/Cancellationandrefund")
);
const OrderDetails = lazy(() => import("./pages/OrderDetails"));
const Disclaimer = lazy(() => import("./pages/Extra/Disclaimer"));
const Layout = lazy(() => import("./pages/admin/Layout"));
const Adminhome = lazy(() => import("./pages/admin/home/Adminhome"));
const Getallpoducts = lazy(() =>
  import("./pages/admin/products/Getallpoducts")
);
const AdminUsers = lazy(() => import("./pages/admin/users/AdminUsers"));
const Userdetails = lazy(() => import("./pages/admin/singleUser/Userdetails"));
const Productdetails = lazy(() =>
  import("./pages/admin/singleProduct/Productdetails")
);
const Calculator = lazy(() => import("./pages/Calculator"));

function App() {
  const userDataOAuth = useSelector(selectUserOAuthData);
  const userLoginData = useSelector(selectUserLoginData);

  // if (userLoginData && Object.keys(userLoginData).length > 0) {
  //   const jsonString = JSON.stringify(userLoginData);
  //   localStorage.setItem("userData", jsonString);
  // }
  // const storedData = localStorage.getItem("userData");
  // const parsedData = JSON.parse(storedData);

  const isAuthenticated =
    Object.keys(userDataOAuth).length !== 0 ||
    Object.keys(userLoginData).length !== 0;

  const routeConfig = [
    { path: "/", component: Home },
    { path: "/aboutus", component: AboutUs },
    { path: "/stages", component: Stages },
    { path: "/calculator", component: Calculator },
    { path: "/product", component: Products },
    { path: "/privacypolicy", component: PrivacyPolicy },
    { path: "/termsandcondition", component: Termsandcondition },

    {
      path: "/layout",
      element: (
        <ProtectedRoutes
          adminOnly={true}
          admin={userLoginData?.isAdmin === "admin" ? true : false}
          isAuthenticated={true}
        >
          <Layout />
        </ProtectedRoutes>
      ),
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
          path: "getallproducts",
          element: <Getallpoducts />,
        },
        {
          path: "product/new",
          element: <Addproduct />,
        },
        {
          path: "product/:id",
          element: <Updateproduct />,
        },
        {
          path: "userdetails/:id",
          element: <Userdetails />,
        },
        {
          path: "productdetails/:id",
          element: <Productdetails />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "order/:id",
          element: <Order />,
        },
      ],
    },
    { path: "/contactus", component: Contactus },
    { path: "/order/:id", component: OrderDetails },
    { path: "/disclaimer", component: Disclaimer },

    {
      path: "/login",
      element: (
        <ProtectedRoutes isAuthenticated={!isAuthenticated}>
          <Login />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/signup",
      element: (
        <ProtectedRoutes isAuthenticated={!isAuthenticated}>
          <Signup />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/cart",
      element: (
        <ProtectedRoutes isAuthenticated={isAuthenticated}>
          <Cart />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/paymentsuccess",
      element: (
        <ProtectedRoutes isAuthenticated={isAuthenticated}>
          <Paymentsuccess />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/cancellationandrefund",
      element: (
        <ProtectedRoutes isAuthenticated={isAuthenticated}>
          <Cancellationandrefund />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/personaldetail",
      element: (
        <ProtectedRoutes isAuthenticated={isAuthenticated}>
          <Personaldetail />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/shipping",
      element: (
        <ProtectedRoutes isAuthenticated={isAuthenticated}>
          <Shipping />
        </ProtectedRoutes>
      ),
    },
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
        <Toaster position="bottom-center" />
      </BrowserRouter>
    </>
  );
}
export default App;
