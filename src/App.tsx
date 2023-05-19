import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ThreadBody from "./components/ThreadBody";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-[#00324e] w-full">
        <Sidebar />
        <ThreadBody />
      </div>
    </>
  );
}

export default App;
