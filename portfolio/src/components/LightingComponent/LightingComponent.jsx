import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

import './LightingComponent.css'

const LightingComponent = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const userPreference = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (userPreference === 'dark' || (!userPreference && systemPrefersDark)) {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        const rootStyles = getComputedStyle(document.documentElement);
      
        const themeColor = isDark
          ? rootStyles.getPropertyValue('--color-secondary-dark').trim()
          : rootStyles.getPropertyValue('--color-secondary').trim();
      
        if (isDark) {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }
        if (metaThemeColor) metaThemeColor.setAttribute('content', themeColor);
      }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    return (
        <div className='lighting-component cursor-pointer fixed top-0 right-0 p-4 z-2 text-5xl opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out'>
            <FontAwesomeIcon icon={faLightbulb} onClick={toggleTheme} />
        </div>
    );
}

export default LightingComponent;