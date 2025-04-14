import Birthday from "../assets/images/birthday.png";

import { Resistor } from '../components/CircuitDiagramLogos';

const AboutMeSection = () => {
    return (
        <section className="aboutme-section">
            <div className="content max-w-xl">
                <Resistor className="size-18" />
                <h1 className="text-center">About Me</h1>
                <img src={Birthday} alt="Me" className="h-80 rounded-3xl" />
                <p className="text-justify">Experienced Operator with a demonstrated  history of working in the education industry. Skilled in Communication,  Microsoft Excel, Engineering, Presentations, and Customer Service.  Strong operations professional with a Bachelor of Engineering - BE  focused in Electrical and Electronics Engineering from McGill  University.</p>
            </div>
        </section>
    );
}

export default AboutMeSection;