

export default ()=>{
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu">
          <button className="dropdown-item" onClick={() => setUser(personList.filter((pl)=>true))}>ALL</button>
          <div className="dropdown-divider"></div>
          <button className="dropdown-item" onClick={() => setUser(personList.filter((pl)=>pl.role == "top"))}>TOP ONLY</button>
          <button className="dropdown-item" onClick={() => setUser(personList.filter((pl)=>pl.role == "main"))}>MAIN ONLY</button>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    </>
}