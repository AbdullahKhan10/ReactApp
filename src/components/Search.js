import React from 'react';
import Navigation from '../subcomponents/Navigation';
import ProjectForm from '../subcomponents/ProjectForm';
import ProjectTable from '../subcomponents/ProjectTable';

function Search() {
  const handleSubmit = event => {
    alert('Search');
  };

  return (
    <>
     <Navigation />
     <ProjectForm functionName="Search" onSubmitHandler={handleSubmit} />
     <ProjectTable />
    </>
  );
}

export default Search;