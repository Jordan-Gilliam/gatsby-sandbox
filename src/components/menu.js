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
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/services">services</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/blog">blog</Link>
      </li>
    </ul>
  </div>
)

export default Menu
