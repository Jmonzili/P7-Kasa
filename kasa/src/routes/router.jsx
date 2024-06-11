import { createBrowserRouter, Outlet } from "react-router-dom";
// import App from "../App";
import Header from "../layout/Header";
import Home from "../pages/Home";
import Footer from "../layout/Footer";
import Main from "../layout/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />  
      </Main>
      <Footer />
    </>
  )
}

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: (
      <>
        <Header />
        <h1>Error 404</h1>
      </>),
    children: [
      //  Les diférents composants arriveront dans Outlet
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/flat",
        element: <h1>Appartement</h1>
      },
      {
        path: "/about",
        element: <h1>À propos</h1>,
      },
    ]
  },
]);