import axios from 'axios';
import config from '../config';

const API_URL = 'http://localhost/SaurFort/portfolio/backend/src/api/project.php';

export const getProjects = async (lang = 'en') => {
  try {
    const response = await axios.get(`${config.API_URL}/project.php?lang=${lang}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};
