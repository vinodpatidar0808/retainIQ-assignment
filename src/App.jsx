import { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Table from "./components/Table";

function App() {
  const [tableData, setTableData] = useState([]);
  return (
    <>
      <main className="py-3 max-w-screen overflow-hidden px-8">
        <Navbar />
        <Table tableData={tableData} setTableData={setTableData} />
        
      </main>
    </>
  );
}

export default App;
