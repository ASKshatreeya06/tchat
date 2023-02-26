import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
    <span className="logo">Tchat</span>
    <div className="user">
        <img src="https://pixlr.com/images/index/remove-bg.webp" alt='' />
        <span>John</span>
        <button>Logout</button>
    </div>
      
    </div>
  )
}

export default Navbar
