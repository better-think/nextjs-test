import React from 'react';
import styles from '../../../styles/Nominee.module.css';


export const Nominee: React.FC = () => {

    return (
        <div className={`${styles.pageNominee}`}>
            <p>NoMinee title</p>

            <div className={styles.nomineePhoto}>
                <img src={"https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"} alt="alt" />
            </div>
    
            <button className={styles.nomineeButton}>
                Select Button
            </button>
        </div>
    )
}
