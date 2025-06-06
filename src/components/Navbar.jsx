import { Link } from "react-router-dom"
import { navBar } from "./assets"

function Navbar() {
  return (
    <nav className="w-full py-5 fixed left-0 right-0 bottom-0 bg-slate-100 rounded-lg md:mx-auto md:w-[70%] md:bottom-2 md:shadow-2xl lg:hidden">
        <div className="flex items-center justify-between px-10">    
            {navBar.map(icon => (
                <Link to={icon.to} key={icon.id}>{icon.icon}</Link>
            ))}
        </div>
    </nav>
  )
}

export default Navbar