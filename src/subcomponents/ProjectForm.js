import React from 'react';

function ProjectForm(props) {
  return (
    <form onSubmit={props.onSubmitHandler}>
        <div className="form-inner">
            <h2>Projects</h2>
            <div>
                <label htmlFor="projectName">Project Name:</label>
                <input type="text" id="projectname"/>
            </div>
            <div>
                <label htmlFor="testPlan">Test Plan Name:</label>
                <input type="text" id="testPlan"/>
            </div>
            <div className="form-group">
            <label htmlFor="product">Product:</label>
            <select>
                <option value="fruit">example</option>
            </select>
            </div>
            <input type="submit" value={props.functionName} />
        </div>
    </form>
  );
}

export default ProjectForm;