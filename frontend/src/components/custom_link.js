import React from 'react';
import { 
    Link,
    useResolvedPath,
    useMatch,
} from 'react-router-dom';



export default function CustomLink({children, to, ...props}) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className={match ? "" : ""}
                to={to}
            >
                <li className={match ? "nav-option-selected" : "nav-option"}>{children}</li>
            </Link>
        </div>
    );
}