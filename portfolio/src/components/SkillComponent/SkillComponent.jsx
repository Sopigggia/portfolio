const SkillComponent = ({children}) => {
    return (
        <li className="interactive text-primary dark:text-primary-dark bg-secondary dark:bg-secondary-dark px-3 py-1 rounded-lg">
            {children}
        </li>
    );
}

export default SkillComponent;