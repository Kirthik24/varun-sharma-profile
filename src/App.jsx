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
import Gallery from "./pages/Gallery";
import InternationalConference from "./components/publications/InternationalConference";
import Patents from "./components/publications/Patents";
import Footer from "./components/Footer";
import PeopleNav from "./components/people/PeopleNav";
import PeoplePostDocFellow from "./components/people/PeoplePostDocFellow";
import PeoplePhd from "./components/people/PeoplePhd";
import Facilities from "./pages/Facilities";
import PeopleMtech from "./components/people/PeopleMtech";
import PeopleAlumini from "./components/people/PeopleAlumini";
const Layout = () => {
  return(
    <>
      <Navbar/>
      <div className="content">
      <Outlet/>
      </div>
      <Footer/>
    </>
  );
}

const ResearchLayout = () => {
  return(
    <>
      <Navbar/>
      <div className="content">
      <Research/>
      <ResearchNav/>
      <Outlet/>
      </div>
      
      <Footer/>
    </>
  );
}

const PbLayout = () => {
  return(
    <>
      <Navbar/>
      <div className="content">
      <PbNavigation/>
      <Outlet/>
      </div>
      <Footer/> 
    </>
  );
}

const PeopleLayout = () => {
  return(
    <>
      <Navbar/>
      <div className="content">
      <PeopleNav/>
      <Outlet/>
      </div>
      <Footer/> 
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
        path:"/gallery",
        element:<Gallery/>
      },
      {
        path: "/facilities",
        element: <Facilities/>
      }
    ]
  },
  {
    path: "/research",
    element: <ResearchLayout/>,
    children:[
      {
        path:"/research",
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
        path:"/pb",
        element: <Books/>
      },
      {
        path:"/pb/bc",
        element: <BookChapters/>
      },
      {
        path:"/pb/patents",
        element: <Patents/>
      },
      {
        path:"/pb/ic",
        element: <InternationalConference/>
      },
      {
        path:"/pb/ij",
        element: <Ij/>
      },
    ]
  },
  {
    path: "/teams",
    element: <PeopleLayout/>,
    children:[
      {
        path:"/teams",
        element: <PeoplePostDocFellow/>
      },
      {
        path:"/teams/phd",
        element: <PeoplePhd/>
      },
      {
        path:"/teams/mtech",
        element: <PeopleMtech/>
      },
      {
        path:"/teams/alumini",
        element: <PeopleAlumini/>
      },
    ]
  },
 
]);

function App() {
  return (
    <div className="app1">
      <div className="wrapper2">
        <RouterProvider router={router} />
      </div>
    </div>
  );

}

export default App
