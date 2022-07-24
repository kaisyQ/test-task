import React from "react"
import styles from './ProfileView.module.css'

const ProfileView = (props) => {
    return <div className="view-wrapper">
        <div className="content">
            <h4 className={styles.aboutHeader}>This is profile page</h4>
            <h1 className={styles.welcome} >Welcome back {props.userData.username}</h1>
        </div>   
    </div>
}   

export default ProfileView