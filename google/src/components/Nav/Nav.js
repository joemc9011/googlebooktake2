import React from 'react';
const styles = {
    font: {
        color: "white"
    }
}
function Nav () {
    return (



<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href= "./pages/Search.js">Google Books</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" style={styles.font} aria-current="page" href="./pages/Saved.js">Saved Books</a>
      </div>
    </div>
  </div>
</nav>
    );
}

export default Nav;