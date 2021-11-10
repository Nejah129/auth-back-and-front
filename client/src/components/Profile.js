import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfilepage } from '../redux/actions'

const Profile = () => {
    const {user} = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getProfilepage())
    }, [])
    return (
        <div>
        <h1>{`welcome ${user.fullName}` } </h1>  
        </div>
    )
}

export default Profile
