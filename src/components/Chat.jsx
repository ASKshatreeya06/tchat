import React from 'react'
import Input from './Input'
import Messages from './Messages'

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo" >
                <span>jane</span>
                <div className="chatIcons" >
                    <img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-camera-icon-png-image_696326.jpg" alt="" />
                    <img src="https://www.clipartmax.com/png/middle/144-1445239_join-the-anatomical-society-add-user-icon-png.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/512/16/16073.png" alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat
