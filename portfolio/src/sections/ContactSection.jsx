import { EarthGround } from "../components/CircuitDiagramLogos";

import LinkedinLogo from "../assets/logo/contact/linkedin.png";
import GmailLogo from "../assets/logo/contact/gmail.png";

const socials = [
    {name: "LinkedIn", url: "https://www.linkedin.com/in/sophie-zhang-b7230b213/", icon: LinkedinLogo},
    {name:'Email', url:'mailto:sophie.zhang1016@outlook.com', icon:GmailLogo}
]

const ContactSection = () => {
    return(
        <section className="contact-section">
            <div className="content">
                <EarthGround className="size-16" />
                <h1>Contact Me</h1>
                <div className="flex flex-row gap-10 items-center">
                    {socials.map((social, index) => (
                        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="interactive rounded-full size-12">
                            <img src={social.icon} alt={`${social.name} logo`} className="border-0" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContactSection;