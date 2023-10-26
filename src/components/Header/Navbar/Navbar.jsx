import { NavLink } from "react-router-dom";
import Logo from "./logo";

const Navbar = () => {
    return (
        <div>
            
            <nav className="flex m-4 px-4 py-5 justify-between items-center">
                <Logo></Logo>
                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black underline" : ""
                            }
                        >
                           Statistics
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;