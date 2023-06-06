import { NavLink } from "react-router-dom";
import "../../css/research/researchnav.scss";

const ResearchNav = () => {
  return (
    <div className="container">
      <div className="rsnavbar">
        <div className="rscontainer">
          <div className={`rsnav-elements`}>
            <ul>
              <li>
                <NavLink to="/research/projects">
                  {" "}
                  <div className="rsselectbox">
                    <span>Projects</span>
                  </div>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/research" end>
                  {" "}
                  <div className="rsselectbox">
                    <span>Ph.D.Theses</span>{" "}
                  </div>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/research/mtech">
                  {" "}
                  <div className="rsselectbox">
                    <span>
                      M. Tech. <br /> Dissertation
                    </span>{" "}
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/research/btech">
                  {" "}
                  <div className="rsselectbox">
                    <span>
                      B.Tech. <br /> Projects
                    </span>
                  </div>{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchNav;
