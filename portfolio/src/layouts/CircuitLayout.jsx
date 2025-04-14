import { Fragment, Children } from "react";

const CircuitLayout = ({ children }) => {
    const childrenArray = Children.toArray(children);
    
    return (
      <div className="flex flex-col items-center">
        {childrenArray.map((child, index) => (
          <Fragment key={index}>
            {child}
            {index !== childrenArray.length - 1 && (
              <div className="divider h-24 border-1 border-secondary dark:border-secondary-dark" />
            )}
          </Fragment>
        ))}
      </div>
    );
};

export default CircuitLayout;