import React from 'react';
import module from './modules/Message.module.css'

const Message = (message) => {
    console.log(message.message)

    return (
        <div className={module.message}>
            12345
        </div>
    );
};

export default Message;