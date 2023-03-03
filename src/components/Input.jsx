import React from 'react'

const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="type something......" />
            <div className="send">
                <img src="https://www.clipartmax.com/png/middle/320-3208468_attach-icon-paperclip-icon-png.png" alt="" />
                <input type="file" id="file" style={{ display: "none" }} />
                <label htmlFor="file">
                    <img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-camera-icon-png-image_696326.jpg" alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input
