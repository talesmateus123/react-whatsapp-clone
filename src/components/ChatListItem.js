import React from 'react'
import './ChatListItem.css'

export default props => {
  return (
    <div className="chatListItem">
        <img className="chatListItem-avatar" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" />
        <div className="chatListItem-lines">
          <div className="chatListItem-line">
            <div className="chatListItem-name">
              Tales Mateus
            </div>
            <div className="chatListItem-date">
              19:00
            </div>
          </div>
          <div className="chatListItem-lastMsg">
            {props.item}
          </div>
        </div>
    </div>
  )
}
