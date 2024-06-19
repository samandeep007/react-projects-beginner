import React, {useContext} from 'react'
import userContext from '../context/UserContext'

export default function Profile() {
    const{user} = useContext(userContext)
    if(!user) return <div>Please Login</div>
    return <div>Welcome {user.username}!</div>
}
