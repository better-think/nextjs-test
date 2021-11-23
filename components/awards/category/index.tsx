import React from 'react';
import styles from '../../../styles/Category.module.css';
import { Nominee } from '../nominee';

export const Category: React.FC = () => {

    return (
        <div className={styles.pageCategory}>
            <h3>Category title</h3>
            <div className={styles.categoryContent}>
                <Nominee />
                <Nominee />
                <Nominee />
                <Nominee />
                <Nominee />
            </div>
        </div>
    )
}