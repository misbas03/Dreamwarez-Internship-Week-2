import "./NavBar.css"
import BMW from "../../assets/bmw.png";

function NavBar() {
  const navLinks = ["All Models", "Electric", "Visit Online Shop", "More BMW"]

  return (
    <header className="navbar">
   <div className="logo">
  <img src={BMW} alt="BMW" />
</div>

      <nav>
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link}
    
              {(link === "Visit Online Shop" || link === "More BMW" ) && (
                <span className="material-symbols-outlined">
                  expand_more
                </span>
              )}
              </li>
          ))}
         
        </ul>
      </nav>

      <div className="nav-icons">
     <span className="material-symbols-outlined">person</span>
     <span className="material-symbols-outlined">favorite</span>
     <span className="material-symbols-outlined">shopping_cart_checkout</span>
    <span className="material-symbols-outlined">location_on</span>
      </div>
    </header>
  )
}

export default NavBar
