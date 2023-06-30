import { Link } from "react-router-dom";


export const Menu = () => {
    return (
        <div id="menu">
        <Link to={`sessions`}>Schedule</Link>
        &nbsp;
        <Link to={`climateFresk`}>Climate Fresk</Link>
      </div>
    )
}