import { Route, Routes} from 'react-router-dom';
import { ProtectedRoute } from './utilities/ProtectedRoute'; //use this for all pages except login
import Login from './components/Login';
import Projects from './components/Projects';
import TestPlan from './components/TestPlan';
import Search from './components/Search';
import Scenarios from './components/Scenarios';
import TestData from './components/TestData';
import ExpectedData from './components/ExpectedData';
import Execution from './components/Execution';

export default function App() {
  return (
    <>
    <h1>OMDM Pages</h1>
    <Routes>
      <Route path="/" element={<Login />} />
      
        <Route path="/projects" element={<Projects />} />
        <Route path="/testPlan" element={<TestPlan />} />
        <Route path="/search" element={<Search />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/testData" element={< TestData/>} />
        <Route path="/expectedData" element={<ExpectedData />} />
        <Route path="/execution" element={<Execution />} />
    </Routes>
    </>
  );
}