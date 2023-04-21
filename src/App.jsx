import React from "react"
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import './css/style.scss'

import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Research from "./pages/Research";
import ResearchNav from "./components/research/ResearchNav";
import RsBtech from "./components/research/RsBtech";
import RsPhd from "./components/research/RsPhd";
import RsProjects from "./components/research/RsProjects";
import RsMtech from "./components/research/RsMtech";
import Ij from "./components/publications/Ij";
import PbNavigation from "./components/publications/PbNavigation";
import Books from "./components/publications/Books";
import BookChapters from "./components/publications/BookChapters";
const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  );
}

const ResearchLayout = () => {
  return(
    <>
      <Navbar/>
      <Research/>
      <ResearchNav/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  );
}

const PbLayout = () => {
  return(
    <>
      <Navbar/>
      <PbNavigation/>
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
    ]
  },
  {
    path: "/research",
    element: <ResearchLayout/>,
    children:[
      {
        path:"/research/phd",
        element: <RsPhd/>
      },
      {
        path:"/research/mtech",
        element: <RsMtech/>
      },
      {
        path:"/research/projects",
        element: <RsProjects/>
      },
      {
        path:"/research/btech",
        element: <RsBtech/>
      },

    ]
  },
  {
    path: "/pb",
    element: <PbLayout/>,
    children:[
      {
        path:"/pb/books",
        element: <Books/>
      },
      {
        path:"/pb/bc",
        element: <BookChapters/>
      },
      {
        path:"/pb/patents",
        element: <RsProjects/>
      },
      {
        path:"/pb/ic",
        element: <RsBtech/>
      },
      {
        path:"/pb/ij",
        element: <Ij/>
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
