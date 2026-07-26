import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="User Avatar"
            className="user-avatar"
          />
          <h1>username</h1>
        </div>

        <div className="header-right">
          <h1> DevBoard</h1>
        </div>
      </div>
    </div>
  );
}
export default Header;
