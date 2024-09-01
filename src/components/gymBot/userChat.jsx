import { useEffect, useState } from 'react';
import usericon from '../../images/usericon.png';
import '../../pages/gymbot.css';

export default function UserChat({message}) {
    return(
        <div className='userBubble '>
            <div className='chat-box-text'>
                <p className='message'>{message}</p>
            </div>
            <div className='block'>
                <img src={usericon} className='ml-2 block' alt='bot face' width={35} height={35} />
            </div>
        </div>
    )
}