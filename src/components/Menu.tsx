import { Link } from "react-router-dom";
import "../styles/Menu.css"

export const Menu = () => {
    return (
        <div id="menu">
        <Link to={``}>Home</Link>
        &nbsp;
         <Link to={`sessions`}>Schedule</Link>
        &nbsp;
        <Link to={`climateFresk`}>Climate Fresk</Link>
      </div>
    )
}