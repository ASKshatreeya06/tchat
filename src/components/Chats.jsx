import React, {useEffect, useState} from 'react'

const Chats = () => {
  const [chats, setChats] = useState([]);
  useEffect(() =>{

  }, [])
  return (
    <div className='chats'>
       <div className='userChat' >
                <img src="https://pixlr.com/images/index/remove-bg.webp" alt='' />
                <div className='userChatInfo' >
                    <span>jane</span>
                    <p>hello</p>
                </div>
            </div>
    </div>
  )
}

export default Chats
