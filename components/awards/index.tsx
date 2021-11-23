import React from 'react';
import styles from '../../styles/Awards.module.css';
import { Category } from './category';

export const Awards: React.FC = () => {
    
    return (
        <>
            <div className={styles.pageAwards}>
                <h1>AWARDS 2021</h1>
                <div className={styles.categoryItem}>
                    <Category />
                </div>
            </div>
        </>
    )
}