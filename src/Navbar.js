import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div class={"row"}>
            <div class={"col"}>
                <Link to="/"><h4>Home</h4></Link>
            </div>
            <div className={"col"}>
                <Link to="/about"><h4>About</h4></Link>
            </div>
            <div className={"col"}>
                <Link to="/careers"><h4>Careers</h4></Link>
            </div>
        </div>
    )
}

export default Navbar;