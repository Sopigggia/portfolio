import './CtaButton.css';

const CtaButton = ({children , onClick}) => {
    return (
        <button onClick={onClick} className={`cta-button hover:text-primary dark:hover:text-primary-dark before:bg-secondary dark:before:bg-secondary-dark border-secondary dark:border-secondary-dark text-secondary dark:text-secondary-dark border-2 rounded-full shadow-lg font-regular hover:shadow-md hover:shadow-secondary/80 dark:hover:shadow-secondary-dark/80`}>
            {children}
        </button>
    );
}

export default CtaButton;