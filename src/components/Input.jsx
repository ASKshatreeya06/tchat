import React from 'react'

const Input = () => {
  return (
    <div className="input">
       <input type="text" placeholder="type something......" />
       <div className="send">
        <img src="" alt="" />
        <input type="file" id="file" style={{display:none}} />
        <label htmlfor="file">
            <img src="" alt="" />
        </label>
       </div>
    </div>
  )
}

export default Input
