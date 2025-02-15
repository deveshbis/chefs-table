
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className="lg:mt-5 mt-3">
            <div className="navbar mb-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost lg:text-3xl text-[16px] font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center gap-3 hidden lg:flex">
                    <ul className="menu menu-horizontal lg:px-3">
                        <li><a href="">Home</a></li>
                        <li><a href="">Recipes</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Search</a></li>
                    </ul>
                </div>

                <div className="navbar-end flex-none lg:gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className=" rounded-full px-2">
                        <button className="bg-green-500 text-center rounded-full lg:w-12 lg:h-12 lg:p-3 "><CgProfile className="w-6 h-6"></CgProfile></button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;