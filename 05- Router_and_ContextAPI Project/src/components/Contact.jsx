import React, { useContext } from 'react'
import { UserContext } from '../context/Contextdata';

const Contact = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [number, setNumber] = React.useState('')
    const [address, setaddress] = React.useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({name, email, number, address});
    }
  return (
    <>
       <div id="hero-about" style={{display: 'flex',
       alignItems: 'center',
       justifyContent: 'space-evenly'}}>
            <div id="heroimg" style={{transform: 'scaleX(-1)'}}>
                <img src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-3147.jpg?t=st=1735690390~exp=1735693990~hmac=eec52514265a844ad5e3f2026b7074a3cf3382e53ce0cd2c6746338a78f99bf2&w=740" alt="heroimg"/>
            </div>
            <div id="herocontent">
                <form style={{display: 'flex',
                flexDirection: 'column',
                }}>
                    <input type='text'
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder='Full Name'/>
                    <input type='email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder='Email'/>
                    <input type='number'
                     value={number}
                     onChange={(e) => setNumber(e.target.value)}
                     placeholder='Telephone Number'/>
                    <input type='address'
                     value={address}
                     onChange={(e) => setaddress(e.target.value)}
                     placeholder='Address'/>
                </form>
                <div id='Submitbtn'>
                    <button style={{fontSize: '15px'}} 
                    onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Contact
