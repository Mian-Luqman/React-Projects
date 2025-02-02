import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const userid = useParams()
  return (
    <div style={{
        height: '20vh',
        background: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
    }}>
      User: {userid.user}
    </div>
  )
}

export default User
