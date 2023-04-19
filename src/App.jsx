import React from "react"
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import './css/style.scss'
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import InternationalJournals from "./components/InternationalJournals";


const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Profile/>
      },
      {
        path:"/ia",
        element:<InternationalJournals/>
      },
      
    ]
  },
 
]);

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <RouterProvider router={router} />
      </div>
    </div>
  );

}

export default App
