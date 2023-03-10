import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase'
import chat from './Chat';

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getChats = () => {

      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid])

  console.log(Object.entries(chats));
  return (
    <div className='chats'>
      {Object.entries(chats)?.map((Chat) => (

        <div className='userChat' key={chats[0]}>
          <img src={chat[1].userInfo.photoURL} alt='' />
          <div className='userChatInfo' >
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats
