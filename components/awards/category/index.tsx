import React from 'react';
import styles from '../../../styles/Category.module.css';
import { Nominee, NomineeData } from '../nominee';

export type CategoryData = {
    id: string;
    items: NomineeData[];
};

declare type PageProps = {
    category: CategoryData;
};

export const Category = ({ category }: PageProps) => {

    return (
        <div className={styles.pageCategory}>
            <h3>Category title</h3>
            <div className={styles.categoryContent}>
            {
                category.items.map((item: NomineeData) => (
                    <Nominee
                        key={`${category.id}-${item.id}`}
                        item={item}
                    />
                ))
            }            
            </div>
        </div>
    )
}
