import React from "react";
import "./Projects.scss";
import coll from "../../assets/colloseum.png";
import { projects } from "./ProjectData";
import thumbnailIcon from "../../assets/thumbnail_template.jpg";

function Projects() {
  const projectUrls = [
    "https://caffinedevs.github.io/e-cardz-ng-frontend/",
    "https://caffinedevs.github.io/youtube-dl-gui-client/",
    "https://caffinedevs.github.io/radium-jobs-rc-frontend/",
    "https://caffinedevs.github.io/html2jsx-rc-frontend/",
  ];
  return (
    <div className="d-flex align-items-center mainCardContainer">
      <div className="mainCard">
        <div className="position-relative main-content">
          <div className="position-absolute">
            <div className="page-title m-n1">Projects</div>
            <div className="d-flex flex-wrap card-con">
              {projects.map((project, index) => {
                return (
                  <div className="m-autos" key={`proj_${index}`}>
                    <a
                      href={project.url}
                      target={project.url ? "_blank" : null}
                    >
                      <div className="project-card border-yellow cursor-pointer m-4">
                        <div className="position-relative">
                          <img src={thumbnailIcon} className="project-img" />
                          <div className="position-absolute yellow-overlay">
                            <div className="position-relative pending">
                              {project.completionStatus ? null : "Pending"}
                            </div>
                          </div>
                        </div>
                        <div className="project-card-body text-gray">
                          <div className="title">
                            <div className="px-3">{project.name}</div>
                          </div>
                          <div className="desc">
                            <div className="px-3 p-2 clamp-4">
                              {project.desc}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <img src={coll} className="position-absolute coll" /> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
