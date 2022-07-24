import React from "react"
import styles from './HomeView.module.css'

const HomeView = () => {
    return <div className={`view-wrapper ${styles.homeContainer}`}>
        <div className={styles.about}>
            <h2>This is home page</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Cumque sapiente numquam nihil nemo neque, cum error consequuntur.
                Eveniet tenetur minus ab accusamus nisi aliquam sed quasi! Numquam ad dolorem rerum?
            </p>
        </div>
    </div>
}

export default HomeView