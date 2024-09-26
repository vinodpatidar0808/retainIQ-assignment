import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <main className="py-3 max-w-screen overflow-hidden px-8">
        <Navbar />
        <div className="rounded border shadow-md h-screen mt-4 bg-gray-50">
          hello
        </div>
      </main>
    </>
  );
}

export default App;
