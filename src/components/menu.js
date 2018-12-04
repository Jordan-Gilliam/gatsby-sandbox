import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
  <div
    style={{
      background: '#f4f4f4',
      paddingTop: '10px',
    }}
  >
    <ul
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/services">SERVICES</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
)

export default Menu
