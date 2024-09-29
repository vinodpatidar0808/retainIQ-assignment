import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';

function App() {
  return (
    <>
      <main className="py-3 max-w-screen overflow-hidden px-8">
        <Navbar />
        <Table />
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
