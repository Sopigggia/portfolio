import { Capacitor } from "../../components/CircuitDiagramLogos";

import ListSeparationLayout from "../../layouts/ListSeparationLayout";

import EducationDegree from "../../components/EducationDegree/EducationDegree";

import { education } from "./EducationSection.constants";

const EducationSection = () => {
    return(
        <section className="education-section">
            <div className="content">
                <Capacitor className="size-18" />
                <h1>Education</h1>
                <ListSeparationLayout>
                    {education.map((item, index) => (
                        <EducationDegree degree={item} key={index} />
                    ))}
                </ListSeparationLayout>
            </div>
        </section>
    )
}

export default EducationSection;