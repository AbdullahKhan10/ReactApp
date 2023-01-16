import React from 'react';

function ProjectTable() {
    //sample date: will delete later once mapping is done
    const data = [
        { projectName: "projectName1", testPlanName: "testPlanName1", product: "product1", createdBy: "createdBy1", createdOn: "createdOn1", updatedOn: "updatedOn1", updatedBy: "updatedBy1"},
        { projectName: "projectName1", testPlanName: "testPlanName2", product: "product2", createdBy: "createdBy2", createdOn: "createdOn2", updatedOn: "updatedOn2", updatedBy: "updatedBy2"},
        { projectName: "projectName1", testPlanName: "testPlanName3", product: "product3", createdBy: "createdBy3", createdOn: "createdOn3", updatedOn: "updatedOn3", updatedBy: "updatedBy3"},
      ];

  return (
    <div>
        <table>
        <tr>
            <th>Project Name</th>
            <th>Test Plan Name</th>
            <th>Product</th>
            <th>Created By</th>
            <th>Created On</th>
            <th>Updated On</th>
            <th>Updated By</th>
        </tr>
        {data.map((val, key) => {
            return (
            <tr key={key}>
                <td>{val.projectName}</td>
                <td>{val.testPlanName}</td>
                <td>{val.product}</td>
                <td>{val.createdBy}</td>
                <td>{val.createdOn}</td>
                <td>{val.updatedOn}</td>
                <td>{val.updatedBy}</td>
                <button>Details</button>
            </tr>
            )
        })}
        </table>
    </div>
  );
}

export default ProjectTable;