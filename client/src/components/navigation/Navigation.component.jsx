import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '..';

const Navigation = _ => (
  <nav className='navbar navbar-fixed-top navbar-dark bg-inverse'>
    <div className='navbar-nav collapse navbar-toggleable-sm'>
      <div className='container'>
        <NavLink style={{ whiteSpace: 'nowrap', display: 'flex' }} className='navbar-brand' to='/'>
          <Icon icon='local_movies' />
          My Movies
        </NavLink>
        <div className='nav-items clearfix' style={{ display: 'flex' }}>
          <NavLink className='nav-item nav-link' to='/cache-first'>
            Cache First List
          </NavLink>
          <NavLink className='nav-item nav-link' to='/cache-and-network'>
            Cache And Network List
          </NavLink>
          <NavLink className='nav-item nav-link' to='/network-only'>
            Network Only List
          </NavLink>
          <NavLink className='nav-item nav-link' to='/default-add-movies'>
            Default Add Movies
          </NavLink>
          <NavLink className='nav-item nav-link' to='/refetch-queries'>
            Add Movies w/ Refetch Queires
          </NavLink>
          <NavLink className='nav-item nav-link' to='/write-query'>
            Add Movies w/ Write Query
          </NavLink>
          <NavLink className='nav-item nav-link' to='/optimistic-ui'>
            Add Movies w/ Optimistic UI
          </NavLink>
          <NavLink className='nav-item nav-link' to='/bust-cache'>
            Add Movies w/ Bust Cache
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
