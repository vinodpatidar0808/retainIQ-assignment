import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';

function App() {
  return (
    <>
      <main className="py-3 max-w-screen overflow-hidden px-8">
        <Navbar />
        <Table />
      </main>
    </>
  );
}

export default App;
