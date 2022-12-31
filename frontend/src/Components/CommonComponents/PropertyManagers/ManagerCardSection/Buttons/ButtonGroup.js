import React from 'react'
import BookMeeting from './BookMeeting'
import SendMessage from './SendMessage'

const ButtonGroup = () => {
    return (
        <div className='flex justify-between w-[13.5rem]'>
            <SendMessage />
            <BookMeeting />
        </div>
    )
}

export default ButtonGroup