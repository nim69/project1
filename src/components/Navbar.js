import React from 'react'
 import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav   className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src="logo192.png" alt="Logo" width="30" height="24" class="my-1 d-inline-block align-text-top"/>  {props.title} </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">{props.aboutus}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/regform"> Register</a>
          </li>
          <li className="nav-item">
          <li><a className="nav-link" onClick={props.changegreen} href="#">Green</a></li>

          </li>
          <li className="nav-item">
          <li><a className="nav-link" onClick={props.changered} href="#">Red</a></li>

          </li>
          <li className="nav-item">
        
          <li><a className="nav-link" onClick={props.changeyellow} href="#">Yellow</a></li>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
            
            <li>
              <a href="">link 1</a>
            </li>

            </ul>
          </li>
          
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
         <div className={`form-check form-switch my-3 mx-2 text-${props.mode==='light'?'dark':'light'}`}>
          <input  onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>  Enable Mode
        </div>  
       



      </div>
    </div>
    </nav> 
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutus: PropTypes.string.isRequired
  }
  Navbar.defaultProps = {
    title: 'Naseer',
    aboutus: 'About'
  };