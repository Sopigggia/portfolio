export const projects = [
    {
        name:"Treasure Hunter",
        date:"December 2024",
        description:"Designed a 2D array-based grid puzzle and integrated UART feedback for directional hints and accelerometer-based movement controls from Microprocess STM32. Implemented audio from the speaker for clues and traps, threading tasks for audio, movement, and feedback. Enhanced gameplay experience with trap mechanisms, a reset button, and a step-based feedback system from OS.",
        skills: ["C"]
    },
    {
        name:"DAC, Timers, Interrupts, DMA, and Analog Interfacing",
        date:"October 2024",
        description:"Configured STM32 DAC to generate wave signals for audio output, and make them observable on a speaker. Utilized CubeMX and HAL libraries to initialize DAC output and synchronize with timer interrupts. Implemented DMA to optimize signal processing, and reduced CPU load for efficient multi-tone generation. Enabled user interaction with push-button interrupt to provide adaptive audio feedback in embedded systems",
        skills: ["C", "Assembly"]
    },
    {
        name:"Design front-end for conscientious consumers of McGill",
        date:"January - December 2024",
        description:"Enhanced Stocate's user experience by aligning consumer journeys with optimized UX features. Key tasks include mobile optimization, implementing a design system for UI consistency, conducting usability tests, and automating front-end testing. By using PostgreSQL, C# API, and Visual Studio on Google Cloud Platform, managed via GitHub Actions CI/CD pipelines.",
        skills: ["JavaScript", "PostgreSQL", "C#"]
    },
    {
        name:"ParkinSync-McGill BioMechanical Club (Bio-Electric Stream Captain)",
        date:"November 2023 - May 2024",
        description:"Defined key tremor parameters and selected appropriate IMU sensors to capture essential data, isolating involuntary (f > 3Hz) from voluntary motion (f < 2Hz) while minimizing noise. Designed a computational algorithm to simulate system response, establishing and validating metrics. Sourced materials and prepared construction tools with a structured timeline for prototype development. Integrate all electrical connections to complete the bio-electrical system configuration",
        skills: ["IMU", "LTSpice"]
    },
    {
        name:"IoT Smart GreenHouse",
        date:"May 2023 - February 2024",
        description:"Created wiring schematics on LTSpice and prototyped the connection of switches and sensors on breadboard. Designed waterproof enclosure for Raspberry Pi and hardware components on Inventor CAD. Flashed a Raspberry Pi Pico to ensure network communication with the server over MQTT.",
        skills: ["LTSpice", "Raspberry Pi", "MQTT"]
    },
    {
        name:"Cube Sorting and Delivery",
        date:"January - March 2022",
        description:"Programmed the robot using Raspberry Pi to deliver cubes based on customer instructions. Developed and assembled a robot with LEGO components and sensors to sort and deliver color-coded cubes. Delivered the corresponding color cubes to the designated area based on customer pre-instructions.",
        skills: ["Python", "Raspberry Pi"]
    }
]