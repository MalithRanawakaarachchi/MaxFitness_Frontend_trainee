import { useEffect, useState } from 'react';
import usericon2 from '../../images/usericon2.png';
import '../../pages/aiSchedule.css';

export default function UserChat({message}) {
    return(
        <div className='userBubble2 chat-box-text11'>
            <div className='block user-div'>
                <img src={usericon2} className='ml-2 block' alt='bot face' width={35} height={35} />
            </div>
            <div className='user-text-div'>
                <p style={{textAlign:'justify'}} className='message'>{message}</p>
            </div>
        </div>
    )
}