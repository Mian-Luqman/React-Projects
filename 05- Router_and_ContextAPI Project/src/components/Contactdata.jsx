import React, { useContext } from 'react'
import { UserContext } from '../context/Contextdata'

const Contactdata = () => {
    const {user} = useContext(UserContext)
    
    if (!user) return <h1 id='githubfollowers'>fill the form on contact section page then those data will appear in this section with usage of Context API</h1>

    return <>
    <h1 id='githubfollowers'>Here Is Your Contact Data</h1>
    
    <div id='contactcontainer'>
    <div style={{fontSize: '20px'}}> Name: "{user.name}"</div>
    
    <div style={{fontSize: '20px'}}>Email: "{user.email}"</div>
    
    <div style={{fontSize: '20px'}}>Number: "{user.number}"</div>
    
    <div style={{fontSize: '20px'}}>Address: "{user.address}"</div>
    </div>
    </>
}

export default Contactdata
