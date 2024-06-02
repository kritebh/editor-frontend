import { Link } from "react-router-dom";
import editorLogo from "../assets/editorLogo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center top-0 left-0 w-full bg-opacity-20 backdrop-filter backdrop-blur-lg border-b border-white border-opacity-30 shadow-lg">
      <div>
        <img
          src={editorLogo}
          alt="Editor logo"
          className="w-32 rounded-3xl p-2 m-2"
        />
      </div>
      <div className="justify-between">
        <ul className="flex">
          <li className="mr-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mr-4">
            <Link to={"/photo/convert"}>Convert</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
