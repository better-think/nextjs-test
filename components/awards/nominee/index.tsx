import React from 'react';
import styles from '../../../styles/Nominee.module.css';

export type NomineeData = {
    id: string;
    photoUrL: string;
    title: string;
};

declare type PageProps = {
    item: NomineeData;
    isSelected: boolean;
    clickHandler: (item: NomineeData) => void;
}

export const Nominee = ({ item, isSelected, clickHandler }: PageProps) => {

    return (
        <div className={`${styles.pageNominee} ${isSelected ? styles.active : ''}`}>
            <p>{ item.title }</p>

            <div className={styles.nomineePhoto}>
                <img src={item.photoUrL} alt={item.id} />
            </div>
    
            <button className={styles.nomineeButton}
                onClick={() => clickHandler(item)}
            >
                Select Button
            </button>
        </div>
    )
}
