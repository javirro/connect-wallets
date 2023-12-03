import { NavLink } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
      <div className="nav-content">
        <NavLink to="/evm" className="navlink">
          EVM
        </NavLink>
        <NavLink to="/solana" className="navlink">
          Solana
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
