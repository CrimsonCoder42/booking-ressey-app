import * as React from 'react';
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className="header">
            <div className="headerList">
                <div className="headerListItem">
                <FontAwesomeIcon icon={"fa-solid fa-bed"} />
                </div>
            </div>
        </div>
    )
}

export default Header
