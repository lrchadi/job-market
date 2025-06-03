import { Link } from "react-router-dom"
import { navBar } from "./assets"

function Navbar() {
  return (
    <nav className="w-full py-5 fixed bottom-0 bg-white rounded-md ">
        <div className="flex items-center justify-between px-10">    
            {navBar.map(icon => (
                <Link to={icon.to} key={icon.id}>{icon.icon}</Link>
            ))}
        </div>
    </nav>
  )
}

export default Navbar