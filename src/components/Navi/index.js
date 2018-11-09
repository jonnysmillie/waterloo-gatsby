import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {


  render() {
    const { location, title } = this.props
    return (
      <div>
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="nav navbar-nav-scroll collapse navbar-collapse">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  All Posts
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/reviews/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/reviews/" className="nav-link">
                  Reviews
                </Link>
              </li>
               <li
                className={
                  location.pathname === '/stories/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/stories/" className="nav-link">
                  Stories
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/profile/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/profile/" className="nav-link">
                  Profile
                </Link>
              </li>
              <li
              className={
                  location.pathname === '/another/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
              <Link to="/another/" className="nav-link">
                  Another
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>



  
  


      </div>

    )
  }
}

export default Navi
