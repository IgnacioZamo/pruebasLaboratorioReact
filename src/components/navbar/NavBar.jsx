import {Link} from "react-router-dom";


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
        <nav className="w-4/5 mx-auto flex justify-center">
            <ul className="flex gap-20 my-10">
            {links.map(linkk => {
    return (
        <li key={linkk.name} className="text-xl font-semibold text-green-500 hover:text-green-700">
            <Link to={linkk.href}>{linkk.name}</Link>
        </li>
    );
})}

            </ul>
        </nav>
    )
}

export default NavBar;