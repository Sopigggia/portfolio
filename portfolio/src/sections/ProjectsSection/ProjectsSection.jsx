import { MicroChip } from "../../components/CircuitDiagramLogos";
import SkillComponent from "../../components/SkillComponent/SkillComponent";

import ListSeparationLayout from "../../layouts/ListSeparationLayout";

import { projects } from "./ProjectsSection.constants";

const ProjectSection = () => {
    return(
        <section className="project-section">
            <div className="content">
                <MicroChip className="size-18" />
                <h1>Engineering Projects</h1>
                <ListSeparationLayout>
                    {projects.map((project, index) => (
                        <div key={index} className="project-item max-w-xl flex flex-col flex-wrap justify-evenly gap-2 mx-auto items-start text-left">
                            <h2>{project.name}</h2>
                            {project.image && (
                                <img src={project.image} alt={`${project.company.name} image`} className="project-image w-64" />
                            )}
                            <p className="italic">{project.date}</p>
                            <p className="description">{project.description}</p>
                            <ul className="flex flex-row flex-wrap gap-2 items-center">
                                {project.skills.map((skill, index) => (
                                    <SkillComponent key={index}>{skill}</SkillComponent>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ListSeparationLayout>
            </div>
        </section>
    )
}

export default ProjectSection;