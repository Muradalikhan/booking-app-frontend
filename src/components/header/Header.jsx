import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faPerson,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 2,
    room: 1,
  });

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A life a discount? It's Genius</h1>
        <p className="headerDesc">
          There’s still time to tick one more destination off your wishlist
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="where are you going?"
              className="headerSearhInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to  
                ${format(date[0].endDate, "MM/dd/yyyy")} `}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
            {openOptions && (
              <div className="options">
                <div className="optionsItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterBtn"
                      onClick={() => handleOptions("adult", "d")}
                      disabled={options.adult <= 1}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterBtn"
                      onClick={() => handleOptions("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionsItem">
                  <span className="optionText">children</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterBtn"
                      onClick={() => handleOptions("children", "d")}
                      disabled={options.children <= 0}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterBtn"
                      onClick={() => handleOptions("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionsItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterBtn"
                      onClick={() => handleOptions("room", "d")}
                      disabled={options.room <= 1}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCounterBtn"
                      onClick={() => handleOptions("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
