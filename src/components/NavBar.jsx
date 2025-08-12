import { Menu } from "lucide-react";
import logo from "../assets/logo.svg";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-4 sm:px-8 bg-white border-b border-gray-200">
      <a href="/" className="inline-flex items-center">
        <img src={logo} alt="Site logo" className="h-8 w-auto" />
      </a>
      <div className="hidden md:flex space-x-4">
        <a
          href="/login"
          className="px-9 py-2 rounded-full text-gray-700 border border-gray-700 hover:border-gray-500 hover:text-gray-500 transition-colors"
        >
          Log in
        </a>
        <a
          href="/signup"
          className="px-8 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          Sign up
        </a>
      </div>
      <button className="md:hidden">
        <Menu />
      </button>
    </nav>
  );
}
