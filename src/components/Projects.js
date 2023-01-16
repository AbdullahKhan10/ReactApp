import React from 'react';
import Navigation from '../subcomponents/Navigation';
import ProjectForm from '../subcomponents/ProjectForm';
import ProjectTable from '../subcomponents/ProjectTable';

function Projects() {
  const handleSubmit = event => {
    alert('Created');
  };

  return (
    <>
     <Navigation />
     <ProjectForm functionName="Create" onSubmitHandler={handleSubmit} />
     <ProjectTable />
    </>
  );
}

export default Projects