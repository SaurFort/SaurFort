import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();

    return (
        <nav>
            <div className='left-navbar'>
                <h2><a href='/'>{t('title')}</a></h2>
            </div>
            <div className='right-navbar'>
                <a href='/'>{t('home')}</a>
            </div>
        </nav>
    );
};

export default Projects;
