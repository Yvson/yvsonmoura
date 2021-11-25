import React from 'react';
import { 
    Link,
    useResolvedPath,
    useMatch,
    useLocation,
} from 'react-router-dom';


export default function CustomLink({children, to, ...props}) {
    let resolved = useResolvedPath(to);
    let location = useLocation();
    let match = resolved.pathname == '/' ? false || useMatch({ path: resolved.pathname, end:true}) : String(location.pathname).includes(resolved.pathname);

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