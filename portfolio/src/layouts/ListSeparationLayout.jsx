import { Fragment, Children } from "react";

const ListSeparationLayout = ({ children }) => {
    const childrenArray = Children.toArray(children);
        
    return (
        <div className="flex flex-col items-center">
            {childrenArray.map((child, index) => (
                <Fragment key={index}>
                {child}
                {index !== childrenArray.length - 1 && (
                    <hr className="border-secondary dark:border-secondary-dark w-8/10 my-8 self-center" />
                )}
                </Fragment>
            ))}
        </div>
    );
}

export default ListSeparationLayout;