import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
}

export default App;
