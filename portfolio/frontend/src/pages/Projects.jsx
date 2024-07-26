import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/projectService';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchProjects = async () => {
      const lang = i18n.language;
      const data = await getProjects(lang);
      setProjects(data);
    };

    fetchProjects();
  }, [i18n.language]);

  return (
    <div>
      <h1>{t('projects')}</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>{t('technologies')}{project.technologies}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
