import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import './SideNav.css'

const sections = [
    { name:'Hero', class:'hero-section' },
    { name:'About', class:'aboutme-section' },
    { name:'Education', class:'education-section' },
    { name:'Work Experiences', class:'work-section' },
    { name:'Projects', class:'project-section' },
    { name:'Contact', class:'contact-section' }
]

const SideNav = () => {
    const [activeSection, setActiveSection] = useState("hero-section");

    const handleScrollToSection = (sectionClass) => {
        const section = document.querySelector(`.${sectionClass}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleScroll = () => {
        for (const section of sections) {
            const element = document.querySelector(`.${section.class}`);
            if (element) {
                const rect = element.getBoundingClientRect();
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    setActiveSection('contact-section');
                } else if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveSection(section.class);
                    break;
                } 
            }
        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <nav className="side-nav fixed left-5 top-[50lvh] -translate-y-[50%]">
            <ul className="flex flex-col gap-4 bg-primary dark:bg-primary-dark px-3 py-5 rounded-full shadow-md shadow-secondary dark:shadow-secondary-dark items-center">
                {sections.map((section, index) => (
                    <li key={index} onClick={() => handleScrollToSection(section.class)} className={`cursor-pointer relative opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out`}>
                        {activeSection===section.class ? (<FontAwesomeIcon icon={faLightbulb} className="text-3xl"/>) : (<FontAwesomeIcon icon={faCircle} className="text-sm"/>)}
                        <p className='absolute px-3 py-1 invisible xl:visible xl:bg-transparent bg-primary dark:bg-primary-dark xl:shadow-none rounded-full shadow-md shadow-secondary dark:shadow-secondary-dark top-5/10 -translate-y-[50%] left-[45px] text-nowrap'>{section.name}</p>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default SideNav;