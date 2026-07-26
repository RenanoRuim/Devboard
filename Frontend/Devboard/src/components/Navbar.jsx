import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Perfil</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
