import React, { useState } from 'react';
import styles from '../../../styles/Category.module.css';
import { Nominee, NomineeData } from '../nominee';

export type CategoryData = {
    id: string;
    items: NomineeData[];
};

declare type PageProps = {
    category: CategoryData;
    handleSelect: (item: NomineeData, id: string) => void;
};

export const Category = ({ category, handleSelect }: PageProps) => {
    const [selected, setSelected] = useState<string>('');

    return (
        <div className={styles.pageCategory}>
            <h3>{category.id}</h3>
            <div className={styles.categoryContent}>
            {
                category.items.map((item: NomineeData) => (
                    <Nominee
                        key={`${category.id}-${item.id}`}
                        item={item}
                        isSelected={selected === item.id}
                        clickHandler={(item: NomineeData) => {
                            setSelected(item.id);
                            handleSelect(item, category.id);
                        }}
                    />
                ))
            }
            </div>
        </div>
    )
}
