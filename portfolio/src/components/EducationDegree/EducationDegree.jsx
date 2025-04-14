import { useEffect, useState } from "react";

import "./EducationDegree.css";

const EducationDegree = ({degree}) => {
    const [degreeData, setDegreeData] = useState(degree);

    useEffect(() => {
        setDegreeData(degree);
    }, [degree]);

    return (
        <div className="university-degree flex flex-row flex-wrap justify-evenly gap-8 mx-auto items-start">
            <img src={degreeData.university.image} alt={`${degreeData.university.name} image`} className="university-image w-64 zoom" />
            <div className="university-info flex flex-col gap-2 items-start">
                <div className="university-header flex flex-row gap-4 justify-center items-center text-left">
                    <h2>{degreeData.name}</h2>
                    <img src={degreeData.university.logo} alt={`${degreeData.university.name} logo`} className="logo interactive w-26" />
                </div>
                <p className="italic">{degreeData.date}</p>
                <p>GPA: {degreeData.gpa}</p>
                <p>Relevant Courses:</p>
                <ul className="text-left ml-10 list-disc">
                    {degreeData.relevant_courses.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EducationDegree;