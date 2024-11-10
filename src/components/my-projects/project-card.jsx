function ProjectCard({ project }) {
    return (
        <div className="card col-11 col-md-4 m-2 p-2 mx-auto">
            <div className="">
                <p className="card-header">
                    {project.name}
                </p>
                <p className="card-header">
                    {project.description}
                </p>
                <div className="card-footer">
                    <a href={project.source} className="btn btn-success float-start mx-2">Source</a>
                    <a href={project.live} className="btn btn-primary float-end mx-2">Live</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard