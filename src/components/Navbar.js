import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-blue-600">accredian</h1>
      <div className="space-x-4">
        <Link to="/" className="mr-4 text-blue-600">Home</Link>
        <button className="text-blue-600">Login</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Try for free</button>
      </div>
    </nav>
  );
};

export default Navbar;
