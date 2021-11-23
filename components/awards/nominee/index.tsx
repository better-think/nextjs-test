import React from 'react';
import styles from '../../../styles/Nominee.module.css';

export type NomineeData = {
    id: string;
    photoUrL: string;
    title: string;
};

declare type PageProps = {
    item: NomineeData;
}

export const Nominee = ({ item }: PageProps) => {

    return (
        <div className={`${styles.pageNominee}`}>
            <p>{ item.title }</p>

            <div className={styles.nomineePhoto}>
                <img src={item.photoUrL} alt={item.id} />
            </div>
    
            <button className={styles.nomineeButton}>
                Select Button
            </button>
        </div>
    )
}
