import React from 'react'
import styles from './Profile.module.css'

const Profile = ({userdetails}) => {
  return (
    <div className={styles.mainContainer}>

        {userdetails ? <table className={styles.table}>
            <tr>
                <td>Username</td>
                <td>{userdetails?.username}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{userdetails?.email}</td>
            </tr>
        </table> : <p>No user found</p>}
    </div>
  )
}

export default Profile