import React from 'react'
import Modal from './Modal'
import styles from './UserDetails.module.css'

const UserDetails = ({editUser,onClose}) => {
  return (
    <Modal onClose={onClose}>
         <div className={styles.cardWrapper}>
        <div className={styles.imageWrapper}>
            <img src={editUser.picture.large} alt="profile-pic" className={styles.profilePic}/> 
        </div>
        <div className={styles.nameWrapper}>
            <span className={styles.name}>{editUser.name.first}</span>
            <span>{editUser.name.last}</span>
        </div>
        <hr/>
        <div className={styles.contactWrapper}>
            <span className={styles.heading}>Contact Info</span>
            <div>
                <span className={styles.email}>{editUser.email}</span><br/>
                <span>{editUser.phone}</span>
            </div>
        </div>
        <hr/>
        <div className={styles.locationWrapper}>
            <span className={styles.heading}>Location</span>
            <div>
            <span>{editUser.location.city}</span>, 
            <span>{editUser.location.state}</span><br/>
            <span>{editUser.location.country}</span>
            </div>
        </div>
        <hr/>
        <div className={styles.dobWrapper}>
            <span className={styles.heading}>DOB</span>
            <span>{editUser.dob.date.slice(0,10)}</span>
        </div>
        <hr/>
        <div className={styles.natWrapper}>
            <span className={styles.heading}>Nationality</span>
            <span>{editUser.nat}</span>
        </div>
        <hr/>
        <div className={styles.closeBtnWrapper}>
            <button className={styles.button} onClick={onClose}><span>Close</span></button>
        </div>
    </div>
    </Modal>
  )
}

export default UserDetails