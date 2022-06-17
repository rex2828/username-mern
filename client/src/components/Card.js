import React from 'react'
import styles from './Card.module.css'

const Card = React.forwardRef(({index,fname,lname,email,phone,picture,onClickReadMore},ref) => {
    const readMoreBtnHandler = () => {
        onClickReadMore(index%10,Math.floor(index/10))
    }

  return (
    <div className={styles.cardWrapper} ref={ref}>
        <div className={styles.imageWrapper}>
            <img src={picture} alt="profile-pic" className={styles.profilePic}/> 
        </div>
        <hr />
        <div className={styles.nameWrapper}>
            <span className={styles.name}>{fname}</span>
            <span>{lname}</span>
        </div>
        <hr/>
        <div className={styles.contactWrapper}>
            <span className={styles.email}>{email}</span>
            <span>{phone}</span>
        </div>
        <hr/>
        <div className={styles.btnWrapper}>
            <button className={styles.button} onClick={readMoreBtnHandler}><span>Read more</span></button>
        </div>
    </div>
  )
})

export default Card