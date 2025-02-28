import { Link } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
        <Link to="/potential-candidates" className="hover:underline">Potential Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
