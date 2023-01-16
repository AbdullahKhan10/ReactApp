import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        <NavLink to="/">LoginForm</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/testPlan">TestPlan</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/scenarios">Scenarios</NavLink>
        <NavLink to="/testData">TestData</NavLink>
        <NavLink to="/expectedData">ExpectedData</NavLink>
        <NavLink to="/execution">Execution</NavLink>
    </nav>
  );
}

export default Navigation;