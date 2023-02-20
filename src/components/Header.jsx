import "./style/Header.css";
function Header({ name, isAdmin, logout, goToAdmin, goToVoting }) {
  return (
    <>
      <header>
        <p>Welcome {name}</p>
        <nav>
          {isAdmin && (
            <button className="nav-item" onClick={goToAdmin}>
              Admin Page
            </button>
          )}
          {isAdmin && (
            <button className="nav-item" onClick={goToVoting}>
              Voting Page
            </button>
          )}
          <button className="nav-item" onClick={logout}>
            Logout
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
