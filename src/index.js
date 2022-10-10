import React from 'react'
import reactDom from 'react-dom'
import AdminDash  from './app.js'
import './css/style.css'
import './css/media.css'


const Admin = () => {
  return (
   <div className="body">
      <AdminDash />
   </div>
  )
}

reactDom.render(<Admin />, document.querySelector('body'))
