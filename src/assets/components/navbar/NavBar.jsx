import {Link} from "react-router-dom";
import React from "react"


const links = [{
    name: "React",
    href: "/react",
},
{
    name: "Tailwind",
    href:"/tailwind",
}]

const NavBar = ()=>{

    return(
        <nav>
            <ul>
                {links.map(linkk => {
                    return (
                        <li key={linkk.name}>
                            <Link to={linkk.href}>{linkk.name}</Link>
                        </li>
    );
})}
            </ul>
        </nav>
    )
}

export default NavBar;