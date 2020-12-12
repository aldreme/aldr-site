import React, {useState} from 'react';
import "./JobCard.css";
import { useTranslation } from 'react-i18next';
import {Button} from 'react-bootstrap';

export interface JobItemProps {
    id: number,
    title: string,
    base: string,
    description: string,
    salary: string
};

export function JobCard(props: JobItemProps) {
    const {id, title, base, description, salary} = props;
    const { t } = useTranslation();

    const [showJobDesc, setShowJobDesc] = useState(false);

    return (
        <div className='JobCard' style={{animationDelay: `${0.1 * id + 0.5}s`}}>
            <div className='JobCard-caption-container' onClick={() => setShowJobDesc(!showJobDesc)}>
                <div className='JobCard-caption'>
                    <div className='JobCard-caption-left'>
                        <p>{t(title)}</p>
                        <p style={{fontSize: '3vmin'}}>({'>'} {t(salary)}/{t('year')})</p>
                    </div>
                    <p style={{fontSize: '3vmin'}}>{t(base)}</p>
                </div>
            </div>

            <div className='JobCard-description' style={{display: showJobDesc ? 'flex': 'none'}}>
                <p>{t(description)}</p>
                <Button href='mailto:hr@aldreme.com' >{t('Send Resume')}</Button>
            </div>
        </div>
    );
}