import { NavLink, useNavigate } from "react-router-dom"
import IMAGES from "../../images"
import "./Navbar.css"
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav>
      <div className="nav-content">
        <img src={IMAGES.wallet} alt="wallet-logo" className="wallet-img" onClick={() => navigate("/")} />
        <div className="navlink-container">
          <NavLink to="/evm" className="navlink">
            EVM
          </NavLink>
          <NavLink to="/solana" className="navlink">
            Solana
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
