import React from "react";
import ProjectCard from "./project-card";

function MyProjects() {
  let myProjects = [
    {
      name: "Help A Soul",
      source: "https://github.com/christo-zero-john/help-a-soul",
      live: "http://helpasoul.netlify.app/",
      description: "This is a project",
    },
    {
      name: "mu-companion",
      source: "https://github.com/christo-zero-john/mu-companion-webapp",
      live: "https://mu-companion.vercel.app/",
      description: "This is a project",
    },
    {
      name: "Bing Reward Points Miner",
      source:
        "https://github.com/christo-zero-john/bing-rewards-automator-website",
      live: "https://bing-rewards-automator-website.vercel.app/",
      description: "This is a project",
    },
    {
      name: "VS Code extension downloader",
      source:
        "https://github.com/christo-zero-john/vs-code-extension-downloader",
      live: "##",
      description: "This is a project",
    },
  ];
  return (
    <div className="col-11">
      <p className="text-secondary text-center h2 mt-3">My Projects</p>
      <div className="projects col-12">
        {
          myProjects.map((projectItem, index) => {
            return <div className="" key={index}>
              <ProjectCard project={projectItem} />
            </div>
          })
        }
      </div>
    </div>
  );
}

export default MyProjects;
