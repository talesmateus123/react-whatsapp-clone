import React, { useState, useEffect } from 'react'
import './App.css'

import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'

import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro'

export default () => {

  const state = {
    chatlist: [
      "Fala brod", "Eaeee manin", "Flw mano", "img elements must have an alt prop, either with meaningful text, or an empty",

      "Fala brod", "Eaeee manin", "Flw mano", "img elements must have an alt prop, either with meaningful text, or an empty",

      "Fala brod", "Eaeee manin", "Flw mano", "img elements must have an alt prop, either with meaningful text, or an empty",

      "Fala brod", "Eaeee manin", "Flw mano", "img elements must have an alt prop, either with meaningful text, or an empty",

      "Fala brod", "Eaeee manin", "Flw mano", "img elements must have an alt prop, either with meaningful text, or an empty"
    ]
  }

  return (
    <div className="window">
      <div className="sidebar">
        <header>
          <img className="header-avatar" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className="header-btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>

        <div className="chat-list">
          {state.chatlist.map((item, key) => (
            <ChatListItem 
              key={key}
              item={item}
            />
          ))}
        </div>
      </div>

      <div className="content">
          <ChatIntro />
      </div>
    </div>
  )
}
