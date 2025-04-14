import { MicroChip } from "../../components/CircuitDiagramLogos";

import { works } from "./WorksSection.constants";

import ListSeparationLayout from "../../layouts/ListSeparationLayout";

const WorkSection = () => {
    return(
        <section className="work-section">
            <div className="content">
                <MicroChip className="size-18" />
                <h1>Work Experience</h1>
                <ListSeparationLayout>
                    {works.map((work, index) => (
                        <div key={index} className="work-item max-w-xl flex flex-col flex-wrap justify-evenly gap-2 mx-auto items-start text-left">
                            <div className="header w-full flex flex-row gap-4 justify-between items-center">
                                <h2>{work.title} at {work.company.name}</h2>
                                {work.company.logo && (
                                    <img src={work.company.logo} alt={`${work.company.name} logo`} className="logo w-22 interactive" />
                                )}
                            </div>
                            {work.image && (
                                <img src={work.image} alt={`${work.company.name} image`} className="work-image interactive rounded-md w-64 shrink-0 border-1 border-yellow-200 self-center" />
                            )}
                            <p className="italic">{work.date}</p>
                            <p>{work.location}</p>
                            <p className="description">{work.description}</p>
                        </div>
                    ))}
                </ListSeparationLayout>
            </div>
        </section>
    )
}

export default WorkSection;