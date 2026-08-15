import React from 'react'
import './UserCard.css'

const UserCard=(props)=> {
    return(
        <div className='usercard' id="container">
            <p id="user-name">{props.name}

            </p>
            <img id="user-img" src={props.img} alt="Picture" />
            <p id="user-des">{props.desc}</p>

        </div>

    )
}
export default UserCard