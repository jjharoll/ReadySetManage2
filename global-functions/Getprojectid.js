import React from 'react';

const Getprojectid = result_project => {
  const projectIds = [];

  for (const proyecto of result_project) {
    if (proyecto.hasOwnProperty('projectid')) {
      projectIds.push(proyecto.projectid);
    }
  }

  return projectIds;
};

export default Getprojectid;
