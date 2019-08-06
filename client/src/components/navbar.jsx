import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link to='/' className='navbar-brand'>
            Exercise Tracker
          </Link>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Exercises
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/create' className='nav-link'>
                  Create Exercise Log
                </Link>
              </li>{' '}
              <li className='nav-item'>
                <Link to='/user' className='nav-link'>
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
