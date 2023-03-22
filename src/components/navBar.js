import reducedLogo from "../images/reducedLogo.svg"
import exit from "../images/exit.svg"
import "../styles/navBar.css"
import { MenuItem, Toolbar } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (

    <Toolbar open className="nav-bar-hall">
      <div className="navbar-logo-container">
        <img
          className="navbar-logo"
          src={reducedLogo}
          alt="Logo Burguer Queen"
        />
      </div>
      <div className="anchors">
        <MenuItem className="links">
          <NavLink tag={Link} to="/">Home</NavLink>
        </MenuItem>
        <MenuItem className="links">
          <NavLink tag={Link} to="/product">Produtos</NavLink>
        </MenuItem>
        <MenuItem className="links">
          <NavLink tag={Link} to="/login">Login</NavLink>
        </MenuItem>
      </div>
      <div className="navbar-logo-container">
        <Link to="" className="logout-btn" >
          <img
            className="btn-logout-img"
            src={exit}
            alt="Botão para logout"
          />
        </Link>
      </div>
    </Toolbar>
  )
}