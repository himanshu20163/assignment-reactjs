import React, { useState } from 'react'
import './chatapp.css'

const Website = () => {

  const [name, setname] = useState("");
  const [chats, setchats] = useState([])

  const [message, SetMessage] = useState("");

  const send_message = () => {
    alert();
    const ans = [...chats];
    ans.push({ name, message: message })
    setchats(ans);
    SetMessage('');
  }
  return (
    <div>
      {
        name ? null : <div>
          <input type="text" onBlur={(e) => {
            setname(e.target.value);
          }} />
        </div>
      }

      {
        name ?
          <div>
            <h1> User : {name}</h1>
            <div className='chat-container'>
              {
                chats.map((e) =>
                (
                  <div className={`container ${e.name === name ? 'me' : ''}`}>
                    <p className='chatbox'>
                      <strong>
                        {e.name}
                      </strong>
                      <span>
                        {e.message}
                      </span>
                    </p>
                  </div>))
              }
            </div>
          </div>

          :
          null

      }


      <div className='send-message'>
        <input type='text' placeholder='enter your message' onChange={(e) => {
          SetMessage(e.target.value);
        }} value={message}></input>
        <button onClick={send_message}>Send</button>
      </div>
    </div>
  )
}

export default Website