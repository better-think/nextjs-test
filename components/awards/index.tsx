import React, { useEffect, useState } from 'react';
import styles from '../../styles/Awards.module.css';
import { Category, CategoryData } from './category';

export const Awards: React.FC = () => {
    const [categories, setCategories] = useState<CategoryData[]>([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('api/ballots', { method: 'GET' });
            const data = await response.json();
            if (data.items) setCategories(data.items);
        };
        getData();
    }, []);


    return (
        <>
            <div className={styles.pageAwards}>
                <h1>AWARDS 2021</h1>
                <div className={styles.categoryItem}>
                {
                    categories?.length &&
                    categories.map((category: CategoryData, index: number) => (
                        <div className={styles.categoryItem} key={`category-${index}`}>
                          <Category category={category} />
                        </div>                
                    ))
                }
                </div>
            </div>
        </>
    )
}
