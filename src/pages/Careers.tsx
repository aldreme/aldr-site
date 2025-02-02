import React, { useEffect, useState } from 'react';
import { JobCard } from '../components/JobCard';
import './Careers.css';

// the hook
import { useTranslation } from 'react-i18next';

import db from '../assets/data/db.json';
import banner_img from '../assets/images/careers/careers-banner.jpg';

function Careers() {
  const { t } = useTranslation();
  const [jobs, setJobs] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (jobs.length > 0) return;
    setTimeout(() => {
      const jobs_data = db.jobs.sort((n1, n2) => {
        return n1.priority > n2.priority ? 1 : n1.priority === n2.priority ? 0 : -1;
      });

      let id = 0;
      const job_items = jobs_data.map(item => {
        return <JobCard
          key={++id}
          id={++id}
          title={item.title}
          base={item.base}
          description={item.description}
          salary={item.salary}
        />;
      });
      setJobs(job_items);
    }, 1000);
  }, [jobs.length]);

  return (
    <div className='Careers-layout noselect'>
      <div className='Careers-banner'>
        <div className='Careers-banner-img'>
          <img alt="" src={banner_img} />
        </div>

        <div className='Careers-banner-caption'>
          <p className='Careers-banner-caption-h0'>{t('CAREERS')}</p>
        </div>
      </div>

      <div className='Jobs-list-layout'>
        {jobs}
      </div>
    </div>
  );
}

export default Careers;
