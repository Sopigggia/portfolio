import imageProfile from '../assets/images/profile.png';
import CtaButton from '../components/CtaButton/CtaButton';

import CV from '../assets/docs/cv.pdf';

import { PowerSource } from '../components/CircuitDiagramLogos';

const HeroSection = () => {
    const handleDownloadCV = () => {
        // Create a link and set the URL to your PDF file
        const link = document.createElement('a');
        link.href = CV;
        
        // Optional: Specify the downloaded filename
        link.download = 'SophieZhangPDF.pdf'; 
        
        // Append to the DOM, trigger click, then remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <section className="hero-section">
            <div className="content w-sm px-6">
                <PowerSource className="size-18" />
                <img src={imageProfile} alt="My profile picture" className="rounded-full size-42" />
                <h1 className='uppercase'>Tongfei (Sophie) Zhang</h1>
                <p>Electrical Engineering student at McGill University</p>
                <div className="cta flex gap-4 mt-3">
                    <CtaButton onClick={handleDownloadCV}>Download CV</CtaButton>
                    <CtaButton onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Contact Me</CtaButton>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;