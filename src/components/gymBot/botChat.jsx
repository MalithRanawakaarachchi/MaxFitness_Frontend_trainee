import { useEffect, useState } from 'react';
import boticon from '../../images/boticon.png';
import '../../pages/gymbot.css';

export default function UserChat({message}) {
    return(
        <div className='botBubble mt-5'>
            <div className='block'>
                <img src={boticon} className='mr-2 block' alt='bot face' width={35} height={35} />
            </div>
            <div className='chat-box-text2'>
                <p className='message'>{message}</p>
            </div>
        </div>
    )
}