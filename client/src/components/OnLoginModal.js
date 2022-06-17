import React from 'react'
import Modal from './Modal'
import styles from './OnLoginModal.module.css'
const OnLoginModal = ({onClose,userdetails}) => {
  return (
    <Modal onClose={onClose}>
        <div className={styles.mainContainer}>
            <h1>{userdetails?.username}, Welcome :)</h1>
        </div>
    </Modal>
  )
}

export default OnLoginModal