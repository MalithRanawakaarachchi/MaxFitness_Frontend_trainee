import { useEffect, useState } from 'react';
import boticon from '../../images/boticon.png';
import '../../pages/aiSchedule.css';

export default function UserChat({message}) {
    return(
        <div className='botBubble2 mt-5 chat-box-text22'>
            <div className='block bot-div'>
                <img src={boticon} className='mr-2 block' alt='bot face' width={35} height={35} />
            </div>
            <div className='user-text-div'>
                <p style={{textAlign:'justify'}} className='message'>{message}</p>
            </div>
        </div>
    )
}